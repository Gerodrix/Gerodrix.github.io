import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ExternalLink, Mail } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { education } from '../data/education'
import { text } from '../data/i18n'
import { categoryLabels, projects } from '../data/projects'
import { experiences } from '../data/experience'
import { skillGroups } from '../data/skills'
import type { ProjectCategory } from '../data/types'
import { useLanguage } from '../context/LanguageContext'

const processKeys = [1, 2, 3, 4, 5] as const
export function Home() {
  const { locale, t } = useLanguage(); const navigate = useNavigate(); const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')
  useEffect(() => { const redirect = new URLSearchParams(window.location.search).get('redirect'); if (redirect) { window.history.replaceState({}, '', redirect); if (redirect.startsWith('/projects/')) navigate(redirect); else setTimeout(() => document.querySelector(redirect.replace('/', ''))?.scrollIntoView(), 0) } }, [navigate])
  const featured = projects.filter(project => project.featured); const categories = useMemo(() => ['all', ...Array.from(new Set(projects.map(project => project.category)))] as (ProjectCategory | 'all')[], []); const filtered = filter === 'all' ? projects : projects.filter(project => project.category === filter)
  return <><main>
    <section id="home" className="hero"><div className="hero-shape hero-shape--one" /><div className="hero-shape hero-shape--two" /><div className="container hero-grid"><Reveal className="hero-copy"><p className="eyebrow">{t('heroKicker')}</p><h1>{t('heroTitle')}</h1><p className="hero-description">{t('heroText')}</p><div className="hero-actions"><a href="#projects" className="button button--dark">{t('viewWork')} <ArrowRight size={17} /></a><a href="#contact" className="button button--soft">{t('letsTalk')}</a></div><a className="scroll-cue" href="#about"><ArrowDown size={16} /> scroll to explore</a></Reveal><Reveal className="hero-composition" delay={0.1}><div className="hero-orb" /><div className="hero-terminal"><div className="terminal-top"><span /><span /><span /></div><p><b>focus</b><i> = </i>Web · AI · Game Dev</p><p><b>location</b><i> = </i>Buenos Aires</p><p><b>mode</b><i> = </i>building</p><div className="terminal-line" /></div><div className="hero-note"><span>01</span><p>{t('studying')}</p></div><div className="hero-marker">GO</div></Reveal></div></section>

    <section id="about" className="section section--about"><div className="container about-grid"><Reveal className="about-visual"><div className="about-monogram">GO</div><div className="about-stamp">creative<br />developer</div><div className="about-dots" /></Reveal><Reveal className="about-content" delay={0.1}><SectionHeading eyebrow={t('aboutKicker')} title={t('aboutTitle')} /><p>{t('aboutOne')}</p><p>{t('aboutTwo')}</p><dl className="fact-list"><div><dt>{t('currently')}</dt><dd>{t('studying')}</dd></div><div><dt>{t('location')}</dt><dd>{t('buenosAires')}</dd></div><div><dt>{t('availability')}</dt><dd>{t('remote')}</dd></div><div><dt>{t('focus')}</dt><dd>{t('focusValue')}</dd></div></dl></Reveal></div></section>

    <section id="skills" className="section section--tint"><div className="container"><Reveal><SectionHeading eyebrow={t('skillsKicker')} title={t('skillsTitle')} /><p className="section-intro">{t('skillsNote')}</p></Reveal><div className="skills-grid">{skillGroups.map((group, index) => <Reveal key={group.id} delay={index * 0.06}><article className="skill-group"><h3>{text(locale, group.label)}</h3><div>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article></Reveal>)}</div></div></section>

    <section id="projects" className="section"><div className="container"><Reveal><SectionHeading eyebrow={t('featuredKicker')} title={t('featuredTitle')} /></Reveal><div className="featured-grid">{featured.map((project, index) => <Reveal key={project.id} delay={index * 0.08} className={index === 0 ? 'featured-grid__lead' : ''}><ProjectCard project={project} featured /></Reveal>)}</div></div></section>

    <section className="section section--tint"><div className="container"><Reveal className="project-archive__header"><SectionHeading eyebrow={t('allKicker')} title={t('allTitle')} /><div className="filters" role="toolbar" aria-label="Project filters">{categories.map(category => <button key={category} className={filter === category ? 'is-active' : ''} onClick={() => setFilter(category)}>{text(locale, categoryLabels[category])}</button>)}</div></Reveal><motion.div layout className="projects-grid">{filtered.map(project => <motion.div layout key={project.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ProjectCard project={project} /></motion.div>)}</motion.div></div></section>

    <section id="experience" className="section"><div className="container split-section"><div><Reveal><SectionHeading eyebrow={t('experienceKicker')} title={t('experienceTitle')} /></Reveal></div><div className="timeline">{experiences.map((item, index) => <Reveal key={item.company.en} delay={index * 0.08}><article className="timeline-item"><p>{text(locale, item.date)}</p><h3>{text(locale, item.role)}</h3><h4>{text(locale, item.company)}</h4><p>{text(locale, item.description)}</p><ul>{item.responsibilities.map(line => <li key={line.en}>{text(locale, line)}</li>)}</ul>{item.technologies && <div className="tags">{item.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>}</article></Reveal>)}</div></div></section>

    <section className="section section--education"><div className="container"><Reveal><SectionHeading eyebrow={t('educationKicker')} title={t('educationTitle')} /></Reveal><div className="education-list">{education.map((item, index) => <Reveal key={item.institution + item.date.en} delay={index * 0.06}><article><p>{text(locale, item.date)}</p><h3>{text(locale, item.program)}</h3><h4>{item.institution}</h4>{item.detail && <small>{text(locale, item.detail)}</small>}</article></Reveal>)}</div></div></section>

    <section className="section section--process"><div className="container"><Reveal><SectionHeading eyebrow={t('processKicker')} title={t('processTitle')} /></Reveal><div className="process-list">{processKeys.map((number, index) => <Reveal key={number} delay={index * 0.06}><article><span>0{number}</span><h3>{t(`process${number}`)}</h3><p>{t(`process${number}d`)}</p></article></Reveal>)}</div></div></section>

    <section id="contact" className="section section--contact"><div className="container contact-grid"><Reveal><SectionHeading eyebrow={t('contactKicker')} title={t('contactTitle')} /><p className="contact-copy">{t('contactText')}</p><div className="social-links"><a href="mailto:odriozolageronimo@gmail.com"><Mail size={17} />Email</a><a href="https://github.com/Gerodrix" target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a><a href="https://www.linkedin.com/in/geronimo-odriozola/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a></div><div className="cv-links"><span>{t('downloadCv')}</span><a href="/CV_Geronimo_Odriozola_ES.docx">ES</a><a href="/CV_Geronimo_Odriozola_EN.docx">EN</a><a href="/CV_Geronimo_Odriozola_PT.docx">PT</a></div></Reveal><Reveal delay={0.1}><ContactForm /></Reveal></div></section>
  </main><Footer /></>
}
