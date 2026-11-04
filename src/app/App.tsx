import { MobileBookingBar } from '../components/booking/MobileBookingBar'
import { Booking } from '../sections/Booking'
import { Cases } from '../sections/Cases'
import { Faq } from '../sections/Faq'
import { FirstVisit } from '../sections/FirstVisit'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Location } from '../sections/Location'
import { Team } from '../sections/Team'
import { Testimonials } from '../sections/Testimonials'
import { Treatments } from '../sections/Treatments'

export function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-md bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Treatments />
        <Cases />
        <FirstVisit />
        <Team />
        <Testimonials />
        <Booking />
        <Faq />
        <Location />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  )
}
