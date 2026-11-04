import type { Source } from '../../data/types'
import { cn } from '../lib/cn'

const labels: Record<Source, string> = {
  instagram: 'De su Instagram',
  facebook: 'Dato de Facebook',
  ejemplo: 'Contenido de ejemplo',
}

type Props = { source: Source; tone?: 'light' | 'dark'; className?: string }

/** Shows where a piece of content comes from, so demo content is never mistaken for real data. */
export function SourceTag({ source, tone = 'light', className }: Props) {
  const demo = source === 'ejemplo'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.72rem] leading-none font-semibold whitespace-nowrap',
        tone === 'light' && (demo ? 'border border-dashed border-ink-3/50 text-ink-3' : 'bg-mist-2 text-ink-2'),
        tone === 'dark' && (demo ? 'border border-dashed border-white/40 text-white/70' : 'bg-white/10 text-white/80'),
        className,
      )}
    >
      {labels[source]}
    </span>
  )
}
