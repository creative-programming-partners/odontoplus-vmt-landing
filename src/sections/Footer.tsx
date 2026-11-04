import { clinic, navLinks } from '../data/clinic'
import { Logo } from '../components/brand/Logo'
import { quickMessage } from '../shared/lib/whatsapp'
import { ButtonLink } from '../shared/ui/Button'
import { Container } from '../shared/ui/Container'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '../shared/ui/icons'

export function Footer() {
  return (
    <footer className="bg-night pt-20 pb-28 text-white md:pb-12">
      <Container>
        <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] font-[800] tracking-[-0.035em] [font-variation-settings:'wdth'_112]">
              Lo que hoy está <span className="text-mark-red">en rojo,</span>
              <br />
              mañana puede estar <span className="text-[#7ea6ef]">en azul.</span>
            </p>
            <ButtonLink href={quickMessage()} variant="whatsapp" size="lg" className="mt-8">
              <WhatsappIcon className="size-5" />
              Reservar por WhatsApp
            </ButtonLink>
          </div>

          <nav aria-label="Secciones" className="lg:col-span-3 lg:col-start-8">
            <p className="font-mono text-[0.68rem] tracking-wider text-white/50 uppercase">Secciones</p>
            <ul className="mt-4 grid gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/80 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="font-mono text-[0.68rem] tracking-wider text-white/50 uppercase">Contacto</p>
            <ul className="mt-4 grid gap-2 text-white/80">
              <li>{clinic.address}</li>
              <li>{clinic.district}</li>
              <li>
                <a href={`tel:+${clinic.whatsapp}`} className="hover:text-white">
                  {clinic.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a
                href={clinic.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de OdontoPlus VMT"
                className="press grid size-11 place-items-center rounded-full border border-white/20 hover:border-white/60"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={clinic.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de OdontoPlus VMT"
                className="press grid size-11 place-items-center rounded-full border border-white/20 hover:border-white/60"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
          <Logo tone="paper" />
          <p className="text-sm text-white/50">
            Prototipo diseñado por Creative Programming Partners · {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  )
}
