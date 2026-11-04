import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { faqs } from '../data/content'
import { cn } from '../shared/lib/cn'
import { quickMessage } from '../shared/lib/whatsapp'
import { Container } from '../shared/ui/Container'
import { SectionHeading } from '../shared/ui/SectionHeading'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="preguntas" aria-labelledby="preguntas-title" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading id="preguntas-title" title="Preguntas frecuentes" />
            <p className="mt-5 text-ink-2">
              ¿No está tu pregunta?{' '}
              <a
                href={quickMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-whatsapp underline decoration-whatsapp/30 hover:decoration-whatsapp"
              >
                Escríbenos por WhatsApp
              </a>
              .
            </p>
          </div>
        </div>

        <ul className="border-t-2 border-ink lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i
            const panelId = `${baseId}-${i}`
            return (
              <li key={f.question} className="border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-lg font-semibold md:text-xl">{f.question}</span>
                    <span
                      aria-hidden
                      className={cn(
                        'grid size-10 shrink-0 place-items-center rounded-full border border-ink/20 transition-[transform,background-color,color] duration-200 ease-[var(--ease-out-strong)]',
                        isOpen ? 'rotate-45 bg-ink text-paper' : '[@media(hover:hover)]:group-hover:border-ink',
                      )}
                    >
                      <Plus className="size-5" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-strong)]',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <p className="max-w-[62ch] pb-6 text-ink-2">{f.answer}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
