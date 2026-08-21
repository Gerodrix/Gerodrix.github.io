import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { App } from './App'
import './styles.css'
import './styles-enhancements.css'
createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter><ThemeProvider><LanguageProvider><App /></LanguageProvider></ThemeProvider></BrowserRouter></StrictMode>)
