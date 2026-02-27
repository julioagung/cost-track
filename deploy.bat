@echo off
echo ========================================
echo   Deploy ke Vercel via GitHub
echo ========================================
echo.

REM Check git status
echo [1/5] Checking git status...
git status
echo.

REM Add changes
echo [2/5] Adding changes to git...
git add public/js/config.js public/js/kurs.js src/controllers/kursController.js src/middleware/validation.js src/routes/kursRoutes.js
echo.

REM Commit changes
echo [3/5] Committing changes...
git commit -m "fix: perbaiki validasi kurs dan error handling"
echo.

REM Push to GitHub
echo [4/5] Pushing to GitHub...
git push origin main
echo.

echo [5/5] Done! Vercel akan otomatis deploy perubahan.
echo.
echo Cek status deployment di: https://vercel.com/dashboard
echo.
pause
