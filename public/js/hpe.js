let currentHPEData = null;
let currentCurrency = 'IDR';

async function loadProdukList() {
  try {
    const produk = await fetchAPI('/api/produk');
    const select = document.getElementById('produkSelect');
    select.innerHTML = '<option value="">Pilih Produk...</option>' +
      produk.map(p => `<option value="${p._id}">${p.namaProduk}</option>`).join('');
  } catch (error) {
    showAlert('Gagal memuat daftar produk', 'danger');
  }
}

async function calculateHPE() {
  const produkId = document.getElementById('produkSelect').value;
  if (!produkId) {
    showAlert('Pilih produk terlebih dahulu', 'warning');
    return;
  }
  
  currentCurrency = document.getElementById('currencySelect').value;
  
  document.getElementById('hpeResult').style.display = 'none';
  document.getElementById('loadingHPE').style.display = 'block';
  
  try {
    const data = await fetchAPI(`${'/api/hpe'}/${produkId}?currency=${currentCurrency}`);
    currentHPEData = data;
    displayHPEResult(data);
  } catch (error) {
    showAlert(error.message, 'danger');
    document.getElementById('loadingHPE').style.display = 'none';
  }
}

function displayHPEResult(data) {
  document.getElementById('loadingHPE').style.display = 'none';
  document.getElementById('hpeResult').style.display = 'block';
  
  document.getElementById('produkName').textContent = data.produk.nama;
  document.getElementById('produkDesc').textContent = data.produk.deskripsi || '';
  
  const formatPrice = (amount) => {
    if (data.currency === 'USD') {
      return '$' + amount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
    return formatCurrency(amount);
  };
  
  const currencyInfo = data.currency === 'USD' 
    ? `<div class="alert alert-info"><small>Kurs Referensi: ${formatCurrency(data.kursReference)}</small></div>`
    : '';
  
  document.getElementById('komponenDetails').innerHTML = currencyInfo;
  
  const komponenHTML = data.komponen.map(k => {
    if (!k.hpePerSatuan) {
      return `
        <div class="hpe-result">
          <h6>${k.namaKomponen}</h6>
          <p class="text-warning">${k.message}</p>
        </div>
      `;
    }
    
    const dataInfo = k.dataBreakdown 
      ? `<span class="badge bg-success">${k.dataBreakdown.idr} IDR</span> <span class="badge bg-primary">${k.dataBreakdown.usd} USD</span>`
      : '';
    
    return `
      <div class="hpe-result">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h6 class="mb-0">${k.namaKomponen}</h6>
          <div>
            <span class="badge bg-secondary">${k.quantity} ${k.satuan}</span>
            <span class="badge bg-info">${k.jumlahData} data</span>
            ${dataInfo}
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6">
            <small class="text-muted">HPE Per Satuan (${data.currency}):</small>
            <ul class="list-unstyled">
              <li>Min: <strong>${formatPrice(k.hpePerSatuan.minimum)}</strong></li>
              <li>Max: <strong>${formatPrice(k.hpePerSatuan.maksimum)}</strong></li>
              <li>Median: <strong>${formatPrice(k.hpePerSatuan.median)}</strong></li>
              <li>Rata-rata: <strong>${formatPrice(k.hpePerSatuan.rataRata)}</strong></li>
            </ul>
          </div>
          <div class="col-md-6">
            <small class="text-muted">HPE Total (${k.quantity} ${k.satuan}):</small>
            <ul class="list-unstyled">
              <li>Min: <strong>${formatPrice(k.hpeTotal.minimum)}</strong></li>
              <li>Max: <strong>${formatPrice(k.hpeTotal.maksimum)}</strong></li>
              <li>Median: <strong>${formatPrice(k.hpeTotal.median)}</strong></li>
              <li>Rata-rata: <strong>${formatPrice(k.hpeTotal.rataRata)}</strong></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  document.getElementById('komponenDetails').innerHTML += komponenHTML;
  
  document.getElementById('totalMin').textContent = formatPrice(data.totalHPE.minimum);
  document.getElementById('totalMax').textContent = formatPrice(data.totalHPE.maksimum);
  document.getElementById('totalMedian').textContent = formatPrice(data.totalHPE.median);
  document.getElementById('totalMean').textContent = formatPrice(data.totalHPE.rataRata);
}

function exportToCSV() {
  if (!currentHPEData) {
    showAlert('Tidak ada data untuk diekspor', 'warning');
    return;
  }
  
  const currency = currentHPEData.currency || 'IDR';
  let csv = `Produk,Komponen,Quantity,Satuan,Mata Uang,Data IDR,Data USD,HPE Min,HPE Max,HPE Median,HPE Rata-rata\n`;
  
  if (currency === 'USD' && currentHPEData.kursReference) {
    csv += `Kurs Referensi: ${currentHPEData.kursReference}\n\n`;
  }
  
  currentHPEData.komponen.forEach(k => {
    if (k.hpeTotal) {
      const dataBreakdown = k.dataBreakdown ? `${k.dataBreakdown.idr},${k.dataBreakdown.usd}` : '0,0';
      csv += `"${currentHPEData.produk.nama}","${k.namaKomponen}",${k.quantity},"${k.satuan}",${currency},${dataBreakdown},`;
      csv += `${k.hpeTotal.minimum},${k.hpeTotal.maksimum},${k.hpeTotal.median},${k.hpeTotal.rataRata}\n`;
    }
  });
  
  csv += `\nTotal HPE,,,,${currency},,,${currentHPEData.totalHPE.minimum},${currentHPEData.totalHPE.maksimum},`;
  csv += `${currentHPEData.totalHPE.median},${currentHPEData.totalHPE.rataRata}\n`;
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `HPE_${currentHPEData.produk.nama}_${currency}_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showAlert('Data berhasil diekspor ke CSV', 'success');
}

document.addEventListener('DOMContentLoaded', loadProdukList);
