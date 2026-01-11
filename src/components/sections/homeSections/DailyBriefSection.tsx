import styled from 'styled-components'
import {MotionBox, MotionSection} from '../../../motion/Motion'
import {itemFade, sectionReveal, staggerChildren} from '../../../motion/variants'
import type {HomePage} from '../../../sanity/types'
import {Container} from '../../ui/Container'
import dailyWarbleImage from '../../../assets/DailyWarble.png'

type Props = {
  content?: HomePage['dailyBrief']
}

const defaultContent = {
  heading: 'Daily briefs that frame your day',
  lead: 'Bluebird delivers a morning brief and an end-of-day summary.',
  paragraphs: [
    'Morning briefs help you start focused.',
    'End-of-day summaries help you close loops.',
    'Briefs summarize. They do not act.',
  ],
}

const SectionShell = styled(MotionSection)`
  padding: clamp(64px, 12vh, 110px) 0;
  background: ${({theme}) => theme.colors.cream};
  color: ${({theme}) => theme.colors.text};
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme}) => theme.spacing.xxl};
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: ${({theme}) => theme.spacing.xl};
  }
`

const CopyBlock = styled.div`
  max-width: 520px;
`

const Title = styled.h2`
  margin: 0 0 ${({theme}) => theme.spacing.md};
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  color: ${({theme}) => theme.colors.navy};
  letter-spacing: -0.02em;
`

const Lead = styled.p`
  margin: 0 0 ${({theme}) => theme.spacing.lg};
  font-size: 1.2rem;
  color: rgba(20, 34, 52, 0.78);
  line-height: 1.6;
`

const Paragraph = styled.p`
  margin: 0 0 ${({theme}) => theme.spacing.md};
  color: rgba(20, 34, 52, 0.7);
  line-height: 1.7;
`

const ImageFrame = styled(MotionBox)`
  background: #ffffff;
  border-radius: 18px;
  padding: ${({theme}) => theme.spacing.lg};
  box-shadow: 0 22px 50px rgba(13, 26, 43, 0.15);
  display: grid;
  place-items: center;
`

const Image = styled.img`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  object-fit: cover;
`

export const DailyBriefSection = ({content}: Props) => {
  const data = content ?? defaultContent
  const imageUrl = content?.image?.url ?? dailyWarbleImage
  const imageAlt = content?.imageAlt ?? 'Daily Warble summary'
  const paragraphs = data.paragraphs?.length ? data.paragraphs : defaultContent.paragraphs

  return (
    <SectionShell variants={sectionReveal} initial="hidden" whileInView="show" viewport={{once: true, amount: 0.2}}>
      <Container>
        <Layout>
          <CopyBlock>
            {data.heading ? <Title>{data.heading}</Title> : null}
            {data.lead ? <Lead>{data.lead}</Lead> : null}
            <MotionBox variants={staggerChildren} initial="hidden" whileInView="show" viewport={{once: true}}>
              {paragraphs?.map((line) => (
                <Paragraph key={line} >
                  {line}
                </Paragraph>
              ))}
            </MotionBox>
          </CopyBlock>
          <ImageFrame variants={itemFade}>
            <Image src={imageUrl} alt={imageAlt} />
          </ImageFrame>
        </Layout>
      </Container>
    </SectionShell>
  )
}
