import { ChevronDown } from 'lucide-react'
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
      <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading id="preguntas-title" title="Preguntas frecuentes" />
          <p className="mt-4 text-lg text-ink-2">
            ¿No está tu pregunta?{' '}
            <a
              href={quickMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-whatsapp underline decoration-whatsapp/30 hover:decoration-whatsapp"
            >
              Escríbenos por WhatsApp
            </a>
            .
          </p>
        </div>

        <ul className="grid gap-3 lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i
            const panelId = `${baseId}-${i}`
            return (
              <li key={f.question} className="rounded-[var(--radius-card)] border border-line bg-white">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left md:px-6 md:py-5"
                  >
                    <span className="text-lg font-bold">{f.question}</span>
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        'size-5 shrink-0 text-ink-3 transition-transform duration-200 ease-[var(--ease-out-strong)]',
                        isOpen && 'rotate-180',
                      )}
                    />
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
                    <p className="max-w-[62ch] px-5 pb-5 text-ink-2 md:px-6">{f.answer}</p>
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
