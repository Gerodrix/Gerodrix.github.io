import type { Localized, Project, ProjectCategory } from './types'

export const categoryLabels: Record<ProjectCategory | 'all', Localized> = {
  all: { es: 'Todos', en: 'All' },
  'web-development': { es: 'Desarrollo web', en: 'Web development' },
  'game-development': { es: 'Videojuegos', en: 'Game development' },
  automation: { es: 'Automatización', en: 'Automation' }, tools: { es: 'Herramientas', en: 'Tools' }, other: { es: 'Otros', en: 'Other' },
}

export const projects: Project[] = [
  {
    id: 'contit-group', slug: 'contit-group', title: 'ContIT Group', category: 'automation', year: '2026', featured: true,
    status: { es: 'En producción', en: 'In production' }, image: '/projects/contit-group/cover.webp', demo: 'https://contitgroup.com.ar',
    shortDescription: { es: 'Landing activa y automatizaciones para una consultora tecnológica.', en: 'Active landing page and automation workflows for a technology consultancy.' },
    description: { es: 'Trabajo dentro del equipo técnico de ContIT Group, combinando la construcción de su landing page con workflows de automatización e integración de modelos de IA.', en: 'Work within ContIT Group’s technical team, combining its landing page with automation workflows and AI-model integrations.' },
    role: { es: 'Desarrollo y mantenimiento de la landing; diseño e implementación de automatizaciones.', en: 'Landing-page development and maintenance; automation design and implementation.' },
    objective: { es: 'Resolver tareas repetitivas del equipo mediante procesos automatizados.', en: 'Reduce repeated team tasks through automated processes.' },
    solution: { es: 'Pipelines con n8n, webhooks e integración de OpenAI y Gemini para ejecutar procesos que antes requerían intervención diaria.', en: 'n8n pipelines, webhooks, and OpenAI/Gemini integrations to run processes that previously needed daily intervention.' },
    technologies: ['React', 'n8n', 'OpenAI API', 'Google Gemini', 'Webhooks'],
  },
  {
    id: 'ogam', slug: 'ogam', title: 'Ogam', category: 'game-development', year: '2026', featured: true,
    status: { es: 'Publicado', en: 'Published' }, image: '/projects/ogam/cover.webp', demo: 'https://alejoyder.itch.io/ogam',
    shortDescription: { es: 'Juego colaborativo desarrollado para una game jam universitaria.', en: 'Collaborative game created for a university game jam.' },
    description: { es: 'Juego desarrollado con participantes de distintas provincias para la game jam introductoria del Club de Videojuegos de la Universidad de Mendoza.', en: 'Game developed with participants from different provinces for the introductory game jam of the Universidad de Mendoza Video Game Club.' },
    role: { es: 'Diseño de mecánicas, gameplay loop y build final.', en: 'Mechanics design, gameplay loop, and final build.' },
    objective: { es: 'Desarrollar una experiencia jugable y cohesionada en un plazo acotado.', en: 'Create a cohesive, playable experience within a limited timeframe.' },
    technologies: ['Unity', 'C#', 'Game Design', 'Game Jam'],
  },
  {
    id: 'game-work-jam-cdd-2026', slug: 'game-work-jam-cdd-2026', title: 'Game Work Jam CDD 2026', category: 'game-development', year: '2026', featured: true,
    status: { es: 'En curso', en: 'In progress' },
    shortDescription: { es: 'Desarrollo colaborativo remoto entre Argentina y México.', en: 'Remote collaborative development across Argentina and Mexico.' },
    description: { es: 'Participación en una jam internacional con participantes de distintos países, orientada al trabajo ágil bajo restricciones de tiempo y coordinación entre husos horarios.', en: 'Participation in an international jam with contributors from different countries, focused on agile work under time constraints and time-zone coordination.' },
    role: { es: 'Desarrollo colaborativo en equipo remoto.', en: 'Collaborative remote-team development.' },
    technologies: ['Game Design', 'Trabajo en equipo', 'Colaboración remota'],
  },
]
