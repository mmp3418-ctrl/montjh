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
    <div className="min-h-dvh overflow-x-hidden bg-navy text-white">
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
