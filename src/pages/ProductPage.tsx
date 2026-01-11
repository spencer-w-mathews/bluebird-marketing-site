import styled from 'styled-components'
import {FinalCTASection} from '../components/sections/homeSections/FinalCTASection'
import {Container} from '../components/ui/Container'
import {Card} from '../components/ui/Card'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {PRODUCT_PAGE_QUERY} from '../sanity/queries'
import type {ProductPage as ProductPageType} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackProductPage} from '../sanity/fallbacks'
import dailyWarbleImage from '../assets/DailyWarble.png'

const Section = styled.section<{ $tone?: 'dark' | 'light' }>`
  padding: clamp(56px, 10vh, 100px) 0;
  background: ${({$tone}) => ($tone === 'dark' ? '#364d65' : '#ffffff')};
  color: ${({$tone}) => ($tone === 'dark' ? '#f2f6fb' : '#0d1626')};
`

const Title = styled.h1`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: clamp(2.4rem, 4.4vw, 3.6rem);
  color: ${({theme}) => theme.colors.navy};
  letter-spacing: -0.02em;
`

const BulletList = styled.ul<{ $tone?: 'dark' | 'light' }>`
  list-style: none;
  padding: 0;
  margin: ${({theme}) => theme.spacing.md} 0 0;
  display: grid;
  gap: ${({theme}) => theme.spacing.sm};
  color: ${({$tone}) => ($tone === 'dark' ? 'rgba(240, 246, 252, 0.78)' : 'rgba(20, 34, 52, 0.7)')};
`

const BulletItem = styled.li`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: ${({theme}) => theme.spacing.sm};
`

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#18d08a" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5 11 15l4.5-5" />
  </svg>
)

const Split = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.xl};
  align-items: center;

  ${({$reverse}) => $reverse && 'direction: rtl;'}

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    direction: ltr;
  }
`

const Copy = styled.div`
  direction: ltr;
`

const SplitHeading = styled.h2<{ $tone?: 'dark' | 'light' }>`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  color: ${({$tone, theme}) => ($tone === 'dark' ? '#f7faff' : theme.colors.navy)};
`

const BodyText = styled.p<{ $tone?: 'dark' | 'light' }>`
  margin: 0 0 ${({theme}) => theme.spacing.md};
  color: ${({$tone}) => ($tone === 'dark' ? 'rgba(240, 246, 252, 0.78)' : 'rgba(20, 34, 52, 0.7)')};
  line-height: 1.6;
`

const ImageFrame = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: ${({theme}) => theme.spacing.lg};
  border: 1px solid rgba(13, 22, 38, 0.08);
  box-shadow: 0 20px 50px rgba(13, 26, 43, 0.15);
  direction: ltr;
`

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  display: block;
`

const SectionTitle = styled.h2<{ $tone?: 'dark' | 'light' }>`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  text-align: center;
  color: ${({$tone, theme}) => ($tone === 'dark' ? '#f7faff' : theme.colors.navy)};
`

const SectionSubhead = styled.p<{ $tone?: 'dark' | 'light' }>`
  margin: 0 auto ${({theme}) => theme.spacing.xl};
  max-width: 640px;
  text-align: center;
  color: ${({$tone}) => ($tone === 'dark' ? 'rgba(240, 246, 252, 0.7)' : 'rgba(20, 34, 52, 0.7)')};
`

const FeatureList = styled.div`
  display: grid;
  gap: ${({theme}) => theme.spacing.xl};
`

const FeatureItem = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.xl};
  align-items: center;

  ${({$reverse}) => $reverse && 'direction: rtl;'}

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    direction: ltr;
  }
`

const FeatureLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #18d08a;
  font-weight: 600;
  margin-bottom: ${({theme}) => theme.spacing.sm};
`

const FeatureTitle = styled.h3`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  color: #f7faff;
`

const FeatureBody = styled.p`
  margin: 0;
  color: rgba(240, 246, 252, 0.75);
  line-height: 1.6;
`

const AvailabilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.lg};

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const AvailabilityCard = styled(Card)<{ $highlight?: boolean }>`
  border: 1px solid ${({$highlight}) => ($highlight ? '#18d08a' : 'rgba(13, 22, 38, 0.1)')};
  box-shadow: ${({theme}) => theme.shadows.outline};
`

const AvailabilityTitle = styled.h3`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  color: ${({theme}) => theme.colors.navy};
`

const AvailabilityStatus = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({theme}) => theme.colors.forest};
`

export const ProductPage = () => {
  const {data, loading, error} = useSanityDoc<ProductPageType>(PRODUCT_PAGE_QUERY)
  const pageData = data ?? fallbackProductPage

  if (loading && !data) return <LoadingState />
  if (error && !data) return <ErrorState message={error.message} />

  return (
    <>
      <Section>
        <Container>
          {pageData.hero?.heading ? <Title>{pageData.hero.heading}</Title> : null}
          {pageData.hero?.bullets?.length ? (
            <BulletList>
              {pageData.hero.bullets.map((item) => (
                <BulletItem key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </BulletItem>
              ))}
            </BulletList>
          ) : null}
        </Container>
      </Section>

      {pageData.overview?.heading ? (
        <Section $tone="dark">
          <Container>
            <Split>
              <Copy>
                <SplitHeading $tone="dark">{pageData.overview.heading}</SplitHeading>
                {pageData.overview.bullets?.length ? (
                  <BulletList $tone="dark">
                    {pageData.overview.bullets.map((item) => (
                      <BulletItem key={item}>
                        <CheckIcon />
                        <span>{item}</span>
                      </BulletItem>
                    ))}
                  </BulletList>
                ) : null}
              </Copy>
              <ImageFrame>
                {pageData.overview.image?.url ? (
                  <Image src={pageData.overview.image.url} alt={pageData.overview.imageAlt || 'Product preview'} />
                ) : (
                  <Image src={dailyWarbleImage} alt="Product preview" />
                )}
              </ImageFrame>
            </Split>
          </Container>
        </Section>
      ) : null}

      {pageData.clarity?.heading ? (
        <Section>
          <Container>
            <Split $reverse>
              <Copy>
                <SplitHeading>{pageData.clarity.heading}</SplitHeading>
                {pageData.clarity.bullets?.length ? (
                  <BulletList>
                    {pageData.clarity.bullets.map((item) => (
                      <BulletItem key={item}>
                        <CheckIcon />
                        <span>{item}</span>
                      </BulletItem>
                    ))}
                  </BulletList>
                ) : null}
              </Copy>
              <ImageFrame>
                {pageData.clarity.image?.url ? (
                  <Image src={pageData.clarity.image.url} alt={pageData.clarity.imageAlt || 'Clarity preview'} />
                ) : (
                  <Image src={dailyWarbleImage} alt="Clarity preview" />
                )}
              </ImageFrame>
            </Split>
          </Container>
        </Section>
      ) : null}

      {pageData.featureGrid?.items?.length ? (
        <Section $tone="dark">
          <Container>
            {pageData.featureGrid.heading ? (
              <SectionTitle $tone="dark">{pageData.featureGrid.heading}</SectionTitle>
            ) : null}
            {pageData.featureGrid.subheading ? (
              <SectionSubhead $tone="dark">{pageData.featureGrid.subheading}</SectionSubhead>
            ) : null}
            <FeatureList>
              {pageData.featureGrid.items.map((item, idx) => (
                <FeatureItem key={item.title || idx} $reverse={item.imageSide === 'left'}>
                  <Copy>
                    {item.label ? <FeatureLabel>{item.label}</FeatureLabel> : null}
                    {item.title ? <FeatureTitle>{item.title}</FeatureTitle> : null}
                    {item.description ? <FeatureBody>{item.description}</FeatureBody> : null}
                  </Copy>
                  <ImageFrame>
                    {item.image?.url ? (
                      <Image src={item.image.url} alt={item.imageAlt || item.title || 'Feature preview'} />
                    ) : (
                      <Image src={dailyWarbleImage} alt="Feature preview" />
                    )}
                  </ImageFrame>
                </FeatureItem>
              ))}
            </FeatureList>
          </Container>
        </Section>
      ) : null}

      {pageData.dailyBrief?.heading ? (
        <Section>
          <Container>
            <Split>
              <Copy>
                <SplitHeading>{pageData.dailyBrief.heading}</SplitHeading>
                {pageData.dailyBrief.lead ? <BodyText>{pageData.dailyBrief.lead}</BodyText> : null}
                {pageData.dailyBrief.paragraphs?.map((line) => (
                  <BodyText key={line}>{line}</BodyText>
                ))}
              </Copy>
              <ImageFrame>
                <Image
                  src={pageData.dailyBrief.image?.url || dailyWarbleImage}
                  alt={pageData.dailyBrief.imageAlt || 'Daily brief preview'}
                />
              </ImageFrame>
            </Split>
          </Container>
        </Section>
      ) : null}

      {pageData.availability?.cards?.length ? (
        <Section $tone="dark">
          <Container>
            {pageData.availability.heading ? (
              <SectionTitle $tone="dark">{pageData.availability.heading}</SectionTitle>
            ) : null}
            {pageData.availability.subheading ? (
              <SectionSubhead $tone="dark">{pageData.availability.subheading}</SectionSubhead>
            ) : null}
            <AvailabilityGrid>
              {pageData.availability.cards.map((card, idx) =>
                card ? (
                  <AvailabilityCard key={card.title || idx} $highlight={idx === 0}>
                    {card.title ? <AvailabilityTitle>{card.title}</AvailabilityTitle> : null}
                    {card.status ? <AvailabilityStatus>{card.status}</AvailabilityStatus> : null}
                    {card.items?.length ? (
                      <BulletList>
                        {card.items.map((item) => (
                          <BulletItem key={item}>
                            <CheckIcon />
                            <span>{item}</span>
                          </BulletItem>
                        ))}
                      </BulletList>
                    ) : null}
                  </AvailabilityCard>
                ) : null,
              )}
            </AvailabilityGrid>
          </Container>
        </Section>
      ) : null}

      <FinalCTASection
        headline={pageData.finalCta?.headline}
        subhead={pageData.finalCta?.subhead}
        primaryCta={pageData.finalCta?.primaryCta}
        secondaryCta={pageData.finalCta?.secondaryCta}
      />
    </>
  )
}
