import type { FC, ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'start' | 'center'
}

const SectionHeading: FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
}) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-start'

  return (
    <div className={`w-full max-w-3xl ${alignment}`}>
      <p className="mb-3 text-sm font-semibold tracking-wide text-cyan">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
