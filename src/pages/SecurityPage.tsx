import styled from 'styled-components'
import {FinalCTASection} from '../components/sections/homeSections/FinalCTASection'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {Card} from '../components/ui/Card'
import {Container} from '../components/ui/Container'
import {SECURITY_PAGE_QUERY} from '../sanity/queries'
import type {SecurityPage as SecurityPageType} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackSecurityPage} from '../sanity/fallbacks'
import type { JSX } from 'react'

const Section = styled.section<{ $tone?: 'dark' | 'light' }>`
  padding: clamp(56px, 10vh, 100px) 0;
  background: ${({$tone}) => ($tone === 'dark' ? '#364d65' : '#ffffff')};
  color: ${({$tone}) => ($tone === 'dark' ? '#f2f6fb' : '#0d1626')};
`

const Title = styled.h1`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: clamp(2.4rem, 4.4vw, 3.6rem);
  color: ${({theme}) => theme.colors.navy};
`

const Subtitle = styled.p`
  margin: 0;
  max-width: 720px;
  color: rgba(20, 34, 52, 0.7);
  line-height: 1.7;
`

const DarkTitle = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  color: #f7faff;
  text-align: center;
`

const DarkSubhead = styled.p`
  margin: 0 0 ${({theme}) => theme.spacing.xl};
  color: rgba(240, 246, 252, 0.75);
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
  padding-top: 6px;
  overflow: visible;
`

const PostureCard = styled(Card)`
  padding: ${({theme}) => theme.spacing.lg};
`

const IconBadge = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({theme}) => theme.background.bluebirdRadial};
  color: #fff;
  display: grid;
  place-items: center;
  margin-bottom: ${({theme}) => theme.spacing.sm};
`

const CardTitle = styled.h3`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  color: ${({theme}) => theme.colors.navy};
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
  align-items: start;

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

const SectionTitle = styled.h2<{ $tone?: 'dark' | 'light' }>`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  color: ${({$tone, theme}) => ($tone === 'dark' ? '#f7faff' : theme.colors.navy)};
`

const BodyText = styled.p<{ $tone?: 'dark' | 'light' }>`
  margin: 0 0 ${({theme}) => theme.spacing.md};
  color: ${({$tone}) => ($tone === 'dark' ? 'rgba(240, 246, 252, 0.78)' : 'rgba(20, 34, 52, 0.7)')};
  line-height: 1.6;
`

const AdminCard = styled(Card)`
  padding: ${({theme}) => theme.spacing.lg};
`

const AdminItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(13, 22, 38, 0.08);
  padding: 10px 0;
  color: rgba(20, 34, 52, 0.7);

  &:last-child {
    border-bottom: none;
  }
`

const Status = styled.span`
  color: ${({theme}) => theme.colors.forest};
  font-weight: 600;
  font-size: 0.85rem;
`

const ComplianceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: ${({theme}) => theme.spacing.md};
`

const ComplianceCard = styled.div`
  background: #ffffff;
  border-radius: ${({theme}) => theme.radii.md};
  padding: ${({theme}) => theme.spacing.md};
  color: #0d1626;
  border: 1px solid rgba(13, 22, 38, 0.08);
  text-align: center;
`

const ComplianceLabel = styled.div`
  font-weight: 600;
`

const ComplianceStatus = styled.div`
  margin-top: 6px;
  font-size: 0.85rem;
  color: ${({theme}) => theme.colors.forest};
`

const ComplianceNote = styled.p`
  margin: ${({theme}) => theme.spacing.lg} auto 0;
  color: rgba(240, 246, 252, 0.7);
  text-align: center;
  max-width: 720px;
`

const IntegrationCard = styled(Card)`
  padding: ${({theme}) => theme.spacing.lg};
`

const IntegrationLabel = styled.h4`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  color: ${({theme}) => theme.colors.navy};
`

const IntegrationStatus = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: ${({theme}) => theme.colors.forest};
  font-weight: 600;
`

const IntegrationDesc = styled.p`
  margin: ${({theme}) => theme.spacing.xs} 0 0;
  color: rgba(20, 34, 52, 0.7);
`

const IntegrationFootnote = styled.p`
  margin: ${({theme}) => theme.spacing.md} 0 0;
  color: rgba(20, 34, 52, 0.65);
`

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({theme}) => theme.spacing.lg} 0 0;
  display: grid;
  gap: ${({theme}) => theme.spacing.sm};
`

const BulletItem = styled.li`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: ${({theme}) => theme.spacing.sm};
  color: rgba(240, 246, 252, 0.75);
`

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E734C" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5 11 15l4.5-5" />
  </svg>
)

const iconMap: Record<string, JSX.Element> = {
  lock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 1 1 8 0v3" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
    </svg>
  ),
  key: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="8" cy="15" r="4" />
      <path d="M12 15h9M16 15v-3M19 15v-2" />
    </svg>
  ),
  eye: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  ),
}

export const SecurityPage = () => {
  const {data, loading, error} = useSanityDoc<SecurityPageType>(SECURITY_PAGE_QUERY)
  const pageData = data ?? fallbackSecurityPage

  if (loading && !data) return <LoadingState />
  if (error && !data) return <ErrorState message={error.message} />

  return (
    <>
      <Section>
        <Container>
          {pageData.heading ? <Title>{pageData.heading}</Title> : null}
          {pageData.subheading ? <Subtitle>{pageData.subheading}</Subtitle> : null}
        </Container>
      </Section>

      {pageData.securityPosture?.cards?.length ? (
        <Section $tone="dark">
          <Container>
            {pageData.securityPosture.heading ? <DarkTitle>{pageData.securityPosture.heading}</DarkTitle> : null}
            {pageData.securityPosture.subheading ? <DarkSubhead>{pageData.securityPosture.subheading}</DarkSubhead> : null}
            <Grid>
              {pageData.securityPosture.cards.map((card, idx) =>
                card ? (
                  <PostureCard key={card.title || idx}>
                    <IconBadge>{iconMap[card.iconKey || ''] ?? iconMap.lock}</IconBadge>
                    {card.title ? <CardTitle>{card.title}</CardTitle> : null}
                    {card.description ? <CardBody>{card.description}</CardBody> : null}
                  </PostureCard>
                ) : null,
              )}
            </Grid>
          </Container>
        </Section>
      ) : null}

      {(pageData.dataPractices?.blocks?.length || pageData.dataPractices?.adminPanel) && (
        <Section>
          <Container>
            <Split>
              <div>
                {pageData.dataPractices?.eyebrow ? <Eyebrow>{pageData.dataPractices.eyebrow}</Eyebrow> : null}
                {pageData.dataPractices?.heading ? <SectionTitle>{pageData.dataPractices.heading}</SectionTitle> : null}
                {pageData.dataPractices?.blocks?.map((block, idx) =>
                  block ? (
                    <div key={block.title || idx}>
                      {block.title ? <CardTitle>{block.title}</CardTitle> : null}
                      {block.description ? <BodyText>{block.description}</BodyText> : null}
                    </div>
                  ) : null,
                )}
              </div>
              {pageData.dataPractices?.adminPanel ? (
                <AdminCard>
                  {pageData.dataPractices.adminPanel.heading ? (
                    <CardTitle>{pageData.dataPractices.adminPanel.heading}</CardTitle>
                  ) : null}
                  {pageData.dataPractices.adminPanel.subheading ? (
                    <CardBody>{pageData.dataPractices.adminPanel.subheading}</CardBody>
                  ) : null}
                  {pageData.dataPractices.adminPanel.items?.map((item, idx) =>
                    item ? (
                      <AdminItem key={item.label || idx}>
                        <span>{item.label}</span>
                        {item.status ? <Status>{item.status}</Status> : null}
                      </AdminItem>
                    ) : null,
                  )}
                  {pageData.dataPractices.adminPanel.footnote ? (
                    <BodyText>{pageData.dataPractices.adminPanel.footnote}</BodyText>
                  ) : null}
                </AdminCard>
              ) : null}
            </Split>
          </Container>
        </Section>
      )}

      {pageData.compliance?.items?.length ? (
        <Section $tone="dark">
          <Container>
            {pageData.compliance.heading ? <DarkTitle>{pageData.compliance.heading}</DarkTitle> : null}
            {pageData.compliance.subheading ? <DarkSubhead>{pageData.compliance.subheading}</DarkSubhead> : null}
            <ComplianceGrid>
              {pageData.compliance.items.map((item, idx) =>
                item ? (
                  <ComplianceCard key={item.label || idx}>
                    {item.label ? <ComplianceLabel>{item.label}</ComplianceLabel> : null}
                    {item.status ? <ComplianceStatus>{item.status}</ComplianceStatus> : null}
                    {item.note ? <CardBody>{item.note}</CardBody> : null}
                  </ComplianceCard>
                ) : null,
              )}
            </ComplianceGrid>
            {pageData.compliance.footnote ? <ComplianceNote>{pageData.compliance.footnote}</ComplianceNote> : null}
          </Container>
        </Section>
      ) : null}

      {pageData.integrations?.cards?.length ? (
        <Section>
          <Container>
            {pageData.integrations.heading ? <SectionTitle>{pageData.integrations.heading}</SectionTitle> : null}
            {pageData.integrations.subheading ? <BodyText>{pageData.integrations.subheading}</BodyText> : null}
            {pageData.integrations.body ? <BodyText>{pageData.integrations.body}</BodyText> : null}
            <Grid>
              {pageData.integrations.cards.map((card, idx) =>
                card ? (
                  <IntegrationCard key={card.label || idx}>
                    {card.label ? <IntegrationLabel>{card.label}</IntegrationLabel> : null}
                    {card.status ? <IntegrationStatus>✓ {card.status}</IntegrationStatus> : null}
                    {card.description ? <IntegrationDesc>{card.description}</IntegrationDesc> : null}
                  </IntegrationCard>
                ) : null,
              )}
            </Grid>
            {pageData.integrations.footnote ? <IntegrationFootnote>{pageData.integrations.footnote}</IntegrationFootnote> : null}
          </Container>
        </Section>
      ) : null}

      {pageData.responsibleAi?.bullets?.length ? (
        <Section $tone="dark">
          <Container>
            {pageData.responsibleAi.eyebrow ? <Eyebrow $tone="dark">{pageData.responsibleAi.eyebrow}</Eyebrow> : null}
            {pageData.responsibleAi.heading ? <SectionTitle $tone="dark">{pageData.responsibleAi.heading}</SectionTitle> : null}
            {pageData.responsibleAi.subheading ? <BodyText $tone="dark">{pageData.responsibleAi.subheading}</BodyText> : null}
            <BulletList>
              {pageData.responsibleAi.bullets.map((item) => (
                <BulletItem key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </BulletItem>
              ))}
            </BulletList>
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
