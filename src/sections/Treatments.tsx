import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { treatments } from '../data/treatments'
import { cn } from '../shared/lib/cn'
import { quickMessage } from '../shared/lib/whatsapp'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'
import { SourceTag } from '../shared/ui/SourceTag'
import { WhatsappIcon } from '../shared/ui/icons'

/**
 * Treatments as a printed register: fixed columns (treatment / what it solves / visits)
 * that never move, rows that open to explain.
 */
export function Treatments() {
  const [open, setOpen] = useState<string | null>('endodoncia')
  const baseId = useId()

  return (
    <section id="tratamientos" aria-labelledby="tratamientos-title" className="border-t border-ink/15 py-20 md:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionHeading
            id="tratamientos-title"
            className="lg:col-span-7"
            title="Lo que resolvemos en la clínica"
            intro="Empieza por lo que sientes. Cada fila te dice qué se trata, cuántas citas toma y te deja preguntar el precio directo por WhatsApp."
          />
        </div>

        <Reveal className="mt-12">
          <div role="table" aria-label="Tratamientos" className="border-t-2 border-ink">
            <div
              role="row"
              className="hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_10rem_2.75rem] gap-6 border-b border-ink/25 py-3 font-mono text-[0.65rem] tracking-wider text-ink-3 uppercase md:grid"
            >
              <span role="columnheader">Tratamiento</span>
              <span role="columnheader">Qué resuelve</span>
              <span role="columnheader">Citas</span>
              <span role="columnheader" className="sr-only">
                Abrir
              </span>
            </div>

            {treatments.map((t) => {
              const isOpen = open === t.id
              const panelId = `${baseId}-${t.id}`
              return (
                <div role="row" key={t.id} className="border-b border-ink/15">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : t.id)}
                    className="group grid w-full grid-cols-[1fr_2.75rem] items-start gap-x-6 gap-y-1 py-5 text-left md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_10rem_2.75rem] md:items-center"
                  >
                    <span role="cell" className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span className="wdth-wide text-xl font-bold tracking-tight md:text-[1.4rem]">{t.name}</span>
                      {t.source === 'ejemplo' ? <SourceTag source={t.source} /> : null}
                    </span>
                    <span
                      role="cell"
                      className="col-start-1 row-start-2 text-ink-2 md:col-start-auto md:row-start-auto"
                    >
                      {t.solves}
                    </span>
                    <span
                      role="cell"
                      className="tabular col-start-1 row-start-3 font-mono text-[0.78rem] text-ink-3 md:col-start-auto md:row-start-auto"
                    >
                      {t.visits}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        'col-start-2 row-span-3 row-start-1 grid size-11 place-items-center rounded-full border border-ink/20 transition-[transform,background-color,color] duration-200 ease-[var(--ease-out-strong)] md:col-start-auto md:row-span-1 md:row-start-auto',
                        isOpen ? 'rotate-45 bg-ink text-paper' : '[@media(hover:hover)]:group-hover:border-ink',
                      )}
                    >
                      <Plus className="size-5" />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-label={t.name}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-strong)]',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden" inert={!isOpen}>
                      <div className="grid gap-4 pb-7 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_10rem_2.75rem] md:gap-6">
                        <div className="flex items-start md:pt-1">
                          {t.source !== 'ejemplo' ? <SourceTag source={t.source} /> : null}
                        </div>
                        <div className="md:col-span-2">
                          <p className="max-w-[60ch] text-ink-2">{t.detail}</p>
                          <a
                            href={quickMessage(t.name.toLowerCase())}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="press mt-4 inline-flex items-center gap-2 font-semibold text-whatsapp underline decoration-whatsapp/30 hover:decoration-whatsapp"
                          >
                            <WhatsappIcon className="size-[18px]" />
                            Preguntar precio de {t.name.toLowerCase()}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
