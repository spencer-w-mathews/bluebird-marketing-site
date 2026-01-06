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
  primaryCta?: CTA
  secondaryCta?: CTA
  navLinks?: NavLink[]
  footerColumns?: FooterColumn[]
  socialLinks?: SocialLink[]
  announcementBar?: AnnouncementBar
}

export type HeroContent = {
  headline?: string
  subhead?: string
  primaryCta?: CTA
  secondaryCta?: CTA
  heroHighlights?: string[]
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
  features?: {sectionHeading?: string; sectionSubheading?: string; items?: FeatureItem[]}
  howItWorks?: {heading?: string; subheading?: string; steps?: {title?: string; description?: string}[]}
  integrations?: {heading?: string; items?: {name?: string; description?: string}[]}
  testimonials?: {heading?: string; items?: {quote?: string; name?: string; role?: string; company?: string}[]}
  faq?: {heading?: string; items?: {question?: string; answer?: string}[]}
  finalCta?: {headline?: string; subhead?: string; primaryCta?: CTA; secondaryCta?: CTA}
}

export type PricingTier = {
  name?: string
  priceMonthly?: string
  priceAnnual?: string
  description?: string
  highlights?: string[]
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
  faq?: {question?: string; answer?: string}[]
}

export type SecurityPage = {
  seo?: SEO
  heading?: string
  subheading?: string
  trustBlocks?: {title?: string; description?: string}[]
  complianceHeading?: string
  complianceList?: {label?: string; description?: string}[]
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
