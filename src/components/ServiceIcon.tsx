import {
  Building2,
  Compass,
  Handshake,
  Hotel,
  Landmark,
  Plane,
  Sparkles,
  Trees,
  type LucideIcon,
} from 'lucide-react'
import type { FC } from 'react'

const iconMap: Record<string, LucideIcon> = {
  hotel: Hotel,
  plane: Plane,
  landmark: Landmark,
  handshake: Handshake,
  tree: Trees,
  trees: Trees,
  compass: Compass,
  building: Building2,
  sparkles: Sparkles,
}

interface ServiceIconProps {
  name?: string | null
  className?: string
}

const ServiceIcon: FC<ServiceIconProps> = ({ name, className = 'h-6 w-6' }) => {
  const key = (name ?? '').trim().toLowerCase()
  const Icon = iconMap[key] ?? Sparkles
  return <Icon className={className} aria-hidden="true" />
}

export default ServiceIcon
