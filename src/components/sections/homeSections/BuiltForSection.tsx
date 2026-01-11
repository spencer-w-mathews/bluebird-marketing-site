import styled from 'styled-components'
import {MotionBox, MotionSection} from '../../../motion/Motion'
import {itemFade, sectionReveal, staggerChildren} from '../../../motion/variants'
import type {HomePage} from '../../../sanity/types'
import {Container} from '../../ui/Container'

type Props = {
  content?: HomePage['builtFor']
}

const defaultContent = {
  heading: "Built for people who can't afford to drop balls",
  subheading: 'Designed for busy professionals managing high-stakes communication.',
  stats: [
    {value: '100+', label: 'Work emails per day', note: 'Important ones slip through'},
    {value: '10+', label: 'Meetings per week', note: 'Follow-ups get lost'},
    {value: '0', label: 'Deals dropped', note: 'Clients, deadlines, deliverables'},
  ],
  roles: ['Founders', 'Sales', 'Ops', 'Client Services', 'Leadership'],
  industriesLine: 'Legal • Finance • Real Estate • Consulting • Healthcare • And more',
}

const SectionShell = styled(MotionSection)`
  position: relative;
  overflow: hidden;
  padding: clamp(64px, 14vh, 120px) 0;
  color: #f2f6fb;
    background: ${({theme}) => theme.background.bluebirdRadial};

  &::before {
    content: '';
    position: absolute;
    inset: -40% 0 auto;
    height: 70%;
    opacity: 0.6;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 -55% 0;
    height: 65%;
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 56px 0;
  }
`

const Header = styled.div`
  max-width: 760px;
  margin: 0 auto ${({theme}) => theme.spacing.xl};
  text-align: center;
`

const Title = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: clamp(2.1rem, 4.4vw, 4.6rem);
  color: #f6f9fd;
  letter-spacing: -0.02em;
`

const Subtitle = styled.p`
  margin: 0;
  color: rgba(240, 246, 252, 0.72);
  line-height: 1.6;
  font-size: clamp(1rem, 2vw, 1.2rem);
`

const StatsGrid = styled(MotionBox)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.xl};
  text-align: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${({theme}) => theme.spacing.lg};
  }
`

const StatItem = styled(MotionBox)`
  display: grid;
  gap: ${({theme}) => theme.spacing.xs};
`

const StatValue = styled.div`
  font-size: clamp(2.6rem, 5vw, 4.4rem);
  font-weight: 700;
  color: #2E734C;
  -webkit-text-stroke: .25px #fff;
`

const StatLabel = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  color: #f8fbff;
`

const StatNote = styled.div`
  color: rgba(231, 238, 247, 0.65);
  font-size: 0.95rem;
`

const RolesRow = styled(MotionBox)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.sm};
  margin: ${({theme}) => theme.spacing.xl} 0 ${({theme}) => theme.spacing.sm};
`

const RoleChip = styled(MotionBox)`
  padding: 8px 18px;
  border-radius: ${({theme}) => theme.radii.pill};
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.08);
  color: #f5f8fc;
  font-weight: 600;
  font-size: 0.95rem;
  backdrop-filter: blur(6px);
`

const IndustriesLine = styled.div`
  text-align: center;
  color: rgba(219, 228, 239, 0.7);
  font-size: 0.95rem;
`

export const BuiltForSection = ({content}: Props) => {
  const data = content ?? defaultContent

  if (!data) return null

  return (
    <SectionShell variants={sectionReveal} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.2}}>
      <Container>
        <Header>
          {data.heading ? <Title>{data.heading}</Title> : null}
          {data.subheading ? <Subtitle>{data.subheading}</Subtitle> : null}
        </Header>
        {data.stats?.length ? (
          <StatsGrid variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
            {data.stats.map((stat) => (
              <StatItem key={stat.label || stat.value} variants={itemFade}>
                {stat.value ? <StatValue>{stat.value}</StatValue> : null}
                {stat.label ? <StatLabel>{stat.label}</StatLabel> : null}
                {stat.note ? <StatNote>{stat.note}</StatNote> : null}
              </StatItem>
            ))}
          </StatsGrid>
        ) : null}
        {data.roles?.length ? (
          <RolesRow variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
            {data.roles.map((role) => (
              <RoleChip key={role} variants={itemFade}>
                {role}
              </RoleChip>
            ))}
          </RolesRow>
        ) : null}
        {data.industriesLine ? <IndustriesLine>{data.industriesLine}</IndustriesLine> : null}
      </Container>
    </SectionShell>
  )
}
