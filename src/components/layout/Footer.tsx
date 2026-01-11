import {Link} from 'react-router-dom'
import styled from 'styled-components'
import type {SiteSettings} from '../../sanity/types'
import {Container} from '../ui/Container'
import logoImage from '../../assets/logo.png'

type FooterProps = {
  siteSettings?: SiteSettings
}

const isExternal = (href: string) => href.startsWith('http')

const FooterShell = styled.footer`
  padding: clamp(48px, 10vh, 96px) 0 ${({theme}) => theme.spacing.lg};
  background: #ffffff;
  border-top: 1px solid ${({theme}) => theme.colors.border};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 1.2fr) repeat(4, minmax(140px, 1fr));
  gap: ${({theme}) => theme.spacing.xl};

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
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

const BrandBlock = styled.div`
  display: grid;
  gap: ${({theme}) => theme.spacing.sm};
`

const BrandLogo = styled.img`
  width: 140px;
  height: auto;
`


const Description = styled.p`
  margin: 0;
  color: ${({theme}) => theme.colors.muted};
  line-height: 1.6;
  max-width: 320px;
`

const BottomBar = styled.div`
  border-top: 1px solid ${({theme}) => theme.colors.border};
  margin-top: ${({theme}) => theme.spacing.xl};
  padding-top: ${({theme}) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacing.md};
  flex-wrap: wrap;
`

const BottomLinks = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.lg};
  flex-wrap: wrap;

  a {
    color: ${({theme}) => theme.colors.muted};
    font-weight: 500;
  }
`

export const Footer = ({siteSettings}: FooterProps) => {
  const columns = siteSettings?.footerColumns ?? []
  const supportingLine = siteSettings?.footerDescription || siteSettings?.announcementBar?.text || ''
  const logoUrl = siteSettings?.logoImage?.url || logoImage
  const bottomLinks = siteSettings?.footerBottomLinks ?? []
  const copyright =
    siteSettings?.footerCopyright || `© ${new Date().getFullYear()} ${siteSettings?.brandName || 'Bluebird'}.`

  return (
    <FooterShell>
      <Container>
        <Grid>
          <BrandBlock>
            <BrandLogo src={logoUrl} alt={siteSettings?.brandName || siteSettings?.logoText || 'Logo'} />
            {supportingLine ? <Description>{supportingLine}</Description> : null}
          </BrandBlock>
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
        <BottomBar>
          <div>{copyright}</div>
          {bottomLinks.length ? (
            <BottomLinks>
              {bottomLinks.map((link) =>
                link?.href ? (
                  isExternal(link.href) ? (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.href} to={link.href}>
                      {link.label}
                    </Link>
                  )
                ) : null,
              )}
            </BottomLinks>
          ) : null}
        </BottomBar>
      </Container>
    </FooterShell>
  )
}
