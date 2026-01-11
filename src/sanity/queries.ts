export const SITE_SETTINGS_QUERY = `
*[_type == "siteSettings"][0]{
  brandName,
  logoText,
  logoImage{ "url": asset->url},
  footerDescription,
  whoWeServeNav,
  primaryCta,
  secondaryCta,
  navLinks,
  footerColumns[]{
    heading,
    links[]{label, href}
  },
  footerBottomLinks[]{label, href},
  footerCopyright,
  socialLinks[]{label, href},
  announcementBar
}`

export const WHO_WE_SERVE_LIST_QUERY = `
*[_type == "whoWeServePage"]|order(order asc, title asc){
  title,
  navLabel,
  slug{current},
  order
}`

export const WHO_WE_SERVE_PAGE_QUERY = `
*[_type == "whoWeServePage" && slug.current == $slug][0]{
  title,
  navLabel,
  slug{current},
  order,
  hero{
    eyebrow,
    headline,
    intro
  },
  challenges{
    heading,
    items[]{title, description}
  },
  delivers{
    heading,
    subheading,
    items
  },
  compliance{
    heading,
    items[]{title, description},
    note
  },
  tools{
    heading,
    items[]{label},
    note
  },
  sample{
    image{ "url": asset->url},
    imageAlt
  },
  cta{
    headline,
    subhead,
    primaryCta,
    secondaryCta
  }
}`

export const HOW_IT_WORKS_PAGE_QUERY = `
*[_type == "pageHowItWorks"][0]{
  hero{
    headline,
    subhead
  },
  process{
    heading,
    subheading,
    steps[]{title, description, iconKey}
  },
  review{
    eyebrow,
    heading,
    body,
    bullets,
    image{ "url": asset->url},
    imageAlt
  },
  personalization{
    eyebrow,
    heading,
    body,
    bullets,
    image{ "url": asset->url},
    imageAlt
  },
  modes{
    heading,
    subheading,
    cards[]{title, description}
  },
  finalCta{
    headline,
    subhead,
    primaryCta,
    secondaryCta
  }
}`

export const HOME_PAGE_QUERY = `
*[_type == "pageHome"][0]{
  seo{title, description, ogImage{ "url": asset->url}},
  hero{
    headline,
    subhead,
    primaryCta,
    secondaryCta,
    heroHighlights,
    heroImages[]{alt, "url": asset->url}
  },
  socialProof{
    proofLine,
    logos[]{name, "url": logo.asset->url}
  },
  builtFor,
  dailyBrief{
    heading,
    lead,
    paragraphs,
    image{ "url": asset->url},
    imageAlt
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
  trustBlocks,
  faq
}`

export const SECURITY_PAGE_QUERY = `
*[_type == "pageSecurity"][0]{
  seo{title, description, ogImage{ "url": asset->url}},
  heading,
  subheading,
  securityPosture{
    heading,
    subheading,
    cards[]{title, description, iconKey}
  },
  dataPractices{
    eyebrow,
    heading,
    blocks[]{title, description},
    adminPanel{
      heading,
      subheading,
      items[]{label, status},
      footnote
    }
  },
  compliance{
    heading,
    subheading,
    items[]{label, status, note},
    footnote
  },
  integrations{
    heading,
    subheading,
    body,
    cards[]{label, status, description},
    footnote
  },
  responsibleAi{
    eyebrow,
    heading,
    subheading,
    bullets
  },
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

export const PRODUCT_PAGE_QUERY = `
*[_type == "pageProduct"][0]{
  hero{heading, bullets},
  overview{heading, bullets, image{ "url": asset->url}, imageAlt},
  clarity{heading, bullets, image{ "url": asset->url}, imageAlt},
  featureGrid{
    heading,
    subheading,
    items[]{
      label,
      title,
      description,
      image{ "url": asset->url},
      imageAlt,
      imageSide
    }
  },
  dailyBrief{heading, lead, paragraphs, image{ "url": asset->url}, imageAlt},
  availability{heading, subheading, cards[]{title, status, items}},
  finalCta{headline, subhead, primaryCta, secondaryCta}
}`
