@echo off
echo ========================================
echo   CostTrack - Git Helper Commands
echo ========================================
echo.
echo Pilih command:
echo.
echo 1. Git Init (First Time)
echo 2. Git Status
echo 3. Git Add All
echo 4. Git Commit
echo 5. Git Push
echo 6. Git Pull
echo 7. View Log
echo 8. Exit
echo.
set /p choice="Pilih (1-8): "

if "%choice%"=="1" goto init
if "%choice%"=="2" goto status
if "%choice%"=="3" goto add
if "%choice%"=="4" goto commit
if "%choice%"=="5" goto push
if "%choice%"=="6" goto pull
if "%choice%"=="7" goto log
if "%choice%"=="8" goto end

:init
echo.
echo Inisialisasi Git Repository...
git init
git add .
set /p message="Commit message: "
git commit -m "%message%"
echo.
set /p remote="GitHub URL (https://github.com/username/repo.git): "
git remote add origin %remote%
git branch -M main
git push -u origin main
echo.
echo Done! Repository sudah di GitHub.
pause
goto end

:status
echo.
git status
echo.
pause
goto end

:add
echo.
echo Adding all files...
git add .
echo Done!
echo.
pause
goto end

:commit
echo.
set /p message="Commit message: "
git commit -m "%message%"
echo.
pause
goto end

:push
echo.
echo Pushing to GitHub...
git push
echo Done!
echo.
pause
goto end

:pull
echo.
echo Pulling from GitHub...
git pull
echo Done!
echo.
pause
goto end

:log
echo.
git log --oneline -10
echo.
pause
goto end

:end
echo.
echo Selesai!
