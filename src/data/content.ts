import type { NavItem } from '../types'

/** Canonical brand — never translate or localize this string. */
export const BRAND_NAME = 'Garden City L.L.C' as const

export const navItems: NavItem[] = [
  { id: 'home', href: '#home', labelKey: 'home' },
  { id: 'about', href: '#about', labelKey: 'about' },
  { id: 'vision', href: '#vision', labelKey: 'vision' },
  { id: 'services', href: '#services', labelKey: 'services' },
  { id: 'gallery', href: '#gallery', labelKey: 'gallery' },
  { id: 'contact', href: '#contact', labelKey: 'contact' },
]
