export interface Project {
  id: number;
  name: string;
  icon: string;
  githubUrl: string;
  description: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "11408 考研笔记",
    icon: "📝",
    githubUrl: "https://github.com/Oyama-Mahiro-F/11408-notes-web",
    description: "考研数一英一 + 408 计算机统考复习笔记，独立前端展示站点。",
    tags: ["Vue", "笔记", "考研"],
  },
  {
    id: 2,
    name: "InfoSec 综合实验",
    icon: "🛡️",
    githubUrl: "https://github.com/Oyama-Mahiro-F/InfoSec-Comprehensive-Experiment",
    description: "信息安全综合实验 — 攻击行为全方位检测与捕获技术综合实验。",
    tags: ["安全", "攻击检测", "实验"],
  },
  {
    id: 3,
    name: "信息安全工程概论",
    icon: "🔐",
    githubUrl: "https://github.com/Oyama-Mahiro-F/infosec-engineering",
    description: "信息安全工程概论课程资料，含期中作业与区块链防伪溯源开题报告。",
    tags: ["安全", "区块链", "课程"],
  },
  {
    id: 4,
    name: "HE-System",
    icon: "🔒",
    githubUrl: "https://github.com/Oyama-Mahiro-F/HE-System",
    description: "同态加密相关系统实现。",
    tags: ["密码学", "同态加密"],
  },
  {
    id: 5,
    name: "PRE-System",
    icon: "🔑",
    githubUrl: "https://github.com/Oyama-Mahiro-F/PRE-System",
    description: "代理重加密相关系统实现。",
    tags: ["密码学", "代理重加密"],
  },
  {
    id: 6,
    name: "键盘监听风险分析",
    icon: "⌨️",
    githubUrl: "https://github.com/Oyama-Mahiro-F/keylogger-risk-analysis",
    description: "键盘监听风险机理分析与防护验证程序。",
    tags: ["安全", "键盘监听", "分析"],
  },
  {
    id: 7,
    name: "Monitor System",
    icon: "📊",
    githubUrl: "https://github.com/Oyama-Mahiro-F/Monitor-System",
    description: "基于 Docker 构建 Prometheus + Grafana 监控集群 — 信息安全编程课程设计。",
    tags: ["Docker", "Prometheus", "Grafana", "监控"],
  },
  {
    id: 8,
    name: "Crypto Algorithms Toolkit",
    icon: "🧮",
    githubUrl: "https://github.com/Oyama-Mahiro-F/crypto-algorithms-toolkit",
    description: "密码学算法期中项目 — 常用加解密算法工具集。",
    tags: ["密码学", "算法", "工具"],
  },
  {
    id: 9,
    name: "CTF Solver",
    icon: "🚩",
    githubUrl: "https://github.com/Oyama-Mahiro-F/ctfSolver-master",
    description: "CTF 竞赛解题工具集。",
    tags: ["CTF", "安全", "工具"],
  },
];
