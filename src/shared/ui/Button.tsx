import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'whatsapp' | 'outline' | 'white' | 'ghost-light'
type Size = 'md' | 'lg'

const base =
  'press inline-flex items-center justify-center gap-2.5 rounded-full font-bold whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-navy-2',
  whatsapp: 'bg-whatsapp text-white shadow-[0_6px_16px_-6px_rgb(28_143_78/0.55)] hover:bg-whatsapp-deep',
  outline: 'border-2 border-ink/15 text-ink hover:border-ink/40',
  white: 'bg-white text-ink hover:bg-mist',
  'ghost-light': 'border-2 border-white/30 text-white hover:border-white/70',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-14 px-7 text-[1.02rem]',
}

type Common = { variant?: Variant; size?: Size; children: ReactNode; className?: string }

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = rest.href?.startsWith('http')
  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...rest
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  )
}
