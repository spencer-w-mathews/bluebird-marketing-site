import styled from 'styled-components'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {Card} from '../components/ui/Card'
import {Section} from '../components/ui/Section'
import {Button} from '../components/ui/Button'
import {PRICING_PAGE_QUERY} from '../sanity/queries'
import type {PricingPage as PricingPageType, PricingTier} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackPricingPage} from '../sanity/fallbacks'
import {FAQSection} from '../components/sections/FAQSection'

const Title = styled.h1`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: clamp(2.4rem, 4.2vw, 3.6rem);
  color: ${({theme}) => theme.colors.navy};
  letter-spacing: -0.02em;
`

const Subtitle = styled.p`
  margin: 0;
  max-width: 680px;
  color: #3b4f66;
  line-height: 1.7;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
  align-items: stretch;
`

const Eyebrow = styled.div<{$featured?: boolean}>`
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({$featured}) => ($featured ? '#c9d8e6' : '#41556b')};
  font-weight: 600;
`

const TierName = styled.h3`
  margin: ${({theme}) => theme.spacing.xs} 0 0;
  color: ${({theme}) => theme.colors.navy};
`

const SubLabel = styled.div<{$featured?: boolean}>`
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({$featured}) => ($featured ? '#d4e2ef' : '#4c5f73')};
  font-weight: 600;
  margin-bottom: ${({theme}) => theme.spacing.sm};
`

const TierCard = styled(Card)<{$featured?: boolean}>`
  border: 1px solid ${({theme, $featured}) => ($featured ? 'rgba(24, 208, 138, 0.45)' : theme.colors.border)};
  box-shadow: ${({theme, $featured}) => ($featured ? theme.shadows.strong : theme.shadows.outline)};
  background: ${({$featured}) => ($featured ? '#2f4760' : '#ffffff')};
  color: ${({$featured}) => ($featured ? '#f7faff' : 'inherit')};
`

const FeaturedName = styled.h3`
  margin: ${({theme}) => theme.spacing.xs} 0 0;
  color: #f7faff;
`

const Price = styled.div<{$featured?: boolean}>`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${({$featured, theme}) => ($featured ? '#ffffff' : theme.colors.navy)};
  margin: 6px 0;
`

const Description = styled.p<{$featured?: boolean}>`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  color: ${({$featured}) => ($featured ? '#eaf1f8' : '#3b4f66')};
  line-height: 1.6;
`

const AnnualPrice = styled.p<{$featured?: boolean}>`
  margin: 0 0 8px;
  color: ${({$featured}) => ($featured ? '#d9e3ee' : '#3b4f66')};
  line-height: 1.5;
`

const Highlight = styled.li<{$featured?: boolean}>`
  margin-bottom: 8px;
  color: ${({$featured}) => ($featured ? '#e6eef7' : '#3b4f66')};
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: ${({theme}) => theme.spacing.xs};
  align-items: start;
`

const HighlightList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 12px 0 0;
`

const Footnote = styled.p<{$featured?: boolean}>`
  margin: ${({theme}) => theme.spacing.md} 0 0;
  font-size: 0.85rem;
  color: ${({$featured}) => ($featured ? '#d9e3ee' : '#4c5f73')};
  line-height: 1.6;
`

const TrustRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

const TrustCard = styled(Card)`
  padding: ${({theme}) => theme.spacing.lg};
`

const TrustTitle = styled.h4`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  color: ${({theme}) => theme.colors.navy};
`

const TrustBody = styled.p`
  margin: 0;
  color: #3b4f66;
  line-height: 1.6;
`

const Tier = ({tier}: {tier: PricingTier}) => (
  <TierCard $featured={tier.featured}>
    {tier.eyebrow ? <Eyebrow $featured={tier.featured}>{tier.eyebrow}</Eyebrow> : null}
    {tier.name ? (tier.featured ? <FeaturedName>{tier.name}</FeaturedName> : <TierName>{tier.name}</TierName>) : null}
    {tier.subLabel ? <SubLabel $featured={tier.featured}>{tier.subLabel}</SubLabel> : null}
    {tier.priceMonthly ? <Price $featured={tier.featured}>{tier.priceMonthly}</Price> : null}
    {tier.priceAnnual ? <AnnualPrice $featured={tier.featured}>{tier.priceAnnual}</AnnualPrice> : null}
    {tier.description ? <Description $featured={tier.featured}>{tier.description}</Description> : null}
    {tier.highlights?.length ? (
      <HighlightList>
        {tier.highlights.map((item) =>
          item ? (
            <Highlight key={item} $featured={tier.featured}>
              <span>✓</span>
              <span>{item}</span>
            </Highlight>
          ) : null,
        )}
      </HighlightList>
    ) : null}
    {tier.footnote ? <Footnote $featured={tier.featured}>{tier.footnote}</Footnote> : null}
    {tier.ctaLabel && tier.ctaHref ? (
      <Button
        href={tier.ctaHref}
        variant={tier.featured ? 'primary' : 'secondary'}
        fullWidth
        style={
          tier.featured
            ? {background: '#2E734C', color: '#ffffff', border: 'none', boxShadow: 'none'}
            : {background: '#2f4760', color: '#ffffff', border: 'none', boxShadow: 'none'}
        }
      >
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
      {pageData.trustBlocks?.length ? (
        <Section>
          <TrustRow>
            {pageData.trustBlocks.map((block, idx) =>
              block ? (
                <TrustCard key={block.title || idx}>
                  {block.title ? <TrustTitle>{block.title}</TrustTitle> : null}
                  {block.description ? <TrustBody>{block.description}</TrustBody> : null}
                </TrustCard>
              ) : null,
            )}
          </TrustRow>
        </Section>
      ) : null}
      <FAQSection heading={pageData.faqHeading} items={pageData.faq} />
    </>
  )
}
