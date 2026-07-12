#!/bin/bash
# ===================================
# 博客发布脚本
# 用法: ./publish.sh [提交信息]
# ===================================
set -e

cd "$(dirname "$0")"

HUGO="/c/Users/61468/AppData/Local/Microsoft/WinGet/Packages/Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe/hugo.exe"

echo "📦 构建中..."
rm -rf public .hugo_build.lock
"$HUGO" --minify
echo "✅ 构建完成"

echo ""
echo "📝 提交更改..."
git add -A

if [ -n "$1" ]; then
    git commit -m "$1"
else
    # 默认从暂存区生成提交信息
    added=$(git diff --cached --name-only --diff-filter=A | wc -l)
    modified=$(git diff --cached --name-only --diff-filter=M | wc -l)
    deleted=$(git diff --cached --name-only --diff-filter=D | wc -l)
    msg="更新 (新增${added}/修改${modified}/删除${deleted})"
    git commit -m "$msg"
fi

echo ""
echo "🚀 推送到 GitHub..."
git push

echo ""
echo "🎉 发布完成！稍后访问 https://oyama-mahiro-f.github.io"
