import { AnimatePresence, motion } from 'motion/react'
import { quickMessage } from '../../shared/lib/whatsapp'
import { useScrolled } from '../../shared/hooks/useScrolled'
import { ButtonLink } from '../../shared/ui/Button'
import { WhatsappIcon } from '../../shared/ui/icons'

/** Phones only: once the hero is gone, booking stays one thumb away. */
export function MobileBookingBar() {
  const show = useScrolled(640)
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ transform: 'translateY(110%)' }}
          animate={{ transform: 'translateY(0%)' }}
          exit={{ transform: 'translateY(110%)', transition: { duration: 0.18 } }}
          transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/15 bg-paper/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden"
        >
          <ButtonLink href={quickMessage()} variant="whatsapp" size="lg" className="w-full">
            <WhatsappIcon className="size-5" />
            Reservar por WhatsApp
          </ButtonLink>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
