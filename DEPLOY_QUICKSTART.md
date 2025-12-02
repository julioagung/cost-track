# 🚀 Quick Start - Deploy CostTrack

## Ringkasan Cepat

### 1️⃣ Push ke GitHub (5 menit)

```bash
# Inisialisasi git
git init
git add .
git commit -m "Initial commit"

# Hubungkan dengan GitHub (ganti dengan repo Anda)
git remote add origin https://github.com/username/costtrack.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy Backend ke Render (10 menit)

1. Buka https://dashboard.render.com
2. **New +** → **Web Service**
3. Connect GitHub → Pilih repository `costtrack`
4. Settings:
   ```
   Name: costtrack-backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```
5. Environment Variables:
   ```
   MONGODB_URI = mongodb+srv://user:pass@cluster.mongodb.net/costtrack
   NODE_ENV = production
   ```
6. **Create Web Service**
7. Copy URL: `https://costtrack-backend.onrender.com`

### 3️⃣ Update API URL (2 menit)

Edit `public/js/config.js`:
```javascript
const API_BASE_URL = 'https://costtrack-backend.onrender.com';
```

Commit & push:
```bash
git add .
git commit -m "Update API URL for production"
git push
```

### 4️⃣ Deploy Frontend ke Netlify (5 menit)

1. Buka https://app.netlify.com
2. **Add new site** → **Import from Git**
3. Connect GitHub → Pilih repository
4. Settings:
   ```
   Build command: (kosongkan)
   Publish directory: public
   ```
5. **Deploy site**
6. URL: `https://random-name.netlify.app`

### 5️⃣ Test & Share! ✅

- Buka URL Netlify
- Test semua fitur
- Share URL ke dosen/client

## Alternatif: Deploy Full-Stack di Render Only

Lebih simple, deploy semuanya di Render:

```bash
# 1. Push ke GitHub (sama seperti di atas)

# 2. Deploy ke Render
- New Web Service
- Connect repo
- Deploy!

# 3. Selesai!
URL: https://costtrack.onrender.com
```

## Troubleshooting Cepat

### Backend tidak jalan
- Check logs di Render dashboard
- Pastikan MONGODB_URI benar
- Pastikan MongoDB IP whitelist: `0.0.0.0/0`

### Frontend tidak load data
- Check API URL di `config.js`
- Check browser console
- Test API endpoint langsung

### Git error
```bash
# Reset dan coba lagi
git remote remove origin
git remote add origin https://github.com/username/repo.git
git push -u origin main --force
```

## Dokumentasi Lengkap

- **GitHub**: Lihat `DEPLOY_GITHUB.md`
- **Netlify**: Lihat `DEPLOY_NETLIFY.md`
- **Render**: Lihat `DEPLOYMENT_CHECKLIST.md`

## Need Help?

1. Check dokumentasi lengkap
2. Check logs di dashboard
3. Google error message
4. Ask ChatGPT/Kiro

---

**Total waktu: ~20-30 menit** ⏱️

**Biaya: GRATIS** 💰

**Hasil: Aplikasi live di internet!** 🎉
