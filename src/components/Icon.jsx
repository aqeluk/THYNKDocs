import { useId } from 'react'
import clsx from 'clsx'
import { AiFillWarning } from 'react-icons/ai'
import { BsLightbulb } from 'react-icons/bs'
import { FaPlug, FaTools } from 'react-icons/fa'
import { GiGearHammer } from 'react-icons/gi'
import { IoIosConstruct } from 'react-icons/io'

const icons = {
  installation: IoIosConstruct,
  presets: GiGearHammer,
  plugins: FaPlug,
  theming: FaTools,
  lightbulb: BsLightbulb,
  warning: AiFillWarning,
}

const iconStyles = {
  blue: '[--icon-foreground:theme(colors.blue.900)] [--icon-background:theme(colors.white)]',
  orange:
    '[--icon-foreground:theme(colors.orange.500)] [--icon-background:theme(colors.white)]',
}

export function Icon({ color = 'blue', icon, className, ...props }) {
  let id = useId()
  let IconComponent = icons[icon]

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(className, iconStyles[color])}
      {...props}
    >
      <IconComponent id={id} color={color} />
    </svg>
  )
}

export function LightMode({ className, ...props }) {
  return <g className={clsx('dark:hidden', className)} {...props} />
}

export function DarkMode({ className, ...props }) {
  return <g className={clsx('hidden dark:inline', className)} {...props} />
}
