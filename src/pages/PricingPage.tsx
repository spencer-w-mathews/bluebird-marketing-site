import styled from 'styled-components'
import {FAQSection} from '../components/sections/FAQSection'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {Card} from '../components/ui/Card'
import {Section} from '../components/ui/Section'
import {Button} from '../components/ui/Button'
import {PRICING_PAGE_QUERY} from '../sanity/queries'
import type {PricingPage as PricingPageType, PricingTier} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackPricingPage} from '../sanity/fallbacks'

const Title = styled.h1`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: ${({theme}) => theme.typography.h1};
  color: ${({theme}) => theme.colors.navy};
`

const Subtitle = styled.p`
  margin: 0;
  max-width: 640px;
  color: ${({theme}) => theme.colors.muted};
  line-height: 1.7;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

const TierCard = styled(Card)<{$featured?: boolean}>`
  border: 1px solid ${({theme, $featured}) => ($featured ? theme.colors.slate : theme.colors.border)};
  box-shadow: ${({theme, $featured}) => ($featured ? theme.shadows.strong : theme.shadows.outline)};
`

const Highlight = styled.li`
  margin-bottom: 8px;
  color: ${({theme}) => theme.colors.muted};
`

const Price = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.navy};
  margin: 6px 0;
`

const Tier = ({tier}: {tier: PricingTier}) => (
  <TierCard $featured={tier.featured}>
    {tier.name ? <h3 style={{marginTop: 0}}>{tier.name}</h3> : null}
    {tier.priceMonthly ? <Price>{tier.priceMonthly}</Price> : null}
    {tier.priceAnnual ? <p style={{margin: '0 0 8px', color: '#4c5f73'}}>Annual: {tier.priceAnnual}</p> : null}
    {tier.description ? <p style={{marginTop: 0, color: '#4c5f73'}}>{tier.description}</p> : null}
    {tier.highlights?.length ? (
      <ul style={{padding: 0, listStyle: 'none', margin: '12px 0'}}>
        {tier.highlights.map((item) => (item ? <Highlight key={item}>• {item}</Highlight> : null))}
      </ul>
    ) : null}
    {tier.ctaLabel && tier.ctaHref ? (
      <Button as="a" href={tier.ctaHref} variant={tier.featured ? 'primary' : 'secondary'} fullWidth>
        {tier.ctaLabel}
      </Button>
    ) : null}
  </TierCard>
)

export const PricingPage = () => {
  const {data, loading, error} = useSanityDoc<PricingPageType>(PRICING_PAGE_QUERY)
  const pageData = data ?? fallbackPricingPage

  if (loading && !data) return <LoadingState />
  if (error && !data) return <ErrorState message={error.message} />

  return (
    <>
      <Section>
        {pageData.heading ? <Title>{pageData.heading}</Title> : null}
        {pageData.subheading ? <Subtitle>{pageData.subheading}</Subtitle> : null}
      </Section>
      {pageData.tiers?.length ? (
        <Section>
          <Grid>
            {pageData.tiers.map((tier) => (tier ? <Tier key={tier.name} tier={tier} /> : null))}
          </Grid>
        </Section>
      ) : null}
      {pageData.faq?.length ? <FAQSection heading={pageData.faqHeading} items={pageData.faq} /> : null}
    </>
  )
}
