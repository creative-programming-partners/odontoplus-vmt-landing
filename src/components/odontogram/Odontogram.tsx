import { isUpper, lowerLeft, lowerRight, toothName, upperLeft, upperRight } from '../../data/teeth'
import { cn } from '../../shared/lib/cn'
import { ToothGlyph, type Mark } from './ToothGlyph'

type Props = {
  marks: Partial<Record<number, Mark>>
  selected: number | null
  onSelect: (fdi: number) => void
}

/** DOM order Q1, Q2, Q4, Q3: one column on phones, the classic 2×2 chart from md up. */
const quadrants = [
  { id: 1, label: 'Superior derecho', teeth: upperRight },
  { id: 2, label: 'Superior izquierdo', teeth: upperLeft },
  { id: 4, label: 'Inferior derecho', teeth: lowerRight },
  { id: 3, label: 'Inferior izquierdo', teeth: lowerLeft },
]

export function Odontogram({ marks, selected, onSelect }: Props) {
  return (
    <div
      role="group"
      aria-label="Odontograma: elige una pieza dental"
      className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-y-0"
    >
      {quadrants.map((q) => {
        const upper = q.id <= 2
        const rightSide = q.id === 1 || q.id === 4
        return (
          <div
            key={q.id}
            className={cn(
              'relative',
              // chart midlines
              rightSide && 'md:border-r md:border-ink/35 md:pr-2',
              !rightSide && 'md:pl-2',
              upper ? 'md:border-b md:border-ink/35 md:pb-3' : 'md:pt-3',
            )}
          >
            <p className="mb-1 font-mono text-[0.6rem] tracking-wider text-ink-3 uppercase md:hidden">
              {q.label}
            </p>
            <div className="grid grid-cols-8 gap-x-[3px]">
              {q.teeth.map((fdi) => (
                <ToothButton
                  key={fdi}
                  fdi={fdi}
                  mark={marks[fdi]}
                  selected={selected === fdi}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

type ToothButtonProps = {
  fdi: number
  mark?: Mark
  selected: boolean
  onSelect: (fdi: number) => void
}

function ToothButton({ fdi, mark, selected, onSelect }: ToothButtonProps) {
  const upper = isUpper(fdi)
  const number = (
    <span
      className={cn(
        'tabular block text-center font-mono text-[0.62rem] leading-none transition-colors duration-150',
        selected ? 'font-bold text-ink' : 'text-ink-3',
      )}
    >
      {fdi}
    </span>
  )
  return (
    <button
      type="button"
      onClick={() => onSelect(fdi)}
      aria-pressed={selected}
      aria-label={`Pieza ${fdi}, ${toothName(fdi)}${mark === 'red' ? ', por tratar' : mark === 'blue' ? ', tratada' : ''}`}
      className="group flex min-w-0 flex-col items-center gap-1 rounded-md py-1 outline-offset-1 [@media(hover:hover)]:hover:bg-ink/[0.05]"
    >
      {upper ? number : null}
      <ToothGlyph
        fdi={fdi}
        mark={mark}
        selected={selected}
        className="w-full max-w-[44px] overflow-visible transition-transform duration-200 ease-[var(--ease-out-strong)] [@media(hover:hover)]:group-hover:-translate-y-0.5"
      />
      {upper ? null : number}
    </button>
  )
}
