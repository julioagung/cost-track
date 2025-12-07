async function loadKursToday() {
  try {
    const kurs = await fetchAPI('/api/kurs/today');
    if (kurs && kurs.usdToIdr) {
      document.getElementById('kursToday').innerHTML = `
        <h2 class="display-4">${formatCurrency(kurs.usdToIdr)}</h2>
        <p class="text-muted">${formatDate(kurs.tanggal)}</p>
        <span class="badge bg-${kurs.sumber === 'JISDOR' ? 'success' : 'warning'}">
          ${kurs.sumber}
        </span>
      `;
    } else {
      throw new Error('Data kurs tidak valid');
    }
  } catch (error) {
    document.getElementById('kursToday').innerHTML = `
      <div class="text-danger">Gagal memuat kurs hari ini</div>
    `;
  }
}

async function searchKurs() {
  const date = document.getElementById('searchDate').value;
  if (!date) {
    showAlert('Pilih tanggal terlebih dahulu', 'warning');
    return;
  }
  
  try {
    const kurs = await fetchAPI(`/api/kurs/${date}`);
    if (kurs && kurs.usdToIdr) {
      document.getElementById('searchResult').innerHTML = `
        <div class="card bg-light">
          <div class="card-body">
            <h5 class="mb-2">${formatCurrency(kurs.usdToIdr)}</h5>
            <p class="text-muted mb-2">${formatDate(kurs.tanggal)}</p>
            <span class="badge bg-${kurs.sumber === 'JISDOR' ? 'success' : 'warning'}">
              ${kurs.sumber}
            </span>
          </div>
        </div>
      `;
    } else {
      throw new Error('Data kurs tidak ditemukan');
    }
  } catch (error) {
    document.getElementById('searchResult').innerHTML = `
      <div class="text-danger">Gagal memuat kurs untuk tanggal tersebut</div>
    `;
  }
}

async function uploadCSV() {
  const csvText = document.getElementById('csvData').value.trim();
  if (!csvText) {
    showAlert('Masukkan data CSV terlebih dahulu', 'warning');
    return;
  }
  
  try {
    const lines = csvText.split('\n').filter(line => line.trim());
    const data = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip header if exists
      if (i === 0 && (line.toLowerCase().includes('tanggal') || line.toLowerCase().includes('date'))) {
        continue;
      }
      
      const parts = line.split(',').map(s => s.trim());
      if (parts.length >= 2) {
        const tanggal = parts[0];
        const usdToIdr = parts[1];
        
        // Validate date format (YYYY-MM-DD)
        if (tanggal && usdToIdr && /^\d{4}-\d{2}-\d{2}$/.test(tanggal)) {
          const rate = parseFloat(usdToIdr);
          if (!isNaN(rate) && rate > 0) {
            data.push({ tanggal, usdToIdr: rate });
          }
        }
      }
    }
    
    if (data.length === 0) {
      showAlert('Format CSV tidak valid. Gunakan format: tanggal,usdToIdr (contoh: 2024-01-15,15500)', 'danger');
      return;
    }
    
    const result = await fetchAPI('/api/kurs/upload-csv', {
      method: 'POST',
      body: JSON.stringify({ data })
    });
    
    showAlert(result.message || 'Data berhasil diupload', 'success');
    document.getElementById('csvData').value = '';
    loadKursToday();
  } catch (error) {
    showAlert(error.message || 'Gagal mengupload data', 'danger');
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  // Validate file type
  if (!file.name.endsWith('.csv')) {
    showAlert('File harus berformat CSV', 'danger');
    event.target.value = '';
    return;
  }
  
  const reader = new FileReader();
  
  reader.onload = function(e) {
    const csvText = e.target.result;
    document.getElementById('csvData').value = csvText;
    showAlert(`File "${file.name}" berhasil dimuat. Klik "Upload CSV" untuk memproses.`, 'info');
  };
  
  reader.onerror = function() {
    showAlert('Gagal membaca file', 'danger');
    event.target.value = '';
  };
  
  reader.readAsText(file);
}

document.addEventListener('DOMContentLoaded', () => {
  loadKursToday();
  document.getElementById('searchDate').valueAsDate = new Date();
});
