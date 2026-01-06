export const SITE_SETTINGS_QUERY = `
*[_type == "siteSettings"][0]{
  brandName,
  logoText,
  primaryCta,
  secondaryCta,
  navLinks,
  footerColumns[]{
    heading,
    links[]{label, href}
  },
  socialLinks[]{label, href},
  announcementBar
}`

export const HOME_PAGE_QUERY = `
*[_type == "pageHome"][0]{
  seo{title, description, ogImage{ "url": asset->url}},
  hero,
  socialProof{
    proofLine,
    logos[]{name, "url": logo.asset->url}
  },
  features,
  howItWorks,
  integrations,
  testimonials,
  faq,
  finalCta
}`

export const PRICING_PAGE_QUERY = `
*[_type == "pagePricing"][0]{
  seo{title, description, ogImage{ "url": asset->url}},
  heading,
  subheading,
  faqHeading,
  tiers,
  faq
}`

export const SECURITY_PAGE_QUERY = `
*[_type == "pageSecurity"][0]{
  seo{title, description, ogImage{ "url": asset->url}},
  heading,
  subheading,
  trustBlocks,
  complianceHeading,
  complianceList,
  finalCta
}`

export const ABOUT_PAGE_QUERY = `
*[_type == "pageAbout"][0]{
  seo{title, description, ogImage{ "url": asset->url}},
  heading,
  subheading,
  pillars,
  teamHighlight
}`

export const CONTACT_PAGE_QUERY = `
*[_type == "pageContact"][0]{
  seo{title, description, ogImage{ "url": asset->url}},
  heading,
  subheading,
  contactMethods,
  cta
}`
