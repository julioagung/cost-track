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
      { 
        _id: '1', 
        komponenId: '1', 
        namaKomponen: 'Processor Intel i7', 
        tanggalPengadaan: '2024-12-01', 
        quantity: 10, 
        matauang: 'USD', 
        harga: 300,
        hargaSatuan: 300,
        kursJisdor: 15500, 
        hargaIDR: 4650000, 
        hargaUSD: 300,
        supplier: 'PT Tech Indonesia',
        noPO: 'PO-2024-001'
      },
      { 
        _id: '2', 
        komponenId: '2', 
        namaKomponen: 'RAM 16GB', 
        tanggalPengadaan: '2024-12-01', 
        quantity: 20, 
        matauang: 'IDR', 
        harga: 1200000,
        hargaSatuan: 1200000,
        kursJisdor: 1, 
        hargaIDR: 1200000, 
        hargaUSD: 1200000,
        supplier: 'CV Komputer Jaya',
        noPO: 'PO-2024-002'
      },
      { 
        _id: '3', 
        komponenId: '1', 
        namaKomponen: 'Processor Intel i7', 
        tanggalPengadaan: '2024-11-25', 
        quantity: 5, 
        matauang: 'USD', 
        harga: 310,
        hargaSatuan: 310,
        kursJisdor: 15600, 
        hargaIDR: 4836000, 
        hargaUSD: 310,
        supplier: 'PT Tech Indonesia',
        noPO: 'PO-2024-003'
      }
    ]));
  }
  
  if (!localStorage.getItem('kurs')) {
    const today = new Date();
    const kursData = [];
    
    // Generate kurs data for last 30 days
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      // Random kurs between 15400-15600
      const baseRate = 15500;
      const variation = Math.floor(Math.random() * 200) - 100;
      const rate = baseRate + variation;
      
      kursData.push({
        _id: `kurs-${i}`,
        tanggal: dateStr,
        usdToIdr: rate,
        sumber: i < 20 ? 'JISDOR' : 'MANUAL'
      });
    }
    
    localStorage.setItem('kurs', JSON.stringify(kursData));
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
        const apiIndex = urlParts.indexOf('api');
        const resource = apiIndex >= 0 ? urlParts[apiIndex + 1] : '';
        const id = urlParts[urlParts.length - 1];
        
        if (method === 'GET') {
          if (url.includes('/stats/dashboard')) {
            // Dashboard Stats
            resolve({
              counts: {
                produk: JSON.parse(localStorage.getItem('produk') || '[]').length,
                komponen: JSON.parse(localStorage.getItem('komponen') || '[]').length,
                riwayat: JSON.parse(localStorage.getItem('riwayat') || '[]').length
              },
              kursToday: JSON.parse(localStorage.getItem('kurs') || '[{"usdToIdr":15500,"sumber":"JISDOR"}]')[0]
            });
            return;
          } else if (url.includes('/kurs/today')) {
            // Get today's kurs
            const today = new Date().toISOString().split('T')[0];
            const kursData = JSON.parse(localStorage.getItem('kurs') || '[]');
            const kurs = kursData.find(k => k.tanggal === today) || kursData[0] || { tanggal: today, usdToIdr: 15500, sumber: 'JISDOR' };
            resolve(kurs);
            return;
          } else if (url.includes('/kurs/') && !url.includes('/upload-csv')) {
            // Get kurs by date or ID
            const dateMatch = url.match(/\/kurs\/(.+)$/);
            if (dateMatch) {
              const searchParam = dateMatch[1];
              const kursData = JSON.parse(localStorage.getItem('kurs') || '[]');
              
              // Try to find by _id first, then by date
              let kurs = kursData.find(k => k._id === searchParam);
              if (!kurs) {
                kurs = kursData.find(k => k.tanggal === searchParam) || { tanggal: searchParam, usdToIdr: 15500, sumber: 'JISDOR' };
              }
              resolve(kurs);
              return;
            }
          } else if (url.includes('/kurs') && resource === 'kurs') {
            // Get all kurs
            let kursData = JSON.parse(localStorage.getItem('kurs') || '[]');
            resolve(kursData);
            return;
          } else if (url.includes('/hpe/')) {
            // HPE Calculation
            const produkId = url.split('/hpe/')[1].split('?')[0];
            const currency = url.includes('currency=USD') ? 'USD' : 'IDR';
            const produk = JSON.parse(localStorage.getItem('produk') || '[]').find(p => p._id === produkId);
            const riwayat = JSON.parse(localStorage.getItem('riwayat') || '[]');
            
            if (!produk) {
              reject(new Error('Produk tidak ditemukan'));
              return;
            }
            
            const kursData = JSON.parse(localStorage.getItem('kurs') || '[]');
            const kursReference = kursData[0]?.usdToIdr || 15500;
            
            const komponenHPE = produk.bom.map(bom => {
              const komponenRiwayat = riwayat.filter(r => r.komponenId === bom.komponenId);
              
              if (komponenRiwayat.length === 0) {
                return {
                  namaKomponen: bom.namaKomponen,
                  quantity: bom.quantity,
                  satuan: bom.satuan,
                  jumlahData: 0,
                  message: 'Tidak ada data riwayat pengadaan'
                };
              }
              
              const hargaField = currency === 'USD' ? 'hargaUSD' : 'hargaIDR';
              const hargaList = komponenRiwayat.map(r => r[hargaField] || r.harga || 0);
              
              const sorted = [...hargaList].sort((a,b) => a-b);
              const min = Math.min(...hargaList);
              const max = Math.max(...hargaList);
              const avg = hargaList.reduce((a,b) => a+b, 0) / hargaList.length;
              const median = sorted[Math.floor(sorted.length/2)];
              
              const dataBreakdown = {
                idr: komponenRiwayat.filter(r => r.matauang === 'IDR').length,
                usd: komponenRiwayat.filter(r => r.matauang === 'USD').length
              };
              
              return {
                namaKomponen: bom.namaKomponen,
                quantity: bom.quantity,
                satuan: bom.satuan,
                jumlahData: komponenRiwayat.length,
                dataBreakdown,
                hpePerSatuan: {
                  minimum: min,
                  maksimum: max,
                  median: median,
                  rataRata: avg
                },
                hpeTotal: {
                  minimum: min * bom.quantity,
                  maksimum: max * bom.quantity,
                  median: median * bom.quantity,
                  rataRata: avg * bom.quantity
                }
              };
            });
            
            const totalHPE = {
              minimum: komponenHPE.reduce((sum, k) => sum + (k.hpeTotal?.minimum || 0), 0),
              maksimum: komponenHPE.reduce((sum, k) => sum + (k.hpeTotal?.maksimum || 0), 0),
              median: komponenHPE.reduce((sum, k) => sum + (k.hpeTotal?.median || 0), 0),
              rataRata: komponenHPE.reduce((sum, k) => sum + (k.hpeTotal?.rataRata || 0), 0)
            };
            
            resolve({
              produk: {
                nama: produk.namaProduk,
                deskripsi: produk.deskripsi || ''
              },
              currency,
              kursReference: currency === 'USD' ? kursReference : null,
              komponen: komponenHPE,
              totalHPE
            });
          } else {
            // Regular GET
            let data = JSON.parse(localStorage.getItem(resource) || '[]');
            if (id && id !== resource && id !== 'dashboard') {
              const item = data.find(d => d._id === id);
              resolve(item || {});
            } else {
              resolve(data);
            }
          }
        } else if (method === 'POST') {
          // Handle CSV upload for kurs
          if (url.includes('/kurs/upload-csv')) {
            const { data: csvData } = JSON.parse(options.body);
            let kursData = JSON.parse(localStorage.getItem('kurs') || '[]');
            
            let uploadedCount = 0;
            csvData.forEach(row => {
              const existingIndex = kursData.findIndex(k => k.tanggal === row.tanggal);
              const newKurs = {
                tanggal: row.tanggal,
                usdToIdr: parseFloat(row.usdToIdr),
                sumber: 'MANUAL'
              };
              
              if (existingIndex >= 0) {
                kursData[existingIndex] = newKurs;
              } else {
                kursData.push(newKurs);
              }
              uploadedCount++;
            });
            
            localStorage.setItem('kurs', JSON.stringify(kursData));
            resolve({ 
              message: `${uploadedCount} data kurs berhasil diupload`, 
              data: csvData 
            });
            return;
          }
          
          // Regular POST
          let data = JSON.parse(localStorage.getItem(resource) || '[]');
          const newData = JSON.parse(options.body);
          newData._id = Date.now().toString();
          data.push(newData);
          localStorage.setItem(resource, JSON.stringify(data));
          resolve(newData);
        } else if (method === 'PUT') {
          let data = JSON.parse(localStorage.getItem(resource) || '[]');
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
          let data = JSON.parse(localStorage.getItem(resource) || '[]');
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
  // Icon mapping
  const icons = {
    success: '✓',
    danger: '✕',
    warning: '⚠',
    info: 'ℹ'
  };
  
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.innerHTML = `
    <div class="alert-content">
      <span class="alert-icon">${icons[type] || 'ℹ'}</span>
      <span class="alert-message">${message}</span>
    </div>
    <button class="alert-ok-btn">OK</button>
  `;
  
  document.body.appendChild(alertDiv);
  
  // Function to close alert
  const closeAlert = () => {
    if (alertDiv.parentElement) {
      alertDiv.style.animation = 'alertSlideUp 0.3s ease-out';
      setTimeout(() => alertDiv.remove(), 300);
    }
  };
  
  // Click anywhere on alert to close
  alertDiv.addEventListener('click', closeAlert);
  
  // Auto remove after 2 seconds
  setTimeout(closeAlert, 2000);
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
