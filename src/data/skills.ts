import type { Skill } from './types'
export const skillGroups = [
  { id: 'development', label: { es: 'Desarrollo', en: 'Development' }, skills: ['JavaScript', 'C#', 'Python', 'HTML5', 'CSS3', 'React', 'Node.js', 'REST APIs', 'Webhooks'] },
  { id: 'game', label: { es: 'Videojuegos', en: 'Game development' }, skills: ['Unity', 'Godot 4', 'GDScript', 'Mecánicas 2D/3D', 'Game Design'] },
  { id: 'automation', label: { es: 'Automatización & IA', en: 'Automation & AI' }, skills: ['n8n', 'OpenAI API', 'Claude API', 'Google Gemini', 'LangChain', 'Prompt Engineering'] },
  { id: 'quality', label: { es: 'Calidad, diseño & herramientas', en: 'Quality, design & tools' }, skills: ['Testing manual', 'Casos de prueba', 'Bug reporting', 'Jira', 'Blender', 'Krita', 'Figma', 'Git', 'GitHub', 'Trello', 'Notion'] },
] as const
export const skills: Skill[] = skillGroups.flatMap(group => group.skills.map(name => ({ name, category: group.id })))
