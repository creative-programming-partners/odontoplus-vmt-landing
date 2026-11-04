import type { Source } from '../../data/types'
import { cn } from '../lib/cn'

const labels: Record<Source, string> = {
  instagram: 'Publicado en Instagram',
  facebook: 'Dato de Facebook',
  ejemplo: 'Contenido de ejemplo',
}

type Props = { source: Source; tone?: 'paper' | 'night'; className?: string }

/** Shows where a piece of content comes from, so demo content is never mistaken for real data. */
export function SourceTag({ source, tone = 'paper', className }: Props) {
  const demo = source === 'ejemplo'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[3px] border px-1.5 py-0.5 font-mono text-[0.625rem] leading-none tracking-wide uppercase',
        tone === 'paper' &&
          (demo ? 'border-dashed border-ink-3/50 text-ink-3' : 'border-ink/30 text-ink-2'),
        tone === 'night' &&
          (demo ? 'border-dashed border-white/30 text-white/60' : 'border-white/30 text-white/80'),
        className,
      )}
    >
      <span
        aria-hidden
        className={cn('size-1.5 rounded-full', demo ? 'bg-current opacity-60' : 'bg-current')}
      />
      {labels[source]}
    </span>
  )
}
