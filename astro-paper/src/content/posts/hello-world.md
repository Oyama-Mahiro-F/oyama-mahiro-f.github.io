---
title: "Hello World — 博客搭建记录"
pubDatetime: 2026-07-13
categories: ["技术"]
description: "博客技术栈、搭建命令与部署说明"
---

## 技术栈

| 组件 | 选型 |
|------|------|
| 框架 | [Astro](https://astro.build/) v7 |
| 模板 | [AstroPaper](https://github.com/satnaing/astro-paper) v7 |
| 样式 | [Tailwind CSS](https://tailwindcss.com/) v4 |
| 字体 | Roboto Variable（本地） + 系统中文回退 |
| 搜索 | [Pagefind](https://pagefind.app/) |
| 代码高亮 | [Shiki](https://shiki.style/)（自定义 Typora GitHub 主题） |
| 数学公式 | [KaTeX](https://katex.org/) |
| 部署 | GitHub Actions → GitHub Pages |

## 本地开发

```bash
# 安装依赖
cd astro-paper
pnpm install

# 启动开发服务器
pnpm dev
# → http://localhost:4321

# 构建
pnpm build
```

## 发布

```bash
# 推送即可，GitHub Actions 自动构建部署
./push.bat "提交信息"
```

## 目录结构

```
astro-paper/
├── src/
│   ├── content/posts/       # 文章 (.md)
│   ├── content/pages/       # 固定页面 (about.md)
│   ├── pages/               # 路由页面
│   ├── components/          # 组件
│   ├── styles/              # 样式 (theme.css, typography.css)
│   └── i18n/lang/           # 翻译 (zh-CN.ts)
├── public/fonts/            # 本地字体
└── astro-paper.config.ts    # 站点配置
```

## 文章格式

```markdown
---
title: "文章标题"
pubDatetime: 2026-07-15
categories: ["技术", "前端"]
description: "文章摘要"
---

正文内容...
```

支持 Markdown 语法 + KaTeX 公式（`$...$` / `$$...$$`）+ 代码语法高亮。

## 致谢

- [AstroPaper](https://github.com/satnaing/astro-paper) — 优秀的博客模板
- [Hugo PaperMod](https://github.com/adityatelange/hugo-PaperMod) — 此前使用的 Hugo 主题
