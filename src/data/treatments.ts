import type { Treatment } from './types'

export const treatments: Treatment[] = [
  {
    id: 'endodoncia',
    name: 'Endodoncia',
    solves: 'Dolor fuerte de muela o una endodoncia antigua que volvió a molestar',
    visits: '1 a 3 citas',
    detail: 'Salvamos el diente en lugar de sacarlo: limpiamos y sellamos sus conductos, con anestesia y sin apuro.',
    photo: 'endodoncia',
    source: 'instagram',
  },
  {
    id: 'resinas',
    name: 'Resinas estéticas',
    solves: 'Caries, dientes rotos y resinas viejas o manchadas',
    visits: '1 cita por pieza',
    detail: 'Cambiamos amalgamas y resinas antiguas por resina del color exacto de tu diente, también adelante.',
    photo: 'resinas',
    source: 'instagram',
  },
  {
    id: 'coronas',
    name: 'Coronas',
    solves: 'Dientes muy destruidos o débiles después de una endodoncia',
    visits: '2 a 3 citas',
    detail: 'Coronas de metal-porcelana que devuelven forma y fuerza para masticar tranquilo.',
    photo: 'coronas',
    source: 'instagram',
  },
  {
    id: 'rehabilitacion',
    name: 'Rehabilitación oral',
    solves: 'Varias piezas dañadas o perdidas',
    visits: 'Plan por etapas',
    detail: 'Postes, resinas y coronas en un plan completo, explicado paso a paso.',
    photo: 'rehabilitacion',
    source: 'instagram',
  },
  {
    id: 'limpieza',
    name: 'Limpieza dental',
    solves: 'Sarro, encías que sangran y mal aliento',
    visits: '1 cita',
    detail: 'Profilaxis y revisión general para detectar problemas antes de que duelan.',
    photo: 'limpieza',
    source: 'ejemplo',
  },
  {
    id: 'ninos',
    name: 'Odontología para niños',
    solves: 'Primeras visitas, caries de leche y sellantes',
    visits: '1 a 2 citas',
    detail: 'Atención paciente para que los más pequeños pierdan el miedo al dentista.',
    photo: 'ninoRevision',
    source: 'ejemplo',
  },
]

/** Options offered on the appointment card. */
export const bookingTreatments = [
  'Evaluación',
  'Dolor de muela',
  'Endodoncia',
  'Resinas',
  'Coronas',
  'Limpieza',
  'Niños',
]
