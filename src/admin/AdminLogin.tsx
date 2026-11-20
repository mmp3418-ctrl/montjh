import { Lock, Mail } from 'lucide-react'
import { useState, type FC, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import LanguageToggle from '../components/LanguageToggle'
import ThemeToggle from '../components/ThemeToggle'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { BRAND_NAME } from '../data/content'
import { getAdminDict } from './i18n'

const AdminLogin: FC = () => {
  const { language } = useLanguage()
  const dict = getAdminDict(language)
  const { session, loading, signIn } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!loading && session) {
    return <Navigate to="/admin" replace />
  }

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    setSubmitting(true)
    setError(null)
    const result = await signIn(email, password)
    setSubmitting(false)
    if (result.error) {
      setError(result.error)
      return
    }
    navigate('/admin', { replace: true })
  }

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-page px-4 py-10 text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,169,255,0.16),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(0,71,171,0.18),transparent_45%)]" />
      <div className="absolute end-4 top-4 z-10 flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <form
        onSubmit={(e) => {
          void handleSubmit(e)
        }}
        className="glass relative z-10 w-full max-w-md rounded-3xl p-6 sm:p-8"
      >
        <div className="mb-6 text-center">
          <p className="font-display text-sm font-semibold tracking-wide text-cyan" dir="ltr">
            {BRAND_NAME}
          </p>
          <h1 className="mt-2 text-2xl font-extrabold text-[var(--text-primary)]">
            {dict.loginTitle}
          </h1>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">{dict.loginSubtitle}</p>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
              <Mail size={14} /> {dict.email}
            </span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              dir="ltr"
              className="w-full min-h-12 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--glass-border-hover)] focus:ring-2 focus:ring-[#00A9FF]/20"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
              <Lock size={14} /> {dict.password}
            </span>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              dir="ltr"
              className="w-full min-h-12 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--glass-border-hover)] focus:ring-2 focus:ring-[#00A9FF]/20"
            />
          </label>
        </div>

        {error ? (
          <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting || loading}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-gradient px-5 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-70"
        >
          {submitting ? dict.signingIn : dict.signIn}
        </button>
      </form>
    </div>
  )
}

export default AdminLogin
