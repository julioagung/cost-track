# CostTrack - Sistem Perhitungan HPE

Aplikasi web fullstack untuk menghitung Harga Perkiraan Estimasi (HPE) produk dengan integrasi kurs JISDOR dari Bank Indonesia.

## 🎯 Fitur Utama
- ✅ Manajemen Produk & Bill of Material (BOM)
- ✅ Manajemen Komponen dengan satuan
- ✅ Riwayat Pengadaan dengan konversi mata uang
- ✅ Integrasi Kurs JISDOR otomatis dari Bank Indonesia
- ✅ Perhitungan HPE (Min, Max, Median, Rata-rata)
- ✅ Ekspor Data ke CSV
- ✅ Print hasil perhitungan
- ✅ Interface responsif dengan Bootstrap

## 🚀 Quick Start

### Windows
1. Double-click `install.bat` untuk instalasi
2. Edit file `.env` dengan MongoDB URI Anda
3. Double-click `start.bat` untuk menjalankan
4. Buka browser: `http://localhost:5000`

### Manual
```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env dengan MongoDB URI Anda

# Start server
npm start

# Buka browser
http://localhost:5000
```

## 📋 Persyaratan
- Node.js v14 atau lebih baru
- MongoDB Atlas account (gratis di mongodb.com)
- Browser modern (Chrome, Firefox, Edge)

## 🏗️ Teknologi
- **Backend**: Node.js + Express.js + MongoDB + Mongoose
- **Frontend**: HTML5 + CSS3 + Bootstrap 5 + Vanilla JavaScript
- **Database**: MongoDB Atlas
- **API Integration**: Bank Indonesia JISDOR API

## 🌐 Deployment

### Quick Deploy (20 menit)
Lihat **DEPLOY_QUICKSTART.md** untuk panduan cepat.

### Dokumentasi Lengkap
- **GitHub**: `DEPLOY_GITHUB.md` - Tutorial push ke GitHub
- **Netlify**: `DEPLOY_NETLIFY.md` - Deploy frontend ke Netlify
- **Full-Stack**: `DEPLOYMENT_CHECKLIST.md` - Deploy ke Render/Railway

### Helper Tools
- `git-commands.bat` - Git commands helper untuk Windows
- `netlify.toml` - Konfigurasi Netlify
- `public/js/config.js` - API configuration

## 📁 Struktur Folder
```
costtrack-new/
├── models/          # Mongoose Schema (Produk, Komponen, Riwayat, Kurs)
├── controllers/     # Business Logic & API handlers
├── routes/          # API endpoints routing
├── utils/           # Helper functions (HPE calculator, JISDOR service)
├── public/          # Frontend files
│   ├── css/         # Styles
│   ├── js/          # JavaScript modules
│   └── pages/       # HTML pages
├── server.js        # Entry point
├── .env             # Environment variables
└── package.json     # Dependencies
```

## 📖 Dokumentasi
- [USER_GUIDE.md](USER_GUIDE.md) - Panduan lengkap pengguna
- [API_DOCUMENTATION.md](API_DOCUMENTATION.md) - Dokumentasi API endpoints
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Struktur proyek detail
- [DEPLOYMENT.md](DEPLOYMENT.md) - Panduan deployment
- [TEST_ENDPOINTS.md](TEST_ENDPOINTS.md) - Panduan testing

## 🔧 Konfigurasi

### MongoDB Atlas
1. Buat account di [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Buat cluster gratis
3. Whitelist IP: 0.0.0.0/0 (untuk akses dari mana saja)
4. Buat database user
5. Copy connection string ke `.env`

### Environment Variables (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/costtrack
PORT=5000
NODE_ENV=development
```

## 🎮 Cara Penggunaan

### 1. Setup Data Awal
1. Buka menu **Komponen** → Tambah komponen-komponen yang digunakan
2. Buka menu **Produk** → Buat produk dengan BOM (Bill of Material)

### 2. Input Riwayat Pengadaan
1. Buka menu **Riwayat Pengadaan**
2. Tambah data pembelian komponen
3. Untuk harga USD, klik "Ambil Kurs Hari Ini" untuk konversi otomatis

### 3. Hitung HPE
1. Buka menu **Hitung HPE**
2. Pilih produk
3. Klik "Hitung HPE"
4. Lihat hasil perhitungan (Min, Max, Median, Rata-rata)
5. Export ke CSV atau Print

## 🧮 Algoritma Perhitungan HPE

HPE dihitung berdasarkan data historis riwayat pengadaan:

1. **Normalisasi Harga**: Semua harga dikonversi ke IDR menggunakan kurs JISDOR
2. **Agregasi Data**: Untuk setiap komponen, ambil semua data historis
3. **Statistik**: Hitung Min, Max, Median, dan Rata-rata
4. **Kalkulasi Total**: Kalikan dengan quantity di BOM
5. **Total HPE**: Jumlahkan HPE semua komponen

## 🌐 Deployment

### Render (Recommended)
```bash
# Push ke GitHub
git push origin main

# Deploy di Render.com
# 1. Connect repository
# 2. Set environment variables
# 3. Deploy
```

### Railway
```bash
railway init
railway up
railway variables set MONGODB_URI="your-uri"
```

Lihat [DEPLOYMENT.md](DEPLOYMENT.md) untuk detail lengkap.

## 🧪 Testing

### Test API dengan Postman
Lihat [TEST_ENDPOINTS.md](TEST_ENDPOINTS.md) untuk contoh request.

### Test UI
1. Buka `http://localhost:5000`
2. Test setiap menu dan fitur
3. Verifikasi perhitungan HPE

## 🐛 Troubleshooting

### Server tidak bisa start
- Cek MongoDB URI di `.env`
- Pastikan port 5000 tidak digunakan aplikasi lain
- Jalankan `npm install` ulang

### Data tidak muncul
- Cek koneksi internet (untuk MongoDB Atlas)
- Cek MongoDB whitelist IP
- Refresh browser

### Kurs JISDOR error
- API BI mungkin sedang down
- Gunakan upload CSV manual sebagai alternatif

## 📝 License
ISC

## 👨‍💻 Author
Developed as part of Cost Estimation System project

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## ⭐ Support
Give a ⭐️ if this project helped you!
