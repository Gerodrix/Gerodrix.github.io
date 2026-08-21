import type { Localized, Project, ProjectCategory } from './types'

export const categoryLabels: Record<ProjectCategory | 'all', Localized> = {
  all: { es: 'Todos', en: 'All' },
  'web-development': { es: 'Desarrollo web', en: 'Web development' },
  'game-development': { es: 'Videojuegos', en: 'Game development' },
  automation: { es: 'Automatización', en: 'Automation' }, 'qa-testing': { es: 'QA & Testing', en: 'QA & Testing' }, tools: { es: 'Herramientas', en: 'Tools' }, other: { es: 'Otros', en: 'Other' },
}

export const projects: Project[] = [
  {
    id: 'qa-ai-pipeline', slug: 'qa-ai-pipeline', title: 'QA AI Pipeline', category: 'qa-testing', year: '2026', featured: false,
    status: { es: 'Código público', en: 'Public code' }, github: 'https://github.com/Gerodrix/qa-ai-pipeline',
    shortDescription: { es: 'Pipeline de QA que combina IA, validación de selectores y automatización de pruebas.', en: 'QA pipeline combining AI, selector validation, and test automation.' },
    description: { es: 'Pipeline de automatización de QA que genera casos de prueba con un LLM, valida selectores antes de ejecutar y corre pruebas con Playwright.', en: 'QA automation pipeline that generates test cases with an LLM, validates selectors before execution, and runs tests with Playwright.' },
    role: { es: 'Desarrollo de un pipeline de automatización de QA con IA.', en: 'Development of an AI-powered QA automation pipeline.' },
    objective: { es: 'Combinar generación asistida por IA con validaciones previas a la ejecución para reducir errores en el flujo de pruebas.', en: 'Combine AI-assisted generation with pre-execution checks to reduce errors in the testing workflow.' },
    solution: { es: 'Node.js y TypeScript para el pipeline; Playwright para la ejecución; n8n y Slack para orquestar alertas.', en: 'Node.js and TypeScript for the pipeline; Playwright for execution; n8n and Slack to orchestrate alerts.' },
    technologies: ['TypeScript', 'Node.js', 'Playwright', 'LLM', 'n8n', 'Slack'],
  },
  {
    id: 'aura-nails-booking', slug: 'aura-nails-booking', title: 'Aura Nails Booking', category: 'web-development', year: '2026', featured: false,
    status: { es: 'En desarrollo', en: 'In development' },
    shortDescription: { es: 'MVP de reservas para una estética de uñas con agenda, señas y administración.', en: 'Booking MVP for a nail studio with scheduling, deposits, and administration.' },
    description: { es: 'MVP de una plataforma de reservas para una estética de uñas argentina. Centraliza la agenda por profesional, el flujo de reserva y la gestión inicial del negocio.', en: 'MVP of a booking platform for an Argentine nail studio. It centralizes staff scheduling, the booking flow, and the business’s initial management tools.' },
    role: { es: 'Desarrollo del MVP de reservas y de sus flujos operativos.', en: 'Development of the booking MVP and its operational flows.' },
    objective: { es: 'Crear una base operativa para que clientes y profesionales gestionen turnos, señas y disponibilidad.', en: 'Create an operational base for clients and staff to manage appointments, deposits, and availability.' },
    solution: { es: 'Next.js y TypeScript para la aplicación; PostgreSQL y Prisma para los datos; Mercado Pago Checkout Pro para señas y endpoints preparados para WhatsApp Business.', en: 'Next.js and TypeScript for the application; PostgreSQL and Prisma for data; Mercado Pago Checkout Pro for deposits and endpoints prepared for WhatsApp Business.' },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Mercado Pago'],
  },
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
