import {Link} from 'react-router-dom'
import styled from 'styled-components'
import type {SiteSettings} from '../../sanity/types'
import {Container} from '../ui/Container'

type FooterProps = {
  siteSettings?: SiteSettings
}

const isExternal = (href: string) => href.startsWith('http')

const FooterShell = styled.footer`
  margin-top: ${({theme}) => theme.spacing.xxl};
  padding: ${({theme}) => theme.spacing.xl} 0 ${({theme}) => theme.spacing.lg};
  background: #ffffff;
  border-top: 1px solid ${({theme}) => theme.colors.border};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({theme}) => theme.spacing.lg};
`

const ColumnTitle = styled.h4`
  margin: 0 0 ${({theme}) => theme.spacing.sm};
  font-size: 1rem;
  color: ${({theme}) => theme.colors.navy};
`

const FooterLink = styled(Link)`
  display: block;
  padding: 6px 0;
  color: ${({theme}) => theme.colors.muted};
  font-weight: 500;
`

const ExternalLink = styled.a`
  display: block;
  padding: 6px 0;
  color: ${({theme}) => theme.colors.muted};
  font-weight: 500;
`

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.md};
  margin-top: ${({theme}) => theme.spacing.lg};

  a {
    color: ${({theme}) => theme.colors.navy};
    font-weight: 600;
  }
`

const Brand = styled.div`
  font-weight: 700;
  color: ${({theme}) => theme.colors.navy};
  letter-spacing: -0.02em;
`

export const Footer = ({siteSettings}: FooterProps) => {
  const columns = siteSettings?.footerColumns ?? []
  const socials = siteSettings?.socialLinks ?? []
  const supportingLine = siteSettings?.announcementBar?.text || ''

  return (
    <FooterShell>
      <Container>
        <Grid>
          <div>
            <Brand>{siteSettings?.brandName || siteSettings?.logoText}</Brand>
            {supportingLine ? <p style={{color: '#4c5f73', maxWidth: 320}}>{supportingLine}</p> : null}
          </div>
          {columns.map((col) =>
            col?.heading ? (
              <div key={col.heading}>
                <ColumnTitle>{col.heading}</ColumnTitle>
                {col.links?.map((link) =>
                  link?.href ? (
                    isExternal(link.href) ? (
                      <ExternalLink key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </ExternalLink>
                    ) : (
                      <FooterLink key={link.href} to={link.href}>
                        {link.label}
                      </FooterLink>
                    )
                  ) : null,
                )}
              </div>
            ) : null,
          )}
        </Grid>
        {socials.length ? (
          <SocialRow>
            {socials.map((social) =>
              social?.href ? (
                <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ) : null,
            )}
          </SocialRow>
        ) : null}
      </Container>
    </FooterShell>
  )
}
