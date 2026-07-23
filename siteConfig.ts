// ============================================================
//  siteConfig.ts — 全站控制中心，改这里就能改整个博客
// ============================================================

export const siteConfig = {

  // ========== 首页个人信息卡片 ==========
  title: "义务教育漏网之鱼",            // 浏览器标题栏
  authorName: "义务教育漏网之鱼",        // 首页大名字
  bio: "BUPT信息安全本科生。记录编程学习、项目经验和思考。",  // 首页签名/简介
  avatarUrl: "/20260715062710_196_4.jpg", // 首页头像（图片放 public/ 目录）

  // ========== 导航栏 ==========
  navTitle: "义务教育漏网之鱼",  // 导航栏左侧文字（为空则用 authorName）
  navSuffix: "",                // 导航栏中间分隔符（空=不显示）
  navAfter: "",                 // 导航栏右侧文字

  // ========== 浏览器标签页图标 ==========
  faviconUrl: "/favicon.jpg",

  // ========== 背景设置 ==========
  useGradient: true,                                          // true=渐变 / false=图片背景
  themeColors: ["#a18cd1", "#fbc2eb", "#a1c4fd", "#c2e9fb"], // 渐变颜色
  bgImages: [],                                               // 图片背景URL数组（useGradient=false 时生效）

  // ========== 文章默认封面（空=无封面） ==========
  defaultPostCover: "",

  // ========== 首页其他区域 ==========
  photoWallImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", // 照片墙封面
  cloudMusicIds: [], // 网易云音乐歌单ID（空数组=不显示音乐播放器）

  // ========== 社交链接（首页个人信息卡片底部图标） ==========
  social: {
    github: "https://github.com/Oyama-Mahiro-F",
    gitee: "",
    google: "",
    email: "",
    qq: "",
    wechat: "",
  },

  // ========== 统计面板（首页底部） ==========
  counts: { photos: 0 },

  // ========== 留言板 ==========
  chatterTitle: "留言板",
  chatterDescription: "欢迎留言交流",

  // ========== 弹幕 ==========
  danmakuList: ["欢迎光临!", "Hello World!", "今天写代码了吗?"],

  // ========== Gitalk 评论（需要 GitHub OAuth，目前未启用） ==========
  gitalkConfig: {
    clientID: "",
    clientSecret: "",
    repo: "",
    owner: "",
    admin: [""],
  },

  // ========== 建站日期 ==========
  buildDate: "2026-07-13T00:00:00",

  // ========== 页脚技术标签 ==========
  footerBadges: [
    { name: "Next.js 16", color: "text-sky-500", svg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>' },
    { name: "React 19", color: "text-cyan-400", svg: '<path d="M12 22.6l-9.8-5.6V5.6L12 0l9.8 5.6v11.4l-9.8 5.6zm-8.2-6.5l8.2 4.7 8.2-4.7V7.5L12 2.8 3.8 7.5v8.6z"/>' },
    { name: "Tailwind 4", color: "text-teal-400", svg: '<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"/>' },
  ],

  // ========== ICP 备案（空=不显示） ==========
  icpConfig: { name: "", link: "" },

  // ========== AI 聊天（需要 Gemini API Key） ==========
  geminiConfig: {
    modelId: "gemini-2.5-flash-lite",
    systemPrompt: "You are a friendly tech blog assistant.",
    maxOutputTokens: 150,
    temperature: 0.85,
  },

  // ========== 友链申请格式 ==========
  friendLinkApplyFormat: "Name: Oyama Mahiro's Blog\nDescription: Tech blog\nURL: https://oyama-mahiro-f.github.io\nAvatar: ",

  // ========== 用户等级系统 ==========
  enableLevelSystem: false,
};
