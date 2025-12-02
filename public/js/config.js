// ========================================
// DUMMY DATA MODE - Using LocalStorage
// ========================================

// Initialize dummy data
function initDummyData() {
  if (!localStorage.getItem('produk')) {
    localStorage.setItem('produk', JSON.stringify([
      { _id: '1', namaProduk: 'Laptop Gaming', deskripsi: 'Laptop untuk gaming dan editing', bom: [
        { komponenId: '1', namaKomponen: 'Processor Intel i7', quantity: 1, satuan: 'pcs' },
        { komponenId: '2', namaKomponen: 'RAM 16GB', quantity: 2, satuan: 'pcs' }
      ]},
      { _id: '2', namaProduk: 'PC Workstation', deskripsi: 'PC untuk rendering dan design', bom: [
        { komponenId: '1', namaKomponen: 'Processor Intel i7', quantity: 1, satuan: 'pcs' },
        { komponenId: '3', namaKomponen: 'SSD 1TB', quantity: 1, satuan: 'pcs' }
      ]}
    ]));
  }
  
  if (!localStorage.getItem('komponen')) {
    localStorage.setItem('komponen', JSON.stringify([
      { _id: '1', namaKomponen: 'Processor Intel i7', satuan: 'pcs', deskripsi: 'Intel Core i7 Gen 12' },
      { _id: '2', namaKomponen: 'RAM 16GB', satuan: 'pcs', deskripsi: 'DDR4 3200MHz' },
      { _id: '3', namaKomponen: 'SSD 1TB', satuan: 'pcs', deskripsi: 'NVMe M.2' },
      { _id: '4', namaKomponen: 'Motherboard', satuan: 'pcs', deskripsi: 'ATX Gaming' }
    ]));
  }
  
  if (!localStorage.getItem('riwayat')) {
    localStorage.setItem('riwayat', JSON.stringify([
      { _id: '1', komponenId: '1', namaKomponen: 'Processor Intel i7', tanggalPengadaan: '2024-12-01', quantity: 10, matauang: 'USD', harga: 300, kursJisdor: 15500, hargaIDR: 4650000, hargaUSD: 300 },
      { _id: '2', komponenId: '2', namaKomponen: 'RAM 16GB', tanggalPengadaan: '2024-12-01', quantity: 20, matauang: 'IDR', harga: 1200000, kursJisdor: 1, hargaIDR: 1200000, hargaUSD: 1200000 },
      { _id: '3', komponenId: '1', namaKomponen: 'Processor Intel i7', tanggalPengadaan: '2024-11-25', quantity: 5, matauang: 'USD', harga: 310, kursJisdor: 15600, hargaIDR: 4836000, hargaUSD: 310 }
    ]));
  }
  
  if (!localStorage.getItem('kurs')) {
    localStorage.setItem('kurs', JSON.stringify([
      { tanggal: '2024-12-01', usdToIdr: 15500, sumber: 'JISDOR' },
      { tanggal: '2024-11-30', usdToIdr: 15480, sumber: 'JISDOR' },
      { tanggal: '2024-11-29', usdToIdr: 15520, sumber: 'JISDOR' }
    ]));
  }
}

// Initialize on load
initDummyData();

// Dummy API Helper
async function fetchAPI(url, options = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const method = options.method || 'GET';
        const urlParts = url.split('/');
        const resource = urlParts[urlParts.indexOf('api') + 1];
        const id = urlParts[urlParts.length - 1];
        
        let data = JSON.parse(localStorage.getItem(resource) || '[]');
        
        if (method === 'GET') {
          if (url.includes('/hpe/')) {
            // HPE Calculation
            const produkId = url.split('/hpe/')[1].split('?')[0];
            const currency = url.includes('currency=USD') ? 'USD' : 'IDR';
            const produk = JSON.parse(localStorage.getItem('produk') || '[]').find(p => p._id === produkId);
            const riwayat = JSON.parse(localStorage.getItem('riwayat') || '[]');
            
            if (!produk) {
              reject(new Error('Produk tidak ditemukan'));
              return;
            }
            
            const komponenHPE = produk.bom.map(bom => {
              const komponenRiwayat = riwayat.filter(r => r.komponenId === bom.komponenId);
              const hargaField = currency === 'USD' ? 'hargaUSD' : 'hargaIDR';
              const hargaList = komponenRiwayat.map(r => r[hargaField]);
              
              const min = hargaList.length ? Math.min(...hargaList) : 0;
              const max = hargaList.length ? Math.max(...hargaList) : 0;
              const avg = hargaList.length ? hargaList.reduce((a,b) => a+b, 0) / hargaList.length : 0;
              const median = hargaList.length ? hargaList.sort((a,b) => a-b)[Math.floor(hargaList.length/2)] : 0;
              
              return {
                namaKomponen: bom.namaKomponen,
                quantity: bom.quantity,
                satuan: bom.satuan,
                hpe: { min, max, avg, median },
                totalHPE: {
                  min: min * bom.quantity,
                  max: max * bom.quantity,
                  avg: avg * bom.quantity,
                  median: median * bom.quantity
                }
              };
            });
            
            const totalHPE = {
              min: komponenHPE.reduce((sum, k) => sum + k.totalHPE.min, 0),
              max: komponenHPE.reduce((sum, k) => sum + k.totalHPE.max, 0),
              avg: komponenHPE.reduce((sum, k) => sum + k.totalHPE.avg, 0),
              median: komponenHPE.reduce((sum, k) => sum + k.totalHPE.median, 0)
            };
            
            resolve({
              produk: produk.namaProduk,
              currency,
              komponenHPE,
              totalHPE
            });
          } else if (id && id !== resource) {
            const item = data.find(d => d._id === id);
            resolve(item || {});
          } else if (url.includes('/today')) {
            const today = new Date().toISOString().split('T')[0];
            const kurs = data.find(k => k.tanggal === today) || data[0];
            resolve(kurs);
          } else if (url.includes('/stats/dashboard')) {
            resolve({
              counts: {
                produk: JSON.parse(localStorage.getItem('produk') || '[]').length,
                komponen: JSON.parse(localStorage.getItem('komponen') || '[]').length,
                riwayat: JSON.parse(localStorage.getItem('riwayat') || '[]').length
              },
              kursToday: JSON.parse(localStorage.getItem('kurs') || '[{"usdToIdr":15500}]')[0]
            });
          } else {
            resolve(data);
          }
        } else if (method === 'POST') {
          const newData = JSON.parse(options.body);
          newData._id = Date.now().toString();
          data.push(newData);
          localStorage.setItem(resource, JSON.stringify(data));
          resolve(newData);
        } else if (method === 'PUT') {
          const updateData = JSON.parse(options.body);
          const index = data.findIndex(d => d._id === id);
          if (index !== -1) {
            data[index] = { ...data[index], ...updateData, _id: id };
            localStorage.setItem(resource, JSON.stringify(data));
            resolve(data[index]);
          } else {
            reject(new Error('Not found'));
          }
        } else if (method === 'DELETE') {
          data = data.filter(d => d._id !== id);
          localStorage.setItem(resource, JSON.stringify(data));
          resolve({ message: 'Deleted' });
        }
      } catch (error) {
        reject(error);
      }
    }, 300); // Simulate network delay
  });
}

// Alert Helper
function showAlert(message, type = 'info') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`;
  alertDiv.style.zIndex = '9999';
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  document.body.appendChild(alertDiv);
  
  setTimeout(() => alertDiv.remove(), 3000);
}

// Format Currency
function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value);
}

// Format Date
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
