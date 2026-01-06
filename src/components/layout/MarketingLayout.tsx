import type {ReactNode} from 'react'
import styled from 'styled-components'
import type {SiteSettings} from '../../sanity/types'
import {Footer} from './Footer'
import {Header} from './Header'

type MarketingLayoutProps = {
  children: ReactNode
  siteSettings?: SiteSettings
  loadingSiteSettings?: boolean
}

const Main = styled.main`
  position: relative;
  z-index: 1;
`

export const MarketingLayout = ({children, siteSettings, loadingSiteSettings}: MarketingLayoutProps) => (
  <>
    <Header siteSettings={siteSettings} loading={loadingSiteSettings} />
    <Main>{children}</Main>
    <Footer siteSettings={siteSettings} />
  </>
)
