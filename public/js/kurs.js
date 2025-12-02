async function loadKursToday() {
  try {
    const kurs = await fetchAPI(`${'/api/kurs'}/today`);
    document.getElementById('kursToday').innerHTML = `
      <h2 class="display-4">${formatCurrency(kurs.usdToIdr)}</h2>
      <p class="text-muted">${formatDate(kurs.tanggal)}</p>
      <span class="badge bg-${kurs.sumber === 'JISDOR' ? 'success' : 'warning'}">
        ${kurs.sumber}
      </span>
    `;
  } catch (error) {
    document.getElementById('kursToday').innerHTML = `
      <div class="alert alert-danger">Gagal memuat kurs hari ini</div>
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
    const kurs = await fetchAPI(`${'/api/kurs'}/${date}`);
    document.getElementById('searchResult').innerHTML = `
      <div class="alert alert-info">
        <h5>${formatCurrency(kurs.usdToIdr)}</h5>
        <p class="mb-0">${formatDate(kurs.tanggal)}</p>
        <span class="badge bg-${kurs.sumber === 'JISDOR' ? 'success' : 'warning'}">
          ${kurs.sumber}
        </span>
      </div>
    `;
  } catch (error) {
    document.getElementById('searchResult').innerHTML = `
      <div class="alert alert-danger">Gagal memuat kurs untuk tanggal tersebut</div>
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
    const lines = csvText.split('\n');
    const data = [];
    
    for (const line of lines) {
      const [tanggal, usdToIdr] = line.split(',').map(s => s.trim());
      if (tanggal && usdToIdr) {
        data.push({ tanggal, usdToIdr });
      }
    }
    
    if (data.length === 0) {
      showAlert('Format CSV tidak valid', 'danger');
      return;
    }
    
    const result = await fetchAPI(`${'/api/kurs'}/upload-csv`, {
      method: 'POST',
      body: JSON.stringify({ data })
    });
    
    showAlert(result.message, 'success');
    document.getElementById('csvData').value = '';
    loadKursToday();
  } catch (error) {
    showAlert(error.message, 'danger');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadKursToday();
  document.getElementById('searchDate').valueAsDate = new Date();
});
