import type { ClinicalCase, FaqItem, TeamMember, Testimonial } from './types'

/** Cases published by the clinic on Instagram (titles from their posts). */
export const cases: ClinicalCase[] = [
  {
    id: 'retratamiento-molar',
    title: 'Retratamiento de molar',
    highlight: 'Renovación y retratamiento',
    teeth: [36],
    steps: ['Retiro de la restauración antigua', 'Retratamiento de conductos', 'Restauración nueva'],
    source: 'instagram',
  },
  {
    id: 'rehabilitacion-postes',
    title: 'Rehabilitación total con postes',
    highlight: 'Postes, resinas y coronas',
    teeth: [13, 12, 11, 21, 22, 23],
    steps: ['Postes en piezas tratadas', 'Reconstrucción con resina', 'Coronas definitivas'],
    source: 'instagram',
  },
  {
    id: 'resinas-antiguas',
    title: 'Renovación de resinas antiguas',
    highlight: 'Resinas antiguas',
    teeth: [46, 47],
    steps: ['Retiro de resinas filtradas', 'Limpieza de caries', 'Resina del color del diente'],
    source: 'instagram',
  },
  {
    id: 'resina-anterior',
    title: 'Restauración con resina en el sector anterior',
    highlight: 'Sector anterior',
    teeth: [11, 21],
    steps: ['Evaluación del color', 'Restauración por capas', 'Pulido final'],
    source: 'instagram',
  },
  {
    id: 'corona-metal-porcelana',
    title: 'Rehabilitación con resinas y corona',
    highlight: 'Corona de metal y porcelana',
    teeth: [26, 25],
    steps: ['Resinas en piezas vecinas', 'Tallado y toma de impresión', 'Corona de metal-porcelana'],
    source: 'instagram',
  },
]

export const firstVisit = [
  {
    title: 'Escríbenos por WhatsApp',
    body: 'Cuéntanos qué te molesta y elige un día. Te confirmamos la hora en el mismo chat.',
  },
  {
    title: 'Evaluación sin apuro',
    body: 'Revisamos toda tu boca, te mostramos lo que vemos y resolvemos tus dudas antes de tocar nada.',
  },
  {
    title: 'Plan y presupuesto claros',
    body: 'Te entregamos el plan por etapas con el costo de cada una. Tú decides por dónde empezar.',
  },
  {
    title: 'Tratamiento y control',
    body: 'Hacemos el tratamiento y te citamos para un control. Si algo molesta, nos escribes al mismo número.',
  },
]

/** Demo team. Replace with the clinic's real staff. */
export const team: TeamMember[] = [
  {
    name: 'Dra. Mariela Quispe',
    role: 'Cirujana dentista · Directora',
    focus: 'Rehabilitación oral y coronas',
    initials: 'MQ',
    source: 'ejemplo',
  },
  {
    name: 'Dr. Renzo Huamán',
    role: 'Cirujano dentista',
    focus: 'Endodoncia y retratamientos',
    initials: 'RH',
    source: 'ejemplo',
  },
  {
    name: 'Dra. Lucía Paredes',
    role: 'Cirujana dentista',
    focus: 'Odontopediatría y prevención',
    initials: 'LP',
    source: 'ejemplo',
  },
]

/** Demo testimonials. Replace with real reviews from Facebook or Google. */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Llegué con un dolor de muela que no me dejaba dormir. Me explicaron todo con calma y salí sin dolor el mismo día.',
    name: 'Rosa M.',
    treatment: 'Endodoncia',
    source: 'ejemplo',
  },
  {
    quote:
      'Me cambiaron las resinas viejas de adelante y ya no me tapo la boca para reír. Quedaron del color de mis dientes.',
    name: 'Jorge C.',
    treatment: 'Resinas estéticas',
    source: 'ejemplo',
  },
  {
    quote:
      'Llevo a mis dos hijos y les gusta ir. Para mí eso ya es bastante. Además queda a dos cuadras de la casa.',
    name: 'Milagros T.',
    treatment: 'Odontología para niños',
    source: 'ejemplo',
  },
]

export const faqs: FaqItem[] = [
  {
    question: '¿Cuánto cuesta la primera evaluación?',
    answer:
      'Escríbenos por WhatsApp y te damos el precio actualizado de la evaluación y de las promociones del mes.',
  },
  {
    question: '¿Duele una endodoncia?',
    answer:
      'Se trabaja con anestesia local, así que durante el tratamiento no deberías sentir dolor. Lo que duele es la infección: tratarla a tiempo es lo que quita el dolor.',
  },
  {
    question: '¿Puedo hacer el tratamiento por partes?',
    answer:
      'Sí. Armamos el plan por etapas para que empieces por lo más urgente y avances según tu tiempo y presupuesto.',
  },
  {
    question: '¿Atienden a niños?',
    answer:
      'Sí, somos una clínica para toda la familia. Recomendamos la primera visita cuando salen los primeros dientes.',
  },
  {
    question: '¿Qué hago si tengo una urgencia?',
    answer:
      'Escríbenos por WhatsApp al 941 972 676 contando lo que pasa. Te indicamos qué hacer y te buscamos el primer espacio disponible.',
  },
  {
    question: '¿Dónde quedan exactamente?',
    answer:
      'En Av. Pachacútec 2818, segundo piso, en Villa María del Triunfo. En la sección Ubícanos tienes el mapa.',
  },
]
