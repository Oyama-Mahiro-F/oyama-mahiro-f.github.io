#!/bin/bash
# ===================================
# 博客发布脚本
# 用法: ./push.sh "提交信息"
# ===================================
set -e
cd /d/blog

msg="${1:-更新博客}"

echo "📝 提交并推送..."
git add -A
git commit -m "$msg" || { echo "⚠️ 没有需要提交的更改"; exit 0; }
git push

echo ""
echo "🎉 推送完成！GitHub Actions 将自动部署"
echo "   https://oyama-mahiro-f.github.io"
