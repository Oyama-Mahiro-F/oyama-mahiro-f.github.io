// siteConfig.ts

export const siteConfig = {
  // 1. Site title & author info
  title: "义务教育漏网之鱼",
  faviconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%236366f1'/%3E%3Ctext x='16' y='22' text-anchor='middle' fill='white' font-size='18' font-family='sans-serif'%3EM%3C/text%3E%3C/svg%3E",
  authorName: "义务教育漏网之鱼",
  bio: "BUPT网络安全本科生。记录编程学习、项目经验和思考。",

  navTitle: "义务教育漏网之鱼",
  navSuffix: "",
  navAfter: "",

  // 2. Avatar
  avatarUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%236366f1'/%3E%3Ctext x='50' y='65' text-anchor='middle' fill='white' font-size='40' font-family='sans-serif'%3EOM%3C/text%3E%3C/svg%3E",

  // 3. Background
  useGradient: true,
  themeColors: ["#a18cd1", "#fbc2eb", "#a1c4fd", "#c2e9fb"],
  bgImages: [],

  // 4. Default post cover
  defaultPostCover: "",

  // 5. Homepage
  photoWallImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  cloudMusicIds: [],

  social: {
    github: "https://github.com/Oyama-Mahiro-F",
    gitee: "",
    google: "",
    email: "",
    qq: "",
    wechat: "",
  },

  counts: { photos: 0 },
  chatterTitle: "留言板",
  chatterDescription: "欢迎留言交流",

  danmakuList: ["欢迎光临!", "Hello World!", "今天写代码了吗?"],
  gitalkConfig: {
    clientID: "",
    clientSecret: "",
    repo: "",
    owner: "",
    admin: [""],
  },

  buildDate: "2026-07-13T00:00:00",
  footerBadges: [
    { name: "Next.js 16", color: "text-sky-500", svg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>' },
    { name: "React 19", color: "text-cyan-400", svg: '<path d="M12 22.6l-9.8-5.6V5.6L12 0l9.8 5.6v11.4l-9.8 5.6zm-8.2-6.5l8.2 4.7 8.2-4.7V7.5L12 2.8 3.8 7.5v8.6z"/>' },
    { name: "Tailwind 4", color: "text-teal-400", svg: '<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"/>' },
  ],
  icpConfig: { name: "", link: "" },
  geminiConfig: {
    modelId: "gemini-2.5-flash-lite",
    systemPrompt: "You are a friendly tech blog assistant.",
    maxOutputTokens: 150,
    temperature: 0.85,
  },
  friendLinkApplyFormat: "Name: Oyama Mahiro's Blog\nDescription: Tech blog\nURL: https://oyama-mahiro-f.github.io\nAvatar: ",
  enableLevelSystem: false,
};
