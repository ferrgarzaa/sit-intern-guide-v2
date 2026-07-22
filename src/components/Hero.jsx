import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Intern Onboarding Guide</p>
        <h1 className={styles.heading}>
          Welcome to the team.<br />
          <strong>Here's everything you need to know.</strong>
        </h1>
        <p className={styles.body}>
          This guide was built by interns, for interns — so you can hit the ground
          running from day one. It covers who we are, how M&amp;A integration works
          at IBM, the processes we own, and the resources that matter most.
        </p>
        <div className={styles.tags}>
          <span className={styles.tag}>Software Integration &amp; Transformation</span>
          <span className={styles.tag}>M&amp;A Operations</span>
          <span className={styles.tag}>IBM Internal</span>
        </div>
      </div>
    </section>
  )
}
