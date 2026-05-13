# Plan: Sitio web Fundación Tabare

## Objetivo
Construir un sitio corporativo moderno, empático y profesional para la Fundación Tabare (salud mental), con paleta amarillo + grises claros, tono cercano y diseño "mobile first".

## Arquitectura de rutas (TanStack Start)
Cada sección importante como ruta propia (mejor SEO/SSR), más anclas internas en la home:

```
src/routes/
  __root.tsx          → layout con Navbar sticky + Footer + WhatsApp flotante
  index.tsx           → Home (todas las secciones obligatorias en una scroll)
  nosotros.tsx        → Propuesta de valor extendida + equipo
  servicios.tsx       → Planes con enfoque social
  blog.tsx            → Feed preliminar de artículos
  contacto.tsx        → Formulario dedicado + datos de contacto
```

La Home incluirá las secciones obligatorias del brief (Hero, Propuesta, Galería, Testimonios, Planes, Blog preview, FAQ) con anclas. Las páginas dedicadas amplían contenido para SEO.

## Componentes a crear (`src/components/`)
- `layout/Navbar.tsx` — sticky, logo placeholder, links a secciones, CTA amarillo
- `layout/Footer.tsx` — contacto, redes (LinkedIn, Instagram), legales
- `layout/WhatsAppFloat.tsx` — botón flotante que despliega los dos números
- `home/Hero.tsx` — eslogan "Abrazamos tu historia para fortalecer la esperanza" + CTA "Estamos aquí para escucharte"
- `home/ValueProps.tsx` — 5 cards (psicológico, social, legal, terapéutico, educativo)
- `home/Gallery.tsx` — grid responsivo de imágenes comunitarias
- `home/Testimonials.tsx` — Carousel de Shadcn con citas
- `home/Plans.tsx` — Cards con planes ("Aporte Social", "Compromiso Sostenible", "Acompañamiento Integral")
- `home/BlogPreview.tsx` — 3 artículos destacados
- `home/FAQ.tsx` — Accordion de Shadcn
- `home/ContactForm.tsx` — formulario con validación Zod (nombre, email, mensaje)

## Sistema de diseño (`src/styles.css`)
Tokens semánticos en `oklch`:
- `--primary`: amarillo cálido (≈ oklch(0.85 0.16 90))
- `--primary-foreground`: gris muy oscuro para contraste
- `--accent`: amarillo más suave para fondos
- `--background`: blanco / gris muy claro
- `--muted`: gris claro neutro
- Tipografía: Inter (Google Fonts) vía link en `__root.tsx`
- Generosos espacios en blanco, radios suaves (`--radius: 0.875rem`)

Todos los componentes usan tokens (`bg-primary`, `text-foreground`, etc.) — sin colores hardcoded.

## Reglas de copy (críticas)
- Nunca usar "Gratis" o "Gratuidad". Usar: "Accesible", "Aporte Social", "Compromiso con tu proceso", "Sostenible".
- Tono: cercano, humano, profesional. Usuario como "agente activo de su cambio".
- Textos basados en: "Creemos en una salud mental sin exclusiones... nos adaptamos a la realidad económica de cada persona".

## Contacto y datos
- Email: fundaciontabare@gmail.com
- Teléfonos: +56 9 9844 2356, +5 96 5732 2464
- Redes: LinkedIn, Instagram
- WhatsApp flotante con menú desplegable de los 2 números (links `https://wa.me/...`)

## Formulario de contacto
Validación cliente con Zod (nombre 1-100, email válido, mensaje 10-1000). En esta primera versión: estado local + toast de confirmación (sonner). Sin backend — se puede conectar Lovable Cloud después si el usuario lo pide.

## SEO (per-route `head()`)
Cada ruta define `title`, `description`, `og:title`, `og:description`. Keywords: "apoyo psicológico multidisciplinario", "ayuda en crisis emocional", "prevención y bienestar". HTML semántico (`<main>`, `<section>`, `<article>`, un solo `<h1>` por página). JSON-LD `Organization` en `__root.tsx`.

## Imágenes
Generar imágenes cálidas para Hero y galería con `imagegen` (manos, comunidad, naturaleza, luz natural — sin estética clínica fría). Guardar en `src/assets/`.

## Detalles técnicos
- Stack: TanStack Start + React 19 + Tailwind v4 + Shadcn (Card, Accordion, Button, Carousel, Form, Input, Textarea, Sonner)
- Lucide icons para iconografía
- Responsive mobile-first con breakpoints `sm/md/lg`
- Sin backend en esta iteración (Cloud opcional más adelante para guardar leads del formulario)

## Fuera de alcance (para iteraciones siguientes)
- Persistencia del formulario en Lovable Cloud
- CMS real para blog
- Multilenguaje
