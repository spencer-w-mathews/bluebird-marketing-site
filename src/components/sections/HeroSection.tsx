import styled from 'styled-components'
import {itemFade, staggerChildren} from '../../motion/variants'
import type {HeroContent} from '../../sanity/types'
import {Badge} from '../ui/Badge'
import {Button} from '../ui/Button'
import {Card} from '../ui/Card'
import {MotionBox} from '../../motion/Motion'

type HeroSectionProps = {
  content?: HeroContent
}

const HeroSurface = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 50% 18%, rgba(109, 146, 180, 0.18), transparent 32%),
    radial-gradient(circle at 78% 18%, rgba(35, 66, 97, 0.22), transparent 36%),
    radial-gradient(circle at 22% 78%, rgba(35, 66, 97, 0.2), transparent 38%),
    linear-gradient(160deg, #0c1d2f 0%, #0f2942 52%, #0a1727 100%);
  padding: clamp(48px, 9vw, 92px);
  box-shadow: ${({theme}) => theme.shadows.strong};
  color: #f7f8fb;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(52px);
    opacity: 0.4;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.12);
  }

  &::before {
    width: 260px;
    height: 260px;
    top: -50px;
    right: 10%;
  }

  &::after {
    width: 240px;
    height: 240px;
    bottom: -60px;
    left: 8%;
  }
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({theme}) => theme.spacing.lg};
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`

const Headline = styled.h1`
  font-size: ${({theme}) => theme.typography.h1};
  margin: 0 0 ${({theme}) => theme.spacing.md};
  letter-spacing: -0.02em;
  color: #f7f8fb;
  text-align: center;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
`

const Subhead = styled.p`
  margin: 0 0 ${({theme}) => theme.spacing.lg};
  color: rgba(247, 248, 251, 0.82);
  font-size: 1.05rem;
  line-height: 1.7;
  text-align: center;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.sm};
  margin-bottom: ${({theme}) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    button {
      width: 100%;
    }
  }
`

const HighlightList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.sm};
  justify-content: center;
  color: ${({theme}) => theme.colors.text};

  @media (max-width: 640px) {
    width: 100%;
  }
`

const Highlight = styled(Card)`
  padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.md};
  box-shadow: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  min-width: auto;
  color: #f7f8fb;
`

export const HeroSection = ({content}: HeroSectionProps) => {
  if (!content) return null

  return (

      <HeroSurface>
        <HeroGrid>
          <MotionBox variants={staggerChildren} initial="hidden" animate="show">
            {content.heroHighlights?.length ? (
              <MotionBox variants={itemFade}>
                <Badge style={{background: 'rgba(255,255,255,0.15)', color: '#f7f8fb'}}>
                  {content.heroHighlights[0]}
                </Badge>
              </MotionBox>
            ) : null}
            {content.headline ? (
              <MotionBox variants={itemFade}>
                <Headline>{content.headline}</Headline>
              </MotionBox>
            ) : null}
            {content.subhead ? (
              <MotionBox variants={itemFade}>
                <Subhead>{content.subhead}</Subhead>
              </MotionBox>
            ) : null}
            <Actions>
              {content.primaryCta?.label && content.primaryCta.href ? (
                <Button as="a" href={content.primaryCta.href} variant={content.primaryCta.variant || 'primary'}>
                  {content.primaryCta.label}
                </Button>
              ) : null}
              {content.secondaryCta?.label && content.secondaryCta.href ? (
                <Button as="a" href={content.secondaryCta.href} variant={content.secondaryCta.variant || 'secondary'}>
                  {content.secondaryCta.label}
                </Button>
              ) : null}
            </Actions>
            {content.heroHighlights?.length ? (
              <HighlightList>
                {content.heroHighlights.map(
                  (item) =>
                    item && (
                      <Highlight key={item} whileHover={{scale: 1.02}}>
                        {item}
                      </Highlight>
                    ),
                )}
              </HighlightList>
            ) : null}
          </MotionBox>
        </HeroGrid>
      </HeroSurface>

  )
}
