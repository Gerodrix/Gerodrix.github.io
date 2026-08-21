# Gerónimo Odriozola — Portfolio

Portfolio estático construido con React, Vite y TypeScript. El diseño light toma un lenguaje editorial cálido, con foco en desarrollo web, automatización, IA y videojuegos.

## Desarrollo

```bash
npm install
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

## Formulario de contacto

El formulario está listo para Formspree. Copiá `.env.example` a `.env.local` y definí `VITE_FORMSPREE_ENDPOINT`. Sin esa variable, la UI muestra un aviso claro y mantiene el enlace directo al email.

## GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica `dist/` al hacer push a `main`. En el repositorio de GitHub, verificá que **Settings → Pages → Source** esté configurado como **GitHub Actions** la primera vez.
