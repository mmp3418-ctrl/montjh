import { Inbox } from 'lucide-react'
import type { FC, ReactNode } from 'react'

interface EmptyStateProps {
  message: string
  icon?: ReactNode
  className?: string
  compact?: boolean
}

const EmptyState: FC<EmptyStateProps> = ({
  message,
  icon,
  className = '',
  compact = false,
}) => {
  return (
    <div
      className={`glass flex flex-col items-center justify-center rounded-2xl border-dashed text-center ${
        compact ? 'min-h-40 gap-2 p-5' : 'min-h-52 gap-3 p-8'
      } ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00A9FF]/12 text-cyan">
        {icon ?? <Inbox size={22} aria-hidden="true" />}
      </div>
      <p className="max-w-sm text-sm text-[var(--text-muted)]">{message}</p>
    </div>
  )
}

export default EmptyState
