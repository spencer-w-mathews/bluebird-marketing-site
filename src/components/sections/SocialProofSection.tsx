import styled from 'styled-components'
import {itemFade, staggerChildren} from '../../motion/variants'
import type {HomePage} from '../../sanity/types'
import {Card} from '../ui/Card'
import {Section} from '../ui/Section'
import {MotionBox} from '../../motion/Motion'

type Props = {
  socialProof?: HomePage['socialProof']
}

const Logos = styled(MotionBox)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${({theme}) => theme.spacing.md};
  align-items: center;
`

const LogoCard = styled(Card)`
  padding: ${({theme}) => theme.spacing.md};
  text-align: center;
  border-style: dashed;
`

const ProofLine = styled.p`
  text-align: center;
  color: ${({theme}) => theme.colors.muted};
  margin: 0 auto ${({theme}) => theme.spacing.lg};
  max-width: 640px;
  font-weight: 600;
`

export const SocialProofSection = ({socialProof}: Props) => {
  if (!socialProof) return null

  const hasLogos = socialProof.logos && socialProof.logos.length > 0

  return (
    <Section background="muted">
      {socialProof.proofLine ? <ProofLine>{socialProof.proofLine}</ProofLine> : null}
      {hasLogos ? (
        <Logos variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
          {socialProof.logos?.map((logo) =>
            logo ? (
              <LogoCard key={logo.name || logo.url} variants={itemFade}>
                {logo.url ? (
                  <img src={logo.url} alt={logo.name || 'Logo'} style={{maxHeight: 32, objectFit: 'contain'}} />
                ) : (
                  <span style={{color: '#234261', fontWeight: 600}}>{logo.name}</span>
                )}
              </LogoCard>
            ) : null,
          )}
        </Logos>
      ) : null}
    </Section>
  )
}
