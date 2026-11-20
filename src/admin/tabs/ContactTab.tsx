import { CheckCheck, Mail, Trash2 } from 'lucide-react'
import { useEffect, useState, type FC, type FormEvent } from 'react'
import { seedSettings } from '../../data/seedContent'
import { supabase } from '../../lib/supabase'
import type { ContactMessage, SiteSettings } from '../../types'
import { mergeSettings } from '../../utils/siteSettings'
import type { AdminDictionary } from '../i18n'
import { AdminInput, AdminTextarea } from '../components/AdminField'
import type { ToastState } from '../components/AdminToast'

interface ContactTabProps {
  dict: AdminDictionary
  onToast: (toast: ToastState) => void
}

type ContactForm = {
  phone: string
  whatsapp: string
  email: string
  address_ar: string
  address_en: string
  map_url: string
}

function toForm(settings: SiteSettings): ContactForm {
  return {
    phone: settings.phone ?? '',
    whatsapp: settings.whatsapp ?? '',
    email: settings.email ?? '',
    address_ar: settings.address_ar ?? '',
    address_en: settings.address_en ?? '',
    map_url: settings.map_url ?? '',
  }
}

const ContactTab: FC<ContactTabProps> = ({ dict, onToast }) => {
  const [rowId, setRowId] = useState<string | number>(1)
  const [form, setForm] = useState<ContactForm>(toForm(seedSettings))
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const load = async (): Promise<void> => {
    setLoading(true)
    const [settingsRes, messagesRes] = await Promise.all([
      supabase.from('site_settings').select('*').order('id', { ascending: true }).limit(1).maybeSingle(),
      supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
    ])

    if (settingsRes.error) {
      onToast({ type: 'error', message: settingsRes.error.message || dict.error })
    } else if (settingsRes.data) {
      const merged = mergeSettings(settingsRes.data as SiteSettings)
      setForm(toForm(merged))
      setRowId(merged.id)
    }

    if (messagesRes.error) {
      onToast({ type: 'error', message: messagesRes.error.message || dict.error })
      setMessages([])
    } else {
      setMessages((messagesRes.data as ContactMessage[]) ?? [])
    }

    setLoading(false)
  }

  useEffect(() => {
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSave = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    setSaving(true)
    try {
      const payload = {
        phone: form.phone.trim() || null,
        whatsapp: form.whatsapp.trim() || null,
        email: form.email.trim() || null,
        address_ar: form.address_ar.trim() || null,
        address_en: form.address_en.trim() || null,
        map_url: form.map_url.trim() || null,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('site_settings').update(payload).eq('id', rowId)
      if (error) {
        const upsert = await supabase
          .from('site_settings')
          .upsert({ id: rowId === 1 || rowId === '1' ? 1 : rowId, ...payload })
        error = upsert.error
      }
      if (error) throw new Error(error.message)
      onToast({ type: 'success', message: dict.saved })
      await load()
    } catch (err) {
      onToast({
        type: 'error',
        message: err instanceof Error ? err.message : dict.error,
      })
    } finally {
      setSaving(false)
    }
  }

  const toggleRead = async (message: ContactMessage): Promise<void> => {
    const next = !(message.is_read ?? false)
    const { error } = await supabase
      .from('contact_messages')
      .update({ is_read: next })
      .eq('id', message.id)
    if (error) {
      onToast({ type: 'error', message: error.message || dict.error })
      return
    }
    setMessages((prev) =>
      prev.map((m) => (m.id === message.id ? { ...m, is_read: next } : m)),
    )
  }

  const handleDelete = async (id: string): Promise<void> => {
    if (!window.confirm(dict.confirmDelete)) return
    const { error } = await supabase.from('contact_messages').delete().eq('id', id)
    if (error) {
      onToast({ type: 'error', message: error.message || dict.error })
      return
    }
    setMessages((prev) => prev.filter((m) => m.id !== id))
    onToast({ type: 'success', message: dict.saved })
  }

  if (loading) {
    return <p className="text-sm text-[var(--text-muted)]">{dict.loading}</p>
  }

  return (
    <div className="space-y-6">
      <form onSubmit={(e) => void handleSave(e)} className="glass rounded-2xl p-5 sm:p-6">
        <h3 className="mb-4 text-base font-bold text-[var(--text-primary)]">
          {dict.tabs.contact}
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <AdminInput
            label="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            dir="ltr"
          />
          <AdminInput
            label="WhatsApp"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            dir="ltr"
          />
          <AdminInput
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            dir="ltr"
          />
          <AdminInput
            label="Map URL"
            value={form.map_url}
            onChange={(e) => setForm({ ...form, map_url: e.target.value })}
            dir="ltr"
          />
          <AdminTextarea
            label="Address (AR)"
            value={form.address_ar}
            onChange={(e) => setForm({ ...form, address_ar: e.target.value })}
            dir="rtl"
          />
          <AdminTextarea
            label="Address (EN)"
            value={form.address_en}
            onChange={(e) => setForm({ ...form, address_en: e.target.value })}
            dir="ltr"
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-gradient px-5 text-sm font-bold text-white disabled:opacity-70"
        >
          {saving ? dict.saving : dict.save}
        </button>
      </form>

      <section className="space-y-3">
        <h3 className="flex items-center gap-2 text-base font-bold text-[var(--text-primary)]">
          <Mail size={18} className="text-cyan" />
          Inbox
        </h3>

        {messages.length === 0 ? (
          <div className="glass rounded-2xl p-8 text-center text-sm text-[var(--text-muted)]">
            {dict.noMessages}
          </div>
        ) : (
          <ul className="space-y-3">
            {messages.map((message) => {
              const read = Boolean(message.is_read)
              return (
                <li
                  key={message.id}
                  className={`glass rounded-2xl p-4 sm:p-5 ${read ? 'opacity-80' : 'border-cyan/25'}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-[var(--text-primary)]">{message.full_name}</p>
                      <p className="mt-1 text-sm text-[var(--text-muted)]" dir="ltr">
                        {message.email}
                        {message.phone ? ` · ${message.phone}` : ''}
                      </p>
                      <p className="mt-1 text-xs text-[var(--text-muted)]" dir="ltr">
                        {new Date(message.created_at).toLocaleString()}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        read
                          ? 'bg-white/10 text-[var(--text-muted)]'
                          : 'bg-cyan/15 text-cyan'
                      }`}
                    >
                      {read ? 'Read' : 'New'}
                    </span>
                  </div>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[var(--text-secondary)]">
                    {message.message}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => void toggleRead(message)}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-cyan/30 bg-cyan/10 px-3 text-xs font-semibold text-cyan"
                    >
                      <CheckCheck size={14} />
                      {read ? dict.markUnread : dict.markRead}
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleDelete(message.id)}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-red-400/30 bg-red-500/10 px-3 text-xs font-semibold text-red-400"
                    >
                      <Trash2 size={14} />
                      {dict.delete}
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}

export default ContactTab
