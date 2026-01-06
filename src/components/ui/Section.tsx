import type {ReactNode} from 'react'
import styled, {css} from 'styled-components'
import {MotionSection} from '../../motion/Motion'
import {sectionReveal} from '../../motion/variants'
import {Container} from './Container'

type SectionProps = {
  id?: string
  children: ReactNode
  background?: 'plain' | 'muted'
}

const SectionWrapper = styled(MotionSection)<{$background: 'plain' | 'muted'}>`
  padding: clamp(56px, 12vh, 110px) 0;
  position: relative;
  overflow: hidden;

  ${({$background, theme}) =>
    $background === 'muted' &&
    css`
      background: radial-gradient(circle at 20% 20%, rgba(109, 146, 180, 0.12), transparent 35%),
        radial-gradient(circle at 80% 0%, rgba(46, 115, 76, 0.12), transparent 35%),
        ${theme.colors.cream};
    `}

  @media (max-width: 640px) {
    padding: 48px 0;
  }
`

export const Section = ({id, children, background = 'plain'}: SectionProps) => (
  <SectionWrapper
    id={id}
    $background={background}
    variants={sectionReveal}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.15}}
  >
    <Container>{children}</Container>
  </SectionWrapper>
)
