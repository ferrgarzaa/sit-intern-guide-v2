import styles from './AboutTeam.module.css'

const TEAM = [
  { name: 'Jon Correnti',           role: 'Team Lead',                                    email: null },
  { name: 'Isabel Landy',           role: 'Transformation Engagement Manager',             email: 'Isabel.Landy@ibm.com' },
  { name: 'Sean Lynch',             role: 'T&O Integration Specialist',                    email: 'Sean.Lynch1@ibm.com' },
  { name: 'Sanya Mahajan',          role: 'Program Manager',                               email: 'Sanya.Mahajan@ibm.com' },
  { name: 'Stephen Ventura',        role: 'Lead Consultant, M&A Operations Integration',   email: 'Stephen.Ventura@ibm.com' },
  { name: 'Anson Wu',               role: 'Strategy Consultant',                           email: null },
  { name: 'Sphoorthy Selvaraj',     role: 'Team Member',                                  email: null },
  { name: 'Izzy Vilensky',          role: 'Integration Operations Intern',                 email: 'Isabel.Vilensky@ibm.com', intern: true },
  { name: 'Fernanda Garza Martínez',role: 'Integration Operations Intern',                 email: null, intern: true },
]

function initials(name) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
}

export default function AboutTeam() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="section-eyebrow">Who we are</p>
        <h2 className="section-title"><strong>About the Team</strong></h2>
        <p className="section-body">
          The <strong>Software Integration &amp; Transformation</strong> team is responsible for making
          IBM's M&amp;A integrations as smooth as possible. When IBM acquires a technology company,
          our team coordinates the many workstreams involved — from IT infrastructure and real estate
          to contracts, finance, and data. We act as the connective tissue that keeps every integration
          on track and on schedule.
        </p>

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <div key={member.name} className={styles.card}>
              <div className={styles.avatar}>{initials(member.name)}</div>
              <div className={styles.info}>
                <div className={styles.name}>{member.name}</div>
                <div className={styles.role}>{member.role}</div>
                {member.email && (
                  <a href={`mailto:${member.email}`} className={styles.email}>{member.email}</a>
                )}
                {member.intern && <span className={`tag tag-blue ${styles.internTag}`}>Intern</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
