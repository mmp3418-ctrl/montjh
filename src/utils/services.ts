import type { ServiceRow } from '../types'

export type ServiceCategory = 'recreation' | 'service'

export function normalizeServiceCategory(
  value: string | null | undefined,
): ServiceCategory {
  const key = (value ?? '').trim().toLowerCase()
  if (key === 'service' || key === 'services') return 'service'
  return 'recreation'
}

export function withNormalizedCategory(row: ServiceRow): ServiceRow {
  return {
    ...row,
    category: normalizeServiceCategory(row.category),
  }
}

export function filterServicesByCategory(
  services: ServiceRow[],
  category: ServiceCategory,
): ServiceRow[] {
  return services
    .map(withNormalizedCategory)
    .filter((item) => item.category === category)
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
}
