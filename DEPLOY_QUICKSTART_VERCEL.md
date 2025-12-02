# ⚡ Quick Start - Deploy ke Vercel

## 3 Langkah Deploy

### 1️⃣ Sign Up Vercel (1 menit)

1. Buka https://vercel.com
2. Klik **"Sign Up"**
3. Pilih **"Continue with GitHub"**
4. ✅ Done!

### 2️⃣ Import Project (2 menit)

1. Klik **"Add New..."** → **"Project"**
2. Pilih repository **"cost-track"**
3. Klik **"Import"**

### 3️⃣ Deploy (1 menit)

1. **Framework Preset**: Other
2. **Output Directory**: `public`
3. Klik **"Deploy"**
4. ✅ Done!

## URL Production

```
https://cost-track-username.vercel.app
```

## Update Site

Setiap kali push ke GitHub, Vercel auto-deploy:

```bash
git add .
git commit -m "Update"
git push
```

Tunggu 1 menit, site sudah update!

## Troubleshooting

### Build Failed?
- Check output directory = `public`
- Check `vercel.json` ada di root

### 404 Error?
- Hard refresh: Ctrl+F5
- Check routes di `vercel.json`

### LocalStorage Kosong?
- Refresh page
- Data dummy akan auto-create

## Features

✅ **Auto-deploy** dari GitHub
✅ **HTTPS** otomatis
✅ **CDN global** (super cepat)
✅ **Analytics** gratis
✅ **Custom domain** gratis

## Total Waktu

⏱️ **~5 menit** dari sign up sampai live!

## Biaya

💰 **GRATIS** untuk personal projects

## Next Steps

1. ✅ Deploy (sudah)
2. 🔗 Share URL
3. 📊 Monitor analytics
4. 🌐 Setup custom domain (optional)

---

**Selamat! App Anda sudah live! 🎉**

Lihat tutorial lengkap di `DEPLOY_VERCEL.md`
