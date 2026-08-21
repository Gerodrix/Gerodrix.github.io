import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryLabels } from '../data/projects'
import type { Project } from '../data/types'
import { text } from '../data/i18n'
import { useLanguage } from '../context/LanguageContext'

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { locale, t } = useLanguage()
  return <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
    <Link to={`/projects/${project.slug}`} className={`project-visual ${project.image ? '' : 'project-visual--abstract'}`} aria-label={`${t('details')}: ${project.title}`}>
      {project.image ? <img src={project.image} alt={`${project.title} project preview`} loading="lazy" /> : <div className="abstract-project"><span>{project.title.slice(0, 2).toUpperCase()}</span><i /><b /></div>}
      <span className="project-arrow"><ArrowUpRight size={19} /></span>
    </Link>
    <div className="project-card__body"><div className="project-meta"><span>{text(locale, categoryLabels[project.category])}</span><span>{project.year}</span></div><h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{text(locale, project.shortDescription)}</p><div className="tags">{project.technologies.slice(0, 4).map(item => <span key={item}>{item}</span>)}</div></div>
  </article>
}
