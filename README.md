# Geronimo Odriozola — Portfolio

Portfolio personal de Game Developer Jr. construido con React (CDN) + Garden OS design system.

🌐 **Live:** https://Gerodrix.github.io

## Stack técnico del portfolio

- React 18 via CDN (sin bundler, un solo `index.html`)
- Babel standalone para JSX en browser
- Garden OS CSS design system (paleta cozy parchment/musgo)
- Sin dependencias de npm

## Features

- 🎨 Hero con carousel de proyectos (swipe/drag/teclado/thumbnails)
- 🪟 Widgets OS draggables en el hero (status.board / core.tools / project.map)
- 🌱 Easter egg al colocar los 3 widgets en sus zonas
- 🌙 Toggle dark/light mode
- 🌐 Trilingüe: ES / EN / PT
- 📄 Descarga de CV en 3 idiomas
- 🔍 Scroll reveal en secciones
- 📱 Responsive (mobile first)

## Proyectos incluidos

1. **Dungeon Crawler 2D** — Unity · C# · Procedural BSP
2. **Plataformero 3D** — Godot 4 · GDScript · Blender
3. **Gym Management Sim** — Unity · UI Toolkit · Game Jam
4. **Casa y Ritmo** — Unity · Isométrico · Cozy (en desarrollo)
5. **OGAM** — Godot · Pixel Art · Game Jam colaboración

## Cómo subir cambios

```bash
# En GitHub Desktop:
# 1. Editar index.html
# 2. Commit con mensaje descriptivo
# 3. Push to origin main
# GitHub Pages publica automáticamente en ~1 minuto
```

## Cómo agregar screenshots a los sliders

En `index.html`, buscar el proyecto en `const PROJECTS` y agregar `img:` al slide:

```js
slides:[
  { img: "./screenshots/dungeon-01.png", label: "Gameplay" },
  { icon:"🗡️", color:"#2a3a22", label:"Placeholder" },
]
```

Subir las imágenes a una carpeta `screenshots/` en el repo.

---

*Geronimo Odriozola · Buenos Aires · 2025*
