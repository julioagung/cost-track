# 🚀 Tutorial Deploy ke Vercel

## Kenapa Vercel?

✅ **Gratis** untuk personal projects
✅ **Auto-deploy** dari GitHub
✅ **Sangat cepat** (CDN global)
✅ **Setup mudah** (3 langkah)
✅ **Custom domain gratis**

## Prerequisites

- ✅ Code sudah di GitHub
- ✅ Akun GitHub aktif
- ✅ Browser (Chrome/Firefox/Edge)

## Step-by-Step Deploy

### 1️⃣ Buat Akun Vercel

1. Buka https://vercel.com
2. Klik **"Sign Up"**
3. Pilih **"Continue with GitHub"**
4. Login dengan akun GitHub Anda
5. Authorize Vercel untuk akses GitHub

### 2️⃣ Import Project

1. Di Vercel Dashboard, klik **"Add New..."** → **"Project"**
2. Pilih **"Import Git Repository"**
3. Cari repository **"cost-track"** (atau nama repo Anda)
4. Klik **"Import"**

### 3️⃣ Configure Project

**Build & Development Settings:**
```
Framework Preset: Other
Build Command: (kosongkan)
Output Directory: public
Install Command: npm install
```

**Root Directory:**
```
./  (default, jangan diubah)
```

### 4️⃣ Deploy!

1. Klik **"Deploy"**
2. Tunggu 1-2 menit
3. ✅ **Done!** Site sudah live

## URL Production

Vercel akan memberikan URL:
```
https://cost-track-username.vercel.app
```

Atau custom domain jika sudah setup.

## Auto-Deploy

Setiap kali Anda push ke GitHub:
```bash
git add .
git commit -m "Update feature"
git push
```

Vercel akan **otomatis deploy** dalam 1-2 menit!

## Vercel Configuration File

Buat file `vercel.json` di root project:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "public/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/public/$1"
    }
  ]
}
```

## Environment Variables (Jika Perlu)

Jika menggunakan backend:

1. **Project Settings** → **Environment Variables**
2. Add variables:
   ```
   MONGODB_URI = your_mongodb_uri
   NODE_ENV = production
   ```

## Custom Domain

### Setup Custom Domain

1. **Project Settings** → **Domains**
2. Klik **"Add"**
3. Masukkan domain Anda (contoh: `costtrack.com`)
4. Update DNS di domain provider:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

### Vercel Subdomain

Ubah subdomain default:
1. **Project Settings** → **Domains**
2. Klik domain `.vercel.app`
3. **Edit** → Ubah nama
4. Contoh: `costtrack-demo.vercel.app`

## Monitoring & Analytics

### View Deployment Logs

1. **Deployments** tab
2. Klik deployment yang ingin dilihat
3. View **Build Logs** dan **Function Logs**

### Analytics (Optional)

1. **Analytics** tab
2. Lihat:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

## Troubleshooting

### Build Failed

**Check Build Logs:**
```
Deployments → Latest Deployment → View Build Logs
```

**Common Issues:**
- Missing `public` folder
- Wrong output directory
- Node version mismatch

**Fix:**
```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "public/**",
      "use": "@vercel/static"
    }
  ]
}
```

### 404 Not Found

**Check Routes:**
```json
// vercel.json
{
  "routes": [
    {
      "src": "/pages/(.*)",
      "dest": "/public/pages/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/public/$1"
    }
  ]
}
```

### LocalStorage Not Working

LocalStorage works fine on Vercel! Jika ada masalah:
1. Clear browser cache
2. Hard refresh (Ctrl+F5)
3. Check browser console

### Slow Loading

Vercel sangat cepat, tapi jika lambat:
1. Check image sizes
2. Optimize CSS/JS
3. Use Vercel Analytics untuk identify bottlenecks

## Update Deployment

### Manual Redeploy

1. **Deployments** tab
2. Klik **"..."** pada deployment
3. **Redeploy**

### Rollback

1. **Deployments** tab
2. Pilih deployment lama
3. Klik **"Promote to Production"**

## Vercel CLI (Optional)

### Install CLI

```bash
npm install -g vercel
```

### Login

```bash
vercel login
```

### Deploy from Terminal

```bash
# Development
vercel

# Production
vercel --prod
```

### Pull Environment Variables

```bash
vercel env pull
```

## Comparison: Netlify vs Vercel

| Feature | Netlify | Vercel |
|---------|---------|--------|
| Setup | Easy | Easier |
| Speed | Fast | Faster |
| Free Tier | 100GB/month | 100GB/month |
| Build Time | ~2 min | ~1 min |
| Analytics | Paid | Free |
| Edge Functions | Yes | Yes |
| Best For | Static sites | Next.js, Static |

## Best Practices

### 1. Use Environment Variables
Jangan hardcode API URLs di code.

### 2. Enable HTTPS
Vercel otomatis enable HTTPS (gratis).

### 3. Setup Custom Domain
Lebih professional daripada `.vercel.app`.

### 4. Monitor Performance
Gunakan Vercel Analytics untuk track performance.

### 5. Use Preview Deployments
Setiap branch otomatis dapat preview URL.

## Preview Deployments

Setiap branch/PR otomatis dapat preview URL:
```
https://cost-track-git-feature-username.vercel.app
```

Perfect untuk testing sebelum merge ke main!

## Team Collaboration

### Add Team Members

1. **Settings** → **Team**
2. **Invite Member**
3. Set role (Owner/Member/Viewer)

### Access Control

- **Owner**: Full access
- **Member**: Deploy & settings
- **Viewer**: View only

## Cost (Free Tier)

Vercel Free Tier includes:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ 100 build hours/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Analytics
- ✅ Edge Network (CDN)

**Upgrade jika:**
- Traffic > 100GB/month
- Need team features
- Need advanced analytics

## Security

### HTTPS
Otomatis enabled untuk semua deployments.

### Environment Variables
Encrypted dan tidak ter-expose di client.

### DDoS Protection
Built-in protection dari Vercel.

## Performance

### Edge Network
Vercel menggunakan CDN global:
- 🌍 Worldwide edge locations
- ⚡ Ultra-fast response times
- 🔄 Automatic caching

### Optimization
Vercel otomatis optimize:
- Image compression
- Code minification
- Gzip compression
- HTTP/2 & HTTP/3

## Quick Commands

### Deploy
```bash
# Push to GitHub (auto-deploy)
git push

# Or use CLI
vercel --prod
```

### Check Status
```bash
vercel ls
```

### View Logs
```bash
vercel logs
```

### Remove Project
```bash
vercel remove
```

## Summary

**Untuk deploy CostTrack ke Vercel:**

1. ✅ Push code ke GitHub (sudah done)
2. ✅ Sign up di Vercel dengan GitHub
3. ✅ Import repository
4. ✅ Configure: Output = `public`
5. ✅ Deploy!
6. ✅ Share URL

**Total waktu: ~5 menit** ⏱️

**Biaya: GRATIS** 💰

**Hasil: App live di internet!** 🎉

## Next Steps

1. Deploy ke Vercel
2. Test semua fitur
3. Share URL ke dosen/client
4. Setup custom domain (optional)
5. Monitor analytics

## Support

- **Docs**: https://vercel.com/docs
- **Community**: https://github.com/vercel/vercel/discussions
- **Support**: support@vercel.com

---

**Happy Deploying! 🚀**

Vercel adalah pilihan terbaik untuk deploy static sites dengan dummy data!
