import { clinic } from '../../data/clinic'

export type BookingDraft = {
  name: string
  treatment: string
  day: string
  shift: string
  note: string
}

/** Builds the message the patient will send. Shown live before sending. */
export function composeBookingMessage(draft: BookingDraft): string {
  const lines = [
    `Hola ${clinic.name} ${clinic.suffix}, quiero reservar una cita.`,
    draft.name.trim() ? `Mi nombre: ${draft.name.trim()}` : null,
    draft.treatment ? `Motivo: ${draft.treatment}` : null,
    draft.day || draft.shift
      ? `Me acomoda: ${[draft.day, draft.shift && `por la ${draft.shift.toLowerCase()}`].filter(Boolean).join(' ')}`
      : null,
    draft.note.trim() ? `Comentario: ${draft.note.trim()}` : null,
  ]
  return lines.filter(Boolean).join('\n')
}

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${clinic.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const quickMessage = (topic?: string) =>
  whatsappUrl(
    topic
      ? `Hola ${clinic.name} ${clinic.suffix}, quiero información sobre ${topic}.`
      : `Hola ${clinic.name} ${clinic.suffix}, quiero reservar una cita.`,
  )
