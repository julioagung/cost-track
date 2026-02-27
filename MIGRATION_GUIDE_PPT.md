# Migration Guide - PowerPoint Slides

---

## Slide 1: Cover Slide
**Title:** Migration Guide - New Project Structure

**Subtitle:** Restructuring Backend Code for Better Organization

**Footer:** CostTrack Application

---

## Slide 2: Agenda
**What We'll Cover:**
- What Changed?
- Old vs New Structure
- Key Changes Made
- Benefits of Migration
- How to Use New Structure
- Testing & Rollback

---

## Slide 3: What Changed?
**Main Change:**
- Project direstrukturisasi menggunakan folder `src/` untuk backend code

**Goal:**
- Organisasi yang lebih baik
- Pemisahan yang jelas antara backend dan frontend
- Struktur standar Node.js project

---

## Slide 4: Old Structure vs New Structure

**Before (Old):**
```
costtrack-new/
├── controllers/
├── models/
├── routes/
├── utils/
├── public/
└── server.js
```

**After (New):**
```
costtrack-new/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── public/
└── server.js (legacy)
```

---

## Slide 5: Key Changes Made (1/2)

**1. Backend Code Moved to `src/`**
- `controllers/` → `src/controllers/`
- `models/` → `src/models/`
- `routes/` → `src/routes/`
- `utils/` → `src/utils/`

**2. New Configuration Folder**
- Created `src/config/database.js`
- Separated database logic from server

---

## Slide 6: Key Changes Made (2/2)

**3. Split Server Files**
- `src/app.js` - Express app configuration
- `src/server.js` - Server initialization
- Better separation of concerns

**4. Updated package.json**
```json
{
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "node src/server.js"
  }
}
```

**5. Frontend Unchanged**
- `public/` folder tetap sama
- Tidak ada perubahan pada HTML, CSS, atau JS

---

## Slide 7: Benefits of Migration

**1. Better Organization**
- Pemisahan jelas antara backend dan frontend
- Lebih mudah navigasi codebase
- Struktur standar Node.js project

**2. Scalability**
- Mudah menambah modul baru
- Konfigurasi terpusat di `src/config/`
- Lebih baik untuk kolaborasi tim

---

## Slide 8: Benefits (Continued)

**3. Maintainability**
- Struktur file lebih jelas
- Lebih mudah menemukan file
- Lebih baik untuk onboarding developer baru

**4. Deployment Ready**
- Struktur standar untuk platform deployment
- Mudah konfigurasi build processes
- Lebih baik untuk CI/CD pipelines

---

## Slide 9: How to Run the Application

**New Structure (Recommended):**
```bash
npm start
# or
npm run dev
```

**Old Structure (Fallback):**
```bash
npm run start:old
```

---

## Slide 10: Development Workflow

**Backend Development:**
- Work in `src/` folder
- Controllers: `src/controllers/`
- Models: `src/models/`
- Routes: `src/routes/`
- Utils: `src/utils/`

**Frontend Development:**
- Work in `public/` folder
- No changes needed
- Same as before

**Configuration:**
- Database: `src/config/database.js`
- Environment: `.env` file

---

## Slide 11: File Location Mapping

**Backend Files:**
| Old Location | New Location |
|-------------|--------------|
| `controllers/` | `src/controllers/` |
| `models/` | `src/models/` |
| `routes/` | `src/routes/` |
| `utils/` | `src/utils/` |
| `server.js` | `src/server.js` |
| N/A | `src/app.js` |
| N/A | `src/config/database.js` |

---

## Slide 12: Frontend Files (Unchanged)

| Location | Description |
|----------|-------------|
| `public/` | All frontend files |
| `public/css/` | Stylesheets |
| `public/js/` | JavaScript files |
| `public/images/` | Image assets |
| `public/pages/` | HTML pages |
| `public/index.html` | Homepage |

---

## Slide 13: Import Path Changes

**Controllers, Models, Routes:**
- No changes needed!
- All imports use relative paths

```javascript
// Still works the same
const Produk = require('../models/Produk');
```

**Server Files:**
```javascript
// src/app.js
app.use(express.static(path.join(__dirname, '../public')));

// src/server.js
const app = require('./app');
const connectDB = require('./config/database');
```

---

## Slide 14: Testing Steps

**1. Start Server**
```bash
npm start
```

**2. Check Console**
```
✓ MongoDB Connected
✓ Server running on http://localhost:5000
```

**3. Test Frontend**
- Open: http://localhost:5000
- Dashboard should load
- All pages should work
- API calls should work

---

## Slide 15: Testing API Endpoints

**Test Commands:**
```bash
# Test endpoints
curl http://localhost:5000/api/produk
curl http://localhost:5000/api/komponen
curl http://localhost:5000/api/stats/dashboard
```

**Expected Result:**
- All endpoints return data
- No errors in console
- Frontend displays data correctly

---

## Slide 16: Rollback Plan

**If you need to use the old structure:**

```bash
npm run start:old
```

**This will:**
- Use legacy `server.js` in root folder
- Maintain backward compatibility
- Allow time for troubleshooting

---

## Slide 17: Next Steps

**Completed:**
- ✅ Structure migrated
- ✅ Server tested and working
- ✅ Frontend unchanged and working

**To Do:**
- 📝 Update deployment scripts (if any)
- 📝 Update documentation
- 📝 Train team on new structure

---

## Slide 18: Important Notes

**Cleanup:**
- Old folders can be deleted after confirmation
- Legacy `server.js` can be kept for compatibility

**No Changes Needed:**
- All environment variables remain the same
- No database changes needed
- No frontend changes needed

---

## Slide 19: Troubleshooting

**If you encounter issues:**
1. Check console for errors
2. Verify all files are in correct locations
3. Run `npm install` to ensure dependencies
4. Check `.env` file configuration
5. Use `npm run start:old` as fallback

---

## Slide 20: Summary

**Key Achievements:**
- ✅ Backend code organized in `src/` folder
- ✅ Configuration separated in `src/config/`
- ✅ Server split into `app.js` and `server.js`
- ✅ Frontend unchanged in `public/` folder
- ✅ All functionality working
- ✅ Better project structure for scaling

**Result:** More maintainable, scalable, and professional codebase!

---

## Slide 21: Q&A

**Questions?**

**Contact Information:**
- Documentation: README.md
- API Docs: API_DOCUMENTATION.md
- Migration Guide: MIGRATION_GUIDE.md

**Thank You!**
