# Gerónimo Odriozola — Portfolio

Portfolio estático construido con React, Vite y TypeScript. El diseño light toma un lenguaje editorial cálido, con foco en desarrollo web, automatización, IA y videojuegos.

## Desarrollo

```bash
npm ci
npm run dev
npm run build
```

## Contenido

El contenido se mantiene separado de la interfaz:

- `src/data/projects.ts`: proyectos, categorías, imágenes, links y detalle.
- `src/data/skills.ts`: habilidades por categoría.
- `src/data/experience.ts`: experiencia laboral.
- `src/data/education.ts`: formación.
- `src/data/i18n.ts`: textos en español e inglés.

Para agregar un proyecto, agregá sus imágenes en `public/projects/<slug>/` y un objeto a `projects.ts`. Las cards, filtros y ruta `/projects/:slug` se actualizan automáticamente.

## Publicación y estado del código

El portfolio público está en [Cloudflare Pages](https://geronimo-odriozola.pages.dev). GitHub Actions instala el lockfile, compila esta rama y conserva un artefacto; no publica el sitio. No debe activarse un despliegue a GitHub Pages para este repositorio.

Esta rama conserva una versión anterior del frontend. La copia local del portfolio tiene cambios posteriores pendientes de conciliar; el build de esta rama no acredita que corresponda al sitio actual. Esa conciliación debe revisarse en un cambio independiente antes de publicar.

Esta versión incluye un formulario con Formspree configurado en `src/data/contact.ts`. La estructura y el comportamiento de esta rama se documentan como código existente, sin atribuirlos a la versión actual de producción.

## Contribuir

Consultá [CONTRIBUTING.md](CONTRIBUTING.md) para el flujo de ramas, commits, dependencias y validación.
