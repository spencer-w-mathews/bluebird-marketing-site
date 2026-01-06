import {
  FAQSection,
  FeaturesSection,
  FinalCTASection,
  HeroSection,
  HowItWorksSection,
  IntegrationsSection,
  SocialProofSection,
  TestimonialsSection,
} from '../components/sections'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {HOME_PAGE_QUERY} from '../sanity/queries'
import type {HomePage as HomePageType} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackHomePage} from '../sanity/fallbacks'

export const HomePage = () => {
  const {data, loading, error} = useSanityDoc<HomePageType>(HOME_PAGE_QUERY)
  const pageData = data ?? fallbackHomePage

  if (loading && !data) return <LoadingState />
  if (error && !data) return <ErrorState message={error.message} />

  return (
    <>
      <HeroSection content={pageData.hero} />
      <SocialProofSection socialProof={pageData.socialProof} />
      <FeaturesSection features={pageData.features} />
      <HowItWorksSection
        steps={pageData.howItWorks?.steps}
        heading={pageData.howItWorks?.heading}
        subheading={pageData.howItWorks?.subheading}
      />
      <IntegrationsSection items={pageData.integrations?.items} heading={pageData.integrations?.heading} />
      <TestimonialsSection items={pageData.testimonials?.items} heading={pageData.testimonials?.heading} />
      <FAQSection items={pageData.faq?.items} heading={pageData.faq?.heading} />
      <FinalCTASection
        headline={pageData.finalCta?.headline}
        subhead={pageData.finalCta?.subhead}
        primaryCta={pageData.finalCta?.primaryCta}
        secondaryCta={pageData.finalCta?.secondaryCta}
      />
    </>
  )
}
