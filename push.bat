@echo off
chcp 65001 >nul
REM ===================================
REM 博客发布脚本 (Windows)
REM 双击运行，或: push.bat "提交信息"
REM ===================================
cd /d D:\blog

set HUGO=C:\Users\61468\AppData\Local\Microsoft\WinGet\Packages\Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe\hugo.exe

echo ====================================
echo   博客发布脚本
echo ====================================
echo.
echo [1/3] 构建 Hugo...

rmdir /s /q public 2>nul
del .hugo_build.lock 2>nul
"%HUGO%" --minify
if %errorlevel% neq 0 (
    echo ❌ 构建失败！
    pause
    exit /b 1
)
echo ✅ 构建完成

echo.
echo [2/3] 提交到 Git...

git add -A

set MSG=%1
if "%MSG%"=="" set MSG=更新内容

git commit -m "%MSG%"
if %errorlevel% neq 0 (
    echo ⚠️ 没有需要提交的更改
    pause
    exit /b 0
)

echo.
echo [3/3] 推送到 GitHub...

git push
if %errorlevel% neq 0 (
    echo ❌ 推送失败！请检查网络或代理设置
    pause
    exit /b 1
)

echo.
echo ====================================
echo   🎉 发布完成！
echo   https://oyama-mahiro-f.github.io
echo ====================================
echo.

timeout /t 3 >nul
