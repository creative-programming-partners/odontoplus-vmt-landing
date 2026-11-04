import { ArrowRight } from 'lucide-react'
import { treatments } from '../data/treatments'
import type { Treatment } from '../data/types'
import { photos } from '../shared/lib/photos'
import { quickMessage } from '../shared/lib/whatsapp'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'
import { SourceTag } from '../shared/ui/SourceTag'

/** Two featured treatments with large photos, then the rest in a compact grid. */
export function Treatments() {
  const [first, second, ...rest] = treatments
  return (
    <section id="tratamientos" aria-labelledby="tratamientos-title" className="pt-8 pb-20 md:pt-12 md:pb-28">
      <Container>
        <SectionHeading
          id="tratamientos-title"
          title="¿Qué necesitas tratarte?"
          intro="Estos son los tratamientos que más hacemos. Toca el que te interesa y pregúntanos el precio por WhatsApp."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[first, second].map((t, i) => (
            <Reveal key={t.id} delay={i * 0.06}>
              <FeaturedCard t={t} />
            </Reveal>
          ))}
        </div>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((t, i) => (
            <Reveal as="li" key={t.id} delay={i * 0.05}>
              <CompactCard t={t} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function FeaturedCard({ t }: { t: Treatment }) {
  const photo = t.photo ? photos[t.photo] : null
  return (
    <a
      href={quickMessage(t.name.toLowerCase())}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid h-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-soft)] transition-shadow duration-200 hover:shadow-[var(--shadow-card)] sm:grid-cols-[1fr_1.1fr]"
    >
      {photo ? (
        <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-[var(--ease-out-strong)] [@media(hover:hover)]:group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="flex flex-col p-6 md:p-7">
        <h3 className="text-[1.6rem] font-[800]">{t.name}</h3>
        <p className="mt-2 font-semibold text-ink-2">{t.solves}</p>
        <p className="mt-3 text-ink-3">{t.detail}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <SourceTag source={t.source} />
          <span className="inline-flex items-center gap-1.5 font-bold text-celeste-deep">
            Consultar <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </div>
    </a>
  )
}

function CompactCard({ t }: { t: Treatment }) {
  const photo = t.photo ? photos[t.photo] : null
  return (
    <a
      href={quickMessage(t.name.toLowerCase())}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-soft)] transition-shadow duration-200 hover:shadow-[var(--shadow-card)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-mist-2">
        {photo ? (
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-[var(--ease-out-strong)] [@media(hover:hover)]:group-hover:scale-[1.03]"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-[800]">{t.name}</h3>
        <p className="mt-1.5 text-ink-2">{t.solves}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
          <SourceTag source={t.source} />
          <span className="inline-flex items-center gap-1 text-sm font-bold text-celeste-deep">
            Consultar <ArrowRight className="size-4" aria-hidden />
          </span>
        </div>
      </div>
    </a>
  )
}
