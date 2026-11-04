import { team } from '../data/content'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'
import { SourceTag } from '../shared/ui/SourceTag'

/** Staff register. Demo names until the clinic sends its real team and photos. */
export function Team() {
  return (
    <section id="equipo" aria-labelledby="equipo-title" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="equipo-title"
            title="Quién te va a atender"
            intro="Cirujanos dentistas colegiados, cada uno con su especialidad. Te atiende siempre el mismo equipo, así no tienes que contar tu historia dos veces."
          />
          <p className="mt-6 max-w-[48ch] text-sm text-ink-3">
            Los nombres de esta sección son de ejemplo. Aquí irán las fotos y el número de colegiatura (COP) de
            cada profesional de la clínica.
          </p>
        </div>

        <ul className="border-t-2 border-ink lg:col-span-7">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 0.06} className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-ink/15 py-6 sm:grid-cols-[auto_1fr_auto]">
              <span
                aria-hidden
                className="wdth-wide grid size-16 place-items-center rounded-[10px] border border-ink/25 bg-white text-xl font-bold text-ink sm:size-20 sm:text-2xl"
              >
                {m.initials}
              </span>
              <div className="min-w-0 self-center">
                <h3 className="wdth-wide text-xl font-bold tracking-tight">{m.name}</h3>
                <p className="text-ink-2">{m.role}</p>
                <p className="mt-1 font-mono text-[0.72rem] text-ink-3">{m.focus}</p>
              </div>
              <div className="col-span-2 sm:col-span-1 sm:self-center">
                <SourceTag source={m.source} />
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
