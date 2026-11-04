import { motion, useReducedMotion } from 'motion/react'
import { isUpper, lowerLeft, lowerRight, upperLeft, upperRight } from '../../data/teeth'
import { cn } from '../../shared/lib/cn'
import { ToothGlyph, type Mark } from './ToothGlyph'

type Props = {
  teeth: number[]
  mark: Mark
  caption: string
}

/**
 * The part of the arch a case touches. A bracket groups the treated teeth and a
 * leader line runs from it to the caption, the way a dentist annotates a chart.
 */
export function SegmentChart({ teeth, mark, caption }: Props) {
  const reduce = useReducedMotion()
  const quadrants = new Set(teeth.map((t) => Math.floor(t / 10)))
  const upper = isUpper(teeth[0])
  let row: number[]
  if (upper) {
    row = quadrants.has(1) && quadrants.has(2) ? [...upperRight, ...upperLeft] : quadrants.has(1) ? upperRight : upperLeft
  } else {
    row = quadrants.has(4) && quadrants.has(3) ? [...lowerRight, ...lowerLeft] : quadrants.has(4) ? lowerRight : lowerLeft
  }

  const cols = row.length
  const indexes = teeth.map((t) => row.indexOf(t)).filter((i) => i >= 0)
  const first = Math.min(...indexes)
  const last = Math.max(...indexes)
  const left = (first / cols) * 100
  const width = ((last - first + 1) / cols) * 100
  const center = left + width / 2
  const midline = cols === 16 ? 8 : null
  const color = mark === 'blue' ? 'var(--color-mark-blue)' : 'var(--color-mark-red)'
  // keep the caption inside the frame: anchor it left, centred or right of the leader
  const anchor = center < 30 ? 'start' : center > 70 ? 'end' : 'middle'

  return (
    <figure className={cn('mx-auto w-full', cols === 8 ? 'max-w-[520px]' : 'max-w-[820px]')}>
      <div className="grid gap-x-[2px]" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {row.map((fdi, i) => {
          const treated = teeth.includes(fdi)
          return (
            <div
              key={fdi}
              className={cn(
                'relative flex items-center gap-1',
                upper ? 'flex-col' : 'flex-col-reverse',
                midline &&
                  i === midline - 1 &&
                  'after:absolute after:inset-y-0 after:-right-[1.5px] after:w-px after:bg-ink/30',
              )}
            >
              <span
                className={cn(
                  'tabular font-mono text-[0.55rem] leading-none sm:text-[0.62rem]',
                  treated ? 'font-bold text-ink' : 'text-ink-3/70',
                )}
              >
                {fdi}
              </span>
              <ToothGlyph
                fdi={fdi}
                mark={treated ? mark : undefined}
                className={cn('w-full max-w-[48px]', !treated && 'opacity-45')}
              />
            </div>
          )
        })}
      </div>

      {/* bracket + leader line + caption */}
      <div className="relative h-16" aria-hidden>
        <div
          className="absolute top-2 h-2.5 rounded-b-[3px] border-x-2 border-b-2 transition-colors duration-300"
          style={{ left: `calc(${left}% + 4px)`, width: `calc(${width}% - 8px)`, borderColor: color }}
        />
        <motion.div
          key={`${teeth.join('-')}`}
          className="absolute top-[18px] w-0.5 origin-top transition-colors duration-300"
          style={{ left: `calc(${center}% - 1px)`, height: 26, backgroundColor: color }}
          initial={reduce ? false : { transform: 'scaleY(0)' }}
          animate={{ transform: 'scaleY(1)' }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.77, 0, 0.175, 1] }}
        />
        <span
          className="absolute top-[38px] size-1.5 -translate-x-1/2 rounded-full transition-colors duration-300"
          style={{ left: `${center}%`, backgroundColor: color }}
        />
      </div>
      <figcaption
        className="relative -mt-3 h-5 font-mono text-[0.66rem] font-semibold transition-colors duration-300 sm:text-[0.72rem]"
        style={{ color }}
      >
        <span
          className="absolute whitespace-nowrap"
          style={{
            left: `${center}%`,
            transform: anchor === 'start' ? 'translateX(-6px)' : anchor === 'end' ? 'translateX(calc(-100% + 6px))' : 'translateX(-50%)',
          }}
        >
          {caption}
        </span>
      </figcaption>
    </figure>
  )
}
