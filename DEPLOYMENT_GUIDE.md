# Panduan Deploy ke Vercel

## Persiapan (Hanya Sekali)

### 1. Konfigurasi Git Identity
Jika belum pernah setup git, jalankan command berikut di terminal:

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

Atau untuk repository ini saja (tanpa --global):
```bash
git config user.name "Nama Anda"
git config user.email "email@anda.com"
```

### 2. Pastikan Terhubung ke GitHub
Repository sudah terhubung ke: https://github.com/julioagung/cost-track.git

## Cara Deploy

### Opsi 1: Menggunakan Script Otomatis (Recommended)
Jalankan file `deploy.bat`:
```bash
deploy.bat
```

### Opsi 2: Manual via Command Line

1. **Add perubahan ke git**
```bash
git add .
```

2. **Commit perubahan**
```bash
git commit -m "fix: perbaiki validasi kurs dan error handling"
```

3. **Push ke GitHub**
```bash
git push origin main
```

4. **Vercel akan otomatis deploy**
   - Vercel akan mendeteksi perubahan di GitHub
   - Proses build dan deploy akan berjalan otomatis
   - Biasanya selesai dalam 1-2 menit

## Monitoring Deployment

1. Buka dashboard Vercel: https://vercel.com/dashboard
2. Pilih project "cost-track" atau nama project Anda
3. Lihat status deployment di tab "Deployments"
4. Tunggu hingga status berubah menjadi "Ready"

## Perubahan yang Di-Deploy

### Backend (API)
- ✅ Validasi kurs disesuaikan: 10.000 - 25.000
- ✅ Endpoint baru: `PUT /api/kurs/:id` untuk update
- ✅ Endpoint baru: `GET /api/kurs/:id` untuk get by ID
- ✅ Pengecekan duplikasi tanggal
- ✅ Pesan error lebih informatif

### Frontend
- ✅ Error handling yang lebih baik
- ✅ Validasi tambahan untuk kurs
- ✅ Pesan error spesifik untuk duplikasi

## Testing Setelah Deploy

1. Buka aplikasi di URL Vercel Anda
2. Navigasi ke halaman Kurs
3. Coba tambah kurs baru dengan nilai 20.000
4. Pastikan tidak ada error "Data yang dikirim tidak valid"
5. Coba tambah kurs dengan tanggal yang sama (harus muncul error duplikasi)

## Troubleshooting

### Error: "Author identity unknown"
Jalankan konfigurasi git identity (lihat Persiapan #1)

### Error: "Permission denied"
Pastikan Anda sudah login ke GitHub:
```bash
git config credential.helper store
git push origin main
```
Masukkan username dan personal access token GitHub Anda.

### Deployment Gagal di Vercel
1. Cek logs di Vercel dashboard
2. Pastikan environment variables sudah diset:
   - `MONGODB_URI`
   - `PORT` (optional, default 5000)
3. Pastikan `vercel.json` sudah benar

### Aplikasi Tidak Update
1. Hard refresh browser: Ctrl + Shift + R (Windows) atau Cmd + Shift + R (Mac)
2. Clear cache browser
3. Cek apakah deployment sudah selesai di Vercel dashboard

## Environment Variables di Vercel

Pastikan sudah set di Vercel Dashboard > Settings > Environment Variables:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=5000
NODE_ENV=production
```

## Rollback (Jika Ada Masalah)

Jika deployment baru bermasalah, Anda bisa rollback di Vercel:
1. Buka Vercel Dashboard
2. Pilih deployment sebelumnya yang stabil
3. Klik "Promote to Production"

## Kontak & Support

- GitHub Issues: https://github.com/julioagung/cost-track/issues
- Vercel Docs: https://vercel.com/docs
