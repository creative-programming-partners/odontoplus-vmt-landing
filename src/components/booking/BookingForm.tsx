import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { treatments } from '../../data/treatments'
import { cn } from '../../shared/lib/cn'
import { composeBookingMessage, whatsappUrl, type BookingDraft } from '../../shared/lib/whatsapp'
import { Button } from '../../shared/ui/Button'
import { WhatsappIcon } from '../../shared/ui/icons'
import { MessagePreview } from './MessagePreview'

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const shifts = ['Mañana', 'Tarde', 'Noche']
const treatmentOptions = [...treatments.map((t) => t.name), 'Evaluación general', 'No sé, quiero que me revisen']

type Errors = Partial<Record<'name' | 'treatment', string>>

export function BookingForm() {
  const [draft, setDraft] = useState<BookingDraft>({
    name: '',
    treatment: '',
    day: '',
    shift: '',
    note: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const message = composeBookingMessage(draft)

  const update = <K extends keyof BookingDraft>(key: K, value: BookingDraft[K]) => {
    setDraft((d) => ({ ...d, [key]: value }))
    if (key in errors) setErrors((e) => ({ ...e, [key]: undefined }))
    setSent(false)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next: Errors = {}
    if (draft.name.trim().length < 2) next.name = 'Escribe tu nombre para que sepamos a quién confirmar la cita.'
    if (!draft.treatment) next.treatment = 'Elige un tratamiento. Si no sabes cuál, elige "No sé, quiero que me revisen".'
    setErrors(next)
    if (Object.keys(next).length) {
      document.getElementById(next.name ? 'booking-name' : 'booking-treatment')?.focus()
      return
    }
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
      <form noValidate onSubmit={onSubmit} className="grid gap-7" aria-label="Reservar cita">
        <Field id="booking-name" label="Tu nombre" error={errors.name}>
          <input
            id="booking-name"
            type="text"
            autoComplete="name"
            value={draft.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'booking-name-error' : undefined}
            placeholder="Nombre y apellido"
            className={inputClass(!!errors.name)}
          />
        </Field>

        <Field id="booking-treatment" label="¿Qué necesitas?" error={errors.treatment}>
          <select
            id="booking-treatment"
            value={draft.treatment}
            onChange={(e) => update('treatment', e.target.value)}
            aria-invalid={!!errors.treatment}
            aria-describedby={errors.treatment ? 'booking-treatment-error' : undefined}
            className={cn(inputClass(!!errors.treatment), 'appearance-none bg-[length:16px] bg-[right_0.25rem_center] bg-no-repeat pr-8', !draft.treatment && 'text-white/45')}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Elige un tratamiento
            </option>
            {treatmentOptions.map((t) => (
              <option key={t} value={t} className="text-ink">
                {t}
              </option>
            ))}
          </select>
        </Field>

        <ChoiceGroup label="Día que prefieres" options={days} value={draft.day} onChange={(v) => update('day', v)} />
        <ChoiceGroup label="Turno" options={shifts} value={draft.shift} onChange={(v) => update('shift', v)} />

        <Field id="booking-note" label="Comentario (opcional)">
          <textarea
            id="booking-note"
            rows={2}
            value={draft.note}
            onChange={(e) => update('note', e.target.value)}
            placeholder="Por ejemplo: me duele al tomar frío"
            className={cn(inputClass(false), 'resize-none py-2')}
          />
        </Field>

        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" variant="whatsapp" size="lg">
            <WhatsappIcon className="size-5" />
            Enviar por WhatsApp
          </Button>
          <p className="text-sm text-white/55" role="status">
            {sent ? 'Abrimos WhatsApp en otra pestaña. Solo presiona enviar.' : 'Se abre WhatsApp con este mensaje listo.'}
          </p>
        </div>
      </form>

      <MessagePreview message={message} />
    </div>
  )
}

const inputClass = (invalid: boolean) =>
  cn(
    'h-12 w-full border-0 border-b-2 bg-transparent px-0 text-lg text-white placeholder:text-white/40 transition-colors duration-150 focus:outline-none focus-visible:outline-none',
    invalid ? 'border-[#ff8a98] focus:border-[#ff8a98]' : 'border-white/30 focus:border-white',
  )

type FieldProps = { id: string; label: string; error?: string; children: ReactNode }

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-mono text-[0.68rem] tracking-wider text-white/60 uppercase">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#ffb3bd]">
          {error}
        </p>
      ) : null}
    </div>
  )
}

type ChoiceGroupProps = {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}

function ChoiceGroup({ label, options, value, onChange }: ChoiceGroupProps) {
  const id = useId()
  return (
    <fieldset>
      <legend id={id} className="mb-2.5 font-mono text-[0.68rem] tracking-wider text-white/60 uppercase">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o
          return (
            <button
              key={o}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(active ? '' : o)}
              className={cn(
                'press h-11 min-w-11 rounded-full border px-4 text-[0.92rem] font-medium',
                active
                  ? 'border-white bg-white text-ink'
                  : 'border-white/25 text-white/80 [@media(hover:hover)]:hover:border-white/60',
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
