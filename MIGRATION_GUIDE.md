# Migration Guide - New Structure

## What Changed?

Project telah direstrukturisasi menggunakan folder `src/` untuk backend code yang lebih terorganisir.

## Old Structure vs New Structure

### Before (Old)
```
costtrack-new/
├── controllers/
├── models/
├── routes/
├── utils/
├── public/
└── server.js
```

### After (New)
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
└── server.js (legacy, kept for compatibility)
```

## Changes Made

### 1. Backend Code Moved to `src/`
All backend code now lives in the `src/` folder:
- `controllers/` → `src/controllers/`
- `models/` → `src/models/`
- `routes/` → `src/routes/`
- `utils/` → `src/utils/`

### 2. New Configuration Folder
- Created `src/config/database.js` for MongoDB configuration
- Separated database logic from server initialization

### 3. Split Server Files
- `src/app.js` - Express app configuration
- `src/server.js` - Server initialization
- Better separation of concerns

### 4. Updated package.json
```json
{
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "node src/server.js",
    "start:old": "node server.js"
  }
}
```

### 5. Frontend Unchanged
- `public/` folder remains the same
- No changes to HTML, CSS, or JS files
- All frontend paths still work

## Benefits

### 1. Better Organization
- Clear separation between backend and frontend
- Easier to navigate codebase
- Standard Node.js project structure

### 2. Scalability
- Easy to add new modules
- Configuration centralized in `src/config/`
- Better for team collaboration

### 3. Maintainability
- Clearer file structure
- Easier to find files
- Better for onboarding new developers

### 4. Deployment Ready
- Standard structure for deployment platforms
- Easy to configure build processes
- Better for CI/CD pipelines

## How to Use

### Running the Application

#### New Structure (Recommended)
```bash
npm start
# or
npm run dev
```

#### Old Structure (Fallback)
```bash
npm run start:old
```

### Development Workflow

1. **Backend Development**
   - Work in `src/` folder
   - Controllers: `src/controllers/`
   - Models: `src/models/`
   - Routes: `src/routes/`
   - Utils: `src/utils/`

2. **Frontend Development**
   - Work in `public/` folder
   - No changes needed
   - Same as before

3. **Configuration**
   - Database: `src/config/database.js`
   - Environment: `.env` file

## File Locations

### Backend Files
| Old Location | New Location |
|-------------|--------------|
| `controllers/` | `src/controllers/` |
| `models/` | `src/models/` |
| `routes/` | `src/routes/` |
| `utils/` | `src/utils/` |
| `server.js` | `src/server.js` |
| N/A | `src/app.js` |
| N/A | `src/config/database.js` |

### Frontend Files (Unchanged)
| Location | Description |
|----------|-------------|
| `public/` | All frontend files |
| `public/css/` | Stylesheets |
| `public/js/` | JavaScript files |
| `public/images/` | Image assets |
| `public/pages/` | HTML pages |
| `public/index.html` | Homepage |

## Import Path Changes

### Controllers, Models, Routes
No changes needed! All imports use relative paths:
```javascript
// Still works the same
const Produk = require('../models/Produk');
```

### Server Files
```javascript
// src/app.js
app.use(express.static(path.join(__dirname, '../public')));

// src/server.js
const app = require('./app');
const connectDB = require('./config/database');
```

## Testing

### 1. Start Server
```bash
npm start
```

### 2. Check Console
Should see:
```
✓ MongoDB Connected
✓ Server running on http://localhost:5000
```

### 3. Test Frontend
Open browser: http://localhost:5000
- Dashboard should load
- All pages should work
- API calls should work

### 4. Test API
```bash
# Test endpoints
curl http://localhost:5000/api/produk
curl http://localhost:5000/api/komponen
curl http://localhost:5000/api/stats/dashboard
```

## Rollback (If Needed)

If you need to use the old structure:

```bash
npm run start:old
```

This will use the legacy `server.js` in the root folder.

## Next Steps

1. ✅ Structure migrated
2. ✅ Server tested and working
3. ✅ Frontend unchanged and working
4. 📝 Update deployment scripts (if any)
5. 📝 Update documentation
6. 📝 Train team on new structure

## Notes

- Old `controllers/`, `models/`, `routes/`, `utils/` folders can be deleted after confirming everything works
- Legacy `server.js` in root can be kept for backward compatibility
- All environment variables remain the same
- No database changes needed
- No frontend changes needed

## Support

If you encounter any issues:
1. Check console for errors
2. Verify all files are in correct locations
3. Run `npm install` to ensure dependencies
4. Check `.env` file configuration
5. Use `npm run start:old` as fallback

## Summary

✅ Backend code organized in `src/` folder
✅ Configuration separated in `src/config/`
✅ Server split into `app.js` and `server.js`
✅ Frontend unchanged in `public/` folder
✅ All functionality working
✅ Better project structure for scaling
