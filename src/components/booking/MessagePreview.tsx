import { CheckCheck } from 'lucide-react'
import { clinic } from '../../data/clinic'
import { Logomark } from '../brand/Logo'

type Props = { message: string }

/** Live preview of the WhatsApp chat: the patient sees exactly what will be sent. */
export function MessagePreview({ message }: Props) {
  return (
    <div className="lg:sticky lg:top-24 lg:self-start" aria-label="Vista previa del mensaje">
      <p className="mb-3 font-mono text-[0.68rem] tracking-wider text-white/60 uppercase">
        Así llegará tu mensaje
      </p>
      <div className="overflow-hidden rounded-[18px] border border-white/15 bg-[#0b1530]">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <span className="grid size-10 place-items-center rounded-full bg-paper">
            <Logomark className="size-7" />
          </span>
          <div className="leading-tight">
            <p className="font-semibold text-white">
              {clinic.name} {clinic.suffix}
            </p>
            <p className="tabular font-mono text-[0.68rem] text-white/50">+51 {clinic.phoneDisplay}</p>
          </div>
        </div>
        <div className="min-h-[16rem] px-4 py-6">
          <div className="ml-auto w-fit max-w-[92%] rounded-[14px] rounded-br-[4px] bg-[#1c5c3d] px-4 pt-3 pb-2 text-[0.95rem] text-white">
            <p className="whitespace-pre-line">{message}</p>
            <p className="mt-1 flex items-center justify-end gap-1 font-mono text-[0.6rem] text-white/60">
              ahora <CheckCheck className="size-3.5" aria-hidden />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
