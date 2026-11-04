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
  source: Source
}

export type ClinicalCase = {
  id: string
  title: string
  highlight: string
  teeth: number[]
  steps: string[]
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
