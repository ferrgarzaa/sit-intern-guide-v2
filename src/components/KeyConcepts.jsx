import styles from './KeyConcepts.module.css'

const CONCEPTS = [
  { term: 'TOB', full: 'Transfer of Business', desc: 'The date when the acquired company legally and operationally transfers to IBM. Most deadlines are anchored to this date.' },
  { term: 'TOE', full: 'Transfer of Employment', desc: 'The date when acquired employees formally become IBM employees. HR and badge provisioning depend on this date.' },
  { term: 'Close Date', full: null, desc: 'The date the acquisition deal officially closes. Many pre-integration activities start at Close + X days.' },
  { term: 'BI Date', full: 'Business Integration Date', desc: 'The target date by which the acquired company is fully integrated into IBM\u2019s business operations and systems.' },
  { term: 'Fin 122', full: null, desc: 'IBM\u2019s financial close date for an acquisition. Tools being retained or extended beyond this date require additional approvals.' },
  { term: 'Workstreams', full: null, desc: 'Functional tracks within an integration: CIO Infrastructure, CIO Apps, CDO, Q2C, GTM, HR, Finance, GRE, Legal, Procurement, and more.' },
  { term: 'Deal Mobilizer', full: null, desc: 'IBM\u2019s internal tool used to track integration activities, app dispositions, and project status across all workstreams.' },
  { term: 'Disposition', full: null, desc: 'How each acquired app is handled: Sunset before/at TOB, Sunset at TOB+90, Extended beyond Fin122, or Retained.' },
  { term: 'GPO Approval', full: 'Global Procurement Office', desc: 'Required for tools being retained or extended beyond standard sunset timelines.' },
  { term: 'TPSRM', full: 'Third Party Supplier Risk Management', desc: 'A security assessment required before IBM retains or extends any acquired tool.' },
]

export default function KeyConcepts() {
  return (
    <section id="concepts" className={styles.section}>
      <div className="container">
        <p className="section-eyebrow">Foundation</p>
        <h2 className="section-title"><strong>Key Concepts to Know</strong></h2>
        <p className="section-body">
          Before diving into day-to-day work, make sure you understand these core
          M&amp;A integration concepts. Everything else builds on these.
        </p>

        <div className={styles.grid}>
          {CONCEPTS.map((c) => (
            <div key={c.term} className={styles.card}>
              <div className={styles.term}>{c.term}</div>
              {c.full && <div className={styles.full}>{c.full}</div>}
              <p className={styles.desc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
