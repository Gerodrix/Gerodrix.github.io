import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { copy } from '../data/i18n'
import type { Locale } from '../data/types'

type LanguageContextValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: string) => string }
const LanguageContext = createContext<LanguageContextValue | null>(null)
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('portfolio-language') as Locale) || 'es')
  useEffect(() => { localStorage.setItem('portfolio-language', locale); document.documentElement.lang = locale }, [locale])
  const value = useMemo(() => ({ locale, setLocale, t: (key: string) => copy[locale][key] ?? key }), [locale])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
export function useLanguage() { const context = useContext(LanguageContext); if (!context) throw new Error('useLanguage must be within LanguageProvider'); return context }
