import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Logo, Logomark } from '../components/brand/Logo'
import { ToothGlyph } from '../components/odontogram/ToothGlyph'
import { Button } from '../shared/ui/Button'
import { SourceTag } from '../shared/ui/SourceTag'
import { WhatsappIcon } from '../shared/ui/icons'

const colors = [
  { name: 'Papel de ficha', hex: '#F4F6F3', role: 'Fondo principal', dark: false },
  { name: 'Papel 2', hex: '#E9EDE8', role: 'Bandas alternas', dark: false },
  { name: 'Tinta', hex: '#14254F', role: 'Texto, botones, logo', dark: true },
  { name: 'Noche', hex: '#0F1C3D', role: 'Secciones completas', dark: true },
  { name: 'Rojo notación', hex: '#D7263D', role: 'Solo: por tratar', dark: true },
  { name: 'Azul notación', hex: '#1F5FD1', role: 'Solo: tratado', dark: true },
  { name: 'WhatsApp', hex: '#1C8F4E', role: 'Acción de reserva', dark: true },
]

/** Brand sheet for the client presentation and the Figma handoff. Served at /brand.html. */
export function BrandSheet() {
  return (
    <main className="mx-auto w-[1440px] bg-paper px-20 py-20 text-ink">
      <header className="flex items-end justify-between border-b-2 border-ink pb-8">
        <div>
          <p className="font-mono text-xs tracking-wider text-ink-3 uppercase">Creative Programming Partners · Propuesta de marca</p>
          <h1 className="mt-4 text-[4.5rem] font-[800]">OdontoPlus VMT</h1>
          <p className="mt-3 max-w-[60ch] text-lg text-ink-2">
            Sistema visual basado en la ficha odontológica: cada tratamiento se marca sobre el diente que resuelve.
            Rojo para lo que está por tratar, azul para lo tratado.
          </p>
        </div>
        <Logomark className="size-28" />
      </header>

      <Block title="Logo">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-6">
          <Tile className="bg-paper-2">
            <Logo size="lg" />
          </Tile>
          <Tile className="bg-night">
            <Logo size="lg" tone="paper" />
          </Tile>
          <Tile className="bg-white">
            <div className="flex items-end gap-6">
              <Logomark className="size-24" />
              <Logomark className="size-14" />
              <Logomark className="size-9" />
            </div>
          </Tile>
        </div>
        <p className="mt-5 max-w-[80ch] text-ink-2">
          El símbolo es el cuadrado de cinco superficies con el que los dentistas dibujan cada diente en el odontograma. Su
          superficie central se convierte en el “plus” del nombre. Funciona desde 16 px (favicon) y en una sola tinta.
        </p>
      </Block>

      <Block title="Color">
        <div className="grid grid-cols-7 gap-4">
          {colors.map((c) => (
            <div key={c.hex} className="overflow-hidden rounded-[12px] border border-ink/15 bg-white">
              <div className="h-36" style={{ background: c.hex }} />
              <div className="p-4">
                <p className="font-semibold">{c.name}</p>
                <p className="tabular font-mono text-xs text-ink-3">{c.hex}</p>
                <p className="mt-2 text-sm text-ink-2">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-[80ch] text-ink-2">
          El rojo y el azul de notación solo se usan para marcas clínicas (dientes, leyenda, antes/después). Nunca como
          decoración, así conservan su significado.
        </p>
      </Block>

      <Block title="Tipografía">
        <div className="grid grid-cols-[1.5fr_1fr] gap-10">
          <div className="grid gap-6">
            <Spec label="Archivo · 800 · ancho 112 · títulos">
              <p className="text-[4rem] leading-none font-[800] tracking-[-0.035em] [font-variation-settings:'wdth'_112]">
                Diente por diente.
              </p>
            </Spec>
            <Spec label="Archivo · 750 · ancho 112 · subtítulos">
              <p className="text-[2.25rem] font-[750] [font-variation-settings:'wdth'_112]">Lo que resolvemos en la clínica</p>
            </Spec>
            <Spec label="Archivo · 400 · cuerpo 17 px">
              <p className="max-w-[56ch] text-[1.0625rem] text-ink-2">
                Clínica dental para toda la familia en Villa María del Triunfo. Te mostramos qué tiene cada pieza, cómo se
                trata y por dónde empezar.
              </p>
            </Spec>
          </div>
          <div className="grid content-start gap-6">
            <Spec label="Martian Mono · números de pieza (FDI)">
              <p className="tabular font-mono text-2xl font-semibold">18 17 16 · 36 37 38</p>
            </Spec>
            <Spec label="Martian Mono · etiquetas de campo">
              <p className="font-mono text-sm tracking-wider text-ink-3 uppercase">Día que prefieres</p>
            </Spec>
          </div>
        </div>
      </Block>

      <Block title="Notación del odontograma">
        <div className="grid grid-cols-4 gap-6">
          {[
            { label: 'Sin marcar', mark: undefined, selected: false },
            { label: 'Por tratar', mark: 'red' as const, selected: false },
            { label: 'Tratado', mark: 'blue' as const, selected: false },
            { label: 'Pieza seleccionada', mark: 'red' as const, selected: true },
          ].map((s) => (
            <Tile key={s.label} className="chart-grid flex-col gap-4 bg-white">
              <div className="flex gap-3">
                <ToothGlyph fdi={16} mark={s.mark} selected={s.selected} className="w-14 overflow-visible" />
                <ToothGlyph fdi={11} mark={s.mark} className="w-14" />
                <ToothGlyph fdi={36} mark={s.mark} className="w-14" />
              </div>
              <p className="font-semibold">{s.label}</p>
            </Tile>
          ))}
        </div>
      </Block>

      <Block title="Componentes">
        <div className="grid grid-cols-2 gap-6">
          <Tile className="flex-col items-start gap-5 bg-white">
            <p className="font-mono text-xs tracking-wider text-ink-3 uppercase">Botones</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="whatsapp" size="lg">
                <WhatsappIcon className="size-5" /> Reservar por WhatsApp
              </Button>
              <Button>Reservar cita</Button>
              <Button variant="outline">
                Ver tratado <ArrowRight className="size-4" />
              </Button>
            </div>
            <p className="font-mono text-xs tracking-wider text-ink-3 uppercase">Chips de síntoma</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-ink bg-ink px-3 py-2 text-sm font-medium text-paper">Me duele una muela</span>
              <span className="rounded-full border border-ink/20 px-3 py-2 text-sm font-medium text-ink-2">Tengo resinas viejas</span>
            </div>
            <p className="font-mono text-xs tracking-wider text-ink-3 uppercase">Origen del contenido</p>
            <div className="flex flex-wrap gap-2">
              <SourceTag source="instagram" />
              <SourceTag source="facebook" />
              <SourceTag source="ejemplo" />
            </div>
          </Tile>
          <Tile className="flex-col items-stretch gap-6 bg-night text-white">
            <p className="font-mono text-xs tracking-wider text-white/60 uppercase">Campo de formulario (ficha impresa)</p>
            <div>
              <p className="mb-1 font-mono text-[0.68rem] tracking-wider text-white/60 uppercase">Tu nombre</p>
              <p className="border-b-2 border-white/30 pb-2 text-lg text-white/40">Nombre y apellido</p>
            </div>
            <div>
              <p className="mb-1 font-mono text-[0.68rem] tracking-wider text-white/60 uppercase">Tu nombre</p>
              <p className="border-b-2 border-[#ff8a98] pb-2 text-lg">A</p>
              <p className="mt-2 text-sm text-[#ffb3bd]">Escribe tu nombre para que sepamos a quién confirmar la cita.</p>
            </div>
            <div className="ml-auto w-fit rounded-[14px] rounded-br-[4px] bg-[#1c5c3d] px-4 py-3 text-sm">
              Hola OdontoPlus VMT, quiero reservar una cita.
            </div>
          </Tile>
        </div>
      </Block>
    </main>
  )
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-[2rem] font-[750]">{title}</h2>
      {children}
    </section>
  )
}

function Tile({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex min-h-48 items-center justify-center rounded-[14px] border border-ink/15 p-8 ${className ?? ''}`}>
      {children}
    </div>
  )
}

function Spec({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-ink/15 pt-4">
      <p className="mb-3 font-mono text-xs tracking-wider text-ink-3 uppercase">{label}</p>
      {children}
    </div>
  )
}
