# OdontoPlus VMT · Landing page

Prototipo de landing page para **OdontoPlus VMT**, clínica dental en Av. Pachacútec 2818, 2.º piso, Villa María del Triunfo (Lima). Diseñado por **Creative Programming Partners** para presentar al cliente.

**Ver en vivo:** https://creative-programming-partners.github.io/odontoplus-vmt-landing/ · Hoja de marca: https://creative-programming-partners.github.io/odontoplus-vmt-landing/brand.html

Cada push a `main` vuelve a publicar el sitio en GitHub Pages (`.github/workflows/deploy-pages.yml`).

## La idea: reserva a la vista

Quien entra entiende en segundos qué es (una clínica dental en VMT), dónde queda y cómo reservar. En la portada está la **tarjeta de citas** de la clínica: el visitante elige qué necesita, el día y el turno; el talón muestra el resumen y el botón abre WhatsApp con ese mensaje ya escrito. Nada es obligatorio.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (tokens en `src/styles/globals.css`)
- Motion (animaciones) y lucide-react (iconos)
- Tipografía autoalojada: Figtree

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # compila a dist/
```

## Estructura

```
src/
├─ app/                 App.tsx: orden de las secciones
├─ sections/            Una sección por archivo (Header, Hero, TrustStrip, Treatments, Cases, ...)
├─ components/
│  ├─ brand/            Logo y logomark
│  └─ booking/          Tarjeta de citas y botón flotante de WhatsApp
├─ shared/
│  ├─ ui/               Button, Container, Reveal, SectionHeading, SourceTag, iconos
│  ├─ hooks/            useScrolled
│  └─ lib/              whatsapp.ts (arma los mensajes), photos.ts (fotos), cn.ts
├─ assets/photos/       Fotos (Unsplash, referenciales)
├─ brand/               Hoja del sistema de marca (/brand.html)
├─ data/                Todo el contenido: clínica, tratamientos, casos, equipo, FAQ
└─ styles/              globals.css con los tokens de diseño
```

Todo el texto vive en `src/data/`. Para cambiar las fotos basta con reemplazar los archivos de `src/assets/photos/` manteniendo sus nombres.

## Contenido real vs. de ejemplo

Cada dato lleva su origen (`source`) y la página lo muestra con una etiqueta:

| Real (redes de la clínica) | De ejemplo o referencial (reemplazar) |
| --- | --- |
| Nombre, dirección, teléfono/WhatsApp, correo | Fotos (Unsplash, licencia libre; el origen va dentro de cada archivo) |
| Instagram @odontoplus_vmt y Facebook /odontoplusvmt | Nombres del equipo y especialidades |
| 100 % de recomendación en Facebook (7 opiniones) | Testimonios y horario de atención |
| Tratamientos y casos publicados en Instagram | Limpieza y odontología para niños |

**Pendiente del cliente:** fotos del local y del equipo, número de colegiatura (COP), horario real, testimonios reales y precios o promociones.
