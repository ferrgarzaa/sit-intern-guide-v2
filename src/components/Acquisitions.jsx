import styles from './Acquisitions.module.css'

const ACQUISITIONS = [
  {
    company: 'DataStax',
    status: 'complete',
    statusLabel: 'Integration Complete',
    announced: null,
    closed: null,
    biDate: null,
    note: 'The integration processes documented in these notes are based largely on the DataStax acquisition.',
  },
  {
    company: 'HashiCorp',
    status: 'complete',
    statusLabel: 'Integration Complete',
    announced: null,
    closed: null,
    biDate: null,
    note: null,
  },
  {
    company: 'Confluent',
    status: 'inprogress',
    statusLabel: 'Integration In Progress',
    announced: null,
    closed: null,
    biDate: 'August 1',
    note: 'Currently active — integration is ongoing as of this writing.',
  },
]

function DateItem({ label, value }) {
  return (
    <div className={styles.dateItem}>
      <span className={styles.dateLabel}>{label}</span>
      <span className={value ? styles.dateValue : styles.dateTbd}>
        {value ?? 'TBD'}
      </span>
    </div>
  )
}

export default function Acquisitions() {
  return (
    <section id="acquisitions" className={styles.section}>
      <div className="container">
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="section-title"><strong>Acquisitions We've Worked On</strong></h2>
        <p className="section-body">
          These are the companies this team has supported through IBM's integration process.
          Each one is at a different stage.
        </p>

        <div className={styles.timeline}>
          {ACQUISITIONS.map((acq, i) => (
            <div key={acq.company} className={styles.item}>
              <div className={styles.lineCol}>
                <div className={`${styles.dot} ${styles[`dot_${acq.status}`]}`} />
                {i < ACQUISITIONS.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.companyRow}>
                  <h3 className={styles.company}>{acq.company}</h3>
                  <span className={`tag ${acq.status === 'complete' ? 'tag-green' : 'tag-yellow'}`}>
                    {acq.statusLabel}
                  </span>
                </div>
                <div className={styles.dates}>
                  <DateItem label="Announced" value={acq.announced} />
                  <DateItem label="Deal Close (TOB)" value={acq.closed} />
                  <DateItem label="Business Integration Date" value={acq.biDate} />
                </div>
                {acq.note && <p className={styles.note}>{acq.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
