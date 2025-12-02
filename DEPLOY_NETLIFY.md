# Tutorial Deploy ke Netlify dengan Git

## ⚠️ PENTING: Netlify untuk Frontend Only

**Netlify hanya untuk static sites (HTML, CSS, JS).**

CostTrack adalah **Full-Stack App** (Frontend + Backend + Database):
- ✅ Frontend bisa di Netlify
- ❌ Backend TIDAK bisa di Netlify (butuh Node.js server)

## Pilihan Deploy

### Option 1: Split Deploy (Recommended)
- **Frontend** → Netlify (gratis)
- **Backend** → Render/Railway (gratis)

### Option 2: Full-Stack Deploy
- **Frontend + Backend** → Render/Railway/Vercel (gratis)

## Tutorial: Deploy Frontend ke Netlify

### Persiapan

1. **Push code ke GitHub** (lihat `DEPLOY_GITHUB.md`)
2. **Buat akun Netlify**: https://app.netlify.com/signup

### Step 1: Siapkan Frontend untuk Netlify

Buat file konfigurasi Netlify:

```bash
# Di root project
```

Buat file `netlify.toml`:

```toml
[build]
  publish = "public"
  command = "echo 'No build needed'"

[[redirects]]
  from = "/api/*"
  to = "https://your-backend-url.onrender.com/api/:splat"
  status = 200
  force = true

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: Update Frontend untuk API Backend

Edit semua file JS di `public/js/` untuk menggunakan backend URL:

**Contoh: public/js/produk.js**
```javascript
// Ganti
const API_URL = '/api/produk';

// Menjadi
const API_URL = 'https://your-backend-url.onrender.com/api/produk';
```

Atau buat file config:

**public/js/config.js**
```javascript
const API_BASE_URL = 'https://your-backend-url.onrender.com';
```

Lalu di setiap file:
```javascript
const API_URL = `${API_BASE_URL}/api/produk`;
```

### Step 3: Deploy ke Netlify via GitHub

#### A. Login ke Netlify
1. Buka https://app.netlify.com
2. Login dengan GitHub

#### B. Import Project
1. Klik **"Add new site"** → **"Import an existing project"**
2. Pilih **"Deploy with GitHub"**
3. Authorize Netlify untuk akses GitHub
4. Pilih repository **costtrack**

#### C. Configure Build Settings
```
Build command: (kosongkan atau "echo 'No build'")
Publish directory: public
```

#### D. Deploy
1. Klik **"Deploy site"**
2. Tunggu proses deploy (~1-2 menit)
3. Site akan dapat URL: `https://random-name.netlify.app`

### Step 4: Custom Domain (Optional)

1. Di Netlify dashboard, klik **"Domain settings"**
2. Klik **"Options"** → **"Edit site name"**
3. Ubah menjadi: `costtrack-yourname.netlify.app`

## Tutorial: Deploy Full-Stack ke Render

Untuk deploy full-stack (Frontend + Backend + Database):

### Step 1: Buat Akun Render
https://dashboard.render.com/register

### Step 2: Deploy Backend

1. **New +** → **Web Service**
2. **Connect GitHub repository**
3. Configure:
   ```
   Name: costtrack-backend
   Environment: Node
   Region: Singapore
   Branch: main
   Build Command: npm install
   Start Command: npm start
   Instance Type: Free
   ```

4. **Environment Variables**:
   ```
   MONGODB_URI = your_mongodb_connection_string
   NODE_ENV = production
   PORT = 5000
   ```

5. **Deploy**

6. Copy URL: `https://costtrack-backend.onrender.com`

### Step 3: Update Frontend API URLs

Edit `public/js/config.js`:
```javascript
const API_BASE_URL = 'https://costtrack-backend.onrender.com';
```

### Step 4: Deploy Frontend ke Netlify

Ikuti langkah di atas dengan API URL yang sudah diupdate.

## Alternatif: Deploy Full-Stack di Render

Deploy semuanya di Render (lebih simple):

### Step 1: Deploy ke Render

1. **New +** → **Web Service**
2. **Connect repository**
3. Configure:
   ```
   Name: costtrack
   Environment: Node
   Region: Singapore
   Branch: main
   Build Command: npm install
   Start Command: npm start
   Instance Type: Free
   ```

4. **Environment Variables**:
   ```
   MONGODB_URI = your_mongodb_connection_string
   NODE_ENV = production
   ```

5. **Deploy**

6. URL: `https://costtrack.onrender.com`

### Keuntungan Deploy di Render:
- ✅ Frontend + Backend dalam 1 tempat
- ✅ Tidak perlu CORS configuration
- ✅ Lebih simple
- ✅ Gratis

### Keuntungan Split Deploy (Netlify + Render):
- ✅ Frontend lebih cepat (Netlify CDN)
- ✅ Backend terpisah (lebih flexible)
- ✅ Bisa scale independent

## Checklist Deploy

### Pre-Deploy
- [ ] Code sudah di GitHub
- [ ] `.env` tidak ter-commit
- [ ] `.gitignore` sudah benar
- [ ] MongoDB Atlas sudah setup
- [ ] Test lokal sudah OK

### Deploy Backend (Render)
- [ ] Web Service created
- [ ] Environment variables set
- [ ] Deploy successful
- [ ] API endpoints working
- [ ] Database connected

### Deploy Frontend (Netlify)
- [ ] API URLs updated
- [ ] netlify.toml created
- [ ] Site deployed
- [ ] Custom domain set (optional)
- [ ] All pages working

### Post-Deploy
- [ ] Test semua fitur
- [ ] Test CRUD operations
- [ ] Test HPE calculation
- [ ] Test export/print
- [ ] Mobile responsive check

## Environment Variables untuk Production

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/costtrack
NODE_ENV=production
PORT=5000
```

### Frontend (config.js)
```javascript
const API_BASE_URL = 'https://costtrack-backend.onrender.com';
```

## Troubleshooting

### Error: "Application failed to respond"
- Check logs di Render dashboard
- Pastikan PORT menggunakan `process.env.PORT`
- Pastikan start command benar

### Error: "CORS policy"
- Tambahkan CORS di backend:
```javascript
app.use(cors({
  origin: ['https://costtrack.netlify.app'],
  credentials: true
}));
```

### Error: "Cannot connect to database"
- Check MongoDB URI
- Pastikan IP whitelist: `0.0.0.0/0`
- Check database user credentials

### Frontend tidak load data
- Check API URL di frontend
- Check browser console untuk errors
- Test API endpoint langsung

## Update Aplikasi

### Update Backend
```bash
git add .
git commit -m "Update backend"
git push
```
Render akan auto-deploy.

### Update Frontend
```bash
git add .
git commit -m "Update frontend"
git push
```
Netlify akan auto-deploy.

## Monitoring

### Render
- Dashboard → Logs
- Monitor CPU/Memory usage
- Check deploy history

### Netlify
- Dashboard → Deploys
- Check build logs
- Monitor bandwidth

## Custom Domain (Advanced)

### Netlify
1. Buy domain (Namecheap, GoDaddy, dll)
2. Netlify → Domain settings → Add custom domain
3. Update DNS records di domain provider

### Render
1. Render → Settings → Custom domain
2. Add domain
3. Update DNS records

## Biaya

### Free Tier Limits

**Netlify Free:**
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ HTTPS included

**Render Free:**
- ✅ 750 hours/month
- ✅ 512MB RAM
- ⚠️ Spin down after 15 min inactive
- ⚠️ Cold start ~30 seconds

**MongoDB Atlas Free:**
- ✅ 512MB storage
- ✅ Shared cluster
- ✅ Unlimited connections

## Rekomendasi

### Untuk Development/Portfolio:
**Render Full-Stack** (paling simple)
- Deploy sekali
- Gratis
- Cukup untuk demo

### Untuk Production:
**Netlify (Frontend) + Render (Backend)**
- Performance lebih baik
- Scalable
- Professional setup

## Next Steps

1. ✅ Deploy backend ke Render
2. ✅ Deploy frontend ke Netlify
3. ✅ Test semua fitur
4. ✅ Share URL ke dosen/client
5. ✅ Monitor usage
6. ✅ Update dokumentasi dengan production URL

## Production URLs

Setelah deploy, update di README.md:

```markdown
## Live Demo

- **Frontend**: https://costtrack.netlify.app
- **Backend API**: https://costtrack-backend.onrender.com
- **Documentation**: https://costtrack.netlify.app/pages/team.html
```

## Support

Jika ada masalah:
1. Check logs di dashboard
2. Test API endpoints dengan Postman
3. Check browser console
4. Review environment variables
5. Contact support platform

---

**Good luck with deployment! 🚀**
