import { team } from '../data/content'
import { photos } from '../shared/lib/photos'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'
import { PhotoNote } from '../shared/ui/PhotoNote'
import { SourceTag } from '../shared/ui/SourceTag'

/** The clinic and its dentists. Names are demo content until the clinic sends its own. */
export function Team() {
  return (
    <section id="equipo" aria-labelledby="equipo-title" className="bg-mist py-20 md:py-28">
      <Container className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            id="equipo-title"
            title="Un consultorio cerca de tu casa"
            intro="Cirujanos dentistas colegiados, cada uno con su especialidad, en un consultorio limpio y equipado sobre la avenida Pachacútec."
          />
          <ul className="mt-10 grid gap-3">
            {team.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 0.06} className="flex items-center gap-4 rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-soft)]">
                <span aria-hidden className="grid size-14 shrink-0 place-items-center rounded-full bg-celeste-soft text-lg font-[800] text-celeste-deep">
                  {m.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-[800]">{m.name}</h3>
                  <p className="text-ink-2">
                    {m.role} · <span className="text-ink-3">{m.focus}</span>
                  </p>
                </div>
                <span className="hidden sm:block">
                  <SourceTag source={m.source} />
                </span>
              </Reveal>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-3">
            Nombres de ejemplo: aquí irán las fotos y el número de colegiatura (COP) de cada profesional.
          </p>
        </div>

        <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1 xl:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-photo)] bg-mist-2 sm:row-span-2 lg:row-span-1 lg:aspect-[16/10] xl:row-span-2 xl:aspect-auto">
            <img src={photos.consultorio.src} alt={photos.consultorio.alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
            <PhotoNote />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-photo)] bg-mist-2">
            <img src={photos.cepillado.src} alt={photos.cepillado.alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
            <PhotoNote />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-photo)] bg-mist-2">
            <img src={photos.ninoRevision.src} alt={photos.ninoRevision.alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
            <PhotoNote />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
