import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { clinic } from '../data/clinic'
import { ButtonLink } from '../shared/ui/Button'
import { Container } from '../shared/ui/Container'
import { Reveal } from '../shared/ui/Reveal'
import { SectionHeading } from '../shared/ui/SectionHeading'
import { SourceTag } from '../shared/ui/SourceTag'

export function Location() {
  return (
    <section id="ubicacion" aria-labelledby="ubicacion-title" className="bg-mist py-20 md:py-28">
      <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="ubicacion-title"
            title="Cómo llegar"
            intro="Estamos en el segundo piso, sobre la avenida Pachacútec. Si vienes por primera vez, escríbenos al llegar y te indicamos la entrada."
          />

          <dl className="mt-8 grid gap-3">
            <InfoRow icon={MapPin} label="Dirección">
              <span className="font-bold">{clinic.address}</span>
              <span className="block text-ink-3">{clinic.reference}</span>
            </InfoRow>
            <InfoRow icon={Clock} label="Horario" tag={<SourceTag source={clinic.hours.source} />}>
              <table className="w-full text-left">
                <tbody>
                  {clinic.hours.rows.map((r) => (
                    <tr key={r.days}>
                      <th scope="row" className="py-0.5 pr-3 font-semibold whitespace-nowrap">
                        {r.days}
                      </th>
                      <td className="tabular py-0.5 text-right text-ink-2">{r.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </InfoRow>
            <InfoRow icon={Phone} label="Teléfono y WhatsApp">
              <a href={`tel:+${clinic.whatsapp}`} className="font-bold underline decoration-ink/20 hover:decoration-ink">
                {clinic.phoneDisplay}
              </a>
            </InfoRow>
            <InfoRow icon={Mail} label="Correo">
              <a href={`mailto:${clinic.email}`} className="font-bold break-all underline decoration-ink/20 hover:decoration-ink">
                {clinic.email}
              </a>
            </InfoRow>
          </dl>

          <ButtonLink href={clinic.mapsUrl} variant="primary" size="lg" className="mt-8">
            <Navigation className="size-5" aria-hidden />
            Abrir en Google Maps
          </ButtonLink>
        </div>

        <Reveal className="lg:col-span-7">
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-[var(--radius-photo)] bg-mist-2 shadow-[var(--shadow-soft)] lg:min-h-[600px]">
            <iframe
              title="Mapa de OdontoPlus VMT en Av. Pachacútec 2818"
              src={clinic.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

type InfoRowProps = {
  icon: typeof MapPin
  label: string
  tag?: React.ReactNode
  children: React.ReactNode
}

function InfoRow({ icon: Icon, label, tag, children }: InfoRowProps) {
  return (
    <div className="flex gap-4 rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-soft)]">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-celeste-soft text-celeste-deep">
        <Icon className="size-5" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <dt className="mb-1 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink-3">
          {label} {tag}
        </dt>
        <dd>{children}</dd>
      </div>
    </div>
  )
}
