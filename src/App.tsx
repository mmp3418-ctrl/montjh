import type { FC } from 'react'
import AboutVisionMission from './components/AboutVisionMission'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import { LanguageProvider } from './context/LanguageContext'
import { SiteDataProvider } from './context/SiteDataContext'
import { ThemeProvider } from './context/ThemeContext'

const AppShell: FC = () => {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-page text-primary">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,169,255,0.07),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(0,71,171,0.08),transparent_40%)]" />
      <Navbar />
      <main>
        <Hero />
        <AboutVisionMission />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

const App: FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SiteDataProvider>
          <AppShell />
        </SiteDataProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
