import { ArrowDown, ArrowUp, Pencil, Plus, Trash2 } from 'lucide-react'
import { useEffect, useState, type FC, type FormEvent } from 'react'
import ServiceIcon, { SERVICE_ICON_OPTIONS } from '../../components/ServiceIcon'
import { supabase } from '../../lib/supabase'
import type { ServiceRow } from '../../types'
import type { AdminDictionary } from '../i18n'
import { AdminInput, AdminSelect, AdminTextarea } from '../components/AdminField'
import type { ToastState } from '../components/AdminToast'

interface ServicesTabProps {
  dict: AdminDictionary
  onToast: (toast: ToastState) => void
}

type ServiceForm = {
  id?: string
  title_ar: string
  title_en: string
  description_ar: string
  description_en: string
  icon_name: string
  sort_order: number
}

const emptyForm = (sortOrder: number): ServiceForm => ({
  title_ar: '',
  title_en: '',
  description_ar: '',
  description_en: '',
  icon_name: 'Waves',
  sort_order: sortOrder,
})

const ServicesTab: FC<ServicesTabProps> = ({ dict, onToast }) => {
  const [items, setItems] = useState<ServiceRow[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editing, setEditing] = useState<ServiceForm | null>(null)

  const load = async (): Promise<void> => {
    setLoading(true)
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error) {
      onToast({ type: 'error', message: error.message || dict.error })
      setItems([])
    } else {
      setItems((data as ServiceRow[]) ?? [])
    }
    setLoading(false)
  }

  useEffect(() => {
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const openCreate = (): void => {
    const nextOrder =
      items.reduce((max, item) => Math.max(max, item.sort_order ?? 0), 0) + 1
    setEditing(emptyForm(nextOrder))
  }

  const openEdit = (item: ServiceRow): void => {
    setEditing({
      id: item.id,
      title_ar: item.title_ar,
      title_en: item.title_en,
      description_ar: item.description_ar ?? '',
      description_en: item.description_en ?? '',
      icon_name: item.icon_name || 'Waves',
      sort_order: item.sort_order ?? 0,
    })
  }

  const handleSave = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    if (!editing) return
    if (!editing.title_ar.trim() || !editing.title_en.trim()) {
      onToast({ type: 'error', message: dict.error })
      return
    }

    setSaving(true)
    try {
      const payload = {
        title_ar: editing.title_ar.trim(),
        title_en: editing.title_en.trim(),
        description_ar: editing.description_ar.trim() || null,
        description_en: editing.description_en.trim() || null,
        icon_name: editing.icon_name,
        sort_order: Number(editing.sort_order) || 0,
      }

      if (editing.id) {
        const { error } = await supabase.from('services').update(payload).eq('id', editing.id)
        if (error) throw new Error(error.message)
      } else {
        const { error } = await supabase.from('services').insert(payload)
        if (error) throw new Error(error.message)
      }

      setEditing(null)
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

  const handleDelete = async (id: string): Promise<void> => {
    if (!window.confirm(dict.confirmDelete)) return
    const { error } = await supabase.from('services').delete().eq('id', id)
    if (error) {
      onToast({ type: 'error', message: error.message || dict.error })
      return
    }
    onToast({ type: 'success', message: dict.saved })
    await load()
  }

  const swapOrder = async (index: number, direction: -1 | 1): Promise<void> => {
    const target = index + direction
    if (target < 0 || target >= items.length) return
    const a = items[index]
    const b = items[target]
    if (!a || !b) return
    const aOrder = a.sort_order
    const bOrder = b.sort_order

    const updates = await Promise.all([
      supabase.from('services').update({ sort_order: bOrder }).eq('id', a.id),
      supabase.from('services').update({ sort_order: aOrder }).eq('id', b.id),
    ])

    const failed = updates.find((res) => res.error)
    if (failed?.error) {
      onToast({ type: 'error', message: failed.error.message || dict.error })
      return
    }
    await load()
  }

  if (loading) {
    return <p className="text-sm text-[var(--text-muted)]">{dict.loading}</p>
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[var(--text-secondary)]">
          {items.length} {dict.tabs.services}
        </p>
        <button
          type="button"
          onClick={openCreate}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-gradient px-4 text-sm font-bold text-white"
        >
          <Plus size={16} />
          {dict.add}
        </button>
      </div>

      {editing ? (
        <form onSubmit={(e) => void handleSave(e)} className="glass rounded-2xl p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              {editing.id ? dict.edit : dict.add}
            </h3>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="rounded-lg px-3 py-1.5 text-sm text-[var(--text-muted)] hover:bg-white/5"
            >
              {dict.cancel}
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <AdminInput
              label="Title (AR)"
              value={editing.title_ar}
              onChange={(e) => setEditing({ ...editing, title_ar: e.target.value })}
              dir="rtl"
              required
            />
            <AdminInput
              label="Title (EN)"
              value={editing.title_en}
              onChange={(e) => setEditing({ ...editing, title_en: e.target.value })}
              dir="ltr"
              required
            />
            <AdminTextarea
              label="Description (AR)"
              value={editing.description_ar}
              onChange={(e) => setEditing({ ...editing, description_ar: e.target.value })}
              dir="rtl"
            />
            <AdminTextarea
              label="Description (EN)"
              value={editing.description_en}
              onChange={(e) => setEditing({ ...editing, description_en: e.target.value })}
              dir="ltr"
            />
            <AdminSelect
              label="Icon"
              value={editing.icon_name}
              onChange={(e) => setEditing({ ...editing, icon_name: e.target.value })}
              options={SERVICE_ICON_OPTIONS.map((name) => ({ value: name, label: name }))}
            />
            <AdminInput
              label="Sort Order"
              type="number"
              value={editing.sort_order}
              onChange={(e) =>
                setEditing({ ...editing, sort_order: Number(e.target.value) || 0 })
              }
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
      ) : null}

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="glass flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
          >
            <div className="flex min-w-0 items-start gap-3">
              <div className="inline-flex rounded-xl bg-brand-gradient p-2.5 text-white">
                <ServiceIcon name={item.icon_name} className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-bold text-[var(--text-primary)]">{item.title_ar}</p>
                <p className="truncate text-sm text-[var(--text-muted)]" dir="ltr">
                  {item.title_en}
                </p>
                <p className="mt-1 text-xs text-cyan">#{item.sort_order}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => void swapOrder(index, -1)}
                disabled={index === 0}
                className="inline-flex min-h-10 items-center gap-1 rounded-xl border border-[var(--glass-border)] px-3 text-xs font-semibold disabled:opacity-40"
              >
                <ArrowUp size={14} /> {dict.reorderUp}
              </button>
              <button
                type="button"
                onClick={() => void swapOrder(index, 1)}
                disabled={index === items.length - 1}
                className="inline-flex min-h-10 items-center gap-1 rounded-xl border border-[var(--glass-border)] px-3 text-xs font-semibold disabled:opacity-40"
              >
                <ArrowDown size={14} /> {dict.reorderDown}
              </button>
              <button
                type="button"
                onClick={() => openEdit(item)}
                className="inline-flex min-h-10 items-center gap-1 rounded-xl border border-cyan/30 bg-cyan/10 px-3 text-xs font-semibold text-cyan"
              >
                <Pencil size={14} /> {dict.edit}
              </button>
              <button
                type="button"
                onClick={() => void handleDelete(item.id)}
                className="inline-flex min-h-10 items-center gap-1 rounded-xl border border-red-400/30 bg-red-500/10 px-3 text-xs font-semibold text-red-400"
              >
                <Trash2 size={14} /> {dict.delete}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesTab
