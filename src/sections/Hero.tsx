import { motion, useReducedMotion } from 'motion/react'
import { MapPin, Star } from 'lucide-react'
import { clinic } from '../data/clinic'
import { AppointmentCard } from '../components/booking/AppointmentCard'
import { photos } from '../shared/lib/photos'
import { quickMessage } from '../shared/lib/whatsapp'
import { ButtonLink } from '../shared/ui/Button'
import { Container } from '../shared/ui/Container'
import { WhatsappIcon } from '../shared/ui/icons'
import { PhotoNote } from '../shared/ui/PhotoNote'

const ease = [0.23, 1, 0.32, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const enter = (delay: number, y = 12) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, transform: `translateY(${y}px)` },
          animate: { opacity: 1, transform: 'translateY(0px)' },
          transition: { duration: 0.7, delay, ease },
        }

  return (
    <section id="inicio" aria-labelledby="hero-title" className="bg-linear-to-b from-mist to-white">
      <Container className="grid grid-cols-[minmax(0,1fr)] gap-8 pt-6 pb-12 md:pt-10 lg:grid-cols-12 lg:gap-x-12 lg:pt-10 lg:pb-10">
        {/* text + card */}
        <div className="lg:col-span-7">
          <motion.h1
            id="hero-title"
            {...enter(0)}
            className="text-[clamp(2.3rem,4.2vw,3.4rem)] font-[800] tracking-[-0.035em]"
          >
            Tu dentista <span className="text-celeste">de confianza</span> en Villa María del Triunfo
          </motion.h1>
          <motion.p {...enter(0.07)} className="mt-4 max-w-[48ch] text-lg text-ink-2 md:text-[1.2rem]">
            Endodoncias, resinas, coronas y limpiezas para toda la familia. Estamos en{' '}
            <strong className="font-semibold text-ink">Av. Pachacútec 2818, 2.º&nbsp;piso</strong>.
          </motion.p>

          {/* phones: a direct button before the photo, the card comes right after */}
          <motion.div {...enter(0.12)} className="mt-6 lg:hidden">
            <ButtonLink href={quickMessage()} variant="whatsapp" size="lg" className="w-full sm:w-auto">
              <WhatsappIcon className="size-5" />
              Reservar por WhatsApp
            </ButtonLink>
          </motion.div>

          <motion.div {...enter(0.16, 18)} className="mt-7 hidden lg:block">
            <AppointmentCard />
          </motion.div>
        </div>

        {/* photo + trust */}
        <motion.div {...enter(0.1, 18)} className="flex flex-col gap-4 lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-photo)] bg-mist-2 lg:aspect-auto lg:min-h-[460px] lg:flex-1">
            <img
              src={photos.heroConsulta.src}
              alt={photos.heroConsulta.alt}
              width={1600}
              height={1067}
              fetchPriority="high"
              className="absolute inset-0 size-full object-cover object-[42%_center]"
            />
            <PhotoNote />
          </div>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)]">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-celeste-soft text-celeste-deep">
                <Star className="size-5" fill="currentColor" aria-hidden />
              </span>
              <div className="leading-tight">
                <dt className="font-bold">{clinic.rating.label}</dt>
                <dd className="text-sm text-ink-3">{clinic.rating.detail}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)]">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-celeste-soft text-celeste-deep">
                <MapPin className="size-5" aria-hidden />
              </span>
              <div className="leading-tight">
                <dt className="font-bold">Av. Pachacútec 2818</dt>
                <dd className="text-sm text-ink-3">2.º piso · {clinic.district}</dd>
              </div>
            </div>
          </dl>
        </motion.div>

        {/* phones: the card after the photo */}
        <div className="lg:hidden">
          <AppointmentCard />
        </div>
      </Container>
    </section>
  )
}
