import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
export function App() { return <><Navigation /><Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<ProjectDetail />} /><Route path="*" element={<ProjectDetail />} /></Routes></> }
