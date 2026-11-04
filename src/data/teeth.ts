/**
 * FDI tooth numbering used on every Peruvian dental chart.
 * Quadrants: 1 upper right, 2 upper left, 3 lower left, 4 lower right
 * (from the patient's point of view; the chart is read facing the patient).
 */
export type ToothKind = 'incisor' | 'canine' | 'premolar' | 'molar'

export const upperRight = [18, 17, 16, 15, 14, 13, 12, 11]
export const upperLeft = [21, 22, 23, 24, 25, 26, 27, 28]
export const lowerRight = [48, 47, 46, 45, 44, 43, 42, 41]
export const lowerLeft = [31, 32, 33, 34, 35, 36, 37, 38]

const positionNames: Record<number, string> = {
  1: 'Incisivo central',
  2: 'Incisivo lateral',
  3: 'Canino',
  4: 'Primer premolar',
  5: 'Segundo premolar',
  6: 'Primer molar',
  7: 'Segundo molar',
  8: 'Tercer molar (muela del juicio)',
}

const quadrantNames: Record<number, string> = {
  1: 'superior derecho',
  2: 'superior izquierdo',
  3: 'inferior izquierdo',
  4: 'inferior derecho',
}

export const toothKind = (fdi: number): ToothKind => {
  const p = fdi % 10
  if (p <= 2) return 'incisor'
  if (p === 3) return 'canine'
  if (p <= 5) return 'premolar'
  return 'molar'
}

export const isUpper = (fdi: number) => Math.floor(fdi / 10) <= 2

export const toothName = (fdi: number) =>
  `${positionNames[fdi % 10]} ${quadrantNames[Math.floor(fdi / 10)]}`

/** What usually goes wrong in each kind of tooth, and which treatment fixes it. */
export const toothGuide: Record<ToothKind, { problems: string; treatments: string[] }> = {
  incisor: {
    problems: 'Resinas antiguas manchadas, golpes y bordes rotos.',
    treatments: ['resinas', 'coronas'],
  },
  canine: {
    problems: 'Desgaste, sensibilidad en el cuello del diente y fracturas.',
    treatments: ['resinas', 'limpieza'],
  },
  premolar: {
    problems: 'Caries entre dientes y restauraciones que se filtran.',
    treatments: ['resinas', 'endodoncia'],
  },
  molar: {
    problems: 'Caries profundas, dolor al masticar y endodoncias que fallaron.',
    treatments: ['endodoncia', 'coronas', 'rehabilitacion'],
  },
}

/** "What do you feel?" chips that drive the hero chart. */
export const symptoms = [
  { id: 'dolor', label: 'Me duele una muela', teeth: [36], treatment: 'endodoncia' },
  { id: 'resina', label: 'Tengo resinas viejas', teeth: [11, 21], treatment: 'resinas' },
  { id: 'roto', label: 'Se me rompió un diente', teeth: [26], treatment: 'coronas' },
  { id: 'varias', label: 'Varias piezas dañadas', teeth: [14, 15, 46, 47], treatment: 'rehabilitacion' },
  { id: 'encias', label: 'Me sangran las encías', teeth: [], treatment: 'limpieza' },
] as const
