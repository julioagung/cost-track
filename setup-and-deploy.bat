@echo off
echo ========================================
echo   Setup Git dan Deploy ke Vercel
echo ========================================
echo.

REM Check if git user is configured
git config user.name >nul 2>&1
if errorlevel 1 (
    echo Git belum dikonfigurasi. Silakan isi informasi berikut:
    echo.
    set /p USERNAME="Masukkan nama Anda: "
    set /p EMAIL="Masukkan email Anda: "
    
    git config user.name "!USERNAME!"
    git config user.email "!EMAIL!"
    
    echo.
    echo Git berhasil dikonfigurasi!
    echo.
)

echo Git User: 
git config user.name
echo Git Email: 
git config user.email
echo.

REM Show current status
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
if errorlevel 1 (
    echo.
    echo Tidak ada perubahan untuk di-commit atau commit gagal.
    echo.
    pause
    exit /b 1
)
echo.

REM Push to GitHub
echo [4/5] Pushing to GitHub...
git push origin main
if errorlevel 1 (
    echo.
    echo Push gagal! Pastikan Anda sudah login ke GitHub.
    echo.
    pause
    exit /b 1
)
echo.

echo ========================================
echo   DEPLOYMENT BERHASIL!
echo ========================================
echo.
echo [5/5] Vercel akan otomatis deploy perubahan dalam 1-2 menit.
echo.
echo Langkah selanjutnya:
echo 1. Buka: https://vercel.com/dashboard
echo 2. Pilih project Anda
echo 3. Tunggu hingga status "Ready"
echo 4. Test aplikasi di URL production
echo.
pause
