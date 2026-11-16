import type { FC } from 'react'
import type { SectionHeadingProps } from '../types'

const SectionHeading: FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
}) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-start'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 text-sm font-semibold tracking-wide text-cyan">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
