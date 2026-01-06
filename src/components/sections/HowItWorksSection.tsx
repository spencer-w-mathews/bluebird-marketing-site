import styled from 'styled-components'
import {itemFade, staggerChildren} from '../../motion/variants'
import type {HomePage} from '../../sanity/types'
import {Card} from '../ui/Card'
import {Section} from '../ui/Section'
import {MotionBox} from '../../motion/Motion'

type Props = {
  steps?: HomePage['howItWorks'] extends {steps: infer S} ? S : HomePage['howItWorks'] extends {steps?: infer S} ? S : {title?: string; description?: string}[]
  heading?: string
  subheading?: string
}

const Grid = styled(MotionBox)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

const Title = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.md};
  font-size: ${({theme}) => theme.typography.h2};
  color: ${({theme}) => theme.colors.navy};
`

const Intro = styled.div`
  max-width: 700px;
  margin-bottom: ${({theme}) => theme.spacing.lg};
`

export const HowItWorksSection = ({steps, heading, subheading}: Props) => {
  if (!steps || steps.length === 0) return null

  return (
    <Section>
      <Intro>
        {heading ? <Title>{heading}</Title> : null}
        {subheading ? <p style={{margin: 0, color: '#4c5f73', lineHeight: 1.6}}>{subheading}</p> : null}
      </Intro>
      <Grid variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
        {steps?.map((step, idx) =>
          step ? (
            <Card key={step.title || idx} variants={itemFade}>
              {step.title ? <h3 style={{marginBottom: 8}}>{step.title}</h3> : null}
              {step.description ? (
                <p style={{margin: 0, color: '#4c5f73', lineHeight: 1.6}}>{step.description}</p>
              ) : null}
            </Card>
          ) : null,
        )}
      </Grid>
    </Section>
  )
}
