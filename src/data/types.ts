export type Locale = 'es' | 'en'
export type Localized = Record<Locale, string>
export type ProjectCategory = 'web-development' | 'game-development' | 'automation' | 'qa-testing' | 'tools' | 'other'

export interface Project {
  id: string; slug: string; title: string; category: ProjectCategory; year: string; status: Localized
  shortDescription: Localized; description: Localized; technologies: string[]; featured: boolean
  image?: string; github?: string; demo?: string; role?: Localized; objective?: Localized; solution?: Localized
  features?: Localized[]; gallery?: { src: string; alt: Localized }[]
}

export interface Skill { name: string; category: string; description?: Localized }
export interface Experience { role: Localized; company: Localized; date: Localized; location?: Localized; description: Localized; responsibilities: Localized[]; technologies?: string[] }
export interface Education { program: Localized; institution: string; date: Localized; detail?: Localized }
