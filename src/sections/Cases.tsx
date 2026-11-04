import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Check } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { clinic } from '../data/clinic'
import { cases } from '../data/content'
import { SegmentChart } from '../components/odontogram/SegmentChart'
import { cn } from '../shared/lib/cn'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'
import { SourceTag } from '../shared/ui/SourceTag'
import { InstagramIcon } from '../shared/ui/icons'

const pieces = (teeth: number[]) =>
  teeth.length === 1
    ? `Pieza ${teeth[0]}`
    : teeth.length > 3
      ? `Piezas ${teeth[0]} a ${teeth[teeth.length - 1]}`
      : `Piezas ${teeth.join(', ')}`

/**
 * Cases the clinic has published. Selecting one replays it on the chart:
 * marked red (before) then redrawn blue (after).
 */
export function Cases() {
  const [activeId, setActiveId] = useState(cases[0].id)
  const [phase, setPhase] = useState<'antes' | 'despues'>('antes')
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, margin: '-20% 0px -20% 0px' })
  const active = cases.find((c) => c.id === activeId)!

  // Replay before -> after every time a case is opened (and when the chart scrolls into view).
  useEffect(() => {
    if (!inView) return
    setPhase('antes')
    const t = window.setTimeout(() => setPhase('despues'), reduce ? 400 : 1100)
    return () => window.clearTimeout(t)
  }, [activeId, inView, reduce])

  return (
    <section id="casos" aria-labelledby="casos-title" className="bg-paper-2/60 py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="casos-title"
            title="Casos reales de la clínica"
            intro="Estos son tratamientos que OdontoPlus publicó en su Instagram. Elige uno y míralo en la ficha: en rojo cómo llegó, en azul cómo quedó."
          />
          <a
            href={clinic.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2.5 text-sm font-semibold hover:border-ink"
          >
            <InstagramIcon className="size-[18px]" />
            Ver fotos en {clinic.instagram.handle}
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* case list */}
          <Reveal className="lg:col-span-4">
            <ul className="border-t-2 border-ink" role="tablist" aria-label="Casos" aria-orientation="vertical">
              {cases.map((c) => {
                const selected = c.id === activeId
                return (
                  <li key={c.id} className="border-b border-ink/15">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls="case-panel"
                      onClick={() => setActiveId(c.id)}
                      className={cn(
                        'group grid w-full grid-cols-[1fr_auto] items-center gap-3 py-4 text-left transition-colors duration-150',
                        selected ? 'text-ink' : 'text-ink-2 [@media(hover:hover)]:hover:text-ink',
                      )}
                    >
                      <span>
                        <span className="block font-semibold">{c.title}</span>
                        <span className="tabular mt-0.5 block font-mono text-[0.68rem] text-ink-3">
                          {pieces(c.teeth)}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          'size-3 rounded-[3px] border transition-colors duration-200',
                          selected ? 'border-ink bg-ink' : 'border-ink/30',
                        )}
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          {/* the case on the chart */}
          <Reveal delay={0.08} className="lg:col-span-8">
            <div
              ref={ref}
              id="case-panel"
              role="tabpanel"
              aria-live="polite"
              className="relative overflow-hidden rounded-[14px] border border-ink/20 bg-white/80"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 px-5 py-3">
                <p className="wdth-wide font-bold">Ficha del caso</p>
                <div className="flex items-center gap-1 rounded-full border border-ink/15 p-1 font-mono text-[0.65rem] uppercase">
                  {(['antes', 'despues'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPhase(p)}
                      aria-pressed={phase === p}
                      className={cn(
                        'press rounded-full px-3 py-1.5 tracking-wider',
                        phase === p
                          ? p === 'antes'
                            ? 'bg-mark-red text-white'
                            : 'bg-mark-blue text-white'
                          : 'text-ink-3',
                      )}
                    >
                      {p === 'antes' ? 'Antes' : 'Después'}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active.id}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="grid gap-8 p-5 md:p-7"
                >
                  <div className="chart-grid -mx-5 -mt-5 px-5 pt-6 pb-4 md:-mx-7 md:-mt-7 md:px-10 md:pt-8">
                    <SegmentChart
                      teeth={active.teeth}
                      mark={phase === 'antes' ? 'red' : 'blue'}
                      caption={`${pieces(active.teeth)} · ${phase === 'antes' ? 'por tratar' : 'tratado'}`}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
                    <div>
                      <h3 className="text-[1.75rem] font-[750]">{active.title}</h3>
                      <p className="mt-2 text-ink-2">{active.highlight}</p>
                      <SourceTag source={active.source} className="mt-4" />
                    </div>
                    <ol className="grid content-start gap-3">
                      {active.steps.map((s, i) => (
                        <li key={s} className="flex items-start gap-3">
                          <span
                            className={cn(
                              'mt-0.5 grid size-6 shrink-0 place-items-center rounded-[4px] border transition-colors duration-300',
                              phase === 'despues'
                                ? 'border-mark-blue bg-mark-blue text-white'
                                : 'border-ink/30 text-transparent',
                            )}
                            style={{ transitionDelay: phase === 'despues' ? `${i * 90}ms` : '0ms' }}
                          >
                            <Check className="size-4" strokeWidth={3} aria-hidden />
                          </span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <a
                    href={clinic.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink underline decoration-ink/30 hover:decoration-ink"
                  >
                    Ver las fotos de este caso en Instagram
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
