import type { FC } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Investments from './components/Investments'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

const AppShell: FC = () => {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-page text-primary">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,169,255,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(0,71,171,0.1),transparent_40%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Investments />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle floating />
    </div>
  )
}

const App: FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
