import type { LucideIcon } from 'lucide-react'
import { Bot, Boxes, Braces, Bug, Code2, Gamepad2, GitBranch, ListChecks, ShieldCheck, Wrench } from 'lucide-react'
import type { IconType } from 'react-icons'
import { SiAnthropic, SiBlender, SiCss, SiFigma, SiGit, SiGithub, SiGodotengine, SiGooglegemini, SiHtml5, SiJavascript, SiJira, SiKrita, SiLangchain, SiN8N, SiNodedotjs, SiNotion, SiPython, SiReact, SiSharp, SiTrello, SiUnity } from 'react-icons/si'

const groupIcons: Record<string, LucideIcon> = { development: Braces, game: Gamepad2, automation: Bot, quality: ShieldCheck }
const fallbackIcons: Record<string, LucideIcon> = {
  'REST APIs': Boxes, Webhooks: GitBranch, GDScript: Code2, 'Mecánicas 2D/3D': Gamepad2, 'Game Design': Gamepad2,
  'OpenAI API': Bot, 'Prompt Engineering': Bot, 'Testing manual': ListChecks, 'Casos de prueba': ListChecks, 'Bug reporting': Bug,
}
const brandIcons: Record<string, IconType> = {
  JavaScript: SiJavascript, 'C#': SiSharp, Python: SiPython, HTML5: SiHtml5, CSS3: SiCss, React: SiReact, 'Node.js': SiNodedotjs,
  Unity: SiUnity, 'Godot 4': SiGodotengine, n8n: SiN8N, 'Claude API': SiAnthropic, 'Google Gemini': SiGooglegemini, LangChain: SiLangchain,
  Jira: SiJira, Blender: SiBlender, Krita: SiKrita, Figma: SiFigma, Git: SiGit, GitHub: SiGithub, Trello: SiTrello, Notion: SiNotion,
}
const brandColors: Record<string, string> = {
  JavaScript: '#f7df1e', 'C#': '#9b4fdb', Python: '#3776ab', HTML5: '#e34f26', CSS3: '#1572b6', React: '#61dafb', 'Node.js': '#5fa04e',
  Unity: '#9aa7b8', 'Godot 4': '#478cbf', n8n: '#ea4b71', 'OpenAI API': '#10a37f', 'Claude API': '#d97757', 'Google Gemini': '#4285f4', LangChain: '#1c3c3c',
  Jira: '#2684ff', Blender: '#f5792a', Krita: '#3babff', Figma: '#f24e1e', Git: '#f05032', GitHub: '#8b98a5', Trello: '#0c66e4', Notion: '#111111',
  'REST APIs': '#3b82f6', Webhooks: '#a855f7', GDScript: '#478cbf', 'Mecánicas 2D/3D': '#75a9d6', 'Game Design': '#d5843e', 'Prompt Engineering': '#c47a4a',
  'Testing manual': '#7a8f4f', 'Casos de prueba': '#556b2f', 'Bug reporting': '#be5a43',
}

export function SkillIcon({ name, group = false }: { name: string; group?: boolean }) {
  const BrandIcon = !group ? brandIcons[name] : undefined
  const FallbackIcon = group ? groupIcons[name] ?? Wrench : fallbackIcons[name] ?? Wrench
  const color = group ? undefined : brandColors[name] ?? '#7a8f4f'
  return <span className="skill-icon" style={color ? { '--icon-color': color } as React.CSSProperties : undefined} aria-hidden="true">{BrandIcon ? <BrandIcon /> : <FallbackIcon strokeWidth={1.8} />}</span>
}
