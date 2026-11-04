import { cn } from '../../shared/lib/cn'

type MarkProps = { className?: string; tone?: 'ink' | 'white' }

/**
 * OdontoPlus mark: a friendly tooth with a celeste "plus" badge.
 * It keeps the idea of the clinic's original logo (tooth + plus) and makes it read at any size.
 */
export function Logomark({ className, tone = 'ink' }: MarkProps) {
  const tooth = tone === 'ink' ? 'var(--color-ink)' : '#ffffff'
  const ring = tone === 'ink' ? '#ffffff' : 'var(--color-ink)'
  return (
    <svg viewBox="0 0 48 48" className={cn('shrink-0', className)} aria-hidden>
      <path
        d="M15.2 6.5c-5.6 0-9.7 4.4-9.7 10.4 0 4.6 1.8 7.4 2.9 11.6 1.3 5 1.4 13 5.5 13 3.7 0 3.3-8.6 7.6-8.6h.1c4.3 0 3.9 8.6 7.6 8.6 4.1 0 4.2-8 5.5-13 1.1-4.2 2.9-7 2.9-11.6 0-6-4.1-10.4-9.7-10.4-3.1 0-4.3 1.6-6.4 1.6s-3.3-1.6-6.3-1.6Z"
        fill={tooth}
      />
      <circle cx="36.5" cy="12" r="9.5" fill="var(--color-celeste)" stroke={ring} strokeWidth="2.5" />
      <path d="M36.5 7.6v8.8M32.1 12h8.8" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

type LogoProps = { className?: string; tone?: 'ink' | 'white'; size?: 'sm' | 'lg' }

export function Logo({ className, tone = 'ink', size = 'sm' }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <Logomark tone={tone} className={size === 'sm' ? 'size-10' : 'size-16'} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-[800] tracking-[-0.03em]',
            size === 'sm' ? 'text-[1.35rem]' : 'text-[2.2rem]',
            tone === 'ink' ? 'text-ink' : 'text-white',
          )}
        >
          Odonto<span className="text-celeste">Plus</span>
        </span>
        <span
          className={cn(
            'mt-0.5 font-bold tracking-[0.28em]',
            size === 'sm' ? 'text-[0.6rem]' : 'text-[0.85rem]',
            tone === 'ink' ? 'text-ink-3' : 'text-white/70',
          )}
        >
          VMT · CLÍNICA DENTAL
        </span>
      </span>
    </span>
  )
}
