import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'whatsapp' | 'outline' | 'ghost' | 'paper'
type Size = 'md' | 'lg'

const base =
  'press inline-flex items-center justify-center gap-2.5 rounded-full font-semibold whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-night-2',
  whatsapp: 'bg-whatsapp text-white hover:bg-[#177a42]',
  outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.04]',
  ghost: 'text-ink hover:bg-ink/[0.06]',
  paper: 'bg-paper text-ink hover:bg-white',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-14 px-7 text-base',
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
