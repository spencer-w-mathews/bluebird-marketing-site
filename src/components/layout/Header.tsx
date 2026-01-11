import {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import styled, {css} from 'styled-components'
import type {SiteSettings, WhoWeServePage} from '../../sanity/types'
import logoImage from '../../assets/logo.png'

type HeaderProps = {
  siteSettings?: SiteSettings
  loading?: boolean
  whoWeServePages?: WhoWeServePage[]
}

const isExternal = (href: string) => href.startsWith('http')

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1999;

  @media (max-width: 1200px) {
    display: none;
  }
`

const LogoImg = styled.img`
  height: 50px;
  margin: auto auto auto 20px;
  cursor: pointer;
`

const NavButtonCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  margin: auto 20px auto auto;
`

const NavText = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${({theme}) => theme.colors.navy};
  font-weight: 500;
  width: fit-content;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 1;
  cursor: pointer;
  background: none;
  border: none;
  font: inherit;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: left;
    padding-left: 30px;
    margin-bottom: 30px;
  }
`

const Dropdown = styled.div`
  position: relative;
`

const DropdownButton = styled(NavText)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border: 1px solid rgba(13, 22, 38, 0.12);
  box-shadow: 0 16px 40px rgba(13, 22, 38, 0.12);
  border-radius: 12px;
  padding: 8px 0;
  min-width: 200px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
`

const DropdownItem = styled.div`
  padding: 10px 16px;
  color: ${({theme}) => theme.colors.navy};
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: rgba(35, 66, 97, 0.06);
  }
`

const DropdownWrapper = styled(Dropdown)`
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 12px;
  }

  &:hover ${DropdownMenu} {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(2px);
  }

  &:focus-within ${DropdownMenu} {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(2px);
  }

  ${DropdownMenu}:hover {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(2px);
  }
`

const NavBarMobile = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${({theme}) => theme.colors.card};
  display: none;
  align-items: center;
  z-index: 9999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    display: flex;
  }
`

const MobileLogo = styled.img`
  height: 60px;
  margin-left: 10px;
  margin-top: -0.5px;
  cursor: pointer;
`

const LinesButton = styled.button<{$open: boolean}>`
  position: relative;
  float: right;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 76px;
  height: 36px;
  font-size: 0;
  text-indent: -9999px;
  appearance: none;
  box-shadow: none;
  border-radius: 0;
  border: none;
  cursor: pointer;
  z-index: 1000;
  transition: background 0.3s;
  margin-bottom: auto;
  margin-left: auto;
  margin-top: auto;
  background: none;

  &:focus {
    outline: none;
  }

  span {
    display: block;
    position: absolute;
    left: 18px;
    right: 18px;
    height: 4px;
    background: ${({theme}) => theme.colors.muted};
    border-radius: 0.57143rem;
    transition: background 0s 0.3s;
  }

  span::before,
  span::after {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({theme}) => theme.colors.muted};
    border-radius: 0.57143rem;
    content: '';
    transition-duration: 0.3s, 0.3s;
  }

  span::before {
    top: -10px;
    transition-property: top, transform;
  }

  span::after {
    bottom: -10px;
    transition-property: bottom, transform;
  }

  ${({$open}) =>
    $open &&
    css`
      span {
        visibility: hidden;
      }

      span::before {
        top: 0;
        transform: rotate(225deg);
        visibility: visible;
      }

      span::after {
        bottom: 0;
        transform: rotate(-225deg);
        visibility: visible;
      }
    `}
`

const MobileMenu = styled.div<{$open: boolean}>`
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 5;
  background-color: ${({theme}) => theme.colors.card};
  width: 100vw;
  height: fit-content;
  padding-bottom: 25px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  opacity: ${({$open}) => ($open ? 1 : 0)};
  pointer-events: ${({$open}) => ($open ? 'auto' : 'none')};
  transform: translateY(${({$open}) => ($open ? '0' : '-8px')});
  transition: opacity 0.2s ease, transform 0.2s ease;
`

const MobileMenuInner = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.colors.card};
  width: 99.1vw;
  justify-content: flex-end;
  flex-direction: column;
  text-align: center;
`

const MobileColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = ({siteSettings, loading, whoWeServePages}: HeaderProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const navLinks = siteSettings?.navLinks ?? []
  const whoWeServeLabel = siteSettings?.whoWeServeNav?.label || 'Who We Serve'
  const showWhoWeServe = siteSettings?.whoWeServeNav?.enabled !== false && (whoWeServePages?.length ?? 0) > 0
  const whoWeServeItems = (whoWeServePages ?? [])
    .filter((page) => page?.slug?.current)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  const filteredNavLinks = navLinks.filter((link) => {
    const href = link?.href || ''
    const isWhoWeServeLink = href.startsWith('/who-we-serve') || href === '/whoWeServe' || href === '/who-we-serve'
    return !isWhoWeServeLink && (link?.label || '').toLowerCase() !== whoWeServeLabel.toLowerCase()
  })

  const whoWeServeInsertIndex = filteredNavLinks.findIndex(
    (link) => (link?.href || '') === '/about' || (link?.label || '').toLowerCase() === 'how it works',
  )
  const navBeforeWhoWeServe =
    whoWeServeInsertIndex >= 0 ? filteredNavLinks.slice(0, whoWeServeInsertIndex + 1) : filteredNavLinks
  const navAfterWhoWeServe =
    whoWeServeInsertIndex >= 0 ? filteredNavLinks.slice(whoWeServeInsertIndex + 1) : []
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1200 : false,
  )

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth <= 1200)
    }

    if (typeof window === 'undefined') return
    window.scrollTo(0, 0)
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [location.key])

  const handleNav = (href: string) => {
    if (isExternal(href)) {
      if (typeof window !== 'undefined') {
        window.open(href, '_blank', 'noreferrer')
      }
      return
    }
    setMenuOpen(false)
    navigate(href)
  }

  if (isMobile) {
    return (
      <NavBarMobile>
        <MobileLogo src={logoImage} alt="logo" onClick={() => navigate('/')} />
        <LinesButton $open={menuOpen} onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>
          <span />
        </LinesButton>
        <MobileMenu $open={menuOpen}>
          <MobileColumn>
            <MobileMenuInner>
              {navBeforeWhoWeServe.map((link) =>
                link?.href ? (
                  <NavText
                    key={`${link.href}-${link.label ?? 'link'}`}
                    onClick={() => {
                      setMenuOpen(false)
                      handleNav(link.href ?? '')
                    }}
                  >
                    {link.label}
                  </NavText>
                ) : null,
              )}
              {showWhoWeServe ? (
                <>
                  <NavText as="div" style={{cursor: 'default', fontWeight: 600}}>
                    {whoWeServeLabel}
                  </NavText>
                  {whoWeServeItems.map((page) =>
                    page?.slug?.current ? (
                      <NavText
                        key={page.slug.current}
                        onClick={() => handleNav(`/who-we-serve/${page.slug?.current}`)}
                      >
                        {page.navLabel || page.title}
                      </NavText>
                    ) : null,
                  )}
                </>
              ) : null}
              {navAfterWhoWeServe.map((link) =>
                link?.href ? (
                  <NavText
                    key={`${link.href}-${link.label ?? 'link'}`}
                    onClick={() => {
                      setMenuOpen(false)
                      handleNav(link.href ?? '')
                    }}
                  >
                    {link.label}
                  </NavText>
                ) : null,
              )}
            </MobileMenuInner>
          </MobileColumn>
        </MobileMenu>
      </NavBarMobile>
    )
  }

  return (
    <NavBar>
      <LogoImg
        onClick={() => navigate('/')}
        src={logoImage}
        alt={siteSettings?.logoText || siteSettings?.brandName || (loading ? 'Loading…' : 'logo')}
      />
      <NavButtonCont>
        {navBeforeWhoWeServe.map((link) =>
          link?.href ? (
            <NavText key={`${link.href}-${link.label ?? 'link'}`} onClick={() => handleNav(link.href ?? '')}>
              {link.label}
            </NavText>
          ) : null,
        )}
        {showWhoWeServe ? (
          <DropdownWrapper>
            <DropdownButton as="button" type="button" aria-haspopup="true">
              {whoWeServeLabel}
              <span aria-hidden="true">▾</span>
            </DropdownButton>
            <DropdownMenu>
              {whoWeServeItems.map((page) =>
                page?.slug?.current ? (
                  <DropdownItem key={page.slug.current} onClick={() => handleNav(`/who-we-serve/${page.slug.current}`)}>
                    {page.navLabel || page.title}
                  </DropdownItem>
                ) : null,
              )}
            </DropdownMenu>
          </DropdownWrapper>
        ) : null}
        {navAfterWhoWeServe.map((link) =>
          link?.href ? (
            <NavText key={`${link.href}-${link.label ?? 'link'}`} onClick={() => handleNav(link.href ?? '')}>
              {link.label}
            </NavText>
          ) : null,
        )}
      </NavButtonCont>
    </NavBar>
  )
}
