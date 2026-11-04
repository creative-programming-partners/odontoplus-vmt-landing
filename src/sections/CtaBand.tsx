import { Phone } from 'lucide-react'
import { clinic } from '../data/clinic'
import { quickMessage } from '../shared/lib/whatsapp'
import { ButtonLink } from '../shared/ui/Button'
import { Container } from '../shared/ui/Container'
import { WhatsappIcon } from '../shared/ui/icons'

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="px-4 sm:px-6 lg:px-10">
      <Container className="rounded-[var(--radius-photo)] bg-navy px-6 py-12 text-center text-white sm:px-10 md:py-16">
        <h2 id="cta-title" className="mx-auto max-w-[22ch] text-[clamp(1.9rem,4vw,3rem)] font-[800]">
          ¿Te duele algo o ya toca tu limpieza?
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-lg text-white/75">
          Escríbenos ahora y te damos el primer espacio disponible. Respondemos por WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={quickMessage()} variant="whatsapp" size="lg">
            <WhatsappIcon className="size-5" />
            Reservar por WhatsApp
          </ButtonLink>
          <ButtonLink href={`tel:+${clinic.whatsapp}`} variant="ghost-light" size="lg">
            <Phone className="size-5" aria-hidden />
            Llamar al {clinic.phoneDisplay}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
