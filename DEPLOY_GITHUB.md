# Tutorial Deploy ke GitHub

## Persiapan

### 1. Install Git (jika belum)
Download dan install Git dari: https://git-scm.com/download/win

### 2. Konfigurasi Git (First Time)
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

## Langkah-langkah Deploy ke GitHub

### Step 1: Buat Repository di GitHub

1. Buka https://github.com
2. Login ke akun GitHub Anda
3. Klik tombol **"+"** di pojok kanan atas
4. Pilih **"New repository"**
5. Isi form:
   - **Repository name**: `costtrack` (atau nama lain)
   - **Description**: "CostTrack - Sistem Perhitungan HPE"
   - **Public** atau **Private** (pilih sesuai kebutuhan)
   - ❌ **JANGAN** centang "Add a README file"
   - ❌ **JANGAN** centang "Add .gitignore"
   - ❌ **JANGAN** pilih license
6. Klik **"Create repository"**

### Step 2: Inisialisasi Git di Project

Buka terminal/command prompt di folder project, lalu jalankan:

```bash
# Inisialisasi git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit - CostTrack application"
```

### Step 3: Hubungkan dengan GitHub

Ganti `username` dan `repository-name` dengan milik Anda:

```bash
# Tambahkan remote repository
git remote add origin https://github.com/username/repository-name.git

# Atau jika menggunakan SSH
git remote add origin git@github.com:username/repository-name.git

# Verifikasi remote
git remote -v
```

### Step 4: Push ke GitHub

```bash
# Push ke branch main
git branch -M main
git push -u origin main
```

Jika diminta login:
- Masukkan username GitHub
- Masukkan password/token (gunakan Personal Access Token, bukan password)

### Step 5: Buat Personal Access Token (jika perlu)

Jika diminta password dan gagal:

1. Buka https://github.com/settings/tokens
2. Klik **"Generate new token"** → **"Generate new token (classic)"**
3. Isi form:
   - **Note**: "CostTrack Deploy"
   - **Expiration**: 90 days (atau sesuai kebutuhan)
   - **Scopes**: Centang **repo** (semua)
4. Klik **"Generate token"**
5. **COPY TOKEN** (hanya muncul sekali!)
6. Gunakan token sebagai password saat push

## Verifikasi

1. Buka repository di GitHub
2. Refresh halaman
3. Semua file project harus sudah muncul

## Update Code di Masa Depan

Setiap kali ada perubahan:

```bash
# Lihat status perubahan
git status

# Tambahkan file yang berubah
git add .

# Atau tambahkan file spesifik
git add src/controllers/produkController.js

# Commit dengan pesan
git commit -m "Update: deskripsi perubahan"

# Push ke GitHub
git push
```

## Tips & Tricks

### Lihat History Commit
```bash
git log
git log --oneline
```

### Lihat Perubahan
```bash
git diff
git diff src/controllers/produkController.js
```

### Undo Changes (belum commit)
```bash
git checkout -- namafile.js
```

### Undo Last Commit (belum push)
```bash
git reset --soft HEAD~1
```

### Buat Branch Baru
```bash
git checkout -b feature-baru
git push -u origin feature-baru
```

### Pindah Branch
```bash
git checkout main
git checkout feature-baru
```

### Merge Branch
```bash
git checkout main
git merge feature-baru
```

## File yang Diabaikan (.gitignore)

File `.gitignore` sudah ada di project. Pastikan berisi:

```
node_modules/
.env
*.log
.DS_Store
```

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/username/repo.git
```

### Error: "failed to push"
```bash
# Pull dulu
git pull origin main --allow-unrelated-histories

# Lalu push lagi
git push -u origin main
```

### Error: "Permission denied"
- Pastikan menggunakan Personal Access Token
- Atau setup SSH key

### Lupa Commit Message
```bash
git commit --amend -m "Pesan baru"
```

## Best Practices

1. **Commit Sering**: Commit setiap fitur selesai
2. **Pesan Jelas**: Gunakan pesan commit yang deskriptif
3. **Pull Sebelum Push**: Jika kerja tim, selalu pull dulu
4. **Branch untuk Fitur**: Gunakan branch untuk fitur baru
5. **Review Sebelum Commit**: Cek `git status` dan `git diff`

## Contoh Workflow

```bash
# 1. Mulai kerja
git pull

# 2. Buat perubahan di code
# ... edit files ...

# 3. Cek perubahan
git status
git diff

# 4. Tambahkan file
git add .

# 5. Commit
git commit -m "Add: fitur export CSV"

# 6. Push
git push

# 7. Selesai!
```

## Perintah Git Penting

| Perintah | Fungsi |
|----------|--------|
| `git init` | Inisialisasi repository |
| `git status` | Lihat status file |
| `git add .` | Tambahkan semua file |
| `git add file.js` | Tambahkan file spesifik |
| `git commit -m "msg"` | Commit dengan pesan |
| `git push` | Push ke remote |
| `git pull` | Pull dari remote |
| `git clone url` | Clone repository |
| `git log` | Lihat history |
| `git diff` | Lihat perubahan |
| `git branch` | Lihat branch |
| `git checkout -b name` | Buat branch baru |
| `git merge branch` | Merge branch |

## Next Steps

Setelah code di GitHub:
1. ✅ Code tersimpan aman
2. ✅ Bisa kolaborasi dengan tim
3. ✅ Ada version control
4. ✅ Siap deploy ke hosting (Render, Railway, Vercel, dll)

Lihat `DEPLOY_NETLIFY.md` untuk tutorial deploy aplikasi.
