import {
  Bath,
  Coffee,
  Flame,
  Waves,
  type LucideIcon,
} from 'lucide-react'
import type { FC } from 'react'

const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  flame: Flame,
  coffee: Coffee,
  bath: Bath,
}

interface ServiceIconProps {
  name?: string | null
  className?: string
}

const ServiceIcon: FC<ServiceIconProps> = ({ name, className = 'h-6 w-6' }) => {
  const key = (name ?? '').trim().toLowerCase()
  const Icon = iconMap[key] ?? Waves
  return <Icon className={className} aria-hidden="true" />
}

export default ServiceIcon
