import type { LucideIcon } from 'lucide-react'
import { Bot, Boxes, Braces, Bug, Code2, Cpu, Gamepad2, GitBranch, ListChecks, Palette, ShieldCheck, Wrench } from 'lucide-react'

const groupIcons: Record<string, LucideIcon> = { development: Braces, game: Gamepad2, automation: Bot, quality: ShieldCheck }
const skillIcons: Record<string, LucideIcon> = {
  JavaScript: Braces, 'C#': Code2, Python: Cpu, HTML5: Braces, CSS3: Braces, React: Boxes, 'Node.js': Boxes, 'REST APIs': Boxes, Webhooks: GitBranch,
  Unity: Gamepad2, 'Godot 4': Gamepad2, GDScript: Code2, 'Mecánicas 2D/3D': Gamepad2, 'Game Design': Gamepad2,
  n8n: Bot, 'OpenAI API': Bot, 'Claude API': Bot, 'Google Gemini': Bot, LangChain: Bot, 'Prompt Engineering': Bot,
  'Testing manual': ListChecks, 'Casos de prueba': ListChecks, 'Bug reporting': Bug, Jira: Bug, Blender: Palette, Krita: Palette, Figma: Palette, Git: GitBranch, GitHub: GitBranch, Trello: ListChecks, Notion: Wrench,
}

export function SkillIcon({ name, group = false }: { name: string; group?: boolean }) {
  const Icon = group ? groupIcons[name] ?? Wrench : skillIcons[name] ?? Wrench
  return <Icon aria-hidden="true" strokeWidth={1.7} />
}
