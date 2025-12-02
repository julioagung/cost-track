# 🎭 Dummy Mode - LocalStorage Database

## Overview

Aplikasi sekarang menggunakan **LocalStorage** sebagai database dummy untuk demo/testing tanpa perlu backend server atau MongoDB.

## Fitur

✅ **Semua fitur tetap berfungsi:**
- CRUD Produk
- CRUD Komponen  
- CRUD Riwayat Pengadaan
- Perhitungan HPE
- Kurs JISDOR
- Dashboard Statistics

✅ **Data persisten** di browser (tidak hilang saat refresh)

✅ **Data baru yang diinput akan tersimpan** dan langsung terlihat

✅ **Tidak perlu backend server** - bisa langsung buka HTML file

## Data Dummy Default

### Produk (2 items)
1. Laptop Gaming
2. PC Workstation

### Komponen (4 items)
1. Processor Intel i7
2. RAM 16GB
3. SSD 1TB
4. Motherboard

### Riwayat Pengadaan (3 items)
- Processor Intel i7 (USD $300)
- RAM 16GB (IDR Rp 1,200,000)
- Processor Intel i7 (USD $310)

### Kurs (3 items)
- 2024-12-01: Rp 15,500
- 2024-11-30: Rp 15,480
- 2024-11-29: Rp 15,520

## Cara Menggunakan

### 1. Buka Langsung di Browser
```
Buka file: public/index.html
```

Tidak perlu server! Langsung buka file HTML di browser.

### 2. Atau dengan Server (Optional)
```bash
npm start
```

Lalu buka: http://localhost:5000

## Cara Kerja

### LocalStorage
Data disimpan di browser menggunakan `localStorage`:
- `localStorage.getItem('produk')` - Data produk
- `localStorage.getItem('komponen')` - Data komponen
- `localStorage.getItem('riwayat')` - Data riwayat
- `localStorage.getItem('kurs')` - Data kurs

### Fetch API Simulation
File `public/js/config.js` mensimulasikan API calls:
- GET - Ambil data dari localStorage
- POST - Tambah data ke localStorage
- PUT - Update data di localStorage
- DELETE - Hapus data dari localStorage

### Network Delay
Ada delay 300ms untuk simulasi network request yang realistis.

## Reset Data

### Reset ke Data Default
Buka browser console (F12) dan jalankan:
```javascript
localStorage.clear();
location.reload();
```

### Hapus Semua Data
```javascript
localStorage.removeItem('produk');
localStorage.removeItem('komponen');
localStorage.removeItem('riwayat');
localStorage.removeItem('kurs');
location.reload();
```

### Lihat Data
```javascript
console.log(JSON.parse(localStorage.getItem('produk')));
console.log(JSON.parse(localStorage.getItem('komponen')));
console.log(JSON.parse(localStorage.getItem('riwayat')));
```

## Input Text Color

Semua input text sekarang berwarna **putih** untuk visibility yang lebih baik:
- Input fields: putih
- Placeholder: putih transparan
- Focus state: putih dengan border biru
- Readonly: putih transparan

## Deploy ke Netlify

Dengan dummy mode, deploy jadi sangat mudah:

### 1. Push ke GitHub
```bash
git add .
git commit -m "Add dummy mode"
git push
```

### 2. Deploy ke Netlify
1. Buka https://app.netlify.com
2. **New site from Git**
3. Connect GitHub
4. Pilih repository
5. Settings:
   ```
   Build command: (kosongkan)
   Publish directory: public
   ```
6. **Deploy!**

### 3. Selesai!
Aplikasi langsung jalan tanpa perlu backend atau database!

## Kelebihan Dummy Mode

✅ **Tidak perlu backend** - Deploy frontend saja
✅ **Tidak perlu database** - Data di browser
✅ **Gratis 100%** - Netlify free tier
✅ **Cepat** - Tidak ada network latency
✅ **Offline capable** - Bisa jalan tanpa internet (setelah load pertama)
✅ **Perfect untuk demo** - Tidak perlu setup kompleks

## Kekurangan Dummy Mode

❌ **Data tidak shared** - Setiap browser punya data sendiri
❌ **Data bisa hilang** - Jika clear browser data
❌ **Tidak ada authentication** - Semua orang bisa akses
❌ **Tidak scalable** - Hanya untuk demo/testing

## Switch ke Real Backend

Jika ingin menggunakan real backend:

1. Deploy backend ke Render (lihat `DEPLOY_NETLIFY.md`)
2. Update `public/js/config.js`:
   ```javascript
   // Uncomment dan update URL
   const USE_REAL_BACKEND = true;
   const BACKEND_URL = 'https://your-backend.onrender.com';
   ```
3. Commit dan push

## Troubleshooting

### Data tidak muncul
- Clear cache dan reload
- Check browser console untuk errors
- Reset data dengan `localStorage.clear()`

### Data hilang setelah refresh
- Check apakah browser dalam incognito mode
- Check browser settings untuk localStorage

### Input tidak terlihat
- Check CSS sudah load
- Check browser support untuk CSS variables

## Browser Support

✅ Chrome/Edge (recommended)
✅ Firefox
✅ Safari
⚠️ IE11 (limited support)

## Tips

1. **Backup data**: Export ke CSV sebelum clear browser
2. **Test di incognito**: Untuk test fresh install
3. **Use Chrome DevTools**: Untuk debug localStorage
4. **Share URL**: Kirim URL Netlify ke orang lain untuk demo

## Production Ready?

Dummy mode cocok untuk:
- ✅ Demo/Presentation
- ✅ Portfolio
- ✅ Prototype
- ✅ Testing UI/UX

Tidak cocok untuk:
- ❌ Production app
- ❌ Multi-user system
- ❌ Data persistence
- ❌ Real business use

## Next Steps

1. ✅ Test semua fitur
2. ✅ Deploy ke Netlify
3. ✅ Share URL
4. 📝 Jika perlu real backend, deploy ke Render

---

**Enjoy the dummy mode! 🎉**
