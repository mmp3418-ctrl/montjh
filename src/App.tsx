import type { FC } from 'react'
import About from './components/About'
import BegoniaClub from './components/BegoniaClub'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Investments from './components/Investments'
import Navbar from './components/Navbar'

const App: FC = () => {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-navy text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,169,255,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(0,71,171,0.12),transparent_40%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Investments />
        <BegoniaClub />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
