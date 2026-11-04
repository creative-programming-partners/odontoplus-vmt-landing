import { cn } from '../lib/cn'

/**
 * Small caption on stock photos that could be mistaken for the clinic itself.
 * Remove it once the photo is replaced by one of the real clinic.
 */
export function PhotoNote({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'pointer-events-none absolute bottom-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-[0.72rem] font-semibold text-white backdrop-blur-sm',
        className,
      )}
    >
      Foto referencial
    </span>
  )
}
