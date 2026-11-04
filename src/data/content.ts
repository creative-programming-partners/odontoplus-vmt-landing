import type { ClinicalCase, FaqItem, TeamMember, Testimonial } from './types'

/** Cases the clinic published on Instagram, titled the way their posts are. */
export const cases: ClinicalCase[] = [
  {
    id: 'retratamiento-molar',
    lead: 'Renovación y',
    big: 'Retratamiento',
    tail: 'de molar',
    summary: 'Una endodoncia antigua que fallaba, rehecha para salvar la muela.',
    source: 'instagram',
  },
  {
    id: 'rehabilitacion-postes',
    lead: 'Rehabilitación total con',
    big: 'Postes',
    tail: 'resinas y coronas',
    summary: 'Los dientes de adelante reconstruidos por etapas.',
    source: 'instagram',
  },
  {
    id: 'resinas-antiguas',
    lead: 'Renovación de',
    big: 'Resinas',
    tail: 'antiguas',
    summary: 'Resinas filtradas y manchadas cambiadas por unas del color del diente.',
    source: 'instagram',
  },
  {
    id: 'resina-anterior',
    lead: 'Restauración con',
    big: 'Resina',
    tail: 'en el sector anterior',
    summary: 'Dientes de adelante restaurados por capas para que no se note.',
    source: 'instagram',
  },
  {
    id: 'corona-metal-porcelana',
    lead: 'Rehabilitación con resinas y',
    big: 'Corona',
    tail: 'de metal y porcelana',
    summary: 'Una muela muy dañada recuperada con corona.',
    source: 'instagram',
  },
]

export const trustPoints = [
  { title: 'Para toda la familia', body: 'Niños, adultos y abuelos en un solo lugar.' },
  { title: 'Confianza y garantía', body: 'Te explicamos cada paso antes de empezar.' },
  { title: '100 % recomendado', body: 'Así nos califican en Facebook (7 opiniones).' },
  { title: 'Reserva por WhatsApp', body: 'Escríbenos y te confirmamos la hora en el chat.' },
]

export const firstVisit = [
  {
    title: 'Reservas por WhatsApp',
    body: 'Nos cuentas qué te molesta y eliges un día. Te confirmamos la hora en el mismo chat.',
  },
  {
    title: 'Te revisamos con calma',
    body: 'Revisamos toda tu boca, te mostramos lo que vemos y respondemos tus dudas.',
  },
  {
    title: 'Plan y presupuesto claros',
    body: 'Sabes qué tratamiento necesitas y cuánto cuesta antes de empezar. Tú decides.',
  },
  {
    title: 'Tratamiento y control',
    body: 'Hacemos el tratamiento y te citamos para un control. Cualquier duda, al mismo número.',
  },
]

/** Demo team. Replace with the clinic's real staff. */
export const team: TeamMember[] = [
  { name: 'Dra. Mariela Quispe', role: 'Cirujana dentista · Directora', focus: 'Rehabilitación oral y coronas', initials: 'MQ', source: 'ejemplo' },
  { name: 'Dr. Renzo Huamán', role: 'Cirujano dentista', focus: 'Endodoncia', initials: 'RH', source: 'ejemplo' },
  { name: 'Dra. Lucía Paredes', role: 'Cirujana dentista', focus: 'Odontopediatría', initials: 'LP', source: 'ejemplo' },
]

/** Demo testimonials. Replace with real reviews from Facebook or Google. */
export const testimonials: Testimonial[] = [
  {
    quote: 'Llegué con un dolor de muela que no me dejaba dormir. Me explicaron todo con calma y salí sin dolor el mismo día.',
    name: 'Rosa M.',
    treatment: 'Endodoncia',
    source: 'ejemplo',
  },
  {
    quote: 'Me cambiaron las resinas viejas de adelante y ya no me tapo la boca para reír. Quedaron del color de mis dientes.',
    name: 'Jorge C.',
    treatment: 'Resinas estéticas',
    source: 'ejemplo',
  },
  {
    quote: 'Llevo a mis dos hijos y les gusta ir. Para mí eso ya es bastante. Además queda cerca de la casa.',
    name: 'Milagros T.',
    treatment: 'Odontología para niños',
    source: 'ejemplo',
  },
]

export const faqs: FaqItem[] = [
  {
    question: '¿Cuánto cuesta la primera evaluación?',
    answer: 'Escríbenos por WhatsApp y te damos el precio actualizado de la evaluación y las promociones del mes.',
  },
  {
    question: '¿Duele una endodoncia?',
    answer:
      'Se trabaja con anestesia local, así que durante el tratamiento no deberías sentir dolor. Lo que duele es la infección: tratarla a tiempo es lo que quita el dolor.',
  },
  {
    question: '¿Atienden a niños?',
    answer: 'Sí, somos una clínica para toda la familia. Recomendamos la primera visita cuando salen los primeros dientes.',
  },
  {
    question: '¿Qué hago si tengo una urgencia?',
    answer: 'Escríbenos por WhatsApp al 941 972 676 contando lo que pasa. Te indicamos qué hacer y te buscamos el primer espacio libre.',
  },
  {
    question: '¿Dónde quedan exactamente?',
    answer: 'En Av. Pachacútec 2818, segundo piso, en Villa María del Triunfo. Más abajo tienes el mapa.',
  },
]
