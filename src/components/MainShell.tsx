import type { FC } from 'react'

/**
 * Empty content canvas for future dashboard-driven sections.
 * Keep this structurally ready — no hardcoded business data.
 */
const MainShell: FC = () => {
  return (
    <section
      id="main"
      className="section-pad flex min-h-dvh items-center justify-center pt-24 sm:pt-28"
    >
      <div className="container-site w-full">
        <div className="glass min-h-[50vh] w-full rounded-2xl border border-dashed border-[var(--glass-border)]" />
      </div>
    </section>
  )
}

export default MainShell
