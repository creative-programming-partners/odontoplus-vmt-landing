import { ArrowUpRight, Quote } from 'lucide-react'
import { clinic } from '../data/clinic'
import { testimonials } from '../data/content'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'
import { SourceTag } from '../shared/ui/SourceTag'
import { FacebookIcon } from '../shared/ui/icons'

export function Testimonials() {
  return (
    <section id="opiniones" aria-labelledby="opiniones-title" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading id="opiniones-title" title="Lo que dicen nuestros pacientes" />
          <a
            href={clinic.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="press flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-white px-5 py-4 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)]"
          >
            <FacebookIcon className="size-8 text-[#1877f2]" />
            <span className="leading-tight">
              
              <span className="block font-bold">{clinic.rating.label}</span>
              <span className="inline-flex items-center gap-1 text-sm text-ink-3">
                {clinic.rating.detail} · Leer en Facebook <ArrowUpRight className="size-3.5" aria-hidden />
              </span>
            </span>
          </a>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.06} className="flex flex-col rounded-[var(--radius-card)] bg-mist p-6 md:p-7">
              <Quote className="size-8 text-celeste" aria-hidden />
              <blockquote className="mt-4 flex flex-1 flex-col">
                <p className="text-lg leading-relaxed text-ink">{t.quote}</p>
                <footer className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <span>
                    <span className="block font-bold">{t.name}</span>
                    <span className="text-sm text-ink-3">{t.treatment}</span>
                  </span>
                  <SourceTag source={t.source} />
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
