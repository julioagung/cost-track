async function loadDashboardData() {
  try {
    const stats = await fetchAPI(`${API_BASE_URL}/stats/dashboard`);
    
    document.getElementById('totalProduk').textContent = stats.counts.produk;
    document.getElementById('totalKomponen').textContent = stats.counts.komponen;
    document.getElementById('totalRiwayat').textContent = stats.counts.riwayat;
    
    const kursInfo = stats.kursToday.tanggal 
      ? `<small>${formatDate(stats.kursToday.tanggal)}</small>`
      : '';
    
    document.getElementById('kursToday').innerHTML = `
      <strong>${formatCurrency(stats.kursToday.usdToIdr)}</strong><br>
      ${kursInfo}
      <span class="badge bg-${stats.kursToday.sumber === 'JISDOR' ? 'success' : 'warning'} mt-1">
        ${stats.kursToday.sumber}
      </span>
    `;
  } catch (error) {
    console.error('Error loading dashboard:', error);
    showAlert('Gagal memuat data dashboard', 'danger');
  }
}

document.addEventListener('DOMContentLoaded', loadDashboardData);
