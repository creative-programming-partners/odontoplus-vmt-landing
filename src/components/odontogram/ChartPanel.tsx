import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Check, RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'
import { symptoms, toothGuide, toothKind, toothName } from '../../data/teeth'
import { treatments } from '../../data/treatments'
import { cn } from '../../shared/lib/cn'
import { whatsappUrl } from '../../shared/lib/whatsapp'
import { clinic } from '../../data/clinic'
import { Button, ButtonLink } from '../../shared/ui/Button'
import { WhatsappIcon } from '../../shared/ui/icons'
import { Odontogram } from './Odontogram'
import type { Mark } from './ToothGlyph'

type SymptomId = (typeof symptoms)[number]['id']

const treatmentById = (id: string) => treatments.find((t) => t.id === id)

/**
 * The hero's working chart: name what you feel, see it marked on the tooth,
 * read which treatment fixes it, then ask about that exact tooth on WhatsApp.
 */
export function ChartPanel() {
  const reduce = useReducedMotion()
  const [symptomId, setSymptomId] = useState<SymptomId | null>('dolor')
  const [tooth, setTooth] = useState<number | null>(36)
  const [treated, setTreated] = useState(false)

  const symptom = symptoms.find((s) => s.id === symptomId) ?? null
  const markedTeeth = useMemo<readonly number[]>(
    () => (symptom ? symptom.teeth : tooth ? [tooth] : []),
    [symptom, tooth],
  )
  const mark: Mark = treated ? 'blue' : 'red'

  const marks = useMemo(() => {
    const m: Partial<Record<number, Mark>> = {}
    markedTeeth.forEach((t) => (m[t] = mark))
    return m
  }, [markedTeeth, mark])

  const treatment = symptom
    ? treatmentById(symptom.treatment)
    : tooth
      ? treatmentById(toothGuide[toothKind(tooth)].treatments[0])
      : undefined

  const chooseSymptom = (id: SymptomId) => {
    const s = symptoms.find((x) => x.id === id)!
    setSymptomId(id)
    setTooth(s.teeth[0] ?? null)
    setTreated(false)
  }

  const chooseTooth = (fdi: number) => {
    setSymptomId(null)
    setTooth(fdi)
    setTreated(false)
  }

  const pieceLabel =
    markedTeeth.length === 0
      ? 'Encías'
      : markedTeeth.length === 1
        ? `Pieza ${markedTeeth[0]}`
        : `Piezas ${markedTeeth.join(', ')}`

  const message = symptom
    ? `Hola ${clinic.name} ${clinic.suffix}, ${symptom.label.toLowerCase()}${markedTeeth.length ? ` (${pieceLabel.toLowerCase()})` : ''}. Quiero una evaluación.`
    : `Hola ${clinic.name} ${clinic.suffix}, quiero consultar por la pieza ${tooth}. ¿Cuándo tienen cita?`

  return (
    <div className="relative rounded-[14px] border border-ink/20 bg-white/70">
      {/* chart header: printed-form fields */}
      <div className="grid grid-cols-[1fr_auto] items-end gap-x-6 border-b border-ink/20 px-4 pt-3 pb-2.5 sm:grid-cols-[auto_1fr_auto] sm:px-5">
        <p className="wdth-wide text-[0.95rem] font-bold tracking-tight">Ficha odontológica</p>
        <p className="hidden truncate font-mono text-[0.65rem] text-ink-3 sm:block">
          Paciente: <span className="text-ink">tú</span>
        </p>
        <div className="flex items-center gap-3 font-mono text-[0.6rem] text-ink-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-[2px] bg-mark-red" aria-hidden /> Por tratar
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-[2px] bg-mark-blue" aria-hidden /> Tratado
          </span>
        </div>
      </div>

      {/* what do you feel */}
      <div className="border-b border-ink/10 px-4 py-3 sm:px-5">
        <p id="symptom-label" className="mb-2 text-sm font-semibold text-ink-2">
          ¿Qué sientes?
        </p>
        <div role="radiogroup" aria-labelledby="symptom-label" className="flex flex-wrap gap-1.5">
          {symptoms.map((s) => {
            const active = s.id === symptomId
            return (
              <button
                key={s.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => chooseSymptom(s.id)}
                className={cn(
                  'press min-h-9 rounded-full border px-3 text-[0.82rem] font-medium',
                  active
                    ? 'border-ink bg-ink text-paper'
                    : 'border-ink/20 text-ink-2 [@media(hover:hover)]:hover:border-ink/50',
                )}
              >
                {s.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* the chart */}
      <div className="chart-grid px-3 pt-3 pb-2 sm:px-5 sm:pt-4">
        <Odontogram marks={marks} selected={markedTeeth[0] ?? null} onSelect={chooseTooth} />
        <p className="mt-2 text-center font-mono text-[0.6rem] text-ink-3">
          Toca cualquier pieza para ver qué se suele tratar ahí
        </p>
      </div>

      {/* the reading */}
      <div className="border-t border-ink/20 px-4 py-4 sm:px-5" aria-live="polite">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={`${symptomId ?? tooth}-${treated}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(4px)', transform: 'translateY(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end"
          >
            <div className="min-w-0">
              <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span
                  className={cn(
                    'tabular font-mono text-[0.8rem] font-semibold',
                    treated ? 'text-mark-blue' : 'text-mark-red',
                  )}
                >
                  {pieceLabel}
                </span>
                <span className="text-sm text-ink-3">
                  {markedTeeth.length === 1
                    ? toothName(markedTeeth[0])
                    : markedTeeth.length === 0
                      ? 'Toda la boca'
                      : 'Varias piezas'}
                </span>
              </p>
              <p className="wdth-wide mt-1.5 text-xl leading-tight font-bold">
                {treated ? (
                  <span className="inline-flex items-center gap-2">
                    <Check className="size-5 text-mark-blue" strokeWidth={2.6} aria-hidden />
                    Tratado con {treatment?.name.toLowerCase()}
                  </span>
                ) : (
                  treatment?.name
                )}
              </p>
              <p className="mt-1 max-w-[52ch] text-[0.92rem] text-ink-2">
                {symptom || !tooth ? treatment?.solves : toothGuide[toothKind(tooth)].problems}
                {treatment ? (
                  <span className="text-ink-3"> · {treatment.visits}</span>
                ) : null}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <Button
                variant="outline"
                onClick={() => setTreated((v) => !v)}
                aria-pressed={treated}
                className="h-11"
              >
                {treated ? (
                  <>
                    <RotateCcw className="size-4" aria-hidden /> Ver antes
                  </>
                ) : (
                  <>
                    Ver tratado <ArrowRight className="size-4" aria-hidden />
                  </>
                )}
              </Button>
              <ButtonLink variant="whatsapp" href={whatsappUrl(message)} className="h-11">
                <WhatsappIcon className="size-[18px]" />
                Consultar
              </ButtonLink>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
