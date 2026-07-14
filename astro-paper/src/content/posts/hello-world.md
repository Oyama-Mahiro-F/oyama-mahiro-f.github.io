---
title: "Hello World — 博客搭建记录"
pubDatetime: 2026-07-13
categories: ["技术"]
description: "博客搭建记录 — 从 Hugo 到 Astro Paper 的技术选型与历程"
---

## 缘起

一直想拥有一个属于自己的技术博客，用来记录学习过程中的点滴。经过一番调研，最终选择了 **Hugo + GitHub Pages** 这个方案，随后迁移到了 **Astro Paper**。

## 为什么选 Hugo？

- ⚡ **极快** — Go 语言编写，生成静态页面几乎是瞬间完成
- 🎨 **主题丰富** — 社区有大量高质量免费主题
- 📝 **Markdown 写作** — 用熟悉的 Markdown 写文章，简单高效
- 🔧 **配置灵活** — 通过 toml/yaml 配置，简单直观

## 为什么迁移到 Astro Paper？

- 🚀 **Astro 框架** — 现代化的静态站点生成器，零 JS 输出
- 🎨 **Tailwind CSS** — 原子化 CSS，自定义更方便
- 🔍 **Pagefind 搜索** — 离线搜索，无需后端
- 📐 **Shiki 代码高亮** — 更丰富的代码块功能

## 搭建过程

```bash
# 1. 安装 Node.js
# 2. 启用 pnpm
corepack enable pnpm

# 3. 安装依赖
pnpm install

# 4. 本地预览
pnpm dev
```

## 下一步

接下来计划：

1. 完善博客配置，优化 SEO
2. 整理过往的笔记迁移到博客
3. 持续记录新的学习内容

---

欢迎常来看看！ 🎉
