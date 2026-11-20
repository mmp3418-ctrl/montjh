import type { FC } from 'react'
import Contact from '../components/Contact'
import FacilitiesOverview from '../components/FacilitiesOverview'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import { SiteDataProvider } from '../context/SiteDataContext'

const HomePage: FC = () => {
  return (
    <SiteDataProvider>
      <div className="relative min-h-dvh overflow-x-hidden bg-page text-primary">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,169,255,0.07),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(0,71,171,0.08),transparent_40%)]" />
        <Navbar />
        <main>
          <Hero />
          <FacilitiesOverview />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </SiteDataProvider>
  )
}

export default HomePage
