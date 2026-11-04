import { motion, useReducedMotion } from 'motion/react'
import { isUpper, toothKind, type ToothKind } from '../../data/teeth'

export type Mark = 'red' | 'blue'

/** Tooth silhouettes drawn roots-up in a 40×64 box (upper teeth). Lower teeth are mirrored. */
const silhouettes: Record<ToothKind, string> = {
  incisor:
    'M14.5 34C14 26 15.5 12 17 5c.6-2.6 5.4-2.6 6 0 1.5 7 3 21 2.5 29 2.5 2 3.5 5 3.5 10v13c0 3.5-2 5-4.5 5h-9c-2.5 0-4.5-1.5-4.5-5V44c0-5 1-8 3.5-10Z',
  canine:
    'M15 33c-.5-9 .5-25 2.5-30.5.8-2 4.2-2 5 0C24.5 8 25.5 24 25 33c3 2.5 4.5 6 4.5 11v8c0 5-5.5 10.5-9.5 11-4-.5-9.5-6-9.5-11v-8c0-5 1.5-8.5 4.5-11Z',
  premolar:
    'M14 33c-.5-8 .5-21 2.5-27 .8-2.6 6.2-2.6 7 0 2 6 3 19 2.5 27 3.5 2 5 5.5 5 10v11c0 5-3 8-7.5 8h-7C12 62 9 59 9 54V43c0-4.5 1.5-8 5-10Z',
  molar:
    'M9.5 33c-1-8-1.5-19 0-25 .7-2.6 4.5-2.6 5.1 0l2.6 16c.4 1.5 1.2 1.5 1.4 0l.6-18c.2-3 3.4-3 3.6 0l.4 18c.2 1.5 1.2 1.5 1.6 0l2.6-16c.6-2.6 4.4-2.6 5.1 0 1.5 6 1 17 0 25 3 2 4.5 5.5 4.5 10v11c0 5-3 8-7.5 8h-17C8 62 5 59 5 54V43c0-4.5 1.5-8 4.5-10Z',
}

const SURFACES = ['top', 'right', 'bottom', 'left'] as const

function surfacePoints(side: (typeof SURFACES)[number], y: number) {
  switch (side) {
    case 'top':
      return `4,${y} 36,${y} 26,${y + 10} 14,${y + 10}`
    case 'right':
      return `36,${y} 36,${y + 32} 26,${y + 22} 26,${y + 10}`
    case 'bottom':
      return `36,${y + 32} 4,${y + 32} 14,${y + 22} 26,${y + 22}`
    case 'left':
      return `4,${y + 32} 4,${y} 14,${y + 10} 14,${y + 22}`
  }
}

const markFill: Record<Mark, string> = {
  red: 'var(--color-mark-red)',
  blue: 'var(--color-mark-blue)',
}

const crownTint: Record<Mark, string> = {
  red: 'var(--color-mark-red-soft)',
  blue: 'var(--color-mark-blue-soft)',
}

type Props = {
  fdi: number
  mark?: Mark
  selected?: boolean
  className?: string
}

/**
 * One tooth as it appears on a printed odontograma: the silhouette plus the
 * five-surface square. Marks fill the occlusal centre and one side, the way
 * a dentist colours a chart by hand.
 */
export function ToothGlyph({ fdi, mark, selected, className }: Props) {
  const reduce = useReducedMotion()
  const upper = isUpper(fdi)
  const kind = toothKind(fdi)
  const boxY = upper ? 70 : 2
  const markedSide = SURFACES[fdi % 4]
  const ringCy = boxY + 16
  const ease = [0.23, 1, 0.32, 1] as const

  return (
    <svg viewBox="0 0 40 108" className={className} aria-hidden>
      {/* silhouette */}
      <g transform={upper ? undefined : 'translate(0 108) scale(1 -1)'}>
        <motion.path
          d={silhouettes[kind]}
          stroke="var(--color-ink)"
          strokeWidth={1.3}
          strokeLinejoin="round"
          initial={false}
          animate={{ fill: mark ? crownTint[mark] : 'rgba(255,255,255,0.85)' }}
          transition={{ duration: 0.35, ease }}
        />
      </g>

      {/* five-surface square */}
      <g stroke="var(--color-ink)" strokeWidth={1.1} strokeLinejoin="round">
        {SURFACES.map((side) => (
          <motion.polygon
            key={side}
            points={surfacePoints(side, boxY)}
            initial={false}
            animate={{
              fill: mark && side === markedSide ? markFill[mark] : 'rgba(255,255,255,0.9)',
            }}
            transition={{ duration: 0.35, ease, delay: mark ? 0.12 : 0 }}
          />
        ))}
        <motion.rect
          x={14}
          y={boxY + 10}
          width={12}
          height={12}
          initial={false}
          animate={{ fill: mark ? markFill[mark] : 'rgba(255,255,255,0.9)' }}
          transition={{ duration: 0.35, ease }}
        />
      </g>

      {/* the pen ring a dentist draws around the tooth being discussed */}
      {selected ? (
        <motion.circle
          key={`ring-${fdi}-${mark ?? 'none'}`}
          cx={20}
          cy={ringCy}
          r={19}
          fill="none"
          stroke={mark ? markFill[mark] : 'var(--color-ink)'}
          strokeWidth={2.2}
          strokeLinecap="round"
          transform={`rotate(-80 20 ${ringCy})`}
          initial={reduce ? { pathLength: 1, opacity: 0 } : { pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 0.94, opacity: 1 }}
          transition={{ duration: reduce ? 0.2 : 0.55, ease: [0.77, 0, 0.175, 1] }}
        />
      ) : null}
    </svg>
  )
}
