import { Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { AppointmentCard } from '../components/booking/AppointmentCard'
import { Logo, Logomark } from '../components/brand/Logo'
import { photos } from '../shared/lib/photos'
import { Button } from '../shared/ui/Button'
import { PhotoNote } from '../shared/ui/PhotoNote'
import { SourceTag } from '../shared/ui/SourceTag'
import { WhatsappIcon } from '../shared/ui/icons'

const colors = [
  { name: 'Blanco', hex: '#FFFFFF', role: 'Fondo principal' },
  { name: 'Bruma', hex: '#F1F6FA', role: 'Secciones alternas' },
  { name: 'Azul OdontoPlus', hex: '#13264F', role: 'Texto, logo y franjas' },
  { name: 'Celeste', hex: '#1E9BD7', role: 'Único acento' },
  { name: 'Celeste suave', hex: '#DFF1FA', role: 'Fondos de iconos' },
  { name: 'WhatsApp', hex: '#1C8F4E', role: 'Solo para reservar' },
]

/** Brand sheet for the client presentation. Served at /brand.html. */
export function BrandSheet() {
  return (
    <main className="mx-auto w-[1440px] bg-white px-20 py-20 text-ink">
      <header className="flex items-end justify-between border-b border-line pb-10">
        <div>
          <p className="text-sm font-bold text-ink-3">Creative Programming Partners · Propuesta de marca</p>
          <h1 className="mt-3 text-[4.5rem] font-[800]">OdontoPlus VMT</h1>
          <p className="mt-3 max-w-[58ch] text-xl text-ink-2">
            Clara, cercana y confiable. Que cualquier vecino de Villa María del Triunfo entienda en segundos qué hacemos y
            cómo reservar.
          </p>
        </div>
        <Logomark className="size-32" />
      </header>

      <Block title="Logo">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-6">
          <Tile className="bg-mist">
            <Logo size="lg" />
          </Tile>
          <Tile className="bg-navy">
            <Logo size="lg" tone="white" />
          </Tile>
          <Tile className="bg-white">
            <div className="flex items-end gap-6">
              <Logomark className="size-24" />
              <Logomark className="size-14" />
              <Logomark className="size-9" />
            </div>
          </Tile>
        </div>
        <p className="mt-5 max-w-[80ch] text-lg text-ink-2">
          Conserva la idea del logo original (un diente con un “+”), con trazos más simples para que se lea igual en un
          letrero, en Instagram o como ícono de 16 px.
        </p>
      </Block>

      <Block title="Color">
        <div className="grid grid-cols-6 gap-4">
          {colors.map((c) => (
            <div key={c.hex} className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
              <div className="h-36 border-b border-line" style={{ background: c.hex }} />
              <div className="p-4">
                <p className="font-bold">{c.name}</p>
                <p className="tabular text-sm text-ink-3">{c.hex}</p>
                <p className="mt-2 text-sm text-ink-2">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Tipografía · Figtree">
        <div className="grid gap-6">
          <Spec label="Títulos · 800">
            <p className="text-[4rem] leading-none font-[800] tracking-[-0.035em]">
              Tu dentista <span className="text-celeste">de confianza</span>
            </p>
          </Spec>
          <Spec label="Subtítulos · 800">
            <p className="text-[2.25rem] font-[800]">¿Qué necesitas tratarte?</p>
          </Spec>
          <Spec label="Texto · 400 · 17 px">
            <p className="max-w-[60ch] text-[1.0625rem] text-ink-2">
              Endodoncias, resinas, coronas y limpiezas para toda la familia. Estamos en Av. Pachacútec 2818, 2.º piso.
            </p>
          </Spec>
        </div>
      </Block>

      <Block title="Componentes">
        <div className="grid grid-cols-[1fr_1.1fr] gap-10">
          <div className="grid content-start gap-8">
            <div>
              <p className="mb-3 text-sm font-bold text-ink-3">Botones</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="whatsapp" size="lg">
                  <WhatsappIcon className="size-5" /> Reservar por WhatsApp
                </Button>
                <Button size="lg">Cómo llegar</Button>
                <Button variant="outline" size="lg">
                  <Phone className="size-5" /> Llamar
                </Button>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold text-ink-3">Origen del contenido</p>
              <div className="flex flex-wrap gap-2">
                <SourceTag source="instagram" />
                <SourceTag source="facebook" />
                <SourceTag source="ejemplo" />
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold text-ink-3">Foto de stock (hasta tener las de la clínica)</p>
              <div className="relative aspect-[4/3] w-72 overflow-hidden rounded-[var(--radius-photo)] bg-mist-2">
                <img src={photos.consultorio.src} alt={photos.consultorio.alt} className="absolute inset-0 size-full object-cover" />
                <PhotoNote />
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold text-ink-3">Tarjeta de citas (reserva en la portada)</p>
            <AppointmentCard />
          </div>
        </div>
      </Block>
    </main>
  )
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-[2rem] font-[800]">{title}</h2>
      {children}
    </section>
  )
}

function Tile({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex min-h-48 items-center justify-center rounded-[var(--radius-card)] border border-line p-8 ${className ?? ''}`}>
      {children}
    </div>
  )
}

function Spec({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="mb-3 text-sm font-bold text-ink-3">{label}</p>
      {children}
    </div>
  )
}
