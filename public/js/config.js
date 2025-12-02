// API Configuration
// Update API_BASE_URL setelah deploy backend

// Development (local)
// const API_BASE_URL = 'http://localhost:5000';

// Production (update dengan URL backend Anda)
const API_BASE_URL = 'https://your-backend-url.onrender.com';

// Jangan ubah ini
const API_ENDPOINTS = {
  produk: `${API_BASE_URL}/api/produk`,
  komponen: `${API_BASE_URL}/api/komponen`,
  riwayat: `${API_BASE_URL}/api/riwayat`,
  kurs: `${API_BASE_URL}/api/kurs`,
  hpe: `${API_BASE_URL}/api/hpe`,
  stats: `${API_BASE_URL}/api/stats/dashboard`
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { API_BASE_URL, API_ENDPOINTS };
}
