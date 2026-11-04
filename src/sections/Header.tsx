import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../data/clinic'
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
        'sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200',
        scrolled || open ? 'border-ink/15 bg-paper/95 backdrop-blur-sm' : 'border-transparent bg-paper',
      )}
    >
      <Container className="flex h-[68px] items-center justify-between gap-6">
        <a href="#inicio" aria-label="OdontoPlus VMT, ir al inicio" className="rounded-md">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-2 text-[0.92rem] font-medium text-ink-2 transition-colors duration-150 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:contents">
            <ButtonLink href={quickMessage()} variant="primary">
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
            className="press grid size-11 place-items-center rounded-full border border-ink/20 lg:hidden"
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
            className="absolute inset-x-0 top-full h-[calc(100dvh-68px)] border-t border-ink/10 bg-paper lg:hidden"
          >
            <Container className="flex h-full flex-col pt-4 pb-8">
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="wdth-wide flex items-center justify-between py-4 text-2xl font-bold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ButtonLink href={quickMessage()} variant="whatsapp" size="lg" className="mt-auto w-full">
                <WhatsappIcon className="size-5" />
                Reservar por WhatsApp
              </ButtonLink>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
