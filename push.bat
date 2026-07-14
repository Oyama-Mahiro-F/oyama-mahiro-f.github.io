@echo off
chcp 65001 >nul
REM ===================================
REM 博客发布脚本 (Windows)
REM 双击运行，或: push.bat "提交信息"
REM 构建在 GitHub Actions 中完成
REM ===================================
cd /d D:\blog

echo ====================================
echo   博客发布脚本
echo ====================================
echo.
echo [1/2] 提交到 Git...

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
echo [2/2] 推送到 GitHub...

git push
if %errorlevel% neq 0 (
    echo ❌ 推送失败！请检查网络或代理设置
    pause
    exit /b 1
)

echo.
echo ====================================
echo   推送完成！GitHub Actions 将自动构建和部署
echo   https://oyama-mahiro-f.github.io
echo ====================================
echo.

timeout /t 3 >nul
