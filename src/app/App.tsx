import { FloatingWhatsapp } from '../components/booking/FloatingWhatsapp'
import { Cases } from '../sections/Cases'
import { CtaBand } from '../sections/CtaBand'
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
        className="sr-only z-50 rounded-md bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
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
        <CtaBand />
        <Faq />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}
