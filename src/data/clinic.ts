import type { Source } from './types'

export const clinic = {
  name: 'OdontoPlus',
  suffix: 'VMT',
  tagline: 'Odontología para toda la familia',
  district: 'Villa María del Triunfo',
  city: 'Lima',
  address: 'Av. Pachacútec 2818, 2.º piso',
  reference: 'Villa María del Triunfo, Lima',
  phoneDisplay: '941 972 676',
  whatsapp: '51941972676',
  email: 'odontoplusvmt@gmail.com',
  instagram: { handle: '@odontoplus_vmt', url: 'https://www.instagram.com/odontoplus_vmt/' },
  facebook: { handle: '/odontoplusvmt', url: 'https://www.facebook.com/odontoplusvmt/' },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Pachacutec+2818+Villa+Maria+del+Triunfo+Lima',
  mapsEmbed:
    'https://www.google.com/maps?q=Av.+Pachacutec+2818,+Villa+Maria+del+Triunfo,+Lima&output=embed',
  rating: {
    label: 'Recomendado por el 100 % en Facebook',
    detail: '7 opiniones',
    source: 'facebook' as Source,
  },
  hours: {
    source: 'ejemplo' as Source,
    rows: [
      { days: 'Lunes a viernes', time: '9:00 – 20:00' },
      { days: 'Sábados', time: '9:00 – 18:00' },
      { days: 'Domingos', time: 'Solo urgencias con cita' },
    ],
  },
} as const

export const navLinks = [
  { href: '#tratamientos', label: 'Tratamientos' },
  { href: '#casos', label: 'Casos' },
  { href: '#como-es', label: 'Tu primera cita' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#preguntas', label: 'Preguntas' },
  { href: '#ubicacion', label: 'Ubícanos' },
] as const
