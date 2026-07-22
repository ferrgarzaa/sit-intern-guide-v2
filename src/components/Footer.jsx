import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.brand}>IBM Software Integration &amp; Transformation</span>
        </div>
        <div className={styles.right}>
          <span className={styles.made}>Made with IBM Bob</span>
        </div>
      </div>
    </footer>
  )
}
