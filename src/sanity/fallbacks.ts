import type {
  AboutPage,
  ContactPage,
  HomePage,
  PricingPage,
  SecurityPage,
  SiteSettings,
} from './types'

export const fallbackSiteSettings: SiteSettings = {
  brandName: 'Bluebird',
  logoText: 'Bluebird',
  navLinks: [
    {label: 'Home', href: '/'},
    {label: 'Pricing', href: '/pricing'},
    {label: 'Security', href: '/security'},
    {label: 'About', href: '/about'},
    {label: 'Contact', href: '/contact'},
  ],
  primaryCta: {label: 'Start filtering', href: '/pricing', variant: 'primary'},
  secondaryCta: {label: 'Book a demo', href: '/contact', variant: 'secondary'},
  footerColumns: [
    {
      heading: 'Product',
      links: [
        {label: 'Home', href: '/'},
        {label: 'Pricing', href: '/pricing'},
        {label: 'Security', href: '/security'},
      ],
    },
    {
      heading: 'Company',
      links: [
        {label: 'About', href: '/about'},
        {label: 'Contact', href: '/contact'},
      ],
    },
    {
      heading: 'Resources',
      links: [
        {label: 'Status', href: '/status'},
        {label: 'Docs', href: '/docs'},
      ],
    },
  ],
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
    headline: 'Filter signal from noise',
    subhead:
      'Bluebird routes customer email to the right owner, gives your team shared context, and delivers a daily brief so nothing important gets lost.',
    primaryCta: {label: 'Start filtering', href: '/pricing', variant: 'primary'},
    secondaryCta: {label: 'See it in action', href: '/about', variant: 'secondary'},
    heroHighlights: ['Daily brief', 'Smart routing', 'Shared context'],
  },
  socialProof: {proofLine: 'Trusted by teams who never miss a critical signal.'},
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
  },
  integrations: {
    heading: 'Plays with your stack',
    items: [
      {name: 'Gmail + Outlook', description: 'Unified routing without changing your email provider.'},
      {name: 'Slack', description: 'Push urgent threads to the right channel with context attached.'},
      {name: 'HubSpot + Salesforce', description: 'Sync owners and timeline data automatically.'},
    ],
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

export const fallbackPricingPage: PricingPage = {
  heading: 'Pricing that adapts to your volume',
  subheading: 'Start filtering today and only pay when the team is live on Bluebird.',
  faqHeading: 'Pricing FAQ',
  tiers: [
    {
      name: 'Launch',
      priceMonthly: '$29 / seat',
      priceAnnual: '$24 / seat',
      description: 'For teams turning on filtering and routing.',
      highlights: ['Noise filtering', 'Routing rules', 'Daily brief'],
      ctaLabel: 'Start trial',
      ctaHref: '/contact',
      featured: false,
    },
    {
      name: 'Scale',
      priceMonthly: '$49 / seat',
      priceAnnual: '$42 / seat',
      description: 'Advanced automation, ownership, and security controls.',
      highlights: ['Ownership sync', 'Escalation workflows', 'Advanced analytics'],
      ctaLabel: 'Talk to sales',
      ctaHref: '/contact',
      featured: true,
    },
    {
      name: 'Enterprise',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      description: 'For global teams with complex routing and compliance needs.',
      highlights: ['Custom models', 'Dedicated support', 'Security reviews included'],
      ctaLabel: 'Meet with us',
      ctaHref: '/contact',
      featured: false,
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
  heading: 'Security and trust by design',
  subheading: 'Encryption, auditability, and access controls built for the teams handling your most sensitive email.',
  trustBlocks: [
    {title: 'Data encryption', description: 'All data encrypted in transit (TLS 1.2+) and at rest with managed keys.'},
    {title: 'Role-based access', description: 'Granular roles ensure only the right owners can view or act on threads.'},
    {title: 'Audit-ready', description: 'Full activity logs with exports for compliance teams.'},
  ],
  complianceHeading: 'Compliance',
  complianceList: [
    {label: 'SOC 2 readiness', description: 'Independent review of controls and processes.'},
    {label: 'Data residency', description: 'Regional data storage options for regulated teams.'},
    {label: 'SAML SSO', description: 'Single sign-on across the entire platform.'},
  ],
  finalCta: {
    headline: 'Security review ready',
    subhead: 'We partner with your security team on review, pen testing, and data handling.',
    primaryCta: {label: 'Book a review', href: '/contact', variant: 'primary'},
    secondaryCta: {label: 'Download overview', href: '/security', variant: 'ghost'},
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
