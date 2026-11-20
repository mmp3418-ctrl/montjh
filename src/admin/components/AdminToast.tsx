import { CheckCircle2, XCircle } from 'lucide-react'
import type { FC } from 'react'

export type ToastState = {
  type: 'success' | 'error'
  message: string
} | null

interface AdminToastProps {
  toast: ToastState
  onClose: () => void
}

const AdminToast: FC<AdminToastProps> = ({ toast, onClose }) => {
  if (!toast) return null

  const isSuccess = toast.type === 'success'

  return (
    <div
      role="status"
      className={`fixed bottom-5 start-1/2 z-[80] flex w-[min(92vw,420px)] -translate-x-1/2 items-start gap-3 rounded-2xl border px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${
        isSuccess
          ? 'border-cyan/40 bg-[#0B192C]/92 text-white'
          : 'border-red-400/40 bg-[#2a1218]/95 text-white'
      }`}
    >
      {isSuccess ? (
        <CheckCircle2 className="mt-0.5 shrink-0 text-cyan" size={18} />
      ) : (
        <XCircle className="mt-0.5 shrink-0 text-red-300" size={18} />
      )}
      <p className="flex-1 text-sm leading-6">{toast.message}</p>
      <button
        type="button"
        onClick={onClose}
        className="rounded-lg px-2 py-1 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        ✕
      </button>
    </div>
  )
}

export default AdminToast
