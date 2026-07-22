import styles from './Glossary.module.css'

const TERMS = [
  { term: 'TOB',         def: 'Transfer of Business — official operational handover date',             verified: true },
  { term: 'TOE',         def: 'Transfer of Employment — when acquired employees become IBMers',         verified: true },
  { term: 'BI Date',     def: 'Business Integration Date — target for full operational integration',    verified: true },
  { term: 'M&A',         def: 'Mergers & Acquisitions',                                                verified: true },
  { term: 'CIO',         def: 'Chief Information Officer (org responsible for IT)',                     verified: true },
  { term: 'CDO',         def: 'Chief Data Office',                                                      verified: true },
  { term: 'GRE',         def: 'Global Real Estate',                                                     verified: true },
  { term: 'GARS',        def: 'Global Asset Recovery Services (handles legacy device returns)',         verified: true },
  { term: 'GTM',         def: 'Go-to-Market workstream',                                               verified: true },
  { term: 'P&T',         def: 'Products & Technology workstream',                                      verified: true },
  { term: 'Q2C',         def: 'Quote to Cash (billing, invoicing, AR)',                                verified: true },
  { term: 'F&A',         def: 'Finance & Accounting workstream',                                       verified: true },
  { term: 'TPSRM',       def: 'Third Party Supplier Risk Management (security assessment)',             verified: true },
  { term: 'APM',         def: 'Application Portfolio Management (IBM tool registration)',               verified: true },
  { term: 'PIA',         def: 'Privacy Impact Assessment (triggered from APM for personal data)',       verified: true },
  { term: 'ITVM/CIO-163',def: 'IT Vendor Management approval (Noah Cutler)',                           verified: true },
  { term: 'GPO',         def: 'Global Procurement Office approval',                                    verified: true },
  { term: 'PTU',         def: 'Permission to Use (procurement clearance for acquired tools)',           verified: true },
  { term: 'DRMS',        def: 'Tool used by CIO M&A to create IBM Functional IDs',                    verified: true },
  { term: 'DRO',         def: 'Document Retention Order — devices under DRO cannot be wiped',          verified: true },
  { term: 'ISC',         def: 'IBM Sales Connect (opportunity management system)',                      verified: true },
  { term: 'CISO',        def: 'Chief Information Security Officer (security approvals, TPSRM reviews)',verified: true },
  { term: 'Fin 122',     def: 'IBM financial close date for an acquisition',                           verified: true },
  { term: 'AR',          def: 'Accounts Receivable',                                                   verified: true },
  { term: 'DBWI',        def: 'Doing Business with IBM — customer comms sent at TOB',                  verified: false },
  { term: 'FCT',         def: 'First Commercial Transaction — when entitlement loads begin',            verified: false },
  { term: 'ASCA',        def: 'Definition pending — used in app certification context',                 verified: false },
]

export default function Glossary() {
  const verified   = TERMS.filter(t => t.verified)
  const unverified = TERMS.filter(t => !t.verified)

  return (
    <section id="glossary" className={styles.section}>
      <div className="container">
        <p className="section-eyebrow">Reference</p>
        <h2 className="section-title"><strong>Acronyms &amp; Glossary</strong></h2>
        <p className="section-body">
          M&amp;A integrations at IBM come with a lot of acronyms. Items marked in{' '}
          <span className={styles.pendingLabel}>amber</span> still need verification by the team.
        </p>

        <dl className={styles.grid}>
          {verified.map(({ term, def }) => (
            <div key={term} className={styles.item}>
              <dt className={styles.term}>{term}</dt>
              <dd className={styles.def}>{def}</dd>
            </div>
          ))}
        </dl>

        {unverified.length > 0 && (
          <>
            <p className={styles.pendingHeader}>⚠ Needs verification</p>
            <dl className={styles.grid}>
              {unverified.map(({ term, def }) => (
                <div key={term} className={`${styles.item} ${styles.itemPending}`}>
                  <dt className={`${styles.term} ${styles.termPending}`}>{term}</dt>
                  <dd className={styles.def}>{def}</dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </div>
    </section>
  )
}
