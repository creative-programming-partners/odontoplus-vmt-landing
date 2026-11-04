import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}

/**
 * Enters once when scrolled into view. Starts nearly visible (opacity 0.001 is avoided:
 * content stays readable if JS is slow) and only moves 14px, so it never feels like a show.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: Props) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, transform: 'translateY(14px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </Tag>
  )
}
