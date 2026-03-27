import type { Translations } from './types';

const zh: Translations = {
  navbar: {
    logo: 'Muzzle',
    features: '功能',
    howItWorks: '工作原理',
    pricing: '定价',
    faq: '常见问题',
    login: '登录',
    getStarted: '免费开始',
  },

  hero: {
    title: '您专属的\n高度定制化 Open Claw',
    description: 'Muzzle 提供企业级的 Open Claw 服务托管与深度定制。无需从零搭建，开箱即用的强大抓取与自动化能力，完美融入您的业务流。',
    cta: '获取定制方案',
    demo: '查看系统演示',
    socialProof: '已有 <strong>2,000+</strong> 支团队信任我们',
    partnersLabel: '获得顶级团队的信任',
    dashboard: {
      deploySuccess: '部署成功',
      deployVersion: '版本 2.4.1 已上线',
      justNow: '刚刚',
      newUserSurge: '新用户激增',
      newUsersToday: '今日新增 +347 用户',
      sidebar: {
        dashboard: '仪表板',
        projects: '项目',
        analytics: '分析',
        team: '团队',
        settings: '设置',
      },
      stats: {
        activeUsers: '活跃用户',
        monthlyRevenue: '月收入',
        conversionRate: '转化率',
      },
      chartLabel: '过去 12 个月收入趋势',
    },
  },

  features: {
    eyebrow: '核心能力',
    title: '释放 Open Claw 的\n真正潜力',
    description: '无需面对服务器维护与复杂的代理管理，Muzzle 将抓取、计算与自动化服务融为一体，让您的系统如虎添翼。',
    learnMore: '了解更多',
    banner: {
      eyebrow: '无缝集成',
      title: '与您现有的\n工作流完美融合',
      description: '连接 50+ 款工具，包括 Slack、GitHub、Figma、Notion 等，打造真正属于您的工作中枢。',
      cta: '查看所有集成',
    },
    items: [
      {
        tag: 'AI 协作',
        title: 'AI 智能协作',
        description: '借助共享空间让团队更好地协作。指派任务、在上下文中留下反馈，并将所有更新集中在一个地方——告别分散的聊天和无尽的邮件链。',
      },
      {
        tag: '智能提醒',
        title: '开箱即用',
        description: '免去繁杂部署与繁琐配置。Muzzle 为您提供一键可用、性能极致优化的 Open Claw 专属云端环境。',
      },
      {
        tag: '团队优先',
        title: '深度定制规则',
        description: '无论是复杂的动态页面、强反爬机制，还是多维自动化流程。我们的架构专家都可以为您编写深度定制的专属 Claw 规则与插件。',
      },
      {
        tag: '企业安全',
        title: '高可用集群',
        description: '底层依托分布式架构，支持无限横向扩展。内置智能代理池、失败重试机制，提供企业级的超高并发抓取保障与数据稳定性。SOC 2 Type II 认证，完全符合 GDPR 规范，支持 SSO 单点登录和高级权限控制，让您安心专注于业务。',
      },
    ],
    integrations: [
      { name: 'Slack' },
      { name: 'GitHub' },
      { name: 'Figma' },
      { name: 'Notion' },
      { name: 'Linear' },
      { name: 'Vercel' },
      { name: 'Stripe' },
      { name: 'Zapier' },
      { name: 'Loom' },
    ],
  },

  howItWorks: {
    eyebrow: '工作流程',
    title: '三步开启您的\n专属自动化',
    description: '从需求提出到数据交付，体验无与伦比的流畅接入过程。',
    step: '步骤',
    steps: [
      {
        num: '01',
        title: '需求对接',
        subtitle: '告诉我们您的目标',
        description: '深入沟通您的业务场景与数据需求。无论是竞品监控、舆情分析还是通用抓取，我们将为您定制专属方案。',
        linkText: '联系咨询',
        chatMsg1: '👋 你好！我是 Muzzle，请输入您需要抓取的目标网址',
        chatMsg2: '我想实时监控竞争对手的商品价格变动',
        chatMsg3: '已为您匹配专属反爬规则集，集群调度中... 🚀',
      },
      {
        num: '02',
        title: '定制开发',
        subtitle: '核心规则与自动化逻辑',
        description: '我们的技术专家将为您编写最优的抓取规则。彻底解决验证码、反爬机制及动态渲染等技术难题。',
        linkText: '查看技术栈',
        chatMsg1: '',
        chatMsg2: '',
        chatMsg3: '',
      },
      {
        num: '03',
        title: '云端部署',
        subtitle: '高可用集群调度',
        description: '将定制好的 Open Claw 实例一键部署至 Muzzle 高可用集群，获取极致吞吐量的抓取并发性能。',
        linkText: '了解并发能力',
        chatMsg1: '',
        chatMsg2: '',
        chatMsg3: '',
      },
      {
        num: '04',
        title: '数据交付',
        subtitle: '实时数据流无缝集成',
        description: '通过 API、Webhook 或直接导入数据库，将结构化数据实时交付。持续监控与维护，确保数据流稳定。',
        linkText: '获取定制方案',
        chatMsg1: '',
        chatMsg2: '',
        chatMsg3: '',
      },
    ],
    metrics: {
      insightTitle: '本周洞察',
      insightBadge: '+12% 提升',
      metric1: '任务完成率',
      metric2: '团队协作指数',
      metric3: '专注时间',
      metric4: '响应速度',
    },
    settings: {
      title: '个性化偏好',
      pref1: '工作时间提醒',
      pref2: 'AI 任务建议',
      pref3: '团队动态推送',
      pref4: '智能优先级排序',
      pref5: '截止日期预警',
    },
    payment: {
      paymentSuccess: '收款成功',
      paymentFrom: '来自 张三 · 设计服务',
      paymentTime: '今天 14:32',
    },
  },

  testimonials: {
    eyebrow: '用户评价',
    title: '深受企业客户喜爱',
    description: '他们成功构建了属于自己的数据引擎，您也可以。',
    ratingBig: '4.9',
    basedOnReviews: '基于 <strong>1,200+</strong> 条真实评价',
    featuredBadge: '⭐ 精选评价',
    items: [
      {
        name: 'David Chen',
        role: 'CTO @ DataSphere',
        quote: 'Muzzle 彻底改变了我们的数据获取方式。单日抓取量提升了 400%，而且再也没有遇到过 IP 被封禁的问题。这是我用过最省心的服务。',
      },
      {
        name: '李晓丽',
        role: '产品经理 · Sudo 创始人',
        quote: '智能提醒功能让我从"救火模式"切换到了"主动管理"。再也不会错过任何关键节点了。AI 洞察真的非常准确，超出了预期。',
      },
      {
        name: 'Sarah Jenkins',
        role: '数据总监 @ AutoMarket',
        quote: '专家团队帮我们解决了极度复杂的动态渲染抓取难题。与我们内部数据库的对接非常顺滑，团队完全不需要自己维护底层基础架构。',
      },
      {
        name: '苏雨欣',
        role: '设计总监 · PixelStudio',
        quote: '个性化定制功能让我惊喜。系统真的会学习我的工作偏好，随着时间推移变得越来越懂我。感觉像是有一个 24 小时在线的超级助手。',
      },
    ],
  },

  pricing: {
    eyebrow: '定价方案',
    title: '适配各类规模的定制方案',
    description: '无论您是需要基础的数据监控，还是构建千万级并发的抓取引擎，我们都有合适的选择。',
    trialNote: '所有方案均包含 14 天免费试用，无需提供信用卡信息。',
    monthly: '按月付费',
    annual: '按年付费',
    save: '省 20%',
    mostPopular: '最受欢迎',
    contactSales: '联系销售团队',
    contactEnterprise: '需要超过 500 名用户的定制方案？',
    plans: [
      {
        name: '基础版',
        desc: '适合初创团队与基础抓取需求',
        interval: '/月',
        cta: '免费开始',
        features: [
          '5 万次并发抓取/月',
          '标准反爬规则池',
          '基础动态页面渲染',
          '社区支持',
          '7日数据保留',
        ],
      },
      {
        name: '专业版',
        desc: '专为高并发重度业务设计',
        interval: '/月',
        cta: '开始 14 天免费试用',
        features: [
          '100 万次并发抓取/月',
          '高级智能代理池',
          '定制化抓取规则 x5',
          '优先工单支持',
          '无限数据保留',
        ],
      },
      {
        name: '企业版',
        desc: '私有化部署与极致安全',
        interval: '',
        cta: '联系销售团队',
        features: [
          '独立高吞吐物理集群',
          '无限制定制化规则',
          '1对1专属架构师',
          'SLA 99.99% 保障',
          '私有化部署支持',
        ],
      },
    ],
  },

  faq: {
    eyebrow: '常见问题',
    title: '一切您想了解的',
    description: '找不到您的问题？',
    contactLink: '联系我们的支持团队 →',
    items: [
      {
        q: 'Muzzle 和自己运行 Open Claw 有什么区别？',
        a: '我们解决了部署、维护、代理池和规则更新的所有痛点。并提供深度定制开发，让您专注于业务数据，而非底层基础架构。',
      },
      {
        q: '你们支持哪些平台的抓取？',
        a: '只要是公开数据，我们的定制 Open Claw 都能处理。我们特别擅长定制复杂的动态页面和强反爬站点的采集规则。',
      },
      {
        q: '如果我们需要极高并发量怎么办？',
        a: 'Muzzle 专为规模扩张而设计。我们的企业版支持高达千万级的并发请求，您可以随时升级集群资源，无需重新配置。',
      },
      {
        q: '目标站点经常改版导致规则失效怎么办？',
        a: '我们会为定制规则提供托管维护服务。一旦目标页面结构变动，我们的监控系统会立即告警，技术专家将在第一时间修复规则。',
      },
    ],
  },

  cta: {
    tag: '🚀 立即行动',
    title: '今天就构建您的\n专属数据抓取引擎',
    description: '加入已有科技企业与开发者的行列，将复杂的数据流收集与自动化任务交给 Muzzle。享受开箱即用、弹性的专属云抓取体验。',
    cta: '获取定制方案 →',
    demo: '观看演示',
    note: '无需信用卡 · 14 天免费试用 · 随时取消',
  },

  footer: {
    tagline: '最可靠的 Open Claw\n高性能抓取引擎。',
    copyright: '© 2026 Muzzle. 保留所有权利。',
    terms: '条款',
    privacy: '隐私',
    cookie: 'Cookie',
    socialAriaLabel: {
      twitter: 'Twitter/X',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    links: [
      {
        group: '产品',
        items: ['功能介绍', '定价方案', '更新日志', '路线图'],
      },
      {
        group: '资源',
        items: ['帮助文档', 'API 参考', '博客', '社区'],
      },
      {
        group: '公司',
        items: ['关于我们', '联系我们', '加入团队', '合作伙伴'],
      },
      {
        group: '法律',
        items: ['隐私政策', '服务条款', 'Cookie 设置', '合规说明'],
      },
    ],
  },

  common: {
    loading: '加载中...',
    readMore: '阅读更多',
    learnMore: '了解更多',
    getStarted: '免费开始',
    contactUs: '联系我们',
  },
};

export default zh;
