import styled from 'styled-components'
import {FinalCTASection} from '../components/sections/FinalCTASection'
import {ErrorState, LoadingState} from '../components/layout/PageState'
import {Card} from '../components/ui/Card'
import {Section} from '../components/ui/Section'
import {CONTACT_PAGE_QUERY} from '../sanity/queries'
import type {ContactPage as ContactPageType} from '../sanity/types'
import {useSanityDoc} from '../sanity/useSanityDoc'
import {fallbackContactPage} from '../sanity/fallbacks'

const Title = styled.h1`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: ${({theme}) => theme.typography.h1};
  color: ${({theme}) => theme.colors.navy};
`

const Subtitle = styled.p`
  margin: 0;
  max-width: 640px;
  color: ${({theme}) => theme.colors.muted};
  line-height: 1.7;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

export const ContactPage = () => {
  const {data, loading, error} = useSanityDoc<ContactPageType>(CONTACT_PAGE_QUERY)
  const pageData = data ?? fallbackContactPage

  if (loading && !data) return <LoadingState />
  if (error && !data) return <ErrorState message={error.message} />

  return (
    <>
      <Section>
        {pageData.heading ? <Title>{pageData.heading}</Title> : null}
        {pageData.subheading ? <Subtitle>{pageData.subheading}</Subtitle> : null}
      </Section>

      {pageData.contactMethods?.length ? (
        <Section>
          <Grid>
            {pageData.contactMethods.map((method, idx) =>
              method ? (
                <Card key={method.label || idx}>
                  {method.label ? <h3 style={{marginTop: 0}}>{method.label}</h3> : null}
                  {method.value ? <p style={{margin: '4px 0', color: '#234261'}}>{method.value}</p> : null}
                  {method.href ? (
                    <a href={method.href} style={{color: '#2E734C', fontWeight: 600}}>
                      {method.href}
                    </a>
                  ) : null}
                </Card>
              ) : null,
            )}
          </Grid>
        </Section>
      ) : null}

      <FinalCTASection
        headline={pageData.heading}
        subhead={pageData.subheading}
        primaryCta={pageData.cta}
        secondaryCta={undefined}
      />
    </>
  )
}
