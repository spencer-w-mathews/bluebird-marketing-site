import styled from 'styled-components'
import {itemFade, sectionReveal, staggerChildren} from '../../../motion/variants'
import type {HomePage} from '../../../sanity/types'
import {Button} from '../../ui/Button'
import {Container} from '../../ui/Container'
import {MotionBox, MotionSection} from '../../../motion/Motion'

type Props = {
  integrations?: HomePage['integrations']
}

type TrustCardContent = {
  title?: string
  description?: string
  body?: string
  iconKey?: string
}

const iconMap = {
  eye: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  ),
  shield: (
    <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
    </svg>
  ),
  lock: (
    <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 10V7a6 6 0 1 1 12 0v3" />
      <rect x="4" y="10" width="16" height="10" rx="2" />
    </svg>
  ),
  check: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5 11 15l4.5-5" />
    </svg>
  ),
}

const defaultCards: TrustCardContent[] = [
  {
    title: 'Human in the loop',
    body: 'Bluebird suggests. You decide. Nothing is ever sent without your approval.',
    iconKey: 'eye',
  },
  {
    title: 'Enterprise-grade security',
    body: 'Encryption, OAuth, SOC 2 (in progress)',
    iconKey: 'shield',
  },
  {
    title: 'Your data stays yours',
    body: 'No training on your data. No third-party sharing.',
    iconKey: 'lock',
  },
  {
    title: 'Built for compliance',
    body: 'SOC 2 and GDPR ready from day one',
    iconKey: 'check',
  },
]

const SectionShell = styled(MotionSection)`
  padding: clamp(64px, 14vh, 120px) 0;
    background: ${({theme}) => theme.background.bluebirdRadial};
  color: #f2f6fb;
`

const Header = styled.div`
  text-align: center;
  max-width: 720px;
  margin: 0 auto ${({theme}) => theme.spacing.xl};
`

const Title = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: clamp(2.4rem, 4.4vw, 3.6rem);
  color: #f7faff;
  letter-spacing: -0.02em;
`

const Subtitle = styled.p`
  margin: 0;
  color: rgba(240, 246, 252, 0.75);
  line-height: 1.6;
  font-size: clamp(1rem, 2vw, 1.2rem);
`

const CardsGrid = styled(MotionBox)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
  margin-bottom: ${({theme}) => theme.spacing.xxl};

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const TrustCard = styled(MotionBox)`
  background: rgba(255, 255, 255, 0.06);
  border-radius: ${({theme}) => theme.radii.lg};
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: ${({theme}) => theme.spacing.lg};
  text-align: center;
  min-height: 210px;
  display: grid;
  align-content: start;
  gap: ${({theme}) => theme.spacing.sm};
`

const IconBadge = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 999px;
  background: rgba(24, 208, 138, 0.9);
  color: #ffffff;
  display: grid;
  place-items: center;
  margin: 0 auto ${({theme}) => theme.spacing.sm};
`

const CardTitle = styled.h3`
  margin: 0;
  color: #f7fbff;
  font-size: 1.1rem;
`

const CardBody = styled.p`
  margin: 0;
  color: rgba(233, 239, 247, 0.75);
  line-height: 1.6;
`

const ComplianceBlock = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: ${({theme}) => theme.spacing.md};
`

const ComplianceTitle = styled.h3`
  margin: 0;
  font-size: clamp(2rem, 3.6vw, 3rem);
  color: #f7faff;
`

const ComplianceSubhead = styled.p`
  margin: 0;
  color: rgba(240, 246, 252, 0.8);
  font-size: 1.15rem;
`

const ComplianceBody = styled.p`
  margin: 0;
  color: rgba(223, 233, 244, 0.75);
  line-height: 1.7;
`

const CtaRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.md};
  flex-wrap: wrap;
  margin-top: ${({theme}) => theme.spacing.lg};
`

const SecondaryButton = styled(Button)`
  background: transparent;
  color: #f5f8fc;
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: none;
`

const PrimaryButton = styled(Button)`
  background: #2E734C;
  color: #f5f8fc;
  border: none;
  box-shadow: none;
`

export const IntegrationsSection = ({integrations}: Props) => {
  const cards: TrustCardContent[] = integrations?.cards?.length ? integrations.cards : defaultCards
  const heading = integrations?.heading ?? 'Trust first'
  const subheading =
    integrations?.subheading ??
    'Security and privacy are foundational, not afterthoughts. Your data is protected at every step.'
  const complianceHeading = integrations?.complianceHeading ?? 'Enterprise-grade security and compliance'
  const complianceSubheading =
    integrations?.complianceSubheading ??
    'Built with enterprise-grade security practices. Designed to meet SOC 2 and GDPR requirements.'
  const complianceBody =
    integrations?.complianceBody ??
    "Bluebird is designed for environments where trust must be earned and maintained. We don't claim certifications we haven't earned. We don't access data we don't need. We don't take actions without your approval. If your organization requires specific compliance standards, security reviews, or deployment models, we're ready to discuss how Bluebird can meet your requirements."
  const primaryCta = integrations?.primaryCta
  const secondaryCta = integrations?.secondaryCta

  return (
    <SectionShell variants={sectionReveal} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.2}}>
      <Container>
        <Header>
          <Title>{heading}</Title>
          <Subtitle>{subheading}</Subtitle>
        </Header>
        <CardsGrid variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
          {cards.map((card) => (
            <TrustCard key={card.title} variants={itemFade}>
              <IconBadge>{iconMap[card.iconKey as keyof typeof iconMap] ?? iconMap.shield}</IconBadge>
              <CardTitle>{card.title}</CardTitle>
              <CardBody>{card.description ?? card.body}</CardBody>
            </TrustCard>
          ))}
        </CardsGrid>
        <ComplianceBlock>
          <ComplianceTitle>{complianceHeading}</ComplianceTitle>
          <ComplianceSubhead>{complianceSubheading}</ComplianceSubhead>
          <ComplianceBody>{complianceBody}</ComplianceBody>
          {(primaryCta || secondaryCta) && (
            <CtaRow>
              {secondaryCta ? (
                <SecondaryButton href={secondaryCta.href || '/security'} variant={secondaryCta.variant || 'ghost'}>
                  {secondaryCta.label || 'Learn about security'}
                </SecondaryButton>
              ) : null}
              {primaryCta ? (
                <PrimaryButton  href={primaryCta.href || '/contact'} variant={primaryCta.variant || 'primary'}>
                  {primaryCta.label || 'Request a demo'}
                </PrimaryButton>
              ) : null}
            </CtaRow>
          )}
        </ComplianceBlock>
      </Container>
    </SectionShell>
  )
}
