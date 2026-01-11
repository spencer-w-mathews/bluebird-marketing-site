export type CTA = {
  label?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export type NavLink = {label?: string; href?: string}
export type FooterLink = {label?: string; href?: string}
export type FooterColumn = {heading?: string; links?: FooterLink[]}
export type SocialLink = {label?: string; href?: string}

export type AnnouncementBar = {
  enabled?: boolean
  text?: string
  linkLabel?: string
  linkHref?: string
}

export type SEO = {
  title?: string
  description?: string
  ogImage?: {url?: string}
}

export type SiteSettings = {
  brandName?: string
  logoText?: string
  logoImage?: {url?: string}
  footerDescription?: string
  whoWeServeNav?: {label?: string; enabled?: boolean}
  primaryCta?: CTA
  secondaryCta?: CTA
  navLinks?: NavLink[]
  footerColumns?: FooterColumn[]
  footerBottomLinks?: FooterLink[]
  footerCopyright?: string
  socialLinks?: SocialLink[]
  announcementBar?: AnnouncementBar
}

export type HeroContent = {
  headline?: string
  subhead?: string
  primaryCta?: CTA
  secondaryCta?: CTA
  heroHighlights?: string[]
  heroImages?: {url?: string; alt?: string}[]
}

export type FeatureItem = {
  title?: string
  description?: string
  iconKey?: string
}

export type HomePage = {
  seo?: SEO
  hero?: HeroContent
  socialProof?: {proofLine?: string; logos?: {name?: string; url?: string}[]}
  builtFor?: {
    heading?: string
    subheading?: string
    stats?: {value?: string; label?: string; note?: string}[]
    roles?: string[]
    industriesLine?: string
  }
  dailyBrief?: {
    heading?: string
    lead?: string
    paragraphs?: string[]
    image?: {url?: string}
    imageAlt?: string
  }
  features?: {sectionHeading?: string; sectionSubheading?: string; items?: FeatureItem[]}
  howItWorks?: {
    heading?: string
    subheading?: string
    steps?: {title?: string; description?: string}[]
    calloutTitle?: string
    calloutBody?: string
    calloutIconKey?: string
  }
  integrations?: {
    heading?: string
    subheading?: string
    cards?: {title?: string; description?: string; iconKey?: string}[]
    complianceHeading?: string
    complianceSubheading?: string
    complianceBody?: string
    primaryCta?: CTA
    secondaryCta?: CTA
  }
  testimonials?: {heading?: string; items?: {quote?: string; name?: string; role?: string; company?: string}[]}
  faq?: {heading?: string; items?: {question?: string; answer?: string}[]}
  finalCta?: {headline?: string; subhead?: string; primaryCta?: CTA; secondaryCta?: CTA}
}

export type WhoWeServePage = {
  title?: string
  navLabel?: string
  slug?: {current?: string}
  order?: number
  hero?: {
    eyebrow?: string
    headline?: string
    intro?: string
  }
  challenges?: {
    heading?: string
    items?: {title?: string; description?: string}[]
  }
  delivers?: {
    heading?: string
    subheading?: string
    items?: string[]
  }
  compliance?: {
    heading?: string
    items?: {title?: string; description?: string}[]
    note?: string
  }
  tools?: {
    heading?: string
    items?: {label?: string}[]
    note?: string
  }
  sample?: {
    image?: {url?: string}
    imageAlt?: string
  }
  cta?: {
    headline?: string
    subhead?: string
    primaryCta?: CTA
    secondaryCta?: CTA
  }
}

export type HowItWorksPage = {
  hero?: {headline?: string; subhead?: string}
  process?: {
    heading?: string
    subheading?: string
    steps?: {title?: string; description?: string; iconKey?: string}[]
  }
  review?: {
    eyebrow?: string
    heading?: string
    body?: string
    bullets?: string[]
    image?: {url?: string}
    imageAlt?: string
  }
  personalization?: {
    eyebrow?: string
    heading?: string
    body?: string
    bullets?: string[]
    image?: {url?: string}
    imageAlt?: string
  }
  modes?: {
    heading?: string
    subheading?: string
    cards?: {title?: string; description?: string}[]
  }
  finalCta?: {
    headline?: string
    subhead?: string
    primaryCta?: CTA
    secondaryCta?: CTA
  }
}

export type PricingTier = {
  name?: string
  eyebrow?: string
  subLabel?: string
  priceMonthly?: string
  priceAnnual?: string
  description?: string
  highlights?: string[]
  footnote?: string
  ctaLabel?: string
  ctaHref?: string
  featured?: boolean
}

export type PricingPage = {
  seo?: SEO
  heading?: string
  subheading?: string
  faqHeading?: string
  tiers?: PricingTier[]
  trustBlocks?: {title?: string; description?: string}[]
  faq?: {question?: string; answer?: string}[]
}

export type SecurityPage = {
  seo?: SEO
  heading?: string
  subheading?: string
  securityPosture?: {
    heading?: string
    subheading?: string
    cards?: {title?: string; description?: string; iconKey?: string}[]
  }
  dataPractices?: {
    eyebrow?: string
    heading?: string
    blocks?: {title?: string; description?: string}[]
    adminPanel?: {
      heading?: string
      subheading?: string
      items?: {label?: string; status?: string}[]
      footnote?: string
    }
  }
  compliance?: {
    heading?: string
    subheading?: string
    items?: {label?: string; status?: string; note?: string}[]
    footnote?: string
  }
  integrations?: {
    heading?: string
    subheading?: string
    body?: string
    cards?: {label?: string; status?: string; description?: string}[]
    footnote?: string
  }
  responsibleAi?: {
    eyebrow?: string
    heading?: string
    subheading?: string
    bullets?: string[]
  }
  finalCta?: {headline?: string; subhead?: string; primaryCta?: CTA; secondaryCta?: CTA}
}

export type AboutPage = {
  seo?: SEO
  heading?: string
  subheading?: string
  pillars?: {title?: string; description?: string}[]
  teamHighlight?: string
}

export type ContactPage = {
  seo?: SEO
  heading?: string
  subheading?: string
  contactMethods?: {label?: string; value?: string; href?: string}[]
  cta?: CTA
}

export type ProductPage = {
  hero?: {heading?: string; bullets?: string[]}
  overview?: {heading?: string; bullets?: string[]; image?: {url?: string}; imageAlt?: string}
  clarity?: {heading?: string; bullets?: string[]; image?: {url?: string}; imageAlt?: string}
  featureGrid?: {
    heading?: string
    subheading?: string
    items?: {
      label?: string
      title?: string
      description?: string
      image?: {url?: string}
      imageAlt?: string
      imageSide?: 'left' | 'right'
    }[]
  }
  dailyBrief?: {heading?: string; lead?: string; paragraphs?: string[]; image?: {url?: string}; imageAlt?: string}
  availability?: {heading?: string; subheading?: string; cards?: {title?: string; status?: string; items?: string[]}[]}
  finalCta?: {headline?: string; subhead?: string; primaryCta?: CTA; secondaryCta?: CTA}
}
