import styled from 'styled-components'
import {itemFade, staggerChildren} from '../../motion/variants'
import type {HomePage} from '../../sanity/types'
import {Card} from '../ui/Card'
import {Section} from '../ui/Section'
import {MotionBox} from '../../motion/Motion'

type Props = {
  items?: HomePage['integrations'] extends {items: infer I} ? I : {name?: string; description?: string}[]
  heading?: string
}

const Grid = styled(MotionBox)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing.sm};
  margin-bottom: ${({theme}) => theme.spacing.md};
`

export const IntegrationsSection = ({items, heading}: Props) => {
  if (!items || items.length === 0) return null

  return (
    <Section>
      {heading ? (
        <TitleRow>
          <h2 style={{margin: '0 0 4px', color: '#234261'}}>{heading}</h2>
        </TitleRow>
      ) : null}
      <Grid variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
        {items.map((item) =>
          item ? (
            <Card key={item.name} variants={itemFade}>
              {item.name ? <h3 style={{marginTop: 0}}>{item.name}</h3> : null}
              {item.description ? (
                <p style={{margin: 0, color: '#4c5f73', lineHeight: 1.6}}>{item.description}</p>
              ) : null}
            </Card>
          ) : null,
        )}
      </Grid>
    </Section>
  )
}
