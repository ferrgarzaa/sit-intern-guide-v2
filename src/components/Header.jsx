import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <svg className={styles.ibmLogo} viewBox="0 0 80 32" fill="currentColor" aria-label="IBM">
            <path d="M0 26.4h10.3v-2.1H0v2.1zm0-4.3h10.3v-2.1H0v2.1zm2.6-4.3h5.2v-2.1H2.6v2.1zm0-4.3h5.2V11.6H2.6v2.1zm2.6-4.3H8V7.1H5.2v2.1zM0 5.6h10.3V3.5H0v2.1z"/>
            <path d="M13.5 26.4h10.3v-2.1H13.5v2.1zm0-4.3h10.3v-2.1H13.5v2.1zm2.6-4.3h5.2v-2.1h-5.2v2.1zm0-4.3h5.2V11.6h-5.2v2.1zm2.6-4.3h2.6V7.1h-2.6v2.1zm-2.6-4.2h5.2V3.5h-5.2v2.1z"/>
            <path d="M27 3.5v2.1h4.6c1.8 0 2.9.9 2.9 2.5s-1.1 2.5-2.9 2.5H27v2.1h4.6c.8 0 1.6.6 1.6 1.5s-.8 1.5-1.6 1.5H27v2.1h4.6c2 0 3.4-.9 3.9-2.3.5.1 1 .2 1.5.2 3.2 0 5.5-2.1 5.5-5.1S39.7 3.5 36.5 3.5c-.5 0-1 .1-1.5.2C34.4 2.4 33.1 1.4 31.6 1.4 31.6 1.4 27 1.4 27 3.5zm12 3.1c0 1.6-1.2 2.8-2.9 2.8-.1 0-.3 0-.4-.1.1-.4.1-.8.1-1.2v-1.5c0-.4 0-.8-.1-1.2.1 0 .3-.1.4-.1 1.7 0 2.9 1.2 2.9 2.8v.5z"/>
            <path d="M27 22.1h10.3v-2.1H27v2.1zm0 4.3h10.3v-2.1H27v2.1zm2.6-8.5H34v-2.1h-4.4v2.1zm9.5-2.1v2.1H44c1.8 0 2.9.9 2.9 2.5S45.8 22.9 44 22.9h-4.9v2.1H44c3.1 0 5.4-2.1 5.4-5.1s-2.3-5.1-5.4-5.1h-4.9v.7zm0-12.3v2.1H44c1.8 0 2.9.9 2.9 2.5S45.8 9.7 44 9.7h-4.9v2.1H44c3.1 0 5.4-2.1 5.4-5.1S47.1 1.6 44 1.6h-4.9v1.9z"/>
          </svg>
          <span className={styles.divider}>|</span>
          <span className={styles.title}>Software Integration &amp; Transformation</span>
        </div>
        <span className={styles.subtitle}>Intern Guide</span>
      </div>
    </header>
  )
}
