import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type Props = {
  id?: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ id, title, intro, tone = 'light', align = 'left', className }: Props) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <h2
        id={id}
        className={cn('text-[clamp(1.9rem,4vw,3rem)] font-[800]', tone === 'dark' ? 'text-white' : 'text-ink')}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            'mt-4 max-w-[58ch] text-lg',
            align === 'center' && 'mx-auto',
            tone === 'dark' ? 'text-white/75' : 'text-ink-2',
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  )
}
