import {
  Activity, Leaf, Zap, TrendingUp, Sun, Users, Stethoscope, Brain,
  type LucideProps,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Activity,
  Leaf,
  Zap,
  TrendingUp,
  Sun,
  Users,
  Stethoscope,
  Brain,
}

interface ServiceIconProps extends LucideProps {
  name: string
}

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Icon = iconMap[name] ?? Activity
  return <Icon {...props} />
}
