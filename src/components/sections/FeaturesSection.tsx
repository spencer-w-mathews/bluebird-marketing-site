import styled from 'styled-components'
import {itemFade, staggerChildren} from '../../motion/variants'
import type {FeatureItem, HomePage} from '../../sanity/types'
import {Card} from '../ui/Card'
import {Section} from '../ui/Section'
import {MotionBox} from '../../motion/Motion'

type Props = {features?: HomePage['features']}

const Header = styled.div`
  max-width: 720px;
  margin-bottom: ${({theme}) => theme.spacing.xl};
`

const Title = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: ${({theme}) => theme.typography.h2};
  color: ${({theme}) => theme.colors.navy};
  letter-spacing: -0.02em;
`

const Subtitle = styled.p`
  margin: 0;
  color: ${({theme}) => theme.colors.muted};
  line-height: 1.7;
`

const FeatureGrid = styled(MotionBox)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

const Icon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 14px;
  background: rgba(35, 66, 97, 0.1);
  border: 1px solid ${({theme}) => theme.colors.border};
  display: grid;
  place-items: center;
  color: ${({theme}) => theme.colors.navy};
  font-weight: 700;
  margin-bottom: ${({theme}) => theme.spacing.sm};
`

const FeatureCard = ({item}: {item?: FeatureItem}) => {
  if (!item) return null
  return (
    <Card variants={itemFade}>
      <Icon>{item.iconKey?.slice(0, 1)?.toUpperCase()}</Icon>
      {item.title ? <h3 style={{marginTop: 0, marginBottom: 8}}>{item.title}</h3> : null}
      {item.description ? <p style={{margin: 0, color: '#4c5f73', lineHeight: 1.6}}>{item.description}</p> : null}
    </Card>
  )
}

export const FeaturesSection = ({features}: Props) => {
  if (!features) return null

  return (
    <Section>
      <Header>
        {features.sectionHeading ? <Title>{features.sectionHeading}</Title> : null}
        {features.sectionSubheading ? <Subtitle>{features.sectionSubheading}</Subtitle> : null}
      </Header>
      <FeatureGrid variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
        {features.items?.map((item) => (item ? <FeatureCard key={item.title} item={item} /> : null))}
      </FeatureGrid>
    </Section>
  )
}
