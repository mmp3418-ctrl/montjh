import {
  Bath,
  Building2,
  Car,
  Coffee,
  Flame,
  Shield,
  Sparkles,
  Waves,
  type LucideIcon,
} from 'lucide-react'
import type { FC } from 'react'

const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  flame: Flame,
  coffee: Coffee,
  bath: Bath,
  sparkles: Sparkles,
  car: Car,
  shield: Shield,
  building2: Building2,
}

export const SERVICE_ICON_OPTIONS = [
  'Waves',
  'Flame',
  'Coffee',
  'Sparkles',
  'Car',
  'Shield',
  'Building2',
  'Bath',
] as const

export type ServiceIconName = (typeof SERVICE_ICON_OPTIONS)[number]

interface ServiceIconProps {
  name?: string | null
  className?: string
  size?: number
}

const ServiceIcon: FC<ServiceIconProps> = ({
  name,
  className = 'h-6 w-6',
  size,
}) => {
  const key = (name ?? '').trim().toLowerCase()
  const Icon = iconMap[key] ?? Waves
  return <Icon className={className} size={size} aria-hidden="true" />
}

export default ServiceIcon
