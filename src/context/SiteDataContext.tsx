import { createContext, useContext, type FC, type ReactNode } from 'react'
import { useSiteData, type SiteData } from '../hooks/useSiteData'

interface SiteDataContextValue extends SiteData {
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
}

const SiteDataContext = createContext<SiteDataContextValue | null>(null)

interface SiteDataProviderProps {
  children: ReactNode
}

export const SiteDataProvider: FC<SiteDataProviderProps> = ({ children }) => {
  const value = useSiteData()
  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>
}

export function useSite(): SiteDataContextValue {
  const context = useContext(SiteDataContext)
  if (!context) {
    throw new Error('useSite must be used within SiteDataProvider')
  }
  return context
}
