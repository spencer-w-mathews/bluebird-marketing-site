import styled from 'styled-components'
import {itemFade, staggerChildren} from '../../../motion/variants'
import type {HomePage} from '../../../sanity/types'
import {Section} from '../../ui/Section'
import {MotionBox} from '../../../motion/Motion'

type Props = {
  steps?: HomePage['howItWorks'] extends {steps: infer S} ? S : HomePage['howItWorks'] extends {steps?: infer S} ? S : {title?: string; description?: string}[]
  heading?: string
  subheading?: string
  calloutTitle?: string
  calloutBody?: string
  calloutIconKey?: string
}

const Intro = styled.div`
  max-width: 720px;
  margin-bottom: ${({theme}) => theme.spacing.xl};
`

const Title = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: ${({theme}) => theme.colors.text};
  letter-spacing: -0.02em;
`

const Subtitle = styled.p`
  margin: 0;
  color: rgba(20, 34, 52, 0.7);
  line-height: 1.6;
  font-size: 1.1rem;
`

const StepsGrid = styled(MotionBox)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.xl};

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${({theme}) => theme.spacing.lg};
  }
`

const StepCard = styled(MotionBox)`
  display: grid;
  gap: ${({theme}) => theme.spacing.sm};
`

const StepNumberRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.sm};
  color: rgba(13, 22, 38, 0.15);
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.04em;

  span {
    display: inline-flex;
    align-items: center;
  }
`

const StepLine = styled.span`
  display: inline-block;
  width: 36px;
  height: 1px;
  background: rgba(13, 22, 38, 0.12);
`

const StepTitle = styled.h3`
  margin: 0;
  font-size: 1.35rem;
  color: ${({theme}) => theme.colors.text};
`

const StepBody = styled.p`
  margin: 0;
  color: rgba(20, 34, 52, 0.72);
  line-height: 1.7;
`

const CalloutCard = styled(MotionBox)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({theme}) => theme.spacing.md};
  padding: ${({theme}) => theme.spacing.lg};
  border-radius: ${({theme}) => theme.radii.lg};
  border: 1px solid rgba(13, 22, 38, 0.1);
  background: #ffffff;
  box-shadow: ${({theme}) => theme.shadows.outline};
  margin-top: ${({theme}) => theme.spacing.xl};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const CalloutIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${({theme}) => theme.background.bluebirdRadial};
  display: grid;
  place-items: center;
  color: ${({theme}) => theme.colors.navy};
  font-weight: 700;
`

const CalloutTitle = styled.h4`
  margin: 0 0 ${({theme}) => theme.spacing.xs};
  font-size: 1.1rem;
  color: ${({theme}) => theme.colors.text};
`

const CalloutBody = styled.p`
  margin: 0;
  color: rgba(20, 34, 52, 0.72);
  line-height: 1.6;
`

const calloutIconMap = {
  check: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5 11 15l4.5-5" />
    </svg>
  ),
  shield: (
    <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
    </svg>
  ),
  eye: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  ),
  lock: (
    <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 10V7a6 6 0 1 1 12 0v3" />
      <rect x="4" y="10" width="16" height="10" rx="2" />
    </svg>
  ),
}

export const HowItWorksSection = ({steps, heading, subheading, calloutTitle, calloutBody, calloutIconKey}: Props) => {
  if (!steps || steps.length === 0) return null

  return (
    <Section>
      <Intro>
        {heading ? <Title>{heading}</Title> : null}
        {subheading ? <Subtitle>{subheading}</Subtitle> : null}
      </Intro>
      <StepsGrid variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
        {steps?.map((step, idx) =>
          step ? (
            <StepCard key={step.title || idx} variants={itemFade}>
              <StepNumberRow>
                {idx > 0 ? <StepLine /> : null}
                <span>{String(idx + 1).padStart(2, '0')}</span>
              </StepNumberRow>
              {step.title ? <StepTitle>{step.title}</StepTitle> : null}
              {step.description ? <StepBody>{step.description}</StepBody> : null}
            </StepCard>
          ) : null,
        )}
      </StepsGrid>
      <CalloutCard variants={itemFade} initial="hidden" whileInView="show" viewport={{once: true}}>
        <CalloutIcon>{calloutIconMap[calloutIconKey as keyof typeof calloutIconMap] ?? calloutIconMap.check}</CalloutIcon>
        <div>
          <CalloutTitle>{calloutTitle ?? 'Human-in-the-loop by design'}</CalloutTitle>
          <CalloutBody>
            {calloutBody ??
              'Bluebird provides recommendations and insights, but you remain in control. Every action requires your review and approval.'}
          </CalloutBody>
        </div>
      </CalloutCard>
    </Section>
  )
}
