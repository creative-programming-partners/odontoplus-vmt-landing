/**
 * Where a piece of content comes from.
 * - instagram / facebook: published by the clinic on its own networks.
 * - ejemplo: demo content for the prototype; the clinic must replace it.
 */
export type Source = 'instagram' | 'facebook' | 'ejemplo'

export type Treatment = {
  id: string
  name: string
  solves: string
  visits: string
  detail: string
  /** key in src/shared/lib/photos.ts, when the treatment has a photo */
  photo?: PhotoKey
  source: Source
}

/** A case as titled in the clinic's own Instagram posts: small lead, big word, small tail. */
export type ClinicalCase = {
  id: string
  lead: string
  big: string
  tail: string
  summary: string
  source: Source
}

export type TeamMember = {
  name: string
  role: string
  focus: string
  initials: string
  source: Source
}

export type Testimonial = {
  quote: string
  name: string
  treatment: string
  source: Source
}

export type FaqItem = {
  question: string
  answer: string
}

export type PhotoKey =
  | 'heroConsulta'
  | 'pacienteEspejo'
  | 'ninoRevision'
  | 'consultorio'
  | 'endodoncia'
  | 'resinas'
  | 'limpieza'
  | 'rehabilitacion'
  | 'cepillado'
  | 'coronas'
