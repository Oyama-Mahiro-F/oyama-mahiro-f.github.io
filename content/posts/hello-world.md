---
title: "Hello World — 博客搭建记录"
date: "2026-07-13"
draft: false
categories: ["技术"]
---

## 缘起

一直想拥有一个属于自己的技术博客，用来记录学习过程中的点滴。经过一番调研，最终选择了 **Hugo + GitHub Pages** 这个方案。

## 为什么选 Hugo？

- ⚡ **极快** — Go 语言编写，生成静态页面几乎是瞬间完成
- 🎨 **主题丰富** — 社区有大量高质量免费主题
- 📝 **Markdown 写作** — 用熟悉的 Markdown 写文章，简单高效
- 🔧 **配置灵活** — 通过 toml/yaml 配置，简单直观

## 搭建过程

```bash
# 1. 安装 Hugo
winget install Hugo.Hugo.Extended

# 2. 创建站点
hugo new site blog

# 3. 安装主题
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod

# 4. 本地预览
hugo server -D
```

## 下一步

接下来计划：

1. 完善博客配置，优化 SEO
2. 整理过往的笔记迁移到博客
3. 持续记录新的学习内容

---

欢迎常来看看！ 🎉
