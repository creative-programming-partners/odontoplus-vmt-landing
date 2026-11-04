# OdontoPlus VMT · Landing page

Prototipo de landing page para **OdontoPlus VMT**, clínica dental en Av. Pachacútec 2818, 2.º piso, Villa María del Triunfo (Lima). Diseñado por **Creative Programming Partners** para presentar al cliente.

La página está pensada como la **ficha odontológica** de la clínica: el visitante elige lo que siente, lo ve marcado en el diente (rojo = por tratar, azul = tratado), lee qué tratamiento lo resuelve y reserva por WhatsApp con el mensaje ya escrito.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (tokens en `src/styles/globals.css`)
- Motion (animaciones) y lucide-react (iconos)
- Tipografías autoalojadas: Archivo (ancho variable) y Martian Mono

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
├─ sections/            Una sección de la página por archivo (Header, Hero, Treatments, Cases, ...)
├─ components/
│  ├─ brand/            Logo y logomark (rebranding)
│  ├─ odontogram/       Odontograma interactivo, diente, ficha de casos
│  └─ booking/          Formulario de reserva, vista previa de WhatsApp, barra móvil
├─ shared/
│  ├─ ui/               Button, Container, Reveal, SectionHeading, SourceTag, iconos
│  ├─ hooks/            useScrolled
│  └─ lib/              whatsapp.ts (arma los mensajes), cn.ts
├─ data/                Todo el contenido: clínica, tratamientos, casos, equipo, FAQ, dientes
└─ styles/              globals.css con los tokens de diseño
```

Todo el texto vive en `src/data/`. Para adaptar el prototipo a otra clínica basta con editar esos archivos.

## Contenido real vs. de ejemplo

Cada dato lleva su origen (`source`) y la página lo muestra con una etiqueta:

| Real (redes de la clínica) | De ejemplo (reemplazar) |
| --- | --- |
| Nombre, dirección, teléfono/WhatsApp, correo | Nombres del equipo y especialidades |
| Instagram @odontoplus_vmt y Facebook /odontoplusvmt | Testimonios |
| 100 % de recomendación en Facebook (7 opiniones) | Horario de atención |
| Tratamientos y casos publicados en Instagram | Limpieza y odontología para niños |

**Pendiente del cliente:** fotos del equipo y del local, número de colegiatura (COP), horario real, testimonios reales y precios o promociones.
