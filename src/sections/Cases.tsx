import { ArrowUpRight, ImageIcon } from 'lucide-react'
import { clinic } from '../data/clinic'
import { cases } from '../data/content'
import { ButtonLink } from '../shared/ui/Button'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'
import { SourceTag } from '../shared/ui/SourceTag'
import { InstagramIcon } from '../shared/ui/icons'

/**
 * Cases the clinic published on Instagram. Each tile keeps a slot for the case's own
 * before/after photo; until the clinic hands them over it says so instead of faking one.
 */
export function Cases() {
  return (
    <section id="casos" aria-labelledby="casos-title" className="bg-mist py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="casos-title"
            title="Casos reales de la clínica"
            intro="Estos son tratamientos terminados que la clínica publicó en Instagram. Ahí puedes ver las fotos del antes y el después."
          />
          <ButtonLink href={clinic.instagram.url} variant="outline">
            <InstagramIcon className="size-[18px]" />
            Ver fotos en {clinic.instagram.handle}
          </ButtonLink>
        </div>
      </Container>

      {/* rail on phones, grid from lg */}
      <div className="rail mt-12 snap-x snap-mandatory scroll-px-4 overflow-x-auto overscroll-x-contain lg:overflow-visible">
        <ul className="mx-auto grid w-max auto-cols-[78vw] grid-flow-col gap-4 px-4 sm:auto-cols-[300px] sm:px-6 lg:w-full lg:max-w-[1320px] lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-5 lg:px-10">
          {cases.map((c, i) => (
            <Reveal as="li" key={c.id} delay={i * 0.05} className="snap-start">
              <a
                href={clinic.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] transition-shadow duration-200 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-2 border-b border-dashed border-line bg-mist-2/60 text-ink-3">
                  <ImageIcon className="size-7" strokeWidth={1.6} aria-hidden />
                  <span className="px-4 text-center text-sm font-semibold">Foto del caso pendiente</span>
                  <span className="text-xs">se toma de su Instagram</span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="text-lg leading-snug font-[800]">
                    {c.lead} {c.big.toLowerCase()} {c.tail}
                  </h3>
                  <p className="text-ink-2">{c.summary}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
                    <SourceTag source={c.source} />
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-celeste-deep">
                      Ver
                      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
