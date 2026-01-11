import {useMemo} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {FinalCTASection} from '../components/sections/homeSections/FinalCTASection'
import {Card} from '../components/ui/Card'
import {Container} from '../components/ui/Container'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {WHO_WE_SERVE_PAGE_QUERY} from '../sanity/queries'
import type {WhoWeServePage as WhoWeServePageType} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackWhoWeServePages} from '../sanity/fallbacks'

const Section = styled.section<{ $tone?: 'muted' | 'plain' }>`
  padding: clamp(56px, 10vh, 100px) 0;
  background: ${({$tone}) => ($tone === 'muted' ? '#eef3f7' : '#ffffff')};
`

const HeroEyebrow = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  font-weight: 600;
  color: ${({theme}) => theme.colors.forest};
  text-transform: uppercase;
  margin-bottom: ${({theme}) => theme.spacing.sm};
`

const HeroTitle = styled.h1`
  margin: 0 0 ${({theme}) => theme.spacing.md};
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  color: ${({theme}) => theme.colors.navy};
  letter-spacing: -0.02em;
`

const HeroIntro = styled.p`
  margin: 0;
  max-width: 640px;
  color: rgba(20, 34, 52, 0.72);
  line-height: 1.7;
`

const SectionTitle = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.md};
  text-align: center;
  color: ${({theme}) => theme.colors.navy};
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

const CardTitle = styled.h3`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  color: ${({theme}) => theme.colors.navy};
  font-size: 1.05rem;
`

const CardBody = styled.p`
  margin: 0;
  color: rgba(20, 34, 52, 0.7);
  line-height: 1.6;
`

const DeliverBlock = styled.div`
  text-align: center;
`

const DeliverSubhead = styled.p`
  margin: 0 0 ${({theme}) => theme.spacing.lg};
  color: rgba(20, 34, 52, 0.7);
`

const DeliverList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 620px;
  display: grid;
  gap: ${({theme}) => theme.spacing.sm};
`

const DeliverItem = styled.li`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: ${({theme}) => theme.spacing.sm};
  align-items: start;
  text-align: left;
  color: rgba(20, 34, 52, 0.76);
  line-height: 1.6;
`

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E734C" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5 11 15l4.5-5" />
  </svg>
)

const ComplianceNote = styled.p`
  margin: ${({theme}) => theme.spacing.md} auto 0;
  max-width: 720px;
  text-align: center;
  color: rgba(20, 34, 52, 0.6);
  line-height: 1.6;
`

const ToolsRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.md};
  margin-top: ${({theme}) => theme.spacing.md};
`

const ToolPill = styled.span`
  padding: 10px 22px;
  border-radius: ${({theme}) => theme.radii.pill};
  border: 1px solid #2E734C;
  color: ${({theme}) => theme.colors.navy};
  background: #ffffff;
  font-weight: 600;
  min-width: 160px;
  text-align: center;
`

const ToolsNote = styled.p`
  margin: ${({theme}) => theme.spacing.md} auto 0;
  text-align: center;
  color: rgba(20, 34, 52, 0.6);
  max-width: 640px;
`

const SampleFrame = styled.div`
  max-width: 520px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 18px;
  padding: ${({theme}) => theme.spacing.lg};
  border: 1px solid ${({theme}) => theme.colors.border};
  box-shadow: ${({theme}) => theme.shadows.soft};
`

const SampleImage = styled.img`
  width: 100%;
  border-radius: 12px;
  display: block;
`

export const WhoWeServePage = () => {
  const {slug} = useParams()
  const {data, loading, error} = useSanityDoc<WhoWeServePageType>(WHO_WE_SERVE_PAGE_QUERY, {slug})
  const fallback = useMemo(
    () => fallbackWhoWeServePages.find((page) => page.slug?.current === slug),
    [slug],
  )
  const pageData = data ?? fallback

  if (loading && !data) return <LoadingState />
  if (error && !data && !pageData) return <ErrorState message={error.message} />
  if (!pageData) return <ErrorState message="Page not found." />

  return (
    <>
      <Section>
        <Container>
          {pageData.hero?.eyebrow ? <HeroEyebrow>{pageData.hero.eyebrow}</HeroEyebrow> : null}
          {pageData.hero?.headline ? <HeroTitle>{pageData.hero.headline}</HeroTitle> : null}
          {pageData.hero?.intro ? <HeroIntro>{pageData.hero.intro}</HeroIntro> : null}
        </Container>
      </Section>

      {pageData.challenges?.items?.length ? (
        <Section $tone="muted">
          <Container>
            {pageData.challenges.heading ? <SectionTitle>{pageData.challenges.heading}</SectionTitle> : null}
            <CardsGrid>
              {pageData.challenges.items.map((item, idx) =>
                item ? (
                  <Card key={item.title || idx}>
                    {item.title ? <CardTitle>{item.title}</CardTitle> : null}
                    {item.description ? <CardBody>{item.description}</CardBody> : null}
                  </Card>
                ) : null,
              )}
            </CardsGrid>
          </Container>
        </Section>
      ) : null}

      {pageData.delivers?.items?.length ? (
        <Section>
          <Container>
            <DeliverBlock>
              {pageData.delivers.heading ? <SectionTitle>{pageData.delivers.heading}</SectionTitle> : null}
              {pageData.delivers.subheading ? <DeliverSubhead>{pageData.delivers.subheading}</DeliverSubhead> : null}
              <DeliverList>
                {pageData.delivers.items.map((item) => (
                  <DeliverItem key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </DeliverItem>
                ))}
              </DeliverList>
            </DeliverBlock>
          </Container>
        </Section>
      ) : null}

      {pageData.compliance?.items?.length ? (
        <Section $tone="muted">
          <Container>
            {pageData.compliance.heading ? <SectionTitle>{pageData.compliance.heading}</SectionTitle> : null}
            <CardsGrid>
              {pageData.compliance.items.map((item, idx) =>
                item ? (
                  <Card key={item.title || idx}>
                    {item.title ? <CardTitle>{item.title}</CardTitle> : null}
                    {item.description ? <CardBody>{item.description}</CardBody> : null}
                  </Card>
                ) : null,
              )}
            </CardsGrid>
            {pageData.compliance.note ? <ComplianceNote>{pageData.compliance.note}</ComplianceNote> : null}
          </Container>
        </Section>
      ) : null}

      {pageData.tools?.items?.length ? (
        <Section>
          <Container>
            {pageData.tools.heading ? <SectionTitle>{pageData.tools.heading}</SectionTitle> : null}
            <ToolsRow>
              {pageData.tools.items.map((item, idx) =>
                item?.label ? <ToolPill key={`${item.label}-${idx}`}>{item.label}</ToolPill> : null,
              )}
            </ToolsRow>
            {pageData.tools.note ? <ToolsNote>{pageData.tools.note}</ToolsNote> : null}
          </Container>
        </Section>
      ) : null}

      {pageData.sample?.image?.url ? (
        <Section $tone="muted">
          <Container>
            <SampleFrame>
              <SampleImage src={pageData.sample.image.url} alt={pageData.sample.imageAlt || 'Sample preview'} />
            </SampleFrame>
          </Container>
        </Section>
      ) : null}

      <FinalCTASection
        headline={pageData.cta?.headline}
        subhead={pageData.cta?.subhead}
        primaryCta={pageData.cta?.primaryCta}
        secondaryCta={pageData.cta?.secondaryCta}
      />
    </>
  )
}
