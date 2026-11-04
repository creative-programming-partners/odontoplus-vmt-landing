import { AnimatePresence, motion } from 'motion/react'
import { quickMessage } from '../../shared/lib/whatsapp'
import { useScrolled } from '../../shared/hooks/useScrolled'
import { WhatsappIcon } from '../../shared/ui/icons'

/** The WhatsApp bubble every Peruvian visitor expects, shown once the hero card is out of view. */
export function FloatingWhatsapp() {
  const show = useScrolled(720)
  return (
    <AnimatePresence>
      {show ? (
        <motion.a
          href={quickMessage()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir a OdontoPlus VMT por WhatsApp"
          initial={{ opacity: 0, transform: 'translateY(12px) scale(0.9)' }}
          animate={{ opacity: 1, transform: 'translateY(0px) scale(1)' }}
          exit={{ opacity: 0, transform: 'translateY(8px) scale(0.95)', transition: { duration: 0.15 } }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0.2 }}
          className="press fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex h-14 items-center gap-2.5 rounded-full bg-whatsapp pr-5 pl-4 font-bold text-white shadow-[0_10px_28px_-8px_rgb(28_143_78/0.6)] hover:bg-whatsapp-deep sm:right-6 sm:bottom-6"
        >
          <WhatsappIcon className="size-6" />
          <span className="max-sm:sr-only">Escríbenos</span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
