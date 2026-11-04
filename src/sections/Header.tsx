import { AnimatePresence, motion } from 'motion/react'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { clinic, navLinks } from '../data/clinic'
import { Logo } from '../components/brand/Logo'
import { cn } from '../shared/lib/cn'
import { quickMessage } from '../shared/lib/whatsapp'
import { ButtonLink } from '../shared/ui/Button'
import { Container } from '../shared/ui/Container'
import { WhatsappIcon } from '../shared/ui/icons'
import { useScrolled } from '../shared/hooks/useScrolled'

export function Header() {
  const scrolled = useScrolled(12)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-[background-color,box-shadow] duration-200',
        scrolled || open ? 'bg-white/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-sm' : 'bg-mist',
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a href="#inicio" aria-label="OdontoPlus VMT, ir al inicio" className="rounded-lg">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-[0.95rem] font-semibold text-ink-2 transition-colors duration-150 hover:bg-ink/[0.05] hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+${clinic.whatsapp}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 font-bold text-ink xl:inline-flex"
          >
            <Phone className="size-4 text-celeste" aria-hidden />
            {clinic.phoneDisplay}
          </a>
          <span className="hidden sm:contents">
            <ButtonLink href={quickMessage()} variant="whatsapp">
              <WhatsappIcon className="size-[18px]" />
              Reservar cita
            </ButtonLink>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="press grid size-11 place-items-center rounded-full bg-white shadow-[var(--shadow-soft)] lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, transform: 'translateY(-8px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            exit={{ opacity: 0, transform: 'translateY(-4px)', transition: { duration: 0.14 } }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] bg-white lg:hidden"
          >
            <Container className="flex h-full flex-col pt-2 pb-8">
              <ul className="divide-y divide-line">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)} className="flex py-4 text-2xl font-[800]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto grid gap-3">
                <ButtonLink href={quickMessage()} variant="whatsapp" size="lg" className="w-full">
                  <WhatsappIcon className="size-5" />
                  Reservar por WhatsApp
                </ButtonLink>
                <ButtonLink href={`tel:+${clinic.whatsapp}`} variant="outline" size="lg" className="w-full">
                  <Phone className="size-5" aria-hidden />
                  Llamar al {clinic.phoneDisplay}
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
