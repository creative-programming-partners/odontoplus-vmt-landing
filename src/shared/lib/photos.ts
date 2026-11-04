import type { PhotoKey } from '../../data/types'
import cepillado from '../../assets/photos/cepillado.webp'
import consultorio from '../../assets/photos/consultorio.webp'
import coronas from '../../assets/photos/coronas.webp'
import endodoncia from '../../assets/photos/endodoncia.webp'
import heroConsulta from '../../assets/photos/hero-consulta.webp'
import limpieza from '../../assets/photos/limpieza.webp'
import ninoRevision from '../../assets/photos/nino-revision.webp'
import pacienteEspejo from '../../assets/photos/paciente-espejo.webp'
import rehabilitacion from '../../assets/photos/rehabilitacion.webp'
import resinas from '../../assets/photos/resinas.webp'

/**
 * Stock photos from Unsplash (free licence), standing in for the clinic's own photos.
 * The origin of each file is embedded in its metadata. Replace the files, keep the keys.
 */
export const photos: Record<PhotoKey, { src: string; alt: string }> = {
  heroConsulta: { src: heroConsulta, alt: 'Dentista conversando con una paciente sentada en el sillón dental' },
  pacienteEspejo: { src: pacienteEspejo, alt: 'Paciente sonriendo mientras se mira en un espejo de mano en el consultorio' },
  ninoRevision: { src: ninoRevision, alt: 'Niño en el sillón dental junto a su dentista durante una revisión' },
  consultorio: { src: consultorio, alt: 'Consultorio dental luminoso con sillón y equipos' },
  endodoncia: { src: endodoncia, alt: 'Dentista atendiendo a un paciente que sonríe en el sillón' },
  resinas: { src: resinas, alt: 'Primer plano de una sonrisa con dientes parejos' },
  limpieza: { src: limpieza, alt: 'Revisión dental con espejo y explorador' },
  rehabilitacion: { src: rehabilitacion, alt: 'Dentista revisando radiografías dentales' },
  cepillado: { src: cepillado, alt: 'Dentista enseñando a una paciente cómo cepillarse' },
  coronas: { src: coronas, alt: 'Modelo dental con coronas y un implante' },
}
