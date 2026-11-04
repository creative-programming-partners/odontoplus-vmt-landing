import { isUpper, lowerLeft, lowerRight, upperLeft, upperRight } from '../../data/teeth'
import { cn } from '../../shared/lib/cn'
import { ToothGlyph, type Mark } from './ToothGlyph'

type Props = {
  teeth: number[]
  mark: Mark
  caption: string
}

/** The part of the arch a case touches, with a leader bracket labelling the treated teeth. */
export function SegmentChart({ teeth, mark, caption }: Props) {
  const quadrants = new Set(teeth.map((t) => Math.floor(t / 10)))
  const upper = isUpper(teeth[0])
  let row: number[]
  if (upper) {
    row = quadrants.has(1) && quadrants.has(2) ? [...upperRight, ...upperLeft] : quadrants.has(1) ? upperRight : upperLeft
  } else {
    row = quadrants.has(4) && quadrants.has(3) ? [...lowerRight, ...lowerLeft] : quadrants.has(4) ? lowerRight : lowerLeft
  }

  const indexes = teeth.map((t) => row.indexOf(t)).filter((i) => i >= 0)
  const start = Math.min(...indexes) + 1
  const end = Math.max(...indexes) + 2
  const cols = row.length
  const midline = cols === 16 ? 8 : null

  const bracket = (
    <div
      className="relative mx-auto"
      style={{ gridColumn: `${start} / ${end}` }}
      aria-hidden
    >
      <div
        className={cn(
          'mx-[8%] h-3 border-x-2',
          upper ? 'border-t-0 border-b-2' : 'border-t-2 border-b-0',
          mark === 'blue' ? 'border-mark-blue' : 'border-mark-red',
        )}
      />
    </div>
  )

  return (
    <figure className={cn('mx-auto w-full', cols === 8 ? 'max-w-[400px]' : 'max-w-[760px]')}>
      <div className="grid gap-x-[2px]" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {!upper ? bracket : null}
        {!upper ? <div style={{ gridColumn: `1 / -1` }} className="h-1" /> : null}
        {row.map((fdi, i) => (
          <div
            key={fdi}
            className={cn(
              'flex flex-col items-center gap-1',
              midline && i === midline - 1 && 'border-r border-ink/30 pr-[2px]',
              upper ? 'flex-col' : 'flex-col-reverse',
            )}
          >
            <span
              className={cn(
                'tabular font-mono text-[0.55rem] leading-none',
                teeth.includes(fdi) ? 'font-bold text-ink' : 'text-ink-3/70',
              )}
            >
              {fdi}
            </span>
            <ToothGlyph
              fdi={fdi}
              mark={teeth.includes(fdi) ? mark : undefined}
              className={cn('w-full max-w-[38px]', !teeth.includes(fdi) && 'opacity-45')}
            />
          </div>
        ))}
        {upper ? <div style={{ gridColumn: `1 / -1` }} className="h-1" /> : null}
        {upper ? bracket : null}
      </div>
      <figcaption
        className={cn(
          'mt-2 font-mono text-[0.7rem] font-semibold',
          mark === 'blue' ? 'text-mark-blue' : 'text-mark-red',
        )}
        style={{ paddingLeft: `${((start - 1) / cols) * 100}%` }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}
