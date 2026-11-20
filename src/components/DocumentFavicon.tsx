import { useEffect, type FC } from 'react'
import { useSite } from '../context/SiteDataContext'
import { resolveLogoUrl } from '../utils/siteSettings'

const DocumentFavicon: FC = () => {
  const { settings } = useSite()
  const logoUrl = resolveLogoUrl(settings.logo_url)

  useEffect(() => {
    const href = logoUrl
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']")

    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'icon')
      document.head.appendChild(link)
    }

    const lower = href.toLowerCase()
    link.type = lower.endsWith('.svg')
      ? 'image/svg+xml'
      : lower.endsWith('.jpg') || lower.endsWith('.jpeg')
        ? 'image/jpeg'
        : lower.endsWith('.webp')
          ? 'image/webp'
          : 'image/png'
    link.href = href
  }, [logoUrl])

  return null
}

export default DocumentFavicon
