import {
  ExternalLink,
  Image as ImageIcon,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings2,
  Sparkles,
} from 'lucide-react'
import { useEffect, useState, type FC } from 'react'
import { Link, Navigate } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggle'
import ThemeToggle from '../components/ThemeToggle'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { BRAND_NAME } from '../data/content'
import AdminToast, { type ToastState } from './components/AdminToast'
import { getAdminDict } from './i18n'
import ContactTab from './tabs/ContactTab'
import GalleryTab from './tabs/GalleryTab'
import ServicesTab from './tabs/ServicesTab'
import SiteSettingsTab from './tabs/SiteSettingsTab'

type TabId = 'site' | 'services' | 'gallery' | 'contact'

const tabs: Array<{ id: TabId; icon: typeof Settings2 }> = [
  { id: 'site', icon: Settings2 },
  { id: 'services', icon: Sparkles },
  { id: 'gallery', icon: ImageIcon },
  { id: 'contact', icon: MessageSquare },
]

const AdminDashboard: FC = () => {
  const { language } = useLanguage()
  const dict = getAdminDict(language)
  const { session, loading, signOut } = useAuth()
  const [activeTab, setActiveTab] = useState<TabId>('site')
  const [toast, setToast] = useState<ToastState>(null)

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(null), 3200)
    return () => window.clearTimeout(timer)
  }, [toast])

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-page text-primary">
        <p className="text-sm text-[var(--text-muted)]">{dict.loading}</p>
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-page text-primary">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,169,255,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(0,71,171,0.1),transparent_40%)]" />

      <header className="nav-shell sticky top-0 z-40">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="inline-flex rounded-xl bg-brand-gradient p-2 text-white">
              <LayoutDashboard size={16} />
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-semibold text-cyan" dir="ltr">
                {BRAND_NAME}
              </p>
              <p className="truncate text-xs text-[var(--text-muted)]">{dict.dashboard}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              to="/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-[var(--nav-control-border)] bg-[var(--nav-control-bg)] px-3 text-xs font-semibold"
            >
              <ExternalLink size={14} />
              {dict.viewLive}
            </Link>
            <button
              type="button"
              onClick={() => void signOut()}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-red-400/30 bg-red-500/10 px-3 text-xs font-semibold text-red-400"
            >
              <LogOut size={14} />
              {dict.logout}
            </button>
          </div>
        </div>
      </header>

      <div className="container-site py-6 sm:py-8">
        <nav className="mb-6 flex gap-2 overflow-x-auto pb-1">
          {tabs.map(({ id, icon: Icon }) => {
            const active = activeTab === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl px-4 text-sm font-semibold transition ${
                  active
                    ? 'bg-brand-gradient text-white shadow-[0_8px_24px_rgba(0,169,255,0.25)]'
                    : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Icon size={15} />
                {dict.tabs[id]}
              </button>
            )
          })}
        </nav>

        <div className="min-w-0">
          {activeTab === 'site' ? (
            <SiteSettingsTab dict={dict} onToast={setToast} />
          ) : null}
          {activeTab === 'services' ? (
            <ServicesTab dict={dict} onToast={setToast} />
          ) : null}
          {activeTab === 'gallery' ? (
            <GalleryTab dict={dict} onToast={setToast} />
          ) : null}
          {activeTab === 'contact' ? (
            <ContactTab dict={dict} onToast={setToast} />
          ) : null}
        </div>
      </div>

      <AdminToast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}

export default AdminDashboard
