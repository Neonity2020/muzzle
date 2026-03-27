// Translation types for the Muzzle landing page
export interface Translations {
  // Navbar
  navbar: {
    logo: string;
    features: string;
    howItWorks: string;
    pricing: string;
    faq: string;
    login: string;
    getStarted: string;
  };

  // Hero
  hero: {
    title: string;
    description: string;
    cta: string;
    demo: string;
    socialProof: string;
    partnersLabel: string;
    // Dashboard mockup
    dashboard: {
      deploySuccess: string;
      deployVersion: string;
      justNow: string;
      newUserSurge: string;
      newUsersToday: string;
      sidebar: {
        dashboard: string;
        projects: string;
        analytics: string;
        team: string;
        settings: string;
      };
      stats: {
        activeUsers: string;
        monthlyRevenue: string;
        conversionRate: string;
      };
      chartLabel: string;
    };
  };

  // Features
  features: {
    eyebrow: string;
    title: string;
    description: string;
    learnMore: string;
    banner: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
    };
    items: Array<{
      tag: string;
      title: string;
      description: string;
    }>;
    integrations: Array<{
      name: string;
    }>;
  };

  // How It Works
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    step: string;
    steps: Array<{
      num: string;
      title: string;
      subtitle: string;
      description: string;
      linkText: string;
      // Chat visual
      chatMsg1: string;
      chatMsg2: string;
      chatMsg3: string;
    }>;
    // Metrics visual
    metrics: {
      insightTitle: string;
      insightBadge: string;
      metric1: string;
      metric2: string;
      metric3: string;
      metric4: string;
    };
    // Settings visual
    settings: {
      title: string;
      pref1: string;
      pref2: string;
      pref3: string;
      pref4: string;
      pref5: string;
    };
    // Payment visual
    payment: {
      paymentSuccess: string;
      paymentFrom: string;
      paymentTime: string;
    };
  };

  // Testimonials
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    ratingBig: string;
    basedOnReviews: string;
    featuredBadge: string;
    items: Array<{
      name: string;
      role: string;
      quote: string;
    }>;
  };

  // Pricing
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    trialNote: string;
    monthly: string;
    annual: string;
    save: string;
    mostPopular: string;
    contactSales: string;
    contactEnterprise: string;
    plans: Array<{
      name: string;
      desc: string;
      interval: string;
      cta: string;
      features: string[];
    }>;
  };

  // FAQ
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    contactLink: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };

  // CTA
  cta: {
    tag: string;
    title: string;
    description: string;
    cta: string;
    demo: string;
    note: string;
  };

  // Footer
  footer: {
    tagline: string;
    copyright: string;
    terms: string;
    privacy: string;
    cookie: string;
    socialAriaLabel: {
      twitter: string;
      github: string;
      linkedin: string;
    };
    links: Array<{
      group: string;
      items: string[];
    }>;
  };

  // Common
  common: {
    loading: string;
    readMore: string;
    learnMore: string;
    getStarted: string;
    contactUs: string;
  };
}
