import styled from 'styled-components'
import type {CTA} from '../../sanity/types'
import {Card} from '../ui/Card'
import {Section} from '../ui/Section'
import {Button} from '../ui/Button'

type Props = {
  headline?: string
  subhead?: string
  primaryCta?: CTA
  secondaryCta?: CTA
}

const Layout = styled(Card)`
  text-align: center;
  padding: clamp(32px, 5vw, 56px);
  border: 1px solid ${({theme}) => theme.colors.border};
  background: linear-gradient(135deg, rgba(35, 66, 97, 0.08), rgba(46, 115, 76, 0.1));
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-top: ${({theme}) => theme.spacing.md};
`

export const FinalCTASection = ({headline, subhead, primaryCta, secondaryCta}: Props) => {
  if (!headline && !subhead) return null

  return (
    <Section>
      <Layout>
        {headline ? <h2 style={{marginTop: 0, color: '#234261'}}>{headline}</h2> : null}
        {subhead ? <p style={{margin: '8px 0 16px', color: '#4c5f73'}}>{subhead}</p> : null}
        <Actions>
          {primaryCta?.label && primaryCta.href ? (
            <Button as="a" href={primaryCta.href} variant={primaryCta.variant || 'primary'}>
              {primaryCta.label}
            </Button>
          ) : null}
          {secondaryCta?.label && secondaryCta.href ? (
            <Button as="a" href={secondaryCta.href} variant={secondaryCta.variant || 'secondary'}>
              {secondaryCta.label}
            </Button>
          ) : null}
        </Actions>
      </Layout>
    </Section>
  )
}
