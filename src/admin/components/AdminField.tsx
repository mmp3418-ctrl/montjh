import type {
  FC,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

const baseClass =
  'w-full min-h-11 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--glass-border-hover)] focus:ring-2 focus:ring-[#00A9FF]/20'

interface FieldShellProps {
  label: string
  hint?: string
  children: ReactNode
}

export const FieldShell: FC<FieldShellProps> = ({ label, hint, children }) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-semibold text-[var(--text-muted)]">{label}</span>
    {children}
    {hint ? <span className="mt-1 block text-[11px] text-[var(--text-muted)]">{hint}</span> : null}
  </label>
)

interface AdminInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  hint?: string
}

export const AdminInput: FC<AdminInputProps> = ({ label, hint, className = '', ...props }) => (
  <FieldShell label={label} hint={hint}>
    <input className={`${baseClass} ${className}`} {...props} />
  </FieldShell>
)

interface AdminTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  hint?: string
}

export const AdminTextarea: FC<AdminTextareaProps> = ({
  label,
  hint,
  className = '',
  ...props
}) => (
  <FieldShell label={label} hint={hint}>
    <textarea className={`${baseClass} min-h-28 resize-y ${className}`} {...props} />
  </FieldShell>
)

interface AdminSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: Array<{ value: string; label: string }>
}

export const AdminSelect: FC<AdminSelectProps> = ({ label, options, className = '', ...props }) => (
  <FieldShell label={label}>
    <select className={`${baseClass} ${className}`} {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </FieldShell>
)
