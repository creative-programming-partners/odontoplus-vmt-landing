import { cn } from '../../shared/lib/cn'

type MarkProps = { className?: string; tone?: 'ink' | 'paper' }

/**
 * OdontoPlus mark: the five-surface tooth square every dentist draws on a chart,
 * with its centre (the occlusal surface) turned into a plus.
 */
export function Logomark({ className, tone = 'ink' }: MarkProps) {
  const stroke = tone === 'ink' ? 'var(--color-ink)' : 'var(--color-paper)'
  return (
    <svg viewBox="0 0 48 48" className={cn('shrink-0', className)} aria-hidden>
      <rect x="3" y="3" width="42" height="42" rx="9" fill="none" stroke={stroke} strokeWidth="3.2" />
      <path
        d="M7.5 7.5 13 13M40.5 7.5 35 13M7.5 40.5 13 35M40.5 40.5 35 35"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M20 12.5h8V20h7.5v8H28v7.5h-8V28h-7.5v-8H20Z"
        fill="var(--color-mark-blue)"
        stroke="var(--color-mark-blue)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type LogoProps = { className?: string; tone?: 'ink' | 'paper'; size?: 'sm' | 'lg' }

export function Logo({ className, tone = 'ink', size = 'sm' }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Logomark tone={tone} className={size === 'sm' ? 'size-9' : 'size-14'} />
      <span className="flex items-baseline gap-1.5 leading-none">
        <span
          className={cn(
            'wdth-wide font-[780] tracking-[-0.03em]',
            size === 'sm' ? 'text-[1.3rem]' : 'text-[2rem]',
            tone === 'ink' ? 'text-ink' : 'text-paper',
          )}
        >
          Odonto<span className="text-mark-blue">plus</span>
        </span>
        <span
          className={cn(
            'rounded-[3px] border px-1 py-[3px] font-mono font-semibold tracking-wider',
            size === 'sm' ? 'text-[0.6rem]' : 'text-[0.8rem]',
            tone === 'ink' ? 'border-ink/40 text-ink' : 'border-paper/50 text-paper',
          )}
        >
          VMT
        </span>
      </span>
    </span>
  )
}
