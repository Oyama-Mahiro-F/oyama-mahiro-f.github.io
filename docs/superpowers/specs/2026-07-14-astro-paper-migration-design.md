# Astro Paper 迁移 — 博客重构设计

## 目标

以 Astro Paper 为基底，将当前 Hugo + PaperMod 博客的功能和视觉完整移植过来。保留 Astro Paper 的架构优势（View Transition、Pagefind、Shiki），套用当前博客的视觉设计。

## 原则

- 尽量少改 Astro Paper 核心结构，集中在 theme.css、config、页面模板
- Hugo 内容原样迁移，frontmatter 适配
- 所有改动文件在 astro-paper 目录内

---

## 一、主题色彩

替换 `src/styles/theme.css`，色值对齐当前 Hugo 博客的 CSS 变量。

### Light mode

| Token | 值 | 说明 |
|-------|-----|------|
| `--background` | `#ffffff` | 白色背景 |
| `--foreground` | `#1a1a2e` | 深灰文字 |
| `--accent` | `#3b5ccc` | 主题蓝 |
| `--accent-foreground` | `#ffffff` | accent 上的文字 |
| `--muted` | `rgba(128,128,128,0.08)` | 浅灰底 |
| `--muted-foreground` | `#5b5b6c` | 次级文字 |
| `--border` | `rgba(0,0,0,0.06)` | 浅边框 |

### Dark mode

| Token | 值 | 说明 |
|-------|-----|------|
| `--background` | `#0d1117` | 深色背景 |
| `--foreground` | `#e8e8ed` | 浅色文字 |
| `--accent` | `#6b8cff` | 蓝紫 accent |
| `--accent-foreground` | `#ffffff` | accent 上的文字 |
| `--muted` | `rgba(255,255,255,0.03)` | 深灰底 |
| `--muted-foreground` | `#a0a0b0` | 次级文字 |
| `--border` | `rgba(255,255,255,0.08)` | 深色边框 |

### 圆角设计令牌
- `--radius-sm`: 6px
- `--radius-md`: 10px
- `--radius-lg`: 16px

### 阴影
- `--shadow-sm`: `0 1px 2px rgba(0,0,0,0.04)` (light) / `0 1px 2px rgba(0,0,0,0.2)` (dark)
- `--shadow-md`: `0 4px 16px rgba(0,0,0,0.06)` (light) / `0 4px 16px rgba(0,0,0,0.3)` (dark)
- `--shadow-lg`: `0 12px 40px rgba(0,0,0,0.08)` (light) / `0 12px 40px rgba(0,0,0,0.4)` (dark)

---

## 二、排版 (typography.css)

- 字体：保持 Astro Paper 的 Google Sans Code（monospace，技术感）
- 链接：accent 色 + 底部渐变下划线动画（hover 时下划线从 0 展开到 100%）
- h3：去掉 italic（当前 Hugo 和中文排版不需要）
- 正文行高 1.75
- h2 底部 border-bottom 分隔线

---

## 三、布局宽度

将 Astro Paper 默认的 `max-w-3xl` (768px) 加宽：

- `max-w-app`：从 `max-w-3xl` (48rem) → `max-w-6xl` (72rem / 1152px)
- 适用于 header、main content、footer 的 `app-layout` 容器

理由：容纳右侧 TOC 栏需要更宽的布局空间，同时提升桌面阅读体验。

---

## 四、右侧 TOC 栏

文章详情页新增右侧 sticky 目录栏。桌面端显示，移动端隐藏。

### 布局
```
[Header: nav bar]

[main]
  [article content (左侧)]  |  [TOC (右侧, sticky)]
   max-w-app 内部 flex       |  200px 宽, sticky top-24

[Footer]
```

### 行为
- 从文章 h2-h4 标题自动生成目录（跳过 h1 文章主标题）
- `position: sticky`，`top: 6rem`，跟随滚动
- 当前阅读标题高亮（IntersectionObserver 监听标题元素，active 类加 accent 色 + 左边框）
- 点击锚点平滑滚动
- 超过一定层级偏移缩进（h3 比 h2 多 1em，h4 比 h3 多 1em）
- 移动端 (`<md`): 隐藏
- 如果文章无标题（短内容），TOC 不渲染

### 实现
- 新建 `src/components/Toc.astro`：接收 `headings` 数组，渲染粘性导航
- 在 PostLayout 或 post 页面中引入，从 Markdown `render()` 获取 `headings`
- 高亮逻辑通过内联 JS 的 IntersectionObserver 实现

---

## 五、首页

### Hero 区域

- 渐变背景 `linear-gradient(135deg, #3b5ccc, #6b8cff, #a78bfa)`
- 标题 "你好" 白色加粗居中 (text-4xl/sm:text-5xl font-bold)
- 描述文字白色半透明
- 呼吸灯动画 (brandPulse keyframe, 4s 循环)
- RSS 图标移到 hero 右下角，白色半透明

### 文章卡片

- 替换 Astro Paper 默认的简单列表样式
- 圆角卡片：`border-radius: 10px`，`border: 1px solid --border`
- hover 效果：translateY(-2px) + 阴影 + border 变 accent 色
- 交错淡入动画 (fadeInUp)，每张卡片递增 delay

---

## 六、导航栏 (Header.astro)

### 导航链接（桌面端）

```
[站点标题]          Posts  分类  笔记 ↗  关于  [🔍] [🌙]
```

- **笔记**：href=`https://oyama-mahiro-f.github.io/11408-notes-web/`，`target="_blank"`，`rel="noopener noreferrer"`，加外链图标
- **Tags → 分类**：路由从 `/tags` 改为 `/categories`

### 移动端

- 汉堡菜单弹出网格中包含同样的链接
- 笔记链接同样带外链标识

---

## 七、分类系统 (替代 Tags)

全局替换 tags 为 categories：

| 原 Astro Paper | 改为 |
|----------------|------|
| `/tags` | `/categories` |
| `/tags/[slug]` | `/categories/[slug]` |
| `tags` frontmatter | `categories` frontmatter |
| "Tags" / "标签" 文案 | "分类" / "Categories" |
| TagCard 组件 | CategoryCard 组件（结构不变） |
| `getUniqueTags` util | `getUniqueCategories` util |

---

## 八、KaTeX 数学公式

- 安装 `remark-math` + `rehype-katex`
- 在 `astro.config.ts` 的 markdown 配置中注册
- 在 `Layout.astro` head 中引入 KaTeX CSS（CDN 或打包）
- 支持 `$...$` 行内公式和 `$$...$$` 块级公式

---

## 九、代码高亮 (自定义 Shiki 主题)

- 创建两个 Shiki 主题 JSON 文件
- Light 主题色值对齐 Hugo 当前 Chroma Typora GitHub light
- Dark 主题色值对齐 Hugo 当前 Chroma Typora GitHub dark
- 在 `astro.config.ts` 中将 Shiki 主题从 `min-light`/`night-owl` 替换为自定义主题
- 阴影、圆角、边框通过 typography.css 控制

### Light 主题色值参考

| Token | 颜色 |
|-------|------|
| 背景 | `#f6f8fa` |
| 文字 | `#24292f` |
| 注释 | `#6a737d` italic |
| 关键字 | `#d73a49` |
| 字符串 | `#032f62` |
| 数字 | `#005cc5` |
| 函数/类 | `#6f42c1` |
| 行号 | `#959da5` |

### Dark 主题色值参考

| Token | 颜色 |
|-------|------|
| 背景 | `#0d1117` |
| 文字 | `#e6edf3` |
| 注释 | `#8b949e` italic |
| 关键字 | `#ff7b72` |
| 字符串 | `#a5d6ff` |
| 数字 | `#79c0ff` |
| 函数/类 | `#d2a8ff` |
| 行号 | `#6e7681` |

---

## 十、i18n 中文化

- 新增 `src/i18n/zh-CN.ts`
- 翻译项覆盖：nav 标签 (Posts→文章、Categories→分类、About→关于)、按钮文案、搜索 UI、页面标题、辅助标签
- 配置 `site.lang: "zh-CN"`，`site.timezone: "Asia/Shanghai"`
- 日期用 `Intl.DateTimeFormat` 自动按中文格式化

---

## 十一、内容迁移

### Hello World 文章
- `content/posts/hello-world.md` → `src/content/posts/hello-world.md`
- frontmatter 保持：`title`、`pubDatetime: 2026-07-13`、`categories: ["技术"]`
- body 不变

### 关于页面
- `content/about.md` → `src/pages/about.astro`
- 保留标题 "关于"、个人介绍、GitHub 链接

---

## 十二、站点配置 (astro-paper.config.ts)

```ts
export default defineAstroPaperConfig({
  site: {
    url: "https://oyama-mahiro-f.github.io",
    title: "Oyama Mahiro's Blog",
    description: "技术博客与项目经验分享",
    author: "Oyama Mahiro",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
  },
  features: {
    lightAndDarkMode: true,
    showArchives: true,
    showBackButton: true,
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/Oyama-Mahiro-F" },
  ],
})
```

---

## 改动文件清单

| 文件 | 操作 | 说明 |
|------|------|------|
| `src/styles/theme.css` | 重写 | 新配色变量 |
| `src/styles/typography.css` | 修改 | 链接动画、h3 取消 italic、行高 |
| `src/styles/global.css` | 微调 | max-w-app 加宽、圆角/阴影令牌、卡片动画 |
| `src/pages/index.astro` | 修改 | 渐变 hero、卡片样式 |
| `src/components/Header.astro` | 修改 | 导航链接 + 笔记外链 |
| `src/components/Card.astro` | 修改 | 卡片 hover 样式 |
| `src/components/Toc.astro` | 新建 | 右侧 sticky 目录栏 + IntersectionObserver |
| `src/components/Footer.astro` | 保持 | — |
| `src/layouts/Layout.astro` | 修改 | 引入 KaTeX CSS |
| `src/layouts/PostLayout.astro` | 保持 | — |
| `src/pages/posts/[...slug]/index.astro` | 修改 | 引入 Toc 组件、flex 布局 |
| `src/pages/tags/*` | 改名+改内容 | → categories |
| `src/components/Tag.astro` | 改名 | → CategoryCard.astro |
| `src/i18n/en.ts` | 可保留 | |
| `src/i18n/zh-CN.ts` | 新建 | 中文翻译 |
| `astro.config.ts` | 修改 | remark-math、rehype-katex、Shiki 主题 |
| `astro-paper.config.ts` | 重写 | 站点配置 |
| `src/content/posts/hello-world.md` | 新建 | 迁移 |
| `src/pages/about.astro` | 修改 | 迁移 |
| `public/default-og.jpg` | 新建 | 默认 OG 图片（可选） |

## 不保留的 Hugo 功能

- 左侧栏布局（改用 Astro Paper 顶部导航）
- Fuse.js 搜索（改用 Pagefind）
- 旧的笔记栏三栏布局（已废弃，笔记用外链）
- Hugo Chroma 代码高亮（改用 Shiki）

---

## 保留的 Astro Paper 原生功能

以下功能不做修改，原样保留：
- Pagefind 搜索（`npm:pagefind`，postbuild 生成索引）
- 阅读进度条
- 标题锚点链接
- 代码复制按钮
- 图片灯箱（点击放大）
- rehype-callouts（Obsidian 风格 callout/admonition）
- View Transition 动画
- RSS Feed
- Sitemap
- 404 页面
- 移动端汉堡菜单
- 返回按钮
- 文章前后导航
- 响应式表格组件
- 无障碍（skip-to-content、aria 属性）

---

## 验证方式

1. `pnpm dev` 本地启动，检查所有页面
2. 首页 hero 渐变 + 动画正常
3. 导航栏 5 个链接、外链新窗口
4. 分类页正常工作
5. KaTeX 公式渲染（在 hello-world.md 中加入测试公式）
6. 代码块颜色正确（light/dark）
7. 搜索（`pnpm build` 后 `pnpm postbuild` 生成 Pagefind 索引）
