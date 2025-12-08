let kursModal;
let uploadModal;

async function loadKurs() {
  const tbody = document.getElementById('kursTableBody');
  try {
    const data = await fetchAPI('/api/kurs');
    
    if (!data || data.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center">Belum ada data kurs</td></tr>';
      return;
    }
    
    // Sort by date descending (newest first)
    data.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
    
    tbody.innerHTML = data.map((item, index) => {
      const tanggal = new Date(item.tanggal);
      const tanggalStr = tanggal.toLocaleDateString('id-ID', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
      });
      
      const badgeClass = item.sumber === 'JISDOR' ? 'success' : item.sumber === 'MANUAL' ? 'primary' : 'warning';
      
      return `
        <tr>
          <td class="text-center">${index + 1}</td>
          <td><span class="fw-bold">${tanggalStr}</span></td>
          <td class="text-end"><span class="fw-bold">${formatCurrency(item.usdToIdr)}</span></td>
          <td class="text-center"><span class="badge bg-${badgeClass}">${item.sumber}</span></td>
          <td class="table-actions">
            <button class="btn btn-sm btn-warning" onclick="editKurs('${item._id}')" title="Edit"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-sm btn-danger" onclick="deleteKurs('${item._id}')" title="Hapus"><i class="bi bi-trash"></i></button>
          </td>
        </tr>
      `;
    }).join('');
  } catch (error) {
    console.error('Error loading kurs:', error);
    tbody.innerHTML = '<tr><td colspan="5" class="text-center text-danger">Gagal memuat data kurs</td></tr>';
    showAlert('Gagal memuat data kurs: ' + error.message, 'danger');
  }
}

function showAddModal() {
  document.getElementById('modalTitle').textContent = 'Tambah Kurs Manual';
  document.getElementById('kursForm').reset();
  document.getElementById('kursId').value = '';
  document.getElementById('tanggal').valueAsDate = new Date();
  kursModal.show();
}

async function editKurs(id) {
  try {
    const data = await fetchAPI(`/api/kurs/${id}`);
    document.getElementById('modalTitle').textContent = 'Edit Kurs';
    document.getElementById('kursId').value = data._id;
    document.getElementById('tanggal').value = data.tanggal.split('T')[0];
    document.getElementById('usdToIdr').value = data.usdToIdr;
    kursModal.show();
  } catch (error) {
    showAlert('Gagal memuat data kurs', 'danger');
  }
}

async function saveKurs() {
  const id = document.getElementById('kursId').value;
  const tanggal = document.getElementById('tanggal').value;
  const usdToIdr = parseFloat(document.getElementById('usdToIdr').value);
  
  if (!tanggal) {
    showAlert('Tanggal harus diisi', 'warning');
    return;
  }
  
  if (!usdToIdr || usdToIdr <= 0) {
    showAlert('Kurs harus lebih dari 0', 'warning');
    return;
  }
  
  const data = {
    tanggal: tanggal,
    usdToIdr: usdToIdr,
    sumber: 'MANUAL'
  };
  
  try {
    if (id) {
      await fetchAPI(`/api/kurs/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      });
      showAlert('Kurs berhasil diupdate', 'success');
    } else {
      await fetchAPI('/api/kurs', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      showAlert('Kurs berhasil ditambahkan', 'success');
    }
    
    kursModal.hide();
    loadKurs();
  } catch (error) {
    showAlert(error.message, 'danger');
  }
}

async function deleteKurs(id) {
  if (!confirm('Yakin ingin menghapus data kurs ini?')) return;
  
  try {
    await fetchAPI(`/api/kurs/${id}`, { method: 'DELETE' });
    showAlert('Kurs berhasil dihapus', 'success');
    loadKurs();
  } catch (error) {
    showAlert(error.message, 'danger');
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
    document.getElementById('csvFile').value = '';
    uploadModal.hide();
    loadKurs();
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
    showAlert(`File "${file.name}" berhasil dimuat`, 'info');
  };
  
  reader.onerror = function() {
    showAlert('Gagal membaca file', 'danger');
    event.target.value = '';
  };
  
  reader.readAsText(file);
}

function showUploadModal() {
  document.getElementById('csvData').value = '';
  document.getElementById('csvFile').value = '';
  uploadModal.show();
}

function initDummyKurs() {
  const existingKurs = localStorage.getItem('kurs');
  if (!existingKurs || JSON.parse(existingKurs).length === 0) {
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
        _id: `kurs-${Date.now()}-${i}`,
        tanggal: dateStr,
        usdToIdr: rate,
        sumber: i < 20 ? 'JISDOR' : 'MANUAL'
      });
    }
    
    localStorage.setItem('kurs', JSON.stringify(kursData));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initDummyKurs();
  kursModal = new bootstrap.Modal(document.getElementById('kursModal'));
  uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'));
  loadKurs();
});
