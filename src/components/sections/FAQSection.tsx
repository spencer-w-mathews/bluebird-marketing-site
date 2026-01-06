import styled from 'styled-components'
import {itemFade, staggerChildren} from '../../motion/variants'
import type {HomePage} from '../../sanity/types'
import {Card} from '../ui/Card'
import {Section} from '../ui/Section'
import {MotionBox} from '../../motion/Motion'

type Props = {
  heading?: string
  items?: HomePage['faq'] extends {items: infer I} ? I : {question?: string; answer?: string}[]
}

const Grid = styled(MotionBox)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({theme}) => theme.spacing.md};
`

export const FAQSection = ({items, heading}: Props) => {
  if (!items || items.length === 0) return null

  return (
    <Section>
      {heading ? <h2 style={{marginTop: 0, color: '#234261'}}>{heading}</h2> : null}
      <Grid variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
        {items.map((item, idx) =>
          item ? (
            <Card key={item.question || idx} variants={itemFade}>
              {item.question ? <h3 style={{marginTop: 0}}>{item.question}</h3> : null}
              {item.answer ? <p style={{margin: 0, color: '#4c5f73', lineHeight: 1.6}}>{item.answer}</p> : null}
            </Card>
          ) : null,
        )}
      </Grid>
    </Section>
  )
}
