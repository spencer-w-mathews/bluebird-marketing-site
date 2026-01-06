import {Navigate, Route, Routes} from 'react-router-dom'
import {MarketingLayout} from './components/layout/MarketingLayout'
import {LoadingState} from './components/layout/PageState'
import {AboutPage} from './pages/AboutPage'
import {ContactPage} from './pages/ContactPage'
import {HomePage} from './pages/HomePage'
import {PricingPage} from './pages/PricingPage'
import {SecurityPage} from './pages/SecurityPage'
import {fallbackSiteSettings} from './sanity/fallbacks'
import {SITE_SETTINGS_QUERY} from './sanity/queries'
import type {SiteSettings} from './sanity/types'
import {useSanityDoc} from './sanity/useSanityDoc'

function App() {
  const {data: siteSettings, loading: loadingSiteSettings} = useSanityDoc<SiteSettings>(SITE_SETTINGS_QUERY)

  const resolvedSiteSettings = siteSettings ?? fallbackSiteSettings

  if (loadingSiteSettings && !siteSettings) return <LoadingState label="Loading site settings..." />

  return (
    <MarketingLayout siteSettings={resolvedSiteSettings} loadingSiteSettings={loadingSiteSettings}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MarketingLayout>
  )
}

export default App
