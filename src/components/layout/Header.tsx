import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {MotionBox} from '../../motion/Motion'
import {itemFade, staggerChildren} from '../../motion/variants'
import type {SiteSettings} from '../../sanity/types'
import {Button} from '../ui/Button'
import {Container} from '../ui/Container'

type HeaderProps = {
  siteSettings?: SiteSettings
  loading?: boolean
}

const isExternal = (href: string) => href.startsWith('http')

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(244, 245, 246, 0.85);
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacing.lg};
  padding: 18px 0;
  flex-wrap: wrap;

   @media (max-width: 768px) {
     gap: ${({theme}) => theme.spacing.sm};
   }
`

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme}) => theme.colors.navy};
  font-size: 1.1rem;
`

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.forest};
  box-shadow: 0 0 0 6px rgba(46, 115, 76, 0.15);
`

const NavLinks = styled(MotionBox)<{$open: boolean}>`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.lg};
  flex: 1;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: ${({theme}) => theme.spacing.sm};
  transition: max-height 0.25s ease, opacity 0.2s ease;

  a {
    color: ${({theme}) => theme.colors.muted};
    font-weight: 500;
    padding: 8px 0;
    border-bottom: 2px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;

    &.active {
      color: ${({theme}) => theme.colors.navy};
      border-color: ${({theme}) => theme.colors.slate};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    order: 3;
    flex-direction: column;
    align-items: flex-start;
    max-height: ${({$open}) => ($open ? '320px' : '0')};
    overflow: hidden;
    opacity: ${({$open}) => ($open ? 1 : 0)};
    margin-top: ${({theme, $open}) => ($open ? theme.spacing.sm : 0)};
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.sm};

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    order: 2;
  }
`

const Announcement = styled.div`
  background: linear-gradient(120deg, rgba(35, 66, 97, 0.08), rgba(46, 115, 76, 0.08));
  border-bottom: 1px solid ${({theme}) => theme.colors.border};

  @media (max-width: 640px) {
    display: none;
  }
`

const AnnouncementInner = styled(Container)`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.sm};
  padding: 10px 0;
  color: ${({theme}) => theme.colors.navy};

  a {
    font-weight: 600;
    color: ${({theme}) => theme.colors.forest};
  }
`

const MobileToggle = styled.button`
  display: none;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: ${({theme}) => theme.radii.md};
  border: 1px solid ${({theme}) => theme.colors.border};
  background: #ffffff;
  color: ${({theme}) => theme.colors.navy};
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    display: inline-flex;
    order: 1;
  }
`

export const Header = ({siteSettings, loading}: HeaderProps) => {
  const location = useLocation()
  const navLinks = siteSettings?.navLinks ?? []
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderBar>
      {siteSettings?.announcementBar?.enabled && siteSettings.announcementBar.text ? (
        <Announcement>
          <AnnouncementInner>
            <span>{siteSettings.announcementBar.text}</span>
            {siteSettings.announcementBar.linkHref && siteSettings.announcementBar.linkLabel ? (
              <Link to={siteSettings.announcementBar.linkHref}>{siteSettings.announcementBar.linkLabel}</Link>
            ) : null}
          </AnnouncementInner>
        </Announcement>
      ) : null}
      <Container>
        <Nav>
          <Logo to="/">
            <Dot />
            <span>{siteSettings?.logoText || siteSettings?.brandName || (loading ? 'Loading…' : '')}</span>
          </Logo>
          <MobileToggle onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
            {menuOpen ? 'Close' : 'Menu'}
          </MobileToggle>
          <NavLinks $open={menuOpen} variants={staggerChildren} initial="hidden" animate="show">
            {navLinks.map((link) =>
              link?.href ? (
                <MotionBox key={link.href} variants={itemFade} onClick={() => setMenuOpen(false)}>
                  {isExternal(link.href) ? (
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link className={location.pathname === link.href ? 'active' : ''} to={link.href}>
                      {link.label}
                    </Link>
                  )}
                </MotionBox>
              ) : null,
            )}
          </NavLinks>
          <Actions>
            {siteSettings?.secondaryCta?.label && siteSettings.secondaryCta.href ? (
              <Button as={Link} to={siteSettings.secondaryCta.href} variant="ghost">
                {siteSettings.secondaryCta.label}
              </Button>
            ) : null}
            {siteSettings?.primaryCta?.label && siteSettings.primaryCta.href ? (
              <Button as={Link} to={siteSettings.primaryCta.href} variant="primary">
                {siteSettings.primaryCta.label}
              </Button>
            ) : null}
          </Actions>
        </Nav>
      </Container>
    </HeaderBar>
  )
}
