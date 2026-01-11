import {
  BuiltForSection,
  DailyBriefSection,
  FinalCTASection,
  HeroSection,
  HowItWorksSection,
  IntegrationsSection,
  SocialProofSection,
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
      <BuiltForSection content={pageData.builtFor} />
      <HowItWorksSection
        steps={pageData.howItWorks?.steps}
        heading={pageData.howItWorks?.heading}
        subheading={pageData.howItWorks?.subheading}
        calloutTitle={pageData.howItWorks?.calloutTitle}
        calloutBody={pageData.howItWorks?.calloutBody}
        calloutIconKey={pageData.howItWorks?.calloutIconKey}
      />
      <IntegrationsSection integrations={pageData.integrations} />
      <DailyBriefSection content={pageData.dailyBrief} />
      <FinalCTASection
        headline={pageData.finalCta?.headline}
        subhead={pageData.finalCta?.subhead}
        primaryCta={pageData.finalCta?.primaryCta}
        secondaryCta={pageData.finalCta?.secondaryCta}
      />
    </>
  )
}
