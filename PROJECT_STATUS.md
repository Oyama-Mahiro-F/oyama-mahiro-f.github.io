# 博客项目状态

## 线上地址
- 博客：https://oyama-mahiro-f.github.io
- 笔记站：https://oyama-mahiro-f.github.io/11408-notes-web/（外部独立站）

## 技术栈
- Hugo v0.164 + PaperMod 主题
- 部署：GitHub Actions → GitHub Pages
- 自定义 baseof.html（左侧栏布局）
- 自定义 CSS（全局美化 + 代码高亮）

## 当前页面结构
- 首页：文章列表 + 欢迎信息
- 归档：按年月排列
- 分类：按 categories 分类（类似 Stack Pub）
- 关于：个人介绍
- 搜索：已配置但需验证

## 文章
只有一篇：Hello World — 博客搭建记录（分类：技术）

## 自定义文件清单

| 文件 | 用途 |
|------|------|
| `layouts/baseof.html` | 覆盖主题，左侧栏深色布局 |
| `layouts/_partials/extend_head.html` | KaTeX 数学公式加载 |
| `layouts/_partials/notes_sidebar.html` | 笔记文件树（已废弃，可删） |
| `layouts/_partials/notes_sidebar.html` | 同上 |
| `layouts/notes/single.html` | 笔记单页模板（已废弃） |
| `assets/css/extended/notes-layout.css` | 全局美化 + 代码高亮 + 左侧栏 CSS |
| `hugo.toml` | 站点配置 |
| `push.bat` / `publish.sh` | 发布脚本 |
| `content/search.md` | 搜索页（已配置） |

## 配色方案
- 侧边栏：深色 #1e2433，文字白色
- 主内容：白色背景
- 主题色：#3b5ccc（蓝）
- 代码块：Typora GitHub 主题（白天浅色 / 黑夜深色）

## 待清理
- `layouts/_partials/notes_sidebar.html` — 可删除
- `content/search.md` — 保留（搜索页）
- `layouts/notes/` 目录 — 可删除

## 已废弃功能
- ~~笔记栏目三栏布局~~ → 移到外部站
- ~~标签系统~~ → 改为分类
- ~~顶部导航栏~~ → 改为左侧栏
- ~~考研笔记标签~~ → 已删除

## 模板参考
- D:\blog\astro-paper — Astro Paper 模板（可参考其设计）
- D:\blog\blog.html — Stack Pub 网页快照（可参考其样式）
- D:\blog\blog_files — Stack Pub 的 CSS/JS/图片

## 日常操作
```bash
cd /d/blog
hugo server -D          # 本地预览
./push.bat "提交信息"    # 发布到 GitHub
```
