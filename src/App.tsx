import {Navigate, Route, Routes} from 'react-router-dom'
import {MarketingLayout} from './components/layout/MarketingLayout'
import {LoadingState} from './components/layout/PageState'
import {AboutPage} from './pages/AboutPage'
import {ContactPage} from './pages/ContactPage'
import {HowItWorksPage} from './pages/HowItWorksPage'
import {HomePage} from './pages/HomePage'
import {PricingPage} from './pages/PricingPage'
import {ProductPage} from './pages/ProductPage'
import {SecurityPage} from './pages/SecurityPage'
import {WhoWeServePage} from './pages/WhoWeServePage'
import {fallbackSiteSettings, fallbackWhoWeServePages} from './sanity/fallbacks'
import {SITE_SETTINGS_QUERY, WHO_WE_SERVE_LIST_QUERY} from './sanity/queries'
import type {SiteSettings, WhoWeServePage as WhoWeServePageType} from './sanity/types'
import {useSanityDoc} from './sanity/useSanityDoc'

function App() {
  const {data: siteSettings, loading: loadingSiteSettings} = useSanityDoc<SiteSettings>(SITE_SETTINGS_QUERY)
  const {data: whoWeServePages} = useSanityDoc<WhoWeServePageType[]>(WHO_WE_SERVE_LIST_QUERY)

  const resolvedSiteSettings = siteSettings ?? fallbackSiteSettings
  const resolvedWhoWeServePages = whoWeServePages?.length ? whoWeServePages : fallbackWhoWeServePages

  if (loadingSiteSettings && !siteSettings) return <LoadingState label="Loading site settings..." />

  return (
    <MarketingLayout
      siteSettings={resolvedSiteSettings}
      loadingSiteSettings={loadingSiteSettings}
      whoWeServePages={resolvedWhoWeServePages}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/who-we-serve/:slug" element={<WhoWeServePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MarketingLayout>
  )
}

export default App
