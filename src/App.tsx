import type { FC } from 'react'
import MainShell from './components/MainShell'
import Navbar from './components/Navbar'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

const AppShell: FC = () => {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-page text-primary">
      <Navbar />
      <main>
        <MainShell />
      </main>
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
