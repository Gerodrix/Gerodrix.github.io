import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const ids = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
export function Navigation() {
  const { locale, setLocale, t } = useLanguage(); const location = useLocation(); const navigate = useNavigate()
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const handler = () => setScrolled(window.scrollY > 18); window.addEventListener('scroll', handler); handler(); return () => window.removeEventListener('scroll', handler) }, [])
  const go = (id: string) => { setOpen(false); if (location.pathname !== '/') { navigate(`/?redirect=${encodeURIComponent(`/#${id}`)}`); return } document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
    <a className="brand" href="/" aria-label="Gerónimo Odriozola — Home"><span>GO</span><small>developer</small></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{ids.map(id => <button key={id} onClick={() => go(id)}>{t(id)}</button>)}</nav>
    <div className="nav-actions"><button className="language-toggle" onClick={() => setLocale(locale === 'es' ? 'en' : 'es')} aria-label="Change language">{t('language')}</button><button className="contact-button desktop-contact" onClick={() => go('contact')}>{t('contactMe')}</button><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div>
    <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.18 }} aria-label="Mobile navigation">{ids.map(id => <button key={id} onClick={() => go(id)}>{t(id)}</button>)}</motion.nav>}</AnimatePresence>
  </header>
}
