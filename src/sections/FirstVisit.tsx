import { firstVisit } from '../data/content'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'

/** The first appointment as a sequence; the step numbers carry the order, so they stay. */
export function FirstVisit() {
  return (
    <section
      id="como-es"
      aria-labelledby="como-es-title"
      className="relative bg-night py-20 text-white md:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading
            id="como-es-title"
            tone="night"
            className="lg:col-span-6"
            title="Tu primera cita, sin sorpresas"
            intro="Mucha gente posterga el dentista por miedo o por no saber cuánto va a costar. Por eso la primera visita es para mirar, explicar y decidir juntos."
          />
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-white/15 bg-white/15 md:grid-cols-2 xl:grid-cols-4">
          {firstVisit.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.06} className="flex flex-col bg-night p-6 md:p-7">
              <span className="tabular font-mono text-sm text-white/60">
                Paso {i + 1}
                <span className="text-white/35"> / {firstVisit.length}</span>
              </span>
              <h3 className="wdth-wide mt-8 text-[1.45rem] font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-white/70">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
