import { useState, useEffect } from 'react'
import styles from './NavTabs.module.css'

const TABS = [
  { id: 'about',    label: 'About the Team' },
  { id: 'acquisitions', label: 'Acquisitions' },
  { id: 'concepts', label: 'Key Concepts' },
  { id: 'processes', label: 'T&O Processes' },
  { id: 'reads',    label: 'Recommended Reads' },
  { id: 'glossary', label: 'Glossary' },
  { id: 'tips',     label: 'Tips for Interns' },
]

export default function NavTabs() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    TABS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={styles.nav} aria-label="Page sections">
      <div className={`container ${styles.inner}`}>
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.tab} ${active === id ? styles.active : ''}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
