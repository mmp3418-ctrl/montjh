/** Canonical brand — never translate or localize this string. */
export const BRAND_NAME = 'Garden City L.L.C' as const

/**
 * Future dashboard-driven content will populate these empty contracts.
 * Keep the shell free of hardcoded business data.
 */
export interface SiteContent {
  hero?: unknown
  about?: unknown
  investments?: unknown
  contact?: unknown
  footer?: unknown
}

export const siteContent: SiteContent = {}
