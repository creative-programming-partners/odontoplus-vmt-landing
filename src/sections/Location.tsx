import { Mail, Navigation, Phone } from 'lucide-react'
import { clinic } from '../data/clinic'
import { ButtonLink } from '../shared/ui/Button'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'
import { SourceTag } from '../shared/ui/SourceTag'

export function Location() {
  return (
    <section id="ubicacion" aria-labelledby="ubicacion-title" className="border-t border-ink/15 bg-paper-2/60 py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            id="ubicacion-title"
            title="Estamos en Pachacútec"
            intro="Segundo piso, sobre la avenida. Si vienes por primera vez, escríbenos al llegar y te indicamos la entrada."
          />

          <dl className="mt-10 grid gap-6 border-t-2 border-ink pt-6">
            <div>
              <dt className="font-mono text-[0.68rem] tracking-wider text-ink-3 uppercase">Dirección</dt>
              <dd className="wdth-wide mt-1 text-xl font-bold">{clinic.address}</dd>
              <dd className="text-ink-2">{clinic.reference}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-3 font-mono text-[0.68rem] tracking-wider text-ink-3 uppercase">
                Horario <SourceTag source={clinic.hours.source} />
              </dt>
              <dd className="mt-2">
                <table className="w-full text-left">
                  <tbody>
                    {clinic.hours.rows.map((r) => (
                      <tr key={r.days} className="border-b border-ink/10 last:border-0">
                        <th scope="row" className="py-2 pr-4 font-medium">
                          {r.days}
                        </th>
                        <td className="tabular py-2 text-right font-mono text-sm text-ink-2">{r.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </dd>
            </div>
            <div className="grid gap-3">
              <a href={`tel:+${clinic.whatsapp}`} className="inline-flex items-center gap-2 font-semibold underline decoration-ink/25 hover:decoration-ink">
                <Phone className="size-4 text-mark-blue" aria-hidden /> {clinic.phoneDisplay}
              </a>
              <a href={`mailto:${clinic.email}`} className="inline-flex min-w-0 items-center gap-2 font-semibold underline decoration-ink/25 hover:decoration-ink">
                <Mail className="size-4 shrink-0 text-mark-blue" aria-hidden />
                <span className="truncate">{clinic.email}</span>
              </a>
            </div>
          </dl>

          <ButtonLink href={clinic.mapsUrl} variant="primary" size="lg" className="mt-8">
            <Navigation className="size-5" aria-hidden />
            Cómo llegar
          </ButtonLink>
        </div>

        <Reveal className="lg:col-span-7">
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-[14px] border border-ink/20 bg-paper-2 lg:min-h-[560px]">
            <iframe
              title="Mapa de OdontoPlus VMT en Av. Pachacútec 2818"
              src={clinic.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 [filter:grayscale(0.55)_contrast(1.05)]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
