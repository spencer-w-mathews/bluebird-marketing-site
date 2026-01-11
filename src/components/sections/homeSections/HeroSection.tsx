import {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {itemFade, staggerChildren} from '../../../motion/variants'
import type {HeroContent} from '../../../sanity/types'
import {Button} from '../../ui/Button'
import {MotionBox} from '../../../motion/Motion'
import {Container} from '../../ui/Container'
import heroDash from '../../../assets/BBDash.webp'

type HeroSectionProps = {
  content?: HeroContent
}

const HeroSurface = styled.section`
  position: relative;
  overflow: hidden;
  border-radius: 0;
  background: ${({theme}) => theme.background.bluebirdRadial};
  padding: clamp(196px, 12vw, 150px) 0;
  color: #f7f8fb;
  width: 100%;
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(24px, 6vw, 64px);
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: left;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
    text-align: center;
  }
`

const HeroCopy = styled.div`
  max-width: 620px;

  @media (max-width: 960px) {
    margin: 0 auto;
  }
`

const Headline = styled.h1`
  font-size: ${({theme}) => theme.typography.h1};
  margin: 0 0 ${({theme}) => theme.spacing.md};
  letter-spacing: -0.01em;
  font-family: ${({theme}) => theme.typography.headingFont};
  color: #f7f8fb;
`

const Subhead = styled.p`
  margin: 0 0 ${({theme}) => theme.spacing.lg};
  color: rgba(247, 248, 251, 0.82);
  font-size: 1.05rem;
  line-height: 1.7;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.sm};
  margin-bottom: ${({theme}) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    button {
      width: 100%;
    }
  }
`

const PrimaryCta = styled(Button)`
  background-image: none;
  background: ${({theme}) => theme.colors.forest};
`

const SecondaryCta = styled.a`
  color: rgba(247, 248, 251, 0.88);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
`

const HeroMedia = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 960px) {
    justify-content: center;
  }
`

const CardStack = styled.div`
  position: relative;
  width: min(520px, 100%);
  aspect-ratio: 4 / 3;
`

const CardItem = styled.div<{$order: number}>`
  position: absolute;
  inset: 0;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(12, 23, 39, 0.08);
  box-shadow: 0 22px 50px rgba(12, 23, 39, 0.25);
  transition: transform 1.2s ease, opacity 1.2s ease;
  z-index: ${({$order}) => 3 - $order};
  opacity: ${({$order}) => ($order === 0 ? 1 : $order === 1 ? 0.7 : 0.55)};
  transform: ${({$order}) =>
    $order === 0
      ? 'translate(0, 0) rotate(0deg) scale(1)'
      : $order === 1
        ? 'translate(22px, 18px) rotate(2deg) scale(0.98)'
        : 'translate(44px, 36px) rotate(4deg) scale(0.96)'};
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
  display: block;
`

export const HeroSection = ({content}: HeroSectionProps) => {

  const fallbackCards = useMemo(
    () => [
      {url: heroDash, alt: 'Product interface 1'},
      {url: heroDash, alt: 'Product interface 2'},
      {url: heroDash, alt: 'Product interface 3'},
    ],
    [],
  )
  if (!content){ 
    content = { heroImages: fallbackCards}
  }
  const heroCards = useMemo(() => {
    const fromSanity = content.heroImages?.filter((item) => item?.url) ?? []
    const source = fromSanity.length ? fromSanity : fallbackCards
    return source.slice(0, 3).map((item, index) => ({
      url: item?.url || heroDash,
      alt: item?.alt || `Product interface ${index + 1}`,
    }))
  }, [content.heroImages, fallbackCards])
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    if (heroCards.length < 2) return
    const interval = setInterval(() => {
      setActiveCard((current) => (current + 1) % heroCards.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroCards.length])

  return (
    <HeroSurface>
      <Container>
        <HeroGrid>
          <HeroCopy>
            <MotionBox variants={staggerChildren} initial="hidden" animate="show">
              {/* {content.heroHighlights?.length ? (
                <MotionBox variants={itemFade}>
                  <Badge style={{background: 'rgba(255,255,255,0.15)', color: '#f7f8fb'}}>
                    {content.heroHighlights[0]}
                  </Badge>
                </MotionBox>
              ) : null} */}
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
                {content.primaryCta?.href ? (
                  <PrimaryCta href={content.primaryCta.href} variant={content.primaryCta.variant || 'primary'}>
                    {content.primaryCta.label || 'See Bluebird in Action'}
                  </PrimaryCta>
                ) : null}
                {content.secondaryCta?.href ? (
                  <SecondaryCta href={content.secondaryCta.href}>
                    {content.secondaryCta.label || 'How Bluebird Works'}
                  </SecondaryCta>
                ) : null}
              </Actions>
            </MotionBox>
          </HeroCopy>
          <HeroMedia>
            <CardStack>
              {heroCards.map((card, index) => {
                const order = (index - activeCard + heroCards.length) % heroCards.length
                return (
                  <CardItem key={card.alt} $order={order}>
                    <CardImage src={card.url} alt={card.alt} loading="lazy" />
                  </CardItem>
                )
              })}
            </CardStack>
          </HeroMedia>
        </HeroGrid>
      </Container>
    </HeroSurface>
  )
}
