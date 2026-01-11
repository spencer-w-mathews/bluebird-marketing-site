import styled from 'styled-components'
import type {CTA} from '../../../sanity/types'
import {Button} from '../../ui/Button'
import {Container} from '../../ui/Container'
import {MotionSection} from '../../../motion/Motion'
import {sectionReveal} from '../../../motion/variants'

type Props = {
  headline?: string
  subhead?: string
  primaryCta?: CTA
  secondaryCta?: CTA
}

const SectionShell = styled(MotionSection)`
  padding: clamp(64px, 12vh, 120px) 0;
  background: ${({theme}) => theme.background.bluebirdRadial};
  color: #f2f6fb;
  text-align: center;
`

const Layout = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

const Headline = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: clamp(2.4rem, 4.6vw, 3.6rem);
  color: #f7faff;
  letter-spacing: -0.02em;
`

const Subhead = styled.p`
  margin: 0;
  color: rgba(240, 246, 252, 0.8);
  font-size: 1.15rem;
  line-height: 1.6;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-top: ${({theme}) => theme.spacing.lg};
`

export const FinalCTASection = ({headline, subhead, primaryCta, secondaryCta}: Props) => {
  if (!headline && !subhead) return null

  return (
    <SectionShell variants={sectionReveal} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.2}}>
      <Container>
        <Layout>
          {headline ? <Headline>{headline}</Headline> : null}
          {subhead ? <Subhead>{subhead}</Subhead> : null}
          <Actions>
            {primaryCta?.label && primaryCta.href ? (
              <Button
                
                href={primaryCta.href}
                variant={primaryCta.variant || 'primary'}
                style={{background: '#2E734C', color: '#f5f8fc', boxShadow: 'none'}}
              >
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta?.label && secondaryCta.href ? (
              <a
                href={secondaryCta.href}
                style={{color: '#f2f6fb', fontWeight: 600, textDecoration: 'underline', margin: 'auto 0px'}}
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </Actions>
        </Layout>
      </Container>
    </SectionShell>
  )
}
