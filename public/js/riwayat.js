let riwayatModal;
let komponenList = [];

async function loadRiwayat() {
  try {
    const data = await fetchAPI(API.RIWAYAT);
    const tbody = document.getElementById('riwayatTableBody');
    
    if (data.length === 0) {
      tbody.innerHTML = '<tr><td colspan="10" class="text-center">Belum ada data riwayat pengadaan</td></tr>';
      return;
    }
    
    tbody.innerHTML = data.map((item, index) => {
      // Format harga satuan dengan simbol mata uang
      const displayPrice = item.matauang === 'USD' 
        ? `$${item.hargaSatuan.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
        : formatCurrency(item.hargaSatuan);
      
      // Format tanggal yang lebih ringkas
      const tanggal = new Date(item.tanggalPengadaan);
      const tanggalStr = tanggal.toLocaleDateString('id-ID', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      });
      
      // Kurs info hanya untuk USD
      const kursInfo = item.matauang === 'USD' 
        ? `<div class="small text-muted mt-1">Kurs: ${formatCurrency(item.kursJisdor)}</div>`
        : '';
      
      // Format USD dengan simbol
      const usdDisplay = `$${item.hargaUSD.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
      
      return `
        <tr>
          <td class="text-center">${index + 1}</td>
          <td>${tanggalStr}</td>
          <td><span class="fw-bold">${item.namaKomponen}</span></td>
          <td>${item.supplier}</td>
          <td class="text-end">${item.quantity.toLocaleString('id-ID')}</td>
          <td class="text-end">${displayPrice} <span class="badge badge-${item.matauang === 'USD' ? 'success' : 'primary'}">${item.matauang}</span></td>
          <td class="text-end"><span class="fw-bold">${formatCurrency(item.hargaIDR)}</span></td>
          <td class="text-end">${usdDisplay}</td>
          <td class="text-center">${item.noPO || '-'}</td>
          <td class="table-actions">
            <button class="btn btn-sm btn-warning" onclick="editRiwayat('${item._id}')" title="Edit"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-sm btn-danger" onclick="deleteRiwayat('${item._id}')" title="Hapus"><i class="bi bi-trash"></i></button>
          </td>
        </tr>
      `;
    }).join('');
  } catch (error) {
    showAlert('Gagal memuat data riwayat', 'danger');
  }
}

async function loadKomponenList() {
  try {
    komponenList = await fetchAPI(API.KOMPONEN);
    const select = document.getElementById('komponenId');
    select.innerHTML = '<option value="">Pilih Komponen</option>' +
      komponenList.map(k => `<option value="${k._id}" data-nama="${k.namaKomponen}">${k.namaKomponen}</option>`).join('');
  } catch (error) {
    console.error('Error loading komponen:', error);
  }
}

function showAddModal() {
  document.getElementById('modalTitle').textContent = 'Tambah Riwayat Pengadaan';
  document.getElementById('riwayatForm').reset();
  document.getElementById('riwayatId').value = '';
  document.getElementById('tanggalPengadaan').valueAsDate = new Date();
  document.getElementById('kursJisdor').value = 1;
  document.getElementById('matauang').value = 'IDR';
  toggleKurs();
  riwayatModal.show();
}

function toggleKurs() {
  const matauang = document.getElementById('matauang').value;
  const kursContainer = document.getElementById('kursContainer');
  const kursInput = document.getElementById('kursJisdor');
  
  if (matauang === 'USD') {
    kursContainer.style.display = 'block';
    kursInput.required = true;
    if (!kursInput.value || kursInput.value <= 0) {
      fetchKursToday();
    }
  } else {
    kursContainer.style.display = 'none';
    kursInput.required = false;
    kursInput.value = 1;
  }
}

async function fetchKursToday() {
  try {
    const tanggal = document.getElementById('tanggalPengadaan').value;
    if (!tanggal) {
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('tanggalPengadaan').value = today;
    }
    
    const dateToFetch = document.getElementById('tanggalPengadaan').value;
    const kurs = await fetchAPI(`${API.KURS}/${dateToFetch}`);
    document.getElementById('kursJisdor').value = kurs.usdToIdr;
    showAlert(`Kurs ${formatDate(kurs.tanggal)}: ${formatCurrency(kurs.usdToIdr)} (${kurs.sumber})`, 'success');
  } catch (error) {
    console.error('Error fetching kurs:', error);
    document.getElementById('kursJisdor').value = 15500;
    showAlert('Menggunakan kurs fallback: Rp 15.500', 'warning');
  }
}

async function editRiwayat(id) {
  try {
    const data = await fetchAPI(`${API.RIWAYAT}/${id}`);
    document.getElementById('modalTitle').textContent = 'Edit Riwayat Pengadaan';
    document.getElementById('riwayatId').value = data._id;
    document.getElementById('komponenId').value = data.komponenId;
    document.getElementById('supplier').value = data.supplier;
    document.getElementById('tanggalPengadaan').value = data.tanggalPengadaan.split('T')[0];
    document.getElementById('quantity').value = data.quantity;
    document.getElementById('hargaSatuan').value = data.hargaSatuan;
    document.getElementById('matauang').value = data.matauang;
    document.getElementById('kursJisdor').value = data.kursJisdor;
    document.getElementById('noPO').value = data.noPO || '';
    document.getElementById('catatan').value = data.catatan || '';
    toggleKurs();
    riwayatModal.show();
  } catch (error) {
    showAlert('Gagal memuat data riwayat', 'danger');
  }
}

async function saveRiwayat() {
  const id = document.getElementById('riwayatId').value;
  const komponenId = document.getElementById('komponenId').value;
  const matauang = document.getElementById('matauang').value;
  const kursValue = parseFloat(document.getElementById('kursJisdor').value);
  
  if (!komponenId) {
    showAlert('Pilih komponen terlebih dahulu', 'warning');
    return;
  }
  
  if (matauang === 'USD' && (!kursValue || kursValue <= 0)) {
    showAlert('Kurs JISDOR harus diisi untuk mata uang USD', 'warning');
    return;
  }
  
  const option = document.querySelector(`#komponenId option[value="${komponenId}"]`);
  
  const data = {
    komponenId: komponenId,
    namaKomponen: option.getAttribute('data-nama'),
    supplier: document.getElementById('supplier').value.trim(),
    tanggalPengadaan: document.getElementById('tanggalPengadaan').value,
    quantity: parseFloat(document.getElementById('quantity').value),
    hargaSatuan: parseFloat(document.getElementById('hargaSatuan').value),
    matauang: matauang,
    kursJisdor: matauang === 'USD' ? kursValue : 1,
    noPO: document.getElementById('noPO').value.trim(),
    catatan: document.getElementById('catatan').value.trim()
  };
  
  if (data.quantity <= 0) {
    showAlert('Quantity harus lebih dari 0', 'warning');
    return;
  }
  
  if (data.hargaSatuan <= 0) {
    showAlert('Harga satuan harus lebih dari 0', 'warning');
    return;
  }
  
  try {
    if (id) {
      await fetchAPI(`${API.RIWAYAT}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      });
      showAlert('Riwayat berhasil diupdate', 'success');
    } else {
      await fetchAPI(API.RIWAYAT, {
        method: 'POST',
        body: JSON.stringify(data)
      });
      showAlert('Riwayat berhasil ditambahkan', 'success');
    }
    
    riwayatModal.hide();
    loadRiwayat();
  } catch (error) {
    showAlert(error.message, 'danger');
  }
}

async function deleteRiwayat(id) {
  if (!confirm('Yakin ingin menghapus riwayat ini?')) return;
  
  try {
    await fetchAPI(`${API.RIWAYAT}/${id}`, { method: 'DELETE' });
    showAlert('Riwayat berhasil dihapus', 'success');
    loadRiwayat();
  } catch (error) {
    showAlert(error.message, 'danger');
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  riwayatModal = new bootstrap.Modal(document.getElementById('riwayatModal'));
  await loadKomponenList();
  loadRiwayat();
});
