import { ArrowUpRight } from 'lucide-react'
import { clinic } from '../data/clinic'
import { testimonials } from '../data/content'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SourceTag } from '../shared/ui/SourceTag'
import { FacebookIcon } from '../shared/ui/icons'

export function Testimonials() {
  return (
    <section aria-labelledby="opiniones-title" className="border-t border-ink/15 bg-paper-2/60 py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 id="opiniones-title" className="text-[clamp(2rem,4.4vw,3.5rem)] font-[750]">
            Lo que dicen los pacientes
          </h2>

          {/* Real figure from the clinic's Facebook page, framed as a stamped entry rather than a vanity metric */}
          <div className="mt-10 max-w-sm rounded-[12px] border-2 border-mark-blue p-5">
            <div className="flex items-center justify-between gap-4">
              <FacebookIcon className="size-6 text-mark-blue" />
              <SourceTag source={clinic.rating.source} />
            </div>
            <p className="wdth-wide mt-5 text-[1.6rem] leading-tight font-bold text-mark-blue">
              {clinic.rating.label}
            </p>
            <p className="mt-1 text-ink-2">Según {clinic.rating.detail} en su página.</p>
            <a
              href={clinic.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold underline decoration-ink/30 hover:decoration-ink"
            >
              Leer en Facebook <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </Reveal>

        <ul className="grid gap-px overflow-hidden rounded-[14px] border border-ink/15 bg-ink/15 lg:col-span-7">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.06} className="bg-paper p-6 md:p-8">
              <blockquote>
                <p className="text-lg leading-relaxed text-ink md:text-[1.2rem]">“{t.quote}”</p>
                <footer className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <span>
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-ink-3"> · {t.treatment}</span>
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
