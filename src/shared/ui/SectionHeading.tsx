import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type Props = {
  id?: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'paper' | 'night'
  className?: string
}

export function SectionHeading({ id, title, intro, tone = 'paper', className }: Props) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <h2
        id={id}
        className={cn(
          'text-[clamp(2rem,4.4vw,3.5rem)] font-[750]',
          tone === 'night' ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className={cn('mt-5 max-w-[56ch] text-lg', tone === 'night' ? 'text-white/70' : 'text-ink-2')}>
          {intro}
        </p>
      ) : null}
    </div>
  )
}
