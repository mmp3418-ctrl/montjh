import type { FC } from 'react'

interface SkeletonBlockProps {
  className?: string
}

const SkeletonBlock: FC<SkeletonBlockProps> = ({ className = '' }) => {
  return (
    <div
      className={`skeleton-pulse rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] ${className}`}
      aria-hidden="true"
    />
  )
}

export default SkeletonBlock
