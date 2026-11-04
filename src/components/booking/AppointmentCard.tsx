import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Phone } from 'lucide-react'
import { useId, useState } from 'react'
import { clinic } from '../../data/clinic'
import { bookingTreatments } from '../../data/treatments'
import { cn } from '../../shared/lib/cn'
import { composeBookingMessage, whatsappUrl } from '../../shared/lib/whatsapp'
import { ButtonLink } from '../../shared/ui/Button'
import { WhatsappIcon } from '../../shared/ui/icons'
import { Logomark } from '../brand/Logo'

const days = [
  { short: 'Lun', full: 'lunes' },
  { short: 'Mar', full: 'martes' },
  { short: 'Mié', full: 'miércoles' },
  { short: 'Jue', full: 'jueves' },
  { short: 'Vie', full: 'viernes' },
  { short: 'Sáb', full: 'sábado' },
]
const shifts = ['Mañana', 'Tarde', 'Noche']

type Props = {
  className?: string
  /** "ticket" puts the stub beside the options from lg up; "stacked" always stacks it below */
  layout?: 'ticket' | 'stacked'
}

/**
 * The clinic's paper appointment card, made interactive. Nothing is required:
 * whatever the visitor picks is summarised on the stub and sent as the WhatsApp message.
 */
export function AppointmentCard({ className, layout = 'ticket' }: Props) {
  const reduce = useReducedMotion()
  const [treatment, setTreatment] = useState('')
  const [day, setDay] = useState('')
  const [shift, setShift] = useState('')
  const ticket = layout === 'ticket'

  const message = composeBookingMessage({ name: '', treatment, day, shift, note: '' })
  const summary = [treatment, day, shift && `por la ${shift.toLowerCase()}`].filter(Boolean).join(' · ')

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 bg-navy px-5 py-3.5 text-white">
        <p className="text-[1.05rem] font-[800] tracking-tight">Tarjeta de citas</p>
        <span className="flex items-center gap-2 text-sm font-semibold text-white/80">
          <Logomark tone="white" className="size-6" />
          {clinic.name} {clinic.suffix}
        </span>
      </div>

      <div className={cn(ticket && 'lg:grid lg:grid-cols-[minmax(0,1fr)_17rem]')}>
        <div className="grid gap-4 px-5 pt-5 pb-6">
          <ChipGroup label="¿Qué necesitas?" options={bookingTreatments} value={treatment} onChange={setTreatment} />
          <ChipGroup
            label="¿Qué día te acomoda?"
            options={days.map((d) => d.short)}
            value={days.find((d) => d.full === day)?.short ?? ''}
            onChange={(v) => setDay(days.find((d) => d.short === v)?.full ?? '')}
            compact
          />
          <ChipGroup label="Turno" options={shifts} value={shift} onChange={setShift} compact />
        </div>

        {/* stub, separated by a dashed tear line like a real appointment card */}
        <div
          className={cn(
            'relative flex flex-col gap-4 border-t-2 border-dashed border-line bg-celeste-soft/55 px-5 pt-5 pb-5',
            ticket && 'lg:border-t-0 lg:border-l-2 lg:pt-6',
          )}
        >
          {/* perforation notches where the tear line meets the card edge (the card clips them to half circles) */}
          <span
            aria-hidden
            className={cn(
              'absolute -top-[13px] -left-[13px] size-6 rounded-full border border-line bg-white',
              ticket && 'lg:hidden',
            )}
          />
          <span
            aria-hidden
            className={cn(
              'absolute -top-[13px] -right-[13px] size-6 rounded-full border border-line bg-white',
              ticket && 'lg:top-auto lg:right-auto lg:-bottom-[13px] lg:-left-[13px]',
            )}
          />
          <div className="min-h-[3.5rem] flex-1" aria-live="polite">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={summary || 'empty'}
                initial={reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(3px)', transform: 'translateY(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(3px)' }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className={cn('text-lg leading-snug font-bold', summary ? 'text-ink' : 'text-ink-3')}
              >
                {summary ? (
                  <>
                    <span className="text-celeste-deep">Tu cita:</span> {summary}
                  </>
                ) : (
                  'Tu cita: elige qué necesitas y un día'
                )}
              </motion.p>
            </AnimatePresence>
          </div>
          <ButtonLink href={whatsappUrl(message)} variant="whatsapp" size="lg" className="w-full px-4">
            <WhatsappIcon className="size-5" />
            Reservar por WhatsApp
          </ButtonLink>
          <a
            href={`tel:+${clinic.whatsapp}`}
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink-2 underline decoration-ink/20 hover:decoration-ink"
          >
            <Phone className="size-4" aria-hidden /> o llama al {clinic.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  )
}

type ChipGroupProps = {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
  compact?: boolean
}

function ChipGroup({ label, options, value, onChange, compact }: ChipGroupProps) {
  const id = useId()
  return (
    <fieldset>
      <legend id={id} className="mb-2 text-sm font-bold text-ink-2">
        {label}
      </legend>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const active = value === o
          return (
            <button
              key={o}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(active ? '' : o)}
              className={cn(
                'press h-10 rounded-full border-2 text-[0.9rem] font-semibold',
                compact ? 'min-w-12 px-3' : 'px-3.5',
                active
                  ? 'border-ink bg-ink text-white'
                  : 'border-line bg-white text-ink-2 [@media(hover:hover)]:hover:border-ink/40',
              )}
            >
              {o}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
