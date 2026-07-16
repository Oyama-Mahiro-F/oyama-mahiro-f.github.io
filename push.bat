@echo off
chcp 65001 >nul
REM ===================================
REM 博客发布脚本 (Windows)
REM 双击运行，或: push.bat "提交信息"
REM ===================================
cd /d D:\blog

set MSG=%1
if "%MSG%"=="" set MSG=更新博客

echo ====================================
echo   博客发布脚本
echo ====================================
echo.

echo [1/3] 同步图片到 public...
for /d %%i in (posts\*.assets) do (
    if exist "public\posts\%%~nxi" rmdir /s /q "public\posts\%%~nxi"
    xcopy /e /i /y "%%i" "public\posts\%%~nxi" >nul
)
echo ✅ 完成

echo.
echo [2/3] 提交到 Git...
git add -A
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
