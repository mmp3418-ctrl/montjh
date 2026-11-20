import { ImagePlus, Trash2 } from 'lucide-react'
import { useEffect, useState, type ChangeEvent, type FC, type FormEvent } from 'react'
import { seedSettings } from '../../data/seedContent'
import { deleteMediaByPublicUrl, uploadMediaFile } from '../../lib/storage'
import { supabase } from '../../lib/supabase'
import type { SiteSettings } from '../../types'
import { mergeSettings } from '../../utils/siteSettings'
import type { AdminDictionary } from '../i18n'
import { AdminInput, AdminTextarea } from '../components/AdminField'
import type { ToastState } from '../components/AdminToast'

interface SiteSettingsTabProps {
  dict: AdminDictionary
  onToast: (toast: ToastState) => void
}

type FormState = {
  hero_title_ar: string
  hero_title_en: string
  hero_subtitle_ar: string
  hero_subtitle_en: string
  main_heading_ar: string
  main_heading_en: string
  complex_overview_ar: string
  complex_overview_en: string
  facilities_heading_ar: string
  facilities_heading_en: string
  facilities_intro_ar: string
  facilities_intro_en: string
  hero_image_url: string
  logo_url: string
}

function toForm(settings: SiteSettings): FormState {
  return {
    hero_title_ar: settings.hero_title_ar ?? '',
    hero_title_en: settings.hero_title_en ?? '',
    hero_subtitle_ar: settings.hero_subtitle_ar ?? '',
    hero_subtitle_en: settings.hero_subtitle_en ?? '',
    main_heading_ar: settings.main_heading_ar ?? '',
    main_heading_en: settings.main_heading_en ?? '',
    complex_overview_ar: settings.complex_overview_ar ?? '',
    complex_overview_en: settings.complex_overview_en ?? '',
    facilities_heading_ar: settings.facilities_heading_ar ?? '',
    facilities_heading_en: settings.facilities_heading_en ?? '',
    facilities_intro_ar: settings.facilities_intro_ar ?? '',
    facilities_intro_en: settings.facilities_intro_en ?? '',
    hero_image_url: settings.hero_image_url ?? '',
    logo_url: settings.logo_url ?? '',
  }
}

const SiteSettingsTab: FC<SiteSettingsTabProps> = ({ dict, onToast }) => {
  const [rowId, setRowId] = useState<string | number>(1)
  const [form, setForm] = useState<FormState>(toForm(seedSettings))
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploadingHero, setUploadingHero] = useState(false)
  const [uploadingLogo, setUploadingLogo] = useState(false)

  const load = async (): Promise<void> => {
    setLoading(true)
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('id', 1)
      .maybeSingle()

    if (error) {
      onToast({ type: 'error', message: error.message || dict.error })
      setForm(toForm(seedSettings))
      setRowId(1)
    } else if (data) {
      const merged = mergeSettings(data as SiteSettings)
      setForm(toForm(merged))
      setRowId(merged.id)
    } else {
      setForm(toForm(seedSettings))
      setRowId(1)
    }
    setLoading(false)
  }

  useEffect(() => {
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateField = (key: keyof FormState, value: string): void => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const persistMediaField = async (
    field: 'hero_image_url' | 'logo_url',
    publicUrl: string | null,
  ): Promise<void> => {
    const payload = {
      [field]: publicUrl,
      updated_at: new Date().toISOString(),
    }
    const { error } = await supabase.from('site_settings').update(payload).eq('id', rowId)
    if (error) throw new Error(error.message)
  }

  const handleUploadHero = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return

    setUploadingHero(true)
    try {
      const previous = form.hero_image_url
      const { publicUrl } = await uploadMediaFile('hero', file)
      setForm((prev) => ({ ...prev, hero_image_url: publicUrl }))
      await persistMediaField('hero_image_url', publicUrl)

      if (previous && previous !== publicUrl) {
        try {
          await deleteMediaByPublicUrl(previous)
        } catch {
          /* non-blocking cleanup */
        }
      }

      onToast({ type: 'success', message: dict.saved })
    } catch (err) {
      onToast({
        type: 'error',
        message: err instanceof Error ? err.message : dict.error,
      })
    } finally {
      setUploadingHero(false)
    }
  }

  const handleUploadLogo = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return

    setUploadingLogo(true)
    try {
      const previous = form.logo_url
      const { publicUrl } = await uploadMediaFile('logo', file)
      setForm((prev) => ({ ...prev, logo_url: publicUrl }))
      await persistMediaField('logo_url', publicUrl)

      if (previous && previous !== publicUrl) {
        try {
          await deleteMediaByPublicUrl(previous)
        } catch {
          /* non-blocking cleanup */
        }
      }

      onToast({ type: 'success', message: dict.saved })
    } catch (err) {
      onToast({
        type: 'error',
        message: err instanceof Error ? err.message : dict.error,
      })
    } finally {
      setUploadingLogo(false)
    }
  }

  const handleRemoveHero = async (): Promise<void> => {
    if (!form.hero_image_url) return
    setUploadingHero(true)
    try {
      const previous = form.hero_image_url
      await persistMediaField('hero_image_url', null)
      setForm((prev) => ({ ...prev, hero_image_url: '' }))
      try {
        await deleteMediaByPublicUrl(previous)
      } catch {
        /* ignore */
      }
      onToast({ type: 'success', message: dict.saved })
    } catch (err) {
      onToast({
        type: 'error',
        message: err instanceof Error ? err.message : dict.error,
      })
    } finally {
      setUploadingHero(false)
    }
  }

  const handleRemoveLogo = async (): Promise<void> => {
    if (!form.logo_url) return
    setUploadingLogo(true)
    try {
      const previous = form.logo_url
      await persistMediaField('logo_url', null)
      setForm((prev) => ({ ...prev, logo_url: '' }))
      try {
        await deleteMediaByPublicUrl(previous)
      } catch {
        /* ignore */
      }
      onToast({ type: 'success', message: dict.saved })
    } catch (err) {
      onToast({
        type: 'error',
        message: err instanceof Error ? err.message : dict.error,
      })
    } finally {
      setUploadingLogo(false)
    }
  }

  const handleSave = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    setSaving(true)
    try {
      const heroTitleAr = form.hero_title_ar.trim() || form.main_heading_ar.trim() || null
      const heroTitleEn = form.hero_title_en.trim() || form.main_heading_en.trim() || null
      const heroSubtitleAr =
        form.hero_subtitle_ar.trim() || form.complex_overview_ar.trim() || null
      const heroSubtitleEn =
        form.hero_subtitle_en.trim() || form.complex_overview_en.trim() || null
      const mainHeadingAr = form.main_heading_ar.trim() || form.hero_title_ar.trim() || null
      const mainHeadingEn = form.main_heading_en.trim() || form.hero_title_en.trim() || null
      const overviewAr =
        form.complex_overview_ar.trim() || form.hero_subtitle_ar.trim() || null
      const overviewEn =
        form.complex_overview_en.trim() || form.hero_subtitle_en.trim() || null
      const facilitiesHeadingAr = form.facilities_heading_ar.trim() || null
      const facilitiesHeadingEn = form.facilities_heading_en.trim() || null
      const facilitiesIntroAr = form.facilities_intro_ar.trim() || null
      const facilitiesIntroEn = form.facilities_intro_en.trim() || null

      const payload = {
        hero_title_ar: heroTitleAr,
        hero_title_en: heroTitleEn,
        hero_subtitle_ar: heroSubtitleAr,
        hero_subtitle_en: heroSubtitleEn,
        main_heading_ar: mainHeadingAr,
        main_heading_en: mainHeadingEn,
        complex_overview_ar: overviewAr,
        complex_overview_en: overviewEn,
        facilities_heading_ar: facilitiesHeadingAr,
        facilities_heading_en: facilitiesHeadingEn,
        facilities_intro_ar: facilitiesIntroAr,
        facilities_intro_en: facilitiesIntroEn,
        about_ar: overviewAr,
        about_en: overviewEn,
        vision_ar: facilitiesHeadingAr,
        vision_en: facilitiesHeadingEn,
        mission_ar: facilitiesIntroAr,
        mission_en: facilitiesIntroEn,
        hero_image_url: form.hero_image_url.trim() || null,
        logo_url: form.logo_url.trim() || null,
        updated_at: new Date().toISOString(),
      }

      let error = (await supabase.from('site_settings').update(payload).eq('id', rowId)).error

      if (error) {
        const insertAttempt = await supabase
          .from('site_settings')
          .upsert({ id: rowId === 1 || rowId === '1' ? 1 : rowId, ...payload })
        error = insertAttempt.error
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

  if (loading) {
    return <p className="text-sm text-[var(--text-muted)]">{dict.loading}</p>
  }

  return (
    <form onSubmit={(e) => void handleSave(e)} className="space-y-6">
      <section className="glass rounded-2xl p-5 sm:p-6">
        <h3 className="mb-4 text-base font-bold text-[var(--text-primary)]">{dict.logoImage}</h3>
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1fr]">
          <div className="flex min-h-36 items-center justify-center overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-deep)] p-6">
            {form.logo_url ? (
              <img
                src={form.logo_url}
                alt={dict.logoPreview}
                className="max-h-24 w-auto object-contain"
              />
            ) : (
              <p className="text-sm text-[var(--text-muted)]">{dict.logoPreview}</p>
            )}
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 text-sm font-bold text-white">
              <ImagePlus size={16} />
              {uploadingLogo ? dict.uploading : dict.upload}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                disabled={uploadingLogo}
                onChange={(e) => void handleUploadLogo(e)}
              />
            </label>
            {form.logo_url ? (
              <button
                type="button"
                disabled={uploadingLogo}
                onClick={() => void handleRemoveLogo()}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 text-sm font-semibold text-red-400 transition hover:bg-red-500/15"
              >
                <Trash2 size={16} />
                {dict.remove}
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="glass rounded-2xl p-5 sm:p-6">
        <h3 className="mb-4 text-base font-bold text-[var(--text-primary)]">{dict.heroImage}</h3>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-deep)]">
            {form.hero_image_url ? (
              <img
                src={form.hero_image_url}
                alt={dict.heroPreview}
                className="aspect-[16/9] h-full w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[16/9] items-center justify-center text-sm text-[var(--text-muted)]">
                {dict.heroPreview}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 text-sm font-bold text-white">
              <ImagePlus size={16} />
              {uploadingHero ? dict.uploading : dict.upload}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                disabled={uploadingHero}
                onChange={(e) => void handleUploadHero(e)}
              />
            </label>
            {form.hero_image_url ? (
              <button
                type="button"
                disabled={uploadingHero}
                onClick={() => void handleRemoveHero()}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 text-sm font-semibold text-red-400 transition hover:bg-red-500/15"
              >
                <Trash2 size={16} />
                {dict.remove}
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="glass rounded-2xl p-5 sm:p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-cyan">
          {dict.bilingualHint}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <AdminTextarea
            label="Hero Title (AR)"
            value={form.hero_title_ar}
            onChange={(e) => updateField('hero_title_ar', e.target.value)}
            dir="rtl"
          />
          <AdminTextarea
            label="Hero Title (EN)"
            value={form.hero_title_en}
            onChange={(e) => updateField('hero_title_en', e.target.value)}
            dir="ltr"
          />
          <AdminTextarea
            label="Hero Subtitle (AR)"
            value={form.hero_subtitle_ar}
            onChange={(e) => updateField('hero_subtitle_ar', e.target.value)}
            dir="rtl"
          />
          <AdminTextarea
            label="Hero Subtitle (EN)"
            value={form.hero_subtitle_en}
            onChange={(e) => updateField('hero_subtitle_en', e.target.value)}
            dir="ltr"
          />
          <AdminInput
            label="Main Heading (AR)"
            value={form.main_heading_ar}
            onChange={(e) => updateField('main_heading_ar', e.target.value)}
            dir="rtl"
          />
          <AdminInput
            label="Main Heading (EN)"
            value={form.main_heading_en}
            onChange={(e) => updateField('main_heading_en', e.target.value)}
            dir="ltr"
          />
          <AdminTextarea
            label="Complex Overview (AR)"
            value={form.complex_overview_ar}
            onChange={(e) => updateField('complex_overview_ar', e.target.value)}
            dir="rtl"
          />
          <AdminTextarea
            label="Complex Overview (EN)"
            value={form.complex_overview_en}
            onChange={(e) => updateField('complex_overview_en', e.target.value)}
            dir="ltr"
          />
          <AdminInput
            label="Facilities Heading (AR)"
            value={form.facilities_heading_ar}
            onChange={(e) => updateField('facilities_heading_ar', e.target.value)}
            dir="rtl"
          />
          <AdminInput
            label="Facilities Heading (EN)"
            value={form.facilities_heading_en}
            onChange={(e) => updateField('facilities_heading_en', e.target.value)}
            dir="ltr"
          />
          <AdminTextarea
            label="Facilities Intro (AR)"
            value={form.facilities_intro_ar}
            onChange={(e) => updateField('facilities_intro_ar', e.target.value)}
            dir="rtl"
          />
          <AdminTextarea
            label="Facilities Intro (EN)"
            value={form.facilities_intro_en}
            onChange={(e) => updateField('facilities_intro_en', e.target.value)}
            dir="ltr"
          />
        </div>
      </section>

      <button
        type="submit"
        disabled={saving}
        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-gradient px-6 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-70"
      >
        {saving ? dict.saving : dict.save}
      </button>
    </form>
  )
}

export default SiteSettingsTab
