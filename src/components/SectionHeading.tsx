export function SectionHeading({ eyebrow, title, className = '' }: { eyebrow: string; title: React.ReactNode; className?: string }) {
  return <header className={`section-heading ${className}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></header>
}
