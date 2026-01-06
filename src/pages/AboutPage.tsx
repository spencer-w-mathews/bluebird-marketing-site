import styled from 'styled-components'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {Card} from '../components/ui/Card'
import {Section} from '../components/ui/Section'
import {ABOUT_PAGE_QUERY} from '../sanity/queries'
import type {AboutPage as AboutPageType} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackAboutPage} from '../sanity/fallbacks'

const Title = styled.h1`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: ${({theme}) => theme.typography.h1};
  color: ${({theme}) => theme.colors.navy};
`

const Subtitle = styled.p`
  margin: 0;
  max-width: 700px;
  color: ${({theme}) => theme.colors.muted};
  line-height: 1.7;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

export const AboutPage = () => {
  const {data, loading, error} = useSanityDoc<AboutPageType>(ABOUT_PAGE_QUERY)
  const pageData = data ?? fallbackAboutPage

  if (loading && !data) return <LoadingState />
  if (error && !data) return <ErrorState message={error.message} />

  return (
    <>
      <Section>
        {pageData.heading ? <Title>{pageData.heading}</Title> : null}
        {pageData.subheading ? <Subtitle>{pageData.subheading}</Subtitle> : null}
      </Section>

      {pageData.pillars?.length ? (
        <Section>
          <Grid>
            {pageData.pillars.map((pillar, idx) =>
              pillar ? (
                <Card key={pillar.title || idx}>
                  {pillar.title ? <h3 style={{marginTop: 0}}>{pillar.title}</h3> : null}
                  {pillar.description ? (
                    <p style={{margin: 0, color: '#4c5f73', lineHeight: 1.6}}>{pillar.description}</p>
                  ) : null}
                </Card>
              ) : null,
            )}
          </Grid>
        </Section>
      ) : null}

      {pageData.teamHighlight ? (
        <Section>
          <Card>
            <p style={{margin: 0, color: '#234261', fontWeight: 600}}>{pageData.teamHighlight}</p>
          </Card>
        </Section>
      ) : null}
    </>
  )
}
