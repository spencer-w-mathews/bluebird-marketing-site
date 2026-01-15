import styled from 'styled-components'
import {FinalCTASection} from '../components/sections/homeSections/FinalCTASection'
import {Card} from '../components/ui/Card'
import {Container} from '../components/ui/Container'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {HOW_IT_WORKS_PAGE_QUERY} from '../sanity/queries'
import type {HowItWorksPage as HowItWorksPageType} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackHowItWorksPage} from '../sanity/fallbacks'
import type { JSX } from 'react'

const Section = styled.section<{ $tone?: 'muted' | 'dark' }>`
  padding: clamp(56px, 10vh, 100px) 0;
  background: ${({$tone, theme}) =>
    $tone === 'dark' ? '#364d65' : $tone === 'muted' ? '#eef3f7' : theme.colors.cream};
  color: ${({$tone, theme}) => ($tone === 'dark' ? '#f2f6fb' : theme.colors.text)};
`

const HeroTitle = styled.h1`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: clamp(2.4rem, 4.4vw, 3.6rem);
  color: ${({theme}) => theme.colors.navy};
  letter-spacing: -0.02em;
  padding-top: 0px;
`

const HeroSubhead = styled.p`
  margin: 0;
  max-width: 640px;
  color: rgba(20, 34, 52, 0.72);
  line-height: 1.7;
`

const Centered = styled.div`
  text-align: center;
`

const SectionTitle = styled.h2<{ $tone?: 'dark' | 'light' }>`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  color: ${({$tone, theme}) => ($tone === 'dark' ? '#f7faff' : theme.colors.navy)};
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
`

const DarkTitle = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  color: #f8fbff;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
`

const DarkSubhead = styled.p`
  margin: 0 0 ${({theme}) => theme.spacing.xl};
  color: rgba(240, 246, 252, 0.72);
`
const LightSubhead = styled.p`
  margin: 0 0 ${({theme}) => theme.spacing.xl};
  color: rgba(20, 34, 52, 0.72);
`

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.lg};

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`

const ProcessCard = styled(Card)`
  padding: ${({theme}) => theme.spacing.lg};
`

const StepMeta = styled.div`
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: rgba(20, 34, 52, 0.55);
  text-transform: uppercase;
  margin-bottom: ${({theme}) => theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.xs};
`

const IconBadge = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(35, 66, 97, 0.1);
  color: ${({theme}) => theme.colors.navy};
  display: grid;
  place-items: center;
`

const StepTitle = styled.h3`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  color: ${({theme}) => theme.colors.navy};
`

const StepBody = styled.p`
  margin: 0;
  color: rgba(20, 34, 52, 0.7);
  line-height: 1.6;
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

const Split = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.xl};
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

const Eyebrow = styled.span<{ $tone?: 'dark' | 'light' }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({$tone, theme}) => ($tone === 'dark' ? '#2E734C' : theme.colors.forest)};
  margin-bottom: ${({theme}) => theme.spacing.sm};
`

const SplitTitle = styled.h2<{ $tone?: 'dark' | 'light' }>`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: ${({$tone, theme}) => ($tone === 'dark' ? '#f7faff' : theme.colors.navy)};
`

const SplitBody = styled.p<{ $tone?: 'dark' | 'light' }>`
  margin: 0 0 ${({theme}) => theme.spacing.md};
  color: ${({$tone}) => ($tone === 'dark' ? 'rgba(240, 246, 252, 0.75)' : 'rgba(20, 34, 52, 0.7)')};
  line-height: 1.6;
`

const BulletList = styled.ul<{ $tone?: 'dark' | 'light' }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: ${({theme}) => theme.spacing.sm};
  color: ${({$tone}) => ($tone === 'dark' ? 'rgba(240, 246, 252, 0.78)' : 'rgba(20, 34, 52, 0.75)')};
`

const BulletItem = styled.li`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: ${({theme}) => theme.spacing.sm};
  align-items: start;
`

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E734C" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5 11 15l4.5-5" />
  </svg>
)

const ImageFrame = styled.div<{ $tone?: 'dark' | 'light' }>`
  background: #ffffff;
  border-radius: 16px;
  padding: ${({theme}) => theme.spacing.lg};
  border: 1px solid ${({theme}) => theme.colors.border};
  box-shadow: ${({theme}) => theme.shadows.soft};
`

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
`

const Placeholder = styled.div<{ $tone?: 'dark' | 'light' }>`
  height: 240px;
  border-radius: 12px;
  background: ${({$tone}) =>
    $tone === 'dark'
      ? 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.18))'
      : 'linear-gradient(135deg, rgba(35,66,97,0.08), rgba(35,66,97,0.02))'};
  display: grid;
  place-items: center;
  color: rgba(20, 34, 52, 0.45);
  font-weight: 600;
`

const ModesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
  max-width: 720px;
  margin: 0 auto;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const iconMap: Record<string, JSX.Element> = {
  connect: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 7h10M7 17h10" />
      <path d="M10 4 7 7l3 3M14 20l3-3-3-3" />
    </svg>
  ),
  ingest: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 8h12v8H6z" />
      <path d="M12 3v5M12 16v5" />
    </svg>
  ),
  interpret: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  produce: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12l4 4L19 7" />
    </svg>
  ),
}

export const HowItWorksPage = () => {
  const {data, loading, error} = useSanityDoc<HowItWorksPageType>(HOW_IT_WORKS_PAGE_QUERY)
  const pageData = data ?? fallbackHowItWorksPage

  if (loading && !data) return <LoadingState />
  if (error && !data) return <ErrorState message={error.message} />

  return (
    <>
      <Section>
        <Container>
          {pageData.hero?.headline ? <HeroTitle>{pageData.hero.headline}</HeroTitle> : null}
          {pageData.hero?.subhead ? <HeroSubhead>{pageData.hero.subhead}</HeroSubhead> : null}
        </Container>
      </Section>

      {pageData.process?.steps?.length ? (
        <Section $tone="dark">
          <Container>
            <Centered>
              {pageData.process.heading ? <DarkTitle>{pageData.process.heading}</DarkTitle> : null}
              {pageData.process.subheading ? <DarkSubhead>{pageData.process.subheading}</DarkSubhead> : null}
            </Centered>
            <ProcessGrid>
              {pageData.process.steps.map((step, idx) =>
                step ? (
                  <ProcessCard key={step.title || idx}>
                    <StepMeta>
                      <IconBadge>{iconMap[step.iconKey || ''] || <span>•</span>}</IconBadge>
                      Step {idx + 1}
                    </StepMeta>
                    {step.title ? <StepTitle>{step.title}</StepTitle> : null}
                    {step.description ? <StepBody>{step.description}</StepBody> : null}
                  </ProcessCard>
                ) : null,
              )}
            </ProcessGrid>
          </Container>
        </Section>
      ) : null}

      {(pageData.review?.heading || pageData.review?.bullets?.length) && (
        <Section>
          <Container>
            <Split>
              <div>
                {pageData.review?.eyebrow ? <Eyebrow>{pageData.review.eyebrow}</Eyebrow> : null}
                {pageData.review?.heading ? <SplitTitle>{pageData.review.heading}</SplitTitle> : null}
                {pageData.review?.body ? <SplitBody>{pageData.review.body}</SplitBody> : null}
                {pageData.review?.bullets?.length ? (
                  <BulletList>
                    {pageData.review.bullets.map((item) => (
                      <BulletItem key={item}>
                        <CheckIcon />
                        <span>{item}</span>
                      </BulletItem>
                    ))}
                  </BulletList>
                ) : null}
              </div>
              <ImageFrame>
                {pageData.review?.image?.url ? (
                  <Image src={pageData.review.image.url} alt={pageData.review.imageAlt || 'Review preview'} />
                ) : (
                  <Placeholder>Review preview</Placeholder>
                )}
              </ImageFrame>
            </Split>
          </Container>
        </Section>
      )}

      {(pageData.personalization?.heading || pageData.personalization?.bullets?.length) && (
        <Section $tone="dark">
          <Container>
            <Split>
              <ImageFrame>
                {pageData.personalization?.image?.url ? (
                  <Image
                    src={pageData.personalization.image.url}
                    alt={pageData.personalization.imageAlt || 'Preferences preview'}
                  />
                ) : (
                  <Placeholder $tone="dark">Preferences preview</Placeholder>
                )}
              </ImageFrame>
              <div>
                {pageData.personalization?.eyebrow ? (
                  <Eyebrow $tone="dark">{pageData.personalization.eyebrow}</Eyebrow>
                ) : null}
                {pageData.personalization?.heading ? (
                  <SplitTitle $tone="dark">{pageData.personalization.heading}</SplitTitle>
                ) : null}
                {pageData.personalization?.body ? (
                  <SplitBody $tone="dark">{pageData.personalization.body}</SplitBody>
                ) : null}
                {pageData.personalization?.bullets?.length ? (
                  <BulletList $tone="dark">
                    {pageData.personalization.bullets.map((item) => (
                      <BulletItem key={item}>
                        <CheckIcon />
                        <span>{item}</span>
                      </BulletItem>
                    ))}
                  </BulletList>
                ) : null}
              </div>
            </Split>
          </Container>
        </Section>
      )}

      {pageData.modes?.cards?.length ? (
        <Section>
          <Container>
            <Centered>
              {pageData.modes.heading ? <SectionTitle>{pageData.modes.heading}</SectionTitle> : null}
              {pageData.modes.subheading ? <LightSubhead>{pageData.modes.subheading}</LightSubhead> : null}
            </Centered>
            <ModesGrid>
              {pageData.modes.cards.map((card, idx) =>
                card ? (
                  <Card key={card.title || idx}>
                    {card.title ? <CardTitle>{card.title}</CardTitle> : null}
                    {card.description ? <CardBody>{card.description}</CardBody> : null}
                  </Card>
                ) : null,
              )}
            </ModesGrid>
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
