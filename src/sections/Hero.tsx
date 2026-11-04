import { motion, useReducedMotion } from 'motion/react'
import { MapPin, Star } from 'lucide-react'
import { clinic } from '../data/clinic'
import { ChartPanel } from '../components/odontogram/ChartPanel'
import { quickMessage } from '../shared/lib/whatsapp'
import { ButtonLink } from '../shared/ui/Button'
import { Container } from '../shared/ui/Container'
import { WhatsappIcon } from '../shared/ui/icons'

const ease = [0.23, 1, 0.32, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, transform: 'translateY(12px)' },
          animate: { opacity: 1, transform: 'translateY(0px)' },
          transition: { duration: 0.7, delay, ease },
        }

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid gap-10 pt-8 pb-16 md:pt-12 lg:grid-cols-12 lg:gap-12 lg:pt-16 lg:pb-16">
        <div className="flex flex-col lg:col-span-5 lg:pt-6">
          <motion.h1
            id="hero-title"
            {...enter(0)}
            className="text-[clamp(2.6rem,4.6vw,4.6rem)] font-[800] tracking-[-0.035em]"
          >
            Tratamos tu sonrisa{' '}
            <span className="text-mark-blue">
              diente por{' '}
              <span className="relative whitespace-nowrap">
                diente.
                <PenUnderline />
              </span>
            </span>
          </motion.h1>

          <motion.p {...enter(0.08)} className="mt-6 max-w-[46ch] text-lg text-ink-2 md:text-xl">
            Clínica dental para toda la familia en Villa María del Triunfo. Te mostramos qué tiene cada
            pieza, cómo se trata y por dónde empezar.
          </motion.p>

          <motion.div {...enter(0.16)} className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={quickMessage()} variant="whatsapp" size="lg">
              <WhatsappIcon className="size-5" />
              Reservar por WhatsApp
            </ButtonLink>
            <a
              href="#tratamientos"
              className="rounded-full px-4 py-3 font-semibold text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Ver tratamientos
            </a>
          </motion.div>

          <motion.dl {...enter(0.24)} className="mt-10 grid gap-4 border-t border-ink/15 pt-6 sm:grid-cols-2 lg:mt-auto">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-mark-red" aria-hidden />
              <div>
                <dt className="sr-only">Dirección</dt>
                <dd className="font-semibold">{clinic.address}</dd>
                <dd className="text-sm text-ink-3">{clinic.reference}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Star className="mt-0.5 size-5 shrink-0 text-mark-blue" aria-hidden />
              <div>
                <dt className="sr-only">Opiniones</dt>
                <dd className="font-semibold">{clinic.rating.label}</dd>
                <dd className="text-sm text-ink-3">{clinic.rating.detail} de pacientes</dd>
              </div>
            </div>
          </motion.dl>
        </div>

        <motion.div
          className="lg:col-span-7"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, transform: 'translateY(18px) scale(0.985)' },
                animate: { opacity: 1, transform: 'translateY(0px) scale(1)' },
                transition: { duration: 0.8, delay: 0.12, ease },
              })}
        >
          <ChartPanel />
        </motion.div>
      </Container>
    </section>
  )
}

/** A ballpoint underline drawn once, like a dentist marking a chart. */
function PenUnderline() {
  const reduce = useReducedMotion()
  return (
    <svg
      viewBox="0 0 300 14"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full"
      aria-hidden
    >
      <motion.path
        d="M3 9.5C60 4.5 140 3 200 5.2c36 1.3 70 3.6 97 2.2"
        fill="none"
        stroke="var(--color-mark-red)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.77, 0, 0.175, 1] }}
      />
    </svg>
  )
}
