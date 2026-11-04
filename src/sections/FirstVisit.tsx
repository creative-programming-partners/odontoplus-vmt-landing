import { firstVisit } from '../data/content'
import { photos } from '../shared/lib/photos'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { PhotoNote } from '../shared/ui/PhotoNote'
import { SectionHeading } from '../shared/ui/SectionHeading'

/** The first appointment, step by step. The numbers carry the order, so they stay. */
export function FirstVisit() {
  return (
    <section id="primera-cita" aria-labelledby="primera-cita-title" className="py-20 md:py-28">
      <Container className="grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-photo)] bg-mist-2">
            <img
              src={photos.pacienteEspejo.src}
              alt={photos.pacienteEspejo.alt}
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <PhotoNote />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading
            id="primera-cita-title"
            title="Tu primera cita, sin sorpresas"
            intro="Mucha gente posterga el dentista por miedo o por no saber cuánto va a costar. Por eso la primera visita es para revisar, explicar y decidir juntos."
          />
          <ol className="mt-10 grid gap-4">
            {firstVisit.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.06} className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-white p-5">
                <span className="tabular grid size-11 shrink-0 place-items-center rounded-full bg-ink text-lg font-[800] text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-[800]">{step.title}</h3>
                  <p className="mt-1 text-ink-2">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
