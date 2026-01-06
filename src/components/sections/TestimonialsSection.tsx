import styled from 'styled-components'
import {itemFade, staggerChildren} from '../../motion/variants'
import type {HomePage} from '../../sanity/types'
import {Card} from '../ui/Card'
import {Section} from '../ui/Section'
import {MotionBox} from '../../motion/Motion'

type Props = {
  heading?: string
  items?: HomePage['testimonials'] extends {items: infer I} ? I : {quote?: string; name?: string; role?: string; company?: string}[]
}

const Grid = styled(MotionBox)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

const Quote = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({theme}) => theme.colors.navy};
`

const Author = styled.p`
  margin: 0;
  color: ${({theme}) => theme.colors.muted};
  font-weight: 600;
`

export const TestimonialsSection = ({items, heading}: Props) => {
  if (!items || items.length === 0) return null

  return (
    <Section background="muted">
      {heading ? <h2 style={{marginTop: 0, color: '#234261'}}>{heading}</h2> : null}
      <Grid variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
        {items.map((item, idx) =>
          item ? (
            <Card key={item.name || idx} variants={itemFade}>
              {item.quote ? <Quote>“{item.quote}”</Quote> : null}
              <Author>
                {item.name}
                {item.role ? `, ${item.role}` : ''}
                {item.company ? ` — ${item.company}` : ''}
              </Author>
            </Card>
          ) : null,
        )}
      </Grid>
    </Section>
  )
}
