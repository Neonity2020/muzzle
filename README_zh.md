*阅读其它语言版本: [English](README.md) | [简体中文](README_zh.md)*

# Muzzle - 现代 Astro 响应式着陆页

Muzzle 是一个基于 **Astro** 构建的高性能、设计感极强的着陆页（Landing Page）。本项目旨在以现代前卫的美学设计，展示企业级自动化及 "Open Claw"（数据抓取）等服务。

## 🚀 技术栈

- **Astro**: 极致性能的纯静态站点生成器。
- **纯 CSS (Vanilla CSS)**: 无需臃肿的样式框架，完全依赖 CSS 变量与原生布局（`flex` + `grid`）实现具有极强可读性的组件级代码。
- **原生 IntersectionObserver**: 使用纯原生 JS 实现丝滑的元素滚动显现动画，完全告别重型外部动画库。

## ✨ 核心亮点

- **"岛屿式 (Island)" 布局理念**: 具有独立色块和圆角的悬浮内容区，配合深邃的阴影和高对比度色彩边界，打造出富有层次感的高级视觉体验。
- **极致响应式优化**: 针对不同屏幕尺寸进行深度打磨。对手机等窄屏设备（如 iPhone 13，390px 宽）进行了激进的内边距压缩，保证小屏下同样能获得完美的阅读和交互体验。
- **国际化 (i18n) 支持**: 完整的中英文双语支持，包括：
  - 基于 TypeScript 的类型安全翻译系统
  - 导航栏语言切换组件
  - SEO 友好的路由（中文 `/`，英文 `/en/`）
  - 根据当前语言动态设置 `html lang` 属性
- **多维度原生组件**:
  - 行动呼吁 (CTA) 与实机展示的首屏 (Hero)
  - 网格化核心能力展示看板 (Features)
  - 沉浸式且支持独立内容切换的工作流面板 (How It Works)
  - 内置真实用户头像的评价墙 (Testimonials)
  - 带缩放动效的大版面定价层级 (Pricing)
  - 常见问题折叠窗 (FAQ)

## 🛠️ 快速开始

### 环境依赖
- Node.js (推荐 v18 及以上)
- npm 或 pnpm

### 安装开发

1. 克隆代码库并进入目录：
   ```bash
   git clone https://github.com/Neonity2020/muzzle.git
   cd muzzle
   ```

2. 安装相关依赖：
   ```bash
   npm install
   ```

3. 启动本地开发服务器并实时预览：
   ```bash
   npm run dev
   # 局域网预览（例如想通过在同一 Wi-Fi 下的手机上查看真实显示效果）：
   # npm run dev -- --host
   ```

4. 构建用于生产环境的项目：
   ```bash
   npm run build
   ```

## 🌐 国际化 (i18n)

本项目支持中英文双语，通过自定义的 i18n 系统实现：

### 翻译文件结构
```
src/i18n/
├── types.ts    # TypeScript 类型定义
├── zh.ts       # 中文翻译
├── en.ts       # 英文翻译
└── index.ts    # 翻译工具函数
```

### 添加/修改翻译

1. 编辑 `src/i18n/zh.ts` 或 `src/i18n/en.ts` 中的翻译内容
2. 如需新增翻译键，更新 `src/i18n/types.ts`
3. 组件会根据 URL 路径自动使用对应语言的翻译

### 语言路由
- 中文（默认）：`/` 或 `http://localhost:3000/`
- 英文：`/en/` 或 `http://localhost:3000/en/`

### 添加新语言

1. 创建 `src/i18n/[语言代码].ts` 翻译文件
2. 在类型定义中添加新语言
3. 创建 `src/pages/[语言代码]/index.astro` 路由
4. 在 LanguageSwitcher 组件中添加新语言选项

## 🎨 附带 Claude Code 专属技能文档
本项目内置了一份面向 AI Agent 开发者的专属技能文档（路径：`.agent/skills/build_landing_page/SKILL.md`）。该文档浓缩了本项目涵盖的核心设计规范、CSS 变量配置哲学与组件生命周期的构建逻辑。
您可以将该文档作为 Agent 运行时的上下文（Context），让 Claude Code 等 AI 直接读取。依靠这份“秘籍”，AI 能稳健、可复现地帮你在其它任何项目中生成同等极高质量的网页代码！
