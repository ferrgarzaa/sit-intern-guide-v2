import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.title}>Software Integration &amp; Transformation</span>
        </div>
        <span className={styles.subtitle}>Intern Guide</span>
      </div>
    </header>
  )
}
