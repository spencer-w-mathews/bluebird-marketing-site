import styled from 'styled-components'
import {FinalCTASection} from '../components/sections/FinalCTASection'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {Card} from '../components/ui/Card'
import {Section} from '../components/ui/Section'
import {SECURITY_PAGE_QUERY} from '../sanity/queries'
import type {SecurityPage as SecurityPageType} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackSecurityPage} from '../sanity/fallbacks'

const Title = styled.h1`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: ${({theme}) => theme.typography.h1};
  color: ${({theme}) => theme.colors.navy};
`

const Subtitle = styled.p`
  margin: 0;
  max-width: 720px;
  color: ${({theme}) => theme.colors.muted};
  line-height: 1.7;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

export const SecurityPage = () => {
  const {data, loading, error} = useSanityDoc<SecurityPageType>(SECURITY_PAGE_QUERY)
  const pageData = data ?? fallbackSecurityPage

  if (loading && !data) return <LoadingState />
  if (error && !data) return <ErrorState message={error.message} />

  return (
    <>
      <Section>
        {pageData.heading ? <Title>{pageData.heading}</Title> : null}
        {pageData.subheading ? <Subtitle>{pageData.subheading}</Subtitle> : null}
      </Section>

      {pageData.trustBlocks?.length ? (
        <Section>
          <Grid>
            {pageData.trustBlocks.map((block, idx) =>
              block ? (
                <Card key={block.title || idx}>
                  {block.title ? <h3 style={{marginTop: 0}}>{block.title}</h3> : null}
                  {block.description ? (
                    <p style={{margin: 0, color: '#4c5f73', lineHeight: 1.6}}>{block.description}</p>
                  ) : null}
                </Card>
              ) : null,
            )}
          </Grid>
        </Section>
      ) : null}

      {pageData.complianceList?.length ? (
        <Section>
          {pageData.complianceHeading ? <h2 style={{color: '#234261'}}>{pageData.complianceHeading}</h2> : null}
          <Grid>
            {pageData.complianceList.map((item, idx) =>
              item ? (
                <Card key={item.label || idx}>
                  {item.label ? <h4 style={{marginTop: 0}}>{item.label}</h4> : null}
                  {item.description ? (
                    <p style={{margin: 0, color: '#4c5f73', lineHeight: 1.5}}>{item.description}</p>
                  ) : null}
                </Card>
              ) : null,
            )}
          </Grid>
        </Section>
      ) : null}

      <FinalCTASection
        headline={pageData.finalCta?.headline}
        subhead={pageData.finalCta?.subhead}
        primaryCta={pageData.finalCta?.primaryCta}
        secondaryCta={pageData.finalCta?.secondaryCta}
      />
    </>
  )
}
