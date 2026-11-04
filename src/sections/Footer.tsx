import { clinic, navLinks } from '../data/clinic'
import { Logo } from '../components/brand/Logo'
import { Container } from '../shared/ui/Container'
import { FacebookIcon, InstagramIcon } from '../shared/ui/icons'

export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-24 text-white md:pb-12">
      <Container>
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="white" />
            <p className="mt-5 max-w-[36ch] text-white/70">{clinic.tagline}. Tu dentista de confianza en Villa María del Triunfo.</p>
            <div className="mt-6 flex gap-2">
              <a
                href={clinic.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de OdontoPlus VMT"
                className="press grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={clinic.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de OdontoPlus VMT"
                className="press grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Secciones" className="md:col-span-3 md:col-start-7">
            <p className="font-bold">Secciones</p>
            <ul className="mt-4 grid gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/75 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-bold">Contacto</p>
            <ul className="mt-4 grid gap-2 text-white/75">
              <li>{clinic.address}</li>
              <li>{clinic.reference}</li>
              <li>
                <a href={`tel:+${clinic.whatsapp}`} className="hover:text-white">
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="break-all hover:text-white">
                  {clinic.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-sm text-white/55">
          © {new Date().getFullYear()} OdontoPlus VMT · Prototipo diseñado por Creative Programming Partners · Fotos referenciales de
          Unsplash
        </p>
      </Container>
    </footer>
  )
}
