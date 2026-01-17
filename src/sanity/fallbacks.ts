import type {
  AboutPage,
  ContactPage,
  HowItWorksPage,
  HomePage,
  ProductPage,
  PricingPage,
  SecurityPage,
  SiteSettings,
  WhoWeServePage,
} from './types'

export const fallbackSiteSettings: SiteSettings = {
  brandName: 'Bluebird',
  logoText: 'Bluebird',
  footerDescription:
    'Clarity across every email and meeting. Professional communication intelligence for teams that need to make decisions.',
  whoWeServeNav: {label: 'Who We Serve', enabled: false},
  navLinks: [
    {label: 'Product', href: '/product'},
    {label: 'How It Works', href: '/how-it-works'},
    {label: 'Pricing', href: '/pricing'},
    {label: 'Security and Integrations', href: '/security'},
    {label: 'Login', href: 'https://app.bluebirdagi.com'},
  ],
  primaryCta: {label: 'See Bluebird in Action', href: '/contact', variant: 'primary'},
  secondaryCta: {label: 'Login', href: '/login', variant: 'ghost'},
  footerColumns: [
    {
      heading: 'Product',
      links: [
        {label: 'Features', href: '/'},
        {label: 'How It Works', href: '/about'},
        {label: 'Pricing', href: '/pricing'},
        {label: 'Enterprise', href: '/contact'},
      ],
    },
    {
      heading: 'Company',
      links: [
        {label: 'About', href: '/about'},
        {label: 'Blog', href: '/blog'},
        {label: 'Careers', href: '/careers'},
        {label: 'Contact', href: '/contact'},
      ],
    },
    {
      heading: 'Trust',
      links: [
        {label: 'Security', href: '/security'},
        {label: 'Privacy', href: '/privacy'},
        {label: 'Terms of Service', href: '/terms'},
      ],
    },
    {
      heading: 'Resources',
      links: [
        {label: 'Documentation', href: '/docs'},
        {label: 'API Reference', href: '/docs/api'},
        {label: 'Support', href: '/support'},
        {label: 'Status', href: '/status'},
      ],
    },
  ],
  footerBottomLinks: [
    {label: 'Privacy Policy', href: '/privacy'},
    {label: 'Terms of Service', href: '/terms'},
  ],
  footerCopyright: '© 2026 Bluebird AGI. All rights reserved.',
  socialLinks: [
    {label: 'LinkedIn', href: 'https://linkedin.com'},
    {label: 'Twitter', href: 'https://x.com'},
  ],
  announcementBar: {
    enabled: true,
    text: 'Filter signal from noise across every inbox.',
    linkLabel: 'See how it works',
    linkHref: '/about',
  },
}

export const fallbackHomePage: HomePage = {
  hero: {
    headline: 'Important work hides in your inbox. Bluebird finds it.',
    subhead:
      'Bluebird works inside Gmail and Outlook—organizing, drafting, and prioritizing so you can focus on your work, not your inbox.',
    primaryCta: {label: 'See Bluebird in Action', href: '/contact', variant: 'primary'},
    secondaryCta: {label: 'How Bluebird Works', href: '/about', variant: 'secondary'},
    heroHighlights: ['Daily brief', 'Smart routing', 'Shared context'],
  },
  socialProof: {proofLine: 'Trusted by teams who never miss a critical signal.'},
  builtFor: {
    heading: "Built for people who can't afford to drop balls",
    subheading: 'Designed for busy professionals managing high-stakes communication.',
    stats: [
      {value: '100+', label: 'Work emails per day', note: 'Important ones slip through'},
      {value: '10+', label: 'Meetings per week', note: 'Follow-ups get lost'},
      {value: '0', label: 'Deals dropped', note: 'Clients, deadlines, deliverables'},
    ],
    roles: ['Founders', 'Sales', 'Ops', 'Client Services', 'Leadership'],
    industriesLine: 'Legal • Finance • Real Estate • Consulting • Healthcare • And more',
  },
  dailyBrief: {
    heading: 'Daily briefs that frame your day',
    lead: 'Bluebird delivers a morning brief and an end-of-day summary.',
    paragraphs: [
      'Morning briefs help you start focused.',
      'End-of-day summaries help you close loops.',
      'Briefs summarize. They do not act.',
    ],
    imageAlt: 'Daily Warble summary',
  },
  features: {
    sectionHeading: 'Connect the team to what matters',
    sectionSubheading:
      'Bluebird separates urgent customer signals from noise, routes work to the right owner, and shares the full thread automatically.',
    items: [
      {
        title: 'Smart routing',
        description: 'Auto-assign every inbox to the right owner with rules that learn from your team.',
        iconKey: 'route',
      },
      {
        title: 'Shared context',
        description: 'Unify threads from Gmail, Outlook, and support inboxes so replies ship faster.',
        iconKey: 'context',
      },
      {
        title: 'Daily brief',
        description: 'Wake up to a prioritized briefing of signals, risks, and follow-ups.',
        iconKey: 'brief',
      },
    ],
  },
  howItWorks: {
    heading: 'How Bluebird works',
    subheading: 'From inbox connection to confident ownership, Bluebird keeps teams aligned.',
    steps: [
      {title: 'Connect inboxes', description: 'Plug Bluebird into shared inboxes and choose your handoffs.'},
      {
        title: 'Train with signals',
        description: 'Tag critical messages once—Bluebird learns what matters and tunes noise out automatically.',
      },
      {title: 'Share context', description: 'Give every reply the full story with synced threads, owners, and next steps.'},
    ],
    calloutTitle: 'Human-in-the-loop by design',
    calloutBody:
      'Bluebird provides recommendations and insights, but you remain in control. Every action requires your review and approval.',
    calloutIconKey: 'check',
  },
  integrations: {
    heading: 'Trust first',
    subheading: 'Security and privacy are foundational, not afterthoughts. Your data is protected at every step.',
    cards: [
      {
        title: 'Human in the loop',
        description: 'Bluebird suggests. You decide. Nothing is ever sent without your approval.',
        iconKey: 'eye',
      },
      {
        title: 'Enterprise-grade security',
        description: 'Encryption, OAuth, SOC 2 (in progress)',
        iconKey: 'shield',
      },
      {
        title: 'Your data stays yours',
        description: 'No training on your data. No third-party sharing.',
        iconKey: 'lock',
      },
      {
        title: 'Built for compliance',
        description: 'SOC 2 and GDPR ready from day one',
        iconKey: 'check',
      },
    ],
    complianceHeading: 'Enterprise-grade security and compliance',
    complianceSubheading: 'Built with enterprise-grade security practices. Designed to meet SOC 2 and GDPR requirements.',
    complianceBody:
      "Bluebird is designed for environments where trust must be earned and maintained. We don't claim certifications we haven't earned. We don't access data we don't need. We don't take actions without your approval. If your organization requires specific compliance standards, security reviews, or deployment models, we're ready to discuss how Bluebird can meet your requirements.",
    primaryCta: {label: 'Request a demo', href: '/contact', variant: 'primary'},
    secondaryCta: {label: 'Learn about security', href: '/security', variant: 'ghost'},
  },
  testimonials: {
    heading: 'Teams trust Bluebird',
    items: [
      {
        quote: 'Bluebird cut our customer response time in half. Signals reach the right owner without noise.',
        name: 'Mara Singh',
        role: 'VP Customer Experience',
        company: 'Northwind',
      },
      {
        quote: 'The daily brief is our 9am ritual. We finally see what matters across every inbox.',
        name: 'Jordan Lee',
        role: 'Head of Operations',
        company: 'Atlas Freight',
      },
    ],
  },
  faq: {
    heading: 'FAQs',
    items: [
      {
        question: 'How does Bluebird filter noise?',
        answer: 'Models learn from your tags and outcomes, scoring threads by intent, urgency, and ownership history.',
      },
      {question: 'Is setup complicated?', answer: 'Connect your inboxes, pick routing rules, and you are live in under an hour.'},
      {
        question: 'How is data secured?',
        answer: 'We encrypt data in transit and at rest, and support fine-grained access control by team.',
      },
    ],
  },
  finalCta: {
    headline: 'Ready to filter signal from noise?',
    subhead: 'Start with your live inbox. Bluebird routes the first 100 signals on us.',
    primaryCta: {label: 'Start now', href: '/pricing', variant: 'primary'},
    secondaryCta: {label: 'Talk to sales', href: '/contact', variant: 'secondary'},
  },
}

export const fallbackHowItWorksPage: HowItWorksPage = {
  hero: {
    headline: 'How Bluebird Works',
    subhead: 'A four-step process that transforms your communications into clarity—always with human review and approval.',
  },
  process: {
    heading: 'The Process',
    subheading: 'From connection to clarity in four transparent steps',
    steps: [
      {
        title: 'Connect',
        description: 'Securely connect your email and calendar using OAuth. No passwords stored.',
        iconKey: 'connect',
      },
      {
        title: 'Ingest',
        description: 'Bluebird reads and indexes your communications, identifying threads and participants.',
        iconKey: 'ingest',
      },
      {
        title: 'Interpret',
        description: 'AI analyzes context, urgency, relationships, and priorities.',
        iconKey: 'interpret',
      },
      {
        title: 'Produce',
        description: 'Generate briefs, summaries, draft responses, and action lists—ready for your review.',
        iconKey: 'produce',
      },
    ],
  },
  review: {
    eyebrow: 'Human in the loop',
    heading: 'Review and control',
    body: 'Nothing happens without your approval. Every output is a suggestion, not an action. You remain in complete control.',
    bullets: [
      'Draft emails require approval before sending',
      'Summaries cite sources for verification',
      'Action items need confirmation before scheduling',
      'Edit, reject, or refine any output',
    ],
  },
  personalization: {
    eyebrow: 'Customization',
    heading: 'Personalization',
    body: 'Teach Bluebird your communication style, priorities, and preferences. The more you use it, the better it understands your workflow.',
    bullets: [
      'Set communication tone (formal, friendly, concise)',
      'Define priority rules for contacts and topics',
      'Specify working hours and response preferences',
      'Create templates for common response types',
    ],
  },
  modes: {
    heading: 'Individual and Team Modes',
    subheading: 'Works for you alone or across your entire team',
    cards: [
      {title: 'Individual Mode', description: 'Personal clarity for your own inbox and calendar. Private by default.'},
      {
        title: 'Team Mode',
        description: 'Shared workflows, track team decisions, delegate follow-ups, and maintain alignment.',
      },
    ],
  },
  finalCta: {
    headline: 'See the product in action',
    subhead: 'Explore the full feature set and discover how Bluebird can bring clarity to your communications.',
    primaryCta: {label: 'Try Bluebird for free', href: '/contact', variant: 'primary'},
    secondaryCta: {label: 'View Product Overview', href: '/about', variant: 'secondary'},
  },
}

export const fallbackWhoWeServePages: WhoWeServePage[] = []

export const fallbackPricingPage: PricingPage = {
  heading: 'Simple pricing. Clear boundaries.',
  subheading: 'Pricing that reflects clarity, control, and trust. No surprises. No automation without approval.',
  faqHeading: 'Pricing FAQ',
  tiers: [
    {
      name: 'Basic',
      eyebrow: 'Preview',
      subLabel: 'Individual',
      priceMonthly: '$15',
      description: 'Sign up now for the first month free.',
      highlights: [
        'Dashboard access',
        'News & notes access',
        'Unlimited unsubscribe',
        'Email cleaning: up to 300 emails per week',
        '1 inbox, 1 calendar',
        '3 meetings per month',
      ],
      footnote: 'Post-meeting transcription includes: structured notes, running to-do list, draft follow-up email.',
      ctaLabel: 'Sign up now',
      ctaHref: '/contact',
      featured: false,
    },
    {
      name: 'Pro',
      eyebrow: 'Individual / Power user',
      subLabel: 'Most popular',
      priceMonthly: '$30',
      description: 'Complete personal clarity across all communication.',
      highlights: [
        'Unlimited dashboard functionality',
        'Unlimited news & notes',
        'Unlimited unsubscribe',
        'Unlimited email cleaning',
        'Up to 3 inboxes, 3 calendars',
        'Unlimited post-meeting intelligence',
        'Personal metrics and reports',
        'Focus and workload indicators',
      ],
      footnote: 'Base plan includes 1 user. Additional users: $15 / user / month.',
      ctaLabel: 'Try Bluebird for free',
      ctaHref: '/contact',
      featured: true,
    },
    {
      name: 'Team',
      eyebrow: 'Shared visibility',
      subLabel: 'Team plans',
      priceMonthly: '$75 / month',
      description: 'Shared clarity and visibility across a small team.',
      highlights: [
        'Everything in Pro',
        '3 users included',
        'Team dashboards',
        'Shared to-dos and follow-ups',
        'Team-level metrics and visibility',
      ],
      footnote: 'Additional users: $15 / user / month.',
      ctaLabel: 'Try Bluebird for free',
      ctaHref: '/contact',
      featured: false,
    },
    {
      name: 'Enterprise',
      eyebrow: 'Custom deployment',
      subLabel: 'Advanced security',
      priceMonthly: 'Custom pricing',
      description: 'For organizations with advanced security, compliance, or scale requirements.',
      highlights: ['Custom seat counts', 'Advanced security and access controls', 'Custom integrations', 'Dedicated onboarding and support'],
      ctaLabel: 'Contact us',
      ctaHref: '/contact',
      featured: false,
    },
  ],
  trustBlocks: [
    {
      title: 'Human-in-the-loop always',
      description: 'No autonomous action. Every recommendation requires human review and approval.',
    },
    {
      title: 'Enterprise-grade security',
      description: 'Built with enterprise-grade security practices. Designed to meet SOC 2 and GDPR requirements.',
    },
  ],
  faq: [
    {
      question: 'Can we start without engineering?',
      answer: 'Yes. Connect shared inboxes and Slack, then set routing rules directly in Bluebird.',
    },
    {
      question: 'Do you offer pilots?',
      answer: 'We run 30-day pilots with weekly reviews to ensure signals and routing meet your needs.',
    },
  ],
}

export const fallbackSecurityPage: SecurityPage = {
  heading: 'Security and Integrations',
  subheading:
    'Security, privacy, and integration readiness are foundational to Bluebird AGI. We are building for enterprise trust from day one, with clear boundaries, responsible AI practices, and seamless fit into existing workflows.',
  securityPosture: {
    heading: 'Security posture',
    subheading: 'How we protect your data',
    cards: [
      {
        title: 'Encryption',
        description: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256).',
        iconKey: 'lock',
      },
      {
        title: 'Access Control',
        description: 'Auth-based authentication with granular permissions.',
        iconKey: 'key',
      },
      {
        title: 'Data Residency',
        description: 'Data is processed and stored in secure cloud infrastructure.',
        iconKey: 'shield',
      },
      {
        title: 'No Training on Your Data',
        description: 'Customer data is never used to train AI models.',
        iconKey: 'eye',
      },
    ],
  },
  dataPractices: {
    eyebrow: 'Data Handling',
    heading: 'Clear data practices',
    blocks: [
      {
        title: 'What we access',
        description:
          'Email headers, content, and metadata. Calendar events and attendees. Only the minimum data required.',
      },
      {
        title: 'How we secure it',
        description:
          'Encrypted at rest using customer-specific keys. Minimal retention. Data is retained only as long as necessary.',
      },
      {
        title: 'Who can see it',
        description:
          'Only you and authorized team members. Bluebird staff access requires explicit permission and is logged.',
      },
    ],
    adminPanel: {
      heading: 'Admin Controls',
      subheading:
        'Enterprise administrative controls are being built intentionally. Some features are part of our roadmap.',
      items: [
        {label: 'Single Sign-On (SSO)', status: 'Roadmap'},
        {label: 'Audit Logs', status: 'Roadmap'},
        {label: 'Role-Based Access Control', status: 'Roadmap'},
        {label: 'User Provisioning (SCIM)', status: 'Roadmap'},
        {label: 'Data Export', status: 'Available'},
        {label: 'Account Deletion', status: 'Available'},
      ],
      footnote: 'Request roadmap details during your security review.',
    },
  },
  compliance: {
    heading: 'Compliance readiness',
    subheading: 'Designed to meet global privacy and security requirements',
    items: [
      {label: 'SOC 2 Type II', status: 'Assessment in progress'},
      {label: 'HIPAA', status: 'Use case approvals'},
      {label: 'GDPR', status: 'Compliant by design'},
      {label: 'CCPA', status: 'Compliant by design'},
      {label: 'ISO 27001', status: 'Program baseline'},
    ],
    footnote:
      'Bluebird AGI is built on permission-based data interfaces and enterprise security requirements. Formal certifications are pursued as appropriate and supported with documentation upon request.',
  },
  integrations: {
    heading: 'Integrations that fit your workflow',
    subheading: 'Bluebird works inside the tools teams already use',
    body:
      'Bluebird integrates seamlessly with modern email and collaboration platforms. There is no new interface to learn and no forced workflow change.',
    cards: [
      {label: 'Google Workspace', status: 'Available', description: 'Gmail and Google Calendar'},
      {label: 'Microsoft 365', status: 'Available', description: 'Outlook and Microsoft Teams'},
    ],
    footnote:
      'Bluebird also supports integration with additional communication and interaction tools including Slack, Teams, Google Meet, Zoom, and more. If your organization relies on a specific system, we will work with you to integrate it.',
  },
  responsibleAi: {
    eyebrow: 'Responsible AI',
    heading: 'AI with human oversight',
    subheading:
      'We believe AI should augment human decision-making, not replace it. Our approach ensures you stay in control.',
    bullets: [
      'Human review required before any message is sent',
      'Clear attribution showing AI-generated content',
      'User controls over AI behavior and outputs',
      'Regular audits of AI decision patterns',
      'Bias detection and mitigation practices',
      'Transparent docs on AI capabilities and limitations',
    ],
  },
  finalCta: {
    headline: 'Enterprise questions?',
    subhead: 'Our team can support security reviews, integration discussions, and enterprise evaluations.',
    primaryCta: {label: 'Talk to Sales', href: '/contact', variant: 'primary'},
  },
}

export const fallbackAboutPage: AboutPage = {
  heading: 'Building calm, connected teams',
  subheading:
    'Bluebird was created for teams buried in email. We help you route work, share context, and move faster together.',
  pillars: [
    {title: 'Clarity first', description: 'We design for clear ownership and confident responses.'},
    {title: 'Security by default', description: 'Protecting customer data is our starting line, not an add-on.'},
    {title: 'Partner mindset', description: 'We work directly with operators to fine-tune signals and outcomes.'},
  ],
  teamHighlight: 'Distributed, product-obsessed builders with roots in ops, security, and ML.',
}

export const fallbackContactPage: ContactPage = {
  heading: 'Talk with the team',
  subheading: 'We respond within one business day with the right owner for your request.',
  contactMethods: [
    {label: 'Sales', value: 'sales@bluebird.ai', href: 'mailto:sales@bluebird.ai'},
    {label: 'Support', value: 'support@bluebird.ai', href: 'mailto:support@bluebird.ai'},
    {label: 'Slack Connect', value: 'Join our shared channel', href: '/contact'},
  ],
  cta: {label: 'Book time', href: '/contact', variant: 'primary'},
}

export const fallbackProductPage: ProductPage = {
  hero: {
    heading: 'Product Overview',
    bullets: [
      'Clear intelligence without automating action',
      'Context-aware summaries and decision support',
      'Built for teams handling critical workflows',
    ],
  },
  overview: {
    heading: 'Bluebird lives inside the tools you already use.',
    bullets: [
      'Works in Gmail and Outlook with no new interface',
      'Summarizes complex threads with sources',
      'Surfaces urgent items and follow-ups',
      'Keeps teams aligned on decisions',
    ],
    imageAlt: 'Product overview preview',
  },
  clarity: {
    heading: 'Designed for clarity, not control',
    bullets: ['Your team stays in the loop', 'No automated sends without approval', 'Transparent reasoning and context'],
    imageAlt: 'Clarity preview',
  },
  featureGrid: {
    heading: 'Features',
    subheading: 'Real-time visibility, summaries, and signal detection across your workflows.',
    items: [
      {
        label: 'Must have',
        title: 'Intelligence',
        description: 'Summaries, insights, and signal detection across threads.',
        imageSide: 'right',
      },
      {
        label: 'Must have',
        title: 'Decision logs',
        description: 'Capture decisions and approvals with context.',
        imageSide: 'left',
      },
      {
        label: 'Must have',
        title: 'Meeting summaries',
        description: 'Fast, accurate summaries for every conversation.',
        imageSide: 'right',
      },
      {
        label: 'Must have',
        title: 'Smart responses',
        description: 'Drafts aligned to your tone and policies.',
        imageSide: 'left',
      },
    ],
  },
  dailyBrief: {
    heading: 'Daily briefs that frame your day',
    lead: 'Bluebird delivers a morning brief and an end-of-day summary.',
    paragraphs: [
      'Morning briefs help you start focused.',
      'End-of-day summaries help you close loops.',
      'Briefs summarize. They do not act.',
    ],
    imageAlt: 'Daily brief preview',
  },
  availability: {
    heading: "What's available",
    subheading: 'Core capabilities for modern operations teams',
    cards: [
      {
        title: 'Available now',
        status: 'Available',
        items: ['Daily briefs', 'Signal detection', 'Decision logs', 'Follow-up tracking'],
      },
      {
        title: 'In development',
        status: 'In development',
        items: ['Voice briefings', 'Team workload analytics', 'Policy-based routing'],
      },
    ],
  },
  finalCta: {
    headline: 'Try Bluebird for free',
    subhead: 'See how Bluebird brings clarity to your communication.',
    primaryCta: {label: 'Try Bluebird for free', href: '/contact', variant: 'primary'},
  },
}
