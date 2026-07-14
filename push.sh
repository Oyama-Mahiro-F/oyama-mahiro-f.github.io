#!/bin/bash
# 博客发布脚本
cd /d/blog

echo "📝 提交并推送..."
git add -A

msg="${1:-更新内容}"
git commit -m "$msg" || { echo "⚠️ 没有需要提交的更改"; exit 0; }
git push

echo ""
echo "🎉 完成！GitHub Actions 将自动部署"
echo "   https://oyama-mahiro-f.github.io"
