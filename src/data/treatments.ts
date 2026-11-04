import type { Treatment } from './types'

export const treatments: Treatment[] = [
  {
    id: 'endodoncia',
    name: 'Endodoncia y retratamiento',
    solves: 'Dolor fuerte, nervio dañado o una endodoncia antigua que falló',
    visits: '1 a 3 citas',
    detail:
      'Limpiamos y sellamos los conductos del diente para salvarlo en lugar de extraerlo. También rehacemos endodoncias antiguas que volvieron a dar molestias.',
    source: 'instagram',
  },
  {
    id: 'resinas',
    name: 'Resinas estéticas',
    solves: 'Caries, dientes rotos y resinas antiguas manchadas',
    visits: '1 cita por pieza',
    detail:
      'Reemplazamos amalgamas y resinas viejas por resina del color exacto de tu diente, también en los dientes de adelante.',
    source: 'instagram',
  },
  {
    id: 'coronas',
    name: 'Coronas',
    solves: 'Dientes muy destruidos o debilitados después de una endodoncia',
    visits: '2 a 3 citas',
    detail:
      'Coronas de metal-porcelana que devuelven la forma y la fuerza al diente para que vuelvas a masticar con confianza.',
    source: 'instagram',
  },
  {
    id: 'rehabilitacion',
    name: 'Rehabilitación oral',
    solves: 'Varias piezas dañadas o perdidas al mismo tiempo',
    visits: 'Plan por etapas',
    detail:
      'Combinamos postes, resinas y coronas en un plan completo, explicado paso a paso y con presupuesto por etapas.',
    source: 'instagram',
  },
  {
    id: 'limpieza',
    name: 'Limpieza y prevención',
    solves: 'Sarro, sangrado de encías y mal aliento',
    visits: '1 cita',
    detail:
      'Profilaxis, destartraje y revisión general. El mejor momento para detectar problemas antes de que duelan.',
    source: 'ejemplo',
  },
  {
    id: 'familia',
    name: 'Odontología para niños',
    solves: 'Primeras visitas, caries infantiles y sellantes',
    visits: '1 a 2 citas',
    detail:
      'Atención paciente para que los más pequeños de la casa pierdan el miedo al dentista desde la primera visita.',
    source: 'ejemplo',
  },
]
