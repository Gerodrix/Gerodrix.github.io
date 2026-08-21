import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'mossy' | 'autumn'
type ThemeContextValue = { theme: Theme; toggleTheme: () => void }
const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('portfolio-theme') as Theme) || 'mossy')
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('portfolio-theme', theme) }, [theme])
  const value = useMemo(() => ({ theme, toggleTheme: () => setTheme(current => current === 'mossy' ? 'autumn' : 'mossy') }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() { const context = useContext(ThemeContext); if (!context) throw new Error('useTheme must be within ThemeProvider'); return context }
