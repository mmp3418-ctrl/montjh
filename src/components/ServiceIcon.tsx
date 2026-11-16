import {
  Compass,
  Handshake,
  Hotel,
  Landmark,
  Plane,
  Trees,
  type LucideIcon,
} from 'lucide-react'
import type { FC } from 'react'
import type { ServiceItem } from '../types'

const iconMap: Record<ServiceItem['icon'], LucideIcon> = {
  hotel: Hotel,
  plane: Plane,
  landmark: Landmark,
  handshake: Handshake,
  tree: Trees,
  compass: Compass,
}

interface ServiceIconProps {
  name: ServiceItem['icon']
  className?: string
}

const ServiceIcon: FC<ServiceIconProps> = ({ name, className = 'h-6 w-6' }) => {
  const Icon = iconMap[name]
  return <Icon className={className} aria-hidden="true" />
}

export default ServiceIcon
