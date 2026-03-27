import type { Translations } from './types';

const en: Translations = {
  navbar: {
    logo: 'Muzzle',
    features: 'Features',
    howItWorks: 'How It Works',
    pricing: 'Pricing',
    faq: 'FAQ',
    login: 'Log In',
    getStarted: 'Get Started Free',
  },

  hero: {
    title: 'Your Customized\nOpen Claw Platform',
    description: 'Muzzle provides enterprise-grade Open Claw hosting with deep customization. Skip the setup hassles and get powerful, ready-to-use data extraction and automation capabilities that integrate seamlessly with your workflow.',
    cta: 'Get Custom Solution',
    demo: 'Watch Demo',
    socialProof: 'Trusted by <strong>2,000+</strong> teams worldwide',
    partnersLabel: 'Trusted by top teams',
    dashboard: {
      deploySuccess: 'Deploy Success',
      deployVersion: 'Version 2.4.1 is live',
      justNow: 'Just now',
      newUserSurge: 'New User Surge',
      newUsersToday: '+347 new users today',
      sidebar: {
        dashboard: 'Dashboard',
        projects: 'Projects',
        analytics: 'Analytics',
        team: 'Team',
        settings: 'Settings',
      },
      stats: {
        activeUsers: 'Active Users',
        monthlyRevenue: 'Monthly Revenue',
        conversionRate: 'Conversion Rate',
      },
      chartLabel: 'Revenue trend - past 12 months',
    },
  },

  features: {
    eyebrow: 'Core Capabilities',
    title: 'Unlock the True\nPotential of Open Claw',
    description: 'No more server maintenance or complex proxy management. Muzzle combines scraping, computing, and automation services into one, supercharging your systems.',
    learnMore: 'Learn More',
    banner: {
      eyebrow: 'Seamless Integration',
      title: 'Integrates Perfectly\nWith Your Workflow',
      description: 'Connect with 50+ tools including Slack, GitHub, Figma, Notion, and more to create your central workspace hub.',
      cta: 'View All Integrations',
    },
    items: [
      {
        tag: 'AI Collaboration',
        title: 'AI Smart Collaboration',
        description: 'Enable better team collaboration through shared workspaces. Assign tasks, leave feedback in context, and centralize all updates—say goodbye to scattered chats and endless email threads.',
      },
      {
        tag: 'Smart Reminders',
        title: 'Ready to Use',
        description: 'Skip complex deployments and tedious configurations. Muzzle provides a one-click, highly optimized Open Claw cloud environment ready for you.',
      },
      {
        tag: 'Team First',
        title: 'Deep Customization Rules',
        description: 'Whether it\'s complex dynamic pages, strong anti-scraping mechanisms, or multi-dimensional automation workflows. Our architecture experts can write deeply customized Claw rules and plugins for you.',
      },
      {
        tag: 'Enterprise Security',
        title: 'High Availability Cluster',
        description: 'Built on distributed architecture supporting unlimited horizontal scaling. Features intelligent proxy pools, retry mechanisms, and enterprise-level high-concurrency scraping with data stability. SOC 2 Type II certified, fully GDPR compliant, supports SSO and advanced access control—letting you focus on your business.',
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
    eyebrow: 'Workflow',
    title: 'Launch Your Custom\nAutomation in 4 Steps',
    description: 'From requirement to data delivery, experience an exceptionally smooth onboarding process.',
    step: 'Step',
    steps: [
      {
        num: '01',
        title: 'Requirement Discussion',
        subtitle: 'Tell Us Your Goals',
        description: 'Deep dive into your business scenarios and data requirements. Whether it\'s competitor monitoring, sentiment analysis, or general scraping, we\'ll create a customized solution for you.',
        linkText: 'Contact Us',
        chatMsg1: '👋 Hi! I\'m Muzzle. Please enter the target URL you need to scrape',
        chatMsg2: 'I want to monitor competitor product prices in real-time',
        chatMsg3: 'Matched专属 anti-scraping rule set, cluster scheduling... 🚀',
      },
      {
        num: '02',
        title: 'Custom Development',
        subtitle: 'Core Rules & Automation Logic',
        description: 'Our technical experts will write optimal scraping rules for you. Completely solve technical challenges like CAPTCHAs, anti-scraping mechanisms, and dynamic rendering.',
        linkText: 'View Tech Stack',
        chatMsg1: '',
        chatMsg2: '',
        chatMsg3: '',
      },
      {
        num: '03',
        title: 'Cloud Deployment',
        subtitle: 'High Availability Cluster',
        description: 'Deploy your customized Open Claw instance to the Muzzle high-availability cluster with one click, achieving极致 throughput for concurrent scraping performance.',
        linkText: 'Learn About Scalability',
        chatMsg1: '',
        chatMsg2: '',
        chatMsg3: '',
      },
      {
        num: '04',
        title: 'Data Delivery',
        subtitle: 'Real-time Data Integration',
        description: 'Deliver structured data in real-time via API, Webhook, or direct database import. Continuous monitoring and maintenance ensure stable data flow.',
        linkText: 'Get Custom Solution',
        chatMsg1: '',
        chatMsg2: '',
        chatMsg3: '',
      },
    ],
    metrics: {
      insightTitle: 'Weekly Insights',
      insightBadge: '+12% Improvement',
      metric1: 'Task Completion Rate',
      metric2: 'Team Collaboration Index',
      metric3: 'Focus Time',
      metric4: 'Response Speed',
    },
    settings: {
      title: 'Personalization Preferences',
      pref1: 'Work Hours Reminders',
      pref2: 'AI Task Suggestions',
      pref3: 'Team Updates',
      pref4: 'Smart Priority Sorting',
      pref5: 'Deadline Alerts',
    },
    payment: {
      paymentSuccess: 'Payment Success',
      paymentFrom: 'From Zhang San · Design Services',
      paymentTime: 'Today 14:32',
    },
  },

  testimonials: {
    eyebrow: 'User Reviews',
    title: 'Loved by Enterprise\nCustomers',
    description: 'They\'ve successfully built their own data engines, and you can too.',
    ratingBig: '4.9',
    basedOnReviews: 'Based on <strong>1,200+</strong> real reviews',
    featuredBadge: '⭐ Featured Review',
    items: [
      {
        name: 'David Chen',
        role: 'CTO @ DataSphere',
        quote: 'Muzzle completely transformed our data acquisition. Daily scraping volume increased by 400%, and we haven\'t encountered any IP blocking issues. This is the most hassle-free service I\'ve ever used.',
      },
      {
        name: '李晓丽',
        role: 'Product Manager · Sudo Founder',
        quote: 'Smart reminders let me switch from "firefighting mode" to "proactive management." I never miss critical milestones anymore. The AI insights are surprisingly accurate—beyond expectations.',
      },
      {
        name: 'Sarah Jenkins',
        role: 'Data Director @ AutoMarket',
        quote: 'The expert team solved our extremely complex dynamic rendering scraping challenges. Integration with our internal database was smooth—our team doesn\'t need to maintain any underlying infrastructure.',
      },
      {
        name: '苏雨欣',
        role: 'Design Director · PixelStudio',
        quote: 'The personalization features surprised me. The system actually learns my work preferences and gets smarter over time. It feels like having a 24/7 super assistant.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Pricing Plans',
    title: 'Custom Solutions for\nEvery Scale',
    description: 'Whether you need basic data monitoring or want to build a million-concurrency scraping engine, we have the right option for you.',
    trialNote: 'All plans include a 14-day free trial, no credit card required.',
    monthly: 'Monthly',
    annual: 'Annual',
    save: 'Save 20%',
    mostPopular: 'Most Popular',
    contactSales: 'Contact Sales',
    contactEnterprise: 'Need custom solutions for over 500 users?',
    plans: [
      {
        name: 'Starter',
        desc: 'Perfect for startups and basic scraping needs',
        interval: '/month',
        cta: 'Get Started Free',
        features: [
          '50K concurrent scrapes/month',
          'Standard anti-scraping rule pool',
          'Basic dynamic page rendering',
          'Community support',
          '7-day data retention',
        ],
      },
      {
        name: 'Professional',
        desc: 'Designed for high-concurrency intensive operations',
        interval: '/month',
        cta: 'Start 14-Day Free Trial',
        features: [
          '1M concurrent scrapes/month',
          'Advanced smart proxy pool',
          '5 custom scraping rules',
          'Priority ticket support',
          'Unlimited data retention',
        ],
      },
      {
        name: 'Enterprise',
        desc: 'Private deployment with ultimate security',
        interval: '',
        cta: 'Contact Sales',
        features: [
          'Dedicated high-throughput cluster',
          'Unlimited custom rules',
          '1-on-1 architect support',
          '99.99% SLA guarantee',
          'Private deployment support',
        ],
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Everything You\nWant to Know',
    description: 'Can\'t find your question?',
    contactLink: 'Contact our support team →',
    items: [
      {
        q: 'What\'s the difference between Muzzle and running Open Claw myself?',
        a: 'We solve all the pain points of deployment, maintenance, proxy pools, and rule updates. Plus we provide deep customization development, letting you focus on business data, not underlying infrastructure.',
      },
      {
        q: 'Which platforms do you support for scraping?',
        a: 'As long as it\'s public data, our custom Open Claw can handle it. We specialize in customizing rules for complex dynamic pages and strong anti-scraping sites.',
      },
      {
        q: 'What if we need extremely high concurrency?',
        a: 'Muzzle is designed for scaling. Our Enterprise edition supports up to tens of millions of concurrent requests—you can upgrade cluster resources anytime without reconfiguration.',
      },
      {
        q: 'What happens when target sites update and break rules?',
        a: 'We provide hosted maintenance for custom rules. Once target page structure changes, our monitoring system alerts immediately, and technical experts fix rules as soon as possible.',
      },
    ],
  },

  cta: {
    tag: '🚀 Get Started Today',
    title: 'Build Your Custom\nData Scraping Engine',
    description: 'Join tech companies and developers who trust Muzzle with complex data collection and automation. Enjoy ready-to-use, flexible cloud scraping.',
    cta: 'Get Custom Solution →',
    demo: 'Watch Demo',
    note: 'No credit card required · 14-day free trial · Cancel anytime',
  },

  footer: {
    tagline: 'The most reliable Open Claw\nhigh-performance scraping engine.',
    copyright: '© 2026 Muzzle. All rights reserved.',
    terms: 'Terms',
    privacy: 'Privacy',
    cookie: 'Cookie',
    socialAriaLabel: {
      twitter: 'Twitter/X',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    links: [
      {
        group: 'Product',
        items: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
      },
      {
        group: 'Resources',
        items: ['Documentation', 'API Reference', 'Blog', 'Community'],
      },
      {
        group: 'Company',
        items: ['About Us', 'Contact', 'Careers', 'Partners'],
      },
      {
        group: 'Legal',
        items: ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Compliance'],
      },
    ],
  },

  common: {
    loading: 'Loading...',
    readMore: 'Read More',
    learnMore: 'Learn More',
    getStarted: 'Get Started Free',
    contactUs: 'Contact Us',
  },
};

export default en;
