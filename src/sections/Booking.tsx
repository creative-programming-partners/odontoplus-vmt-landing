import { BookingForm } from '../components/booking/BookingForm'
import { Container } from '../shared/ui/Container'
import { SectionHeading } from '../shared/ui/SectionHeading'

export function Booking() {
  return (
    <section id="reservar" aria-labelledby="reservar-title" className="bg-night py-20 text-white md:py-28">
      <Container>
        <SectionHeading
          id="reservar-title"
          tone="night"
          title="Reserva tu cita en un minuto"
          intro="Llena lo que sepas. Armamos el mensaje por ti y lo envías desde tu WhatsApp; te respondemos para confirmar la hora."
        />
        <div className="mt-14">
          <BookingForm />
        </div>
      </Container>
    </section>
  )
}
