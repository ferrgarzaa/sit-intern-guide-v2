import { useState } from 'react'
import styles from './Processes.module.css'

const WORKSTREAMS = [
  {
    id: 'cio-infra',
    title: 'CIO Infrastructure',
    tag: 'IT',
    table: [
      { process: 'Employee Provisioning', deadline: 'TOE', teams: 'HR, Devices @IBM, Mac @IBM, PC @IBM, IT Support' },
      { process: 'Mobile', deadline: 'TOE', teams: 'HR, Mike Johann' },
      { process: 'Network & Voice', deadline: 'TOB', teams: 'GRE' },
      { process: 'Legacy Laptop Returns', deadline: 'TOB', teams: 'GARS' },
      { process: 'Enterprise Apps Migrations', deadline: 'TOB + 90', teams: 'Toolbox@IBM, Slack, Mail@IBM, Box, 1Password' },
    ],
    bullets: [
      { strong: 'Employee Provisioning', text: ' — Corp Dev/HR/CIO collect employee data early. HR creates Talent IDs then w3 IDs. CIO M&A works with device teams on reprofiling vs. replacement.' },
      { strong: 'Mail Migration', text: ' — Employees set up their own redirects. CIO M&A creates IBM Functional IDs via DRMS. Start early — France\'s TOE occurs at TOB, complicating manager assignment.' },
      { strong: 'Box Migration', text: ' — Contact Toolbox@IBM (Mike Fields, Kenny Parciasepe, Justin Erwin) with data volume. Raise a PO. Box→Box migrations: they care about number of users and objects, not size.' },
      { strong: 'Slack Migration', text: ' — Contact Toolbox@IBM with workspace count, active members, and channels. Slack integrations need CIO approval — start this process early, well before TOB.' },
      { strong: '1Password', text: ' — IBM does not facilitate migrations. Employees export/import or copy content directly between accounts.' },
    ],
    warnings: [
      'Slack integrations submitted for CIO approval too close to TOB caused delays on DataStax. Submit approval requests as early as possible.',
      'GARS legacy laptop returns in EMEA had no individual pickup process for DataStax. Confirm whether the new FedEx small-package process is in place for your project.',
    ],
  },
  {
    id: 'cio-apps',
    title: 'CIO Apps — IT App Dispositioning',
    tag: 'Apps',
    table: null,
    bullets: [
      { strong: 'Sunset at or before TOB', text: ' — Remove access, remove PI data, close contract, provide evidence of sunset.' },
      { strong: 'Sunset at TOB + 90', text: ' — Place in read-only after TOB. Typical for Finance, Accounting, and HR apps needing data migration time.' },
      { strong: 'Extend beyond Fin122', text: ' — Requires: business justification, TPSRM (~1 week turnaround), GPO approval, CIO-163/ITVM (Noah Cutler), APM + PIA registration.' },
      { strong: 'Retain', text: ' — Same approval chain as Extend. Post-TOB also requires CISO IT App Config Review and ASCA Certification.' },
    ],
    warnings: [
      'Finance, HR, and CRM apps used past TOB must document user access lists quarterly for FIN151 audit purposes.',
    ],
  },
  {
    id: 'cdo',
    title: 'CDO — Chief Data Office',
    tag: 'Data',
    table: [
      { process: 'ISC read-only opportunity loads', deadline: 'Close + 60 days', teams: 'Finance, GTM' },
      { process: 'Entitlement loads', deadline: 'Begins at TOB', teams: 'P&T, Pricing, Q2C, CIO' },
      { process: 'Soft Copy Data Archiving', deadline: 'TOB + 90 days', teams: '—' },
    ],
    bullets: [
      { strong: 'Opportunities', text: ' — CDO first does customer mapping, then uploads into ISC. CDO has a dependency on Finance to complete budget loads first.' },
      { strong: 'Entitlement flow', text: ' — Product Categorization (P&T) → Enablement Spreadsheet (Pricing) → Part Creation (Q2C) → Entitlement Mapping & Load (CDO).' },
      { strong: 'Soft Copy Archiving', text: ' — 130-item checklist across Finance, Accounting, Tax, and HR. Data stored in Box. Process typically kicks off 90 days before TOB.' },
    ],
    warnings: [
      'Most employees providing archiving data may not be retained post-TOB. Start the archiving process early — well before the TOB + 90 deadline.',
    ],
  },
  {
    id: 'gre',
    title: 'GRE — Global Real Estate',
    tag: 'Real Estate',
    table: [
      { process: 'Develop Real Estate Strategy', deadline: 'Close + 30 days', teams: 'Integration Executive, RESO' },
      { process: 'Execute Real Estate Strategy', deadline: 'TOB', teams: 'HR, CIO Infra' },
    ],
    bullets: [
      { strong: 'Lease buyout', text: ' — For exiting sites, try a lease buyout first via JLL brokers. Cleaner from legal and accounting standpoint.' },
      { strong: 'Abandonment', text: ' — If buyout fails, declare abandonment. Cost moves to a non-operating account, removing it from business reporting.' },
      { strong: 'Timeline', text: ' — IBM has 1 year after TOB before an acquired lease starts counting as an integration cost.' },
    ],
    warnings: [
      'DataStax had office space in Brazil discovered months after close. Audit all office locations — including informal or per-use spaces — as early as possible.',
    ],
  },
  {
    id: 'security',
    title: 'Corporate Security',
    tag: 'Security',
    table: null,
    bullets: [
      { strong: 'Site Reviews', text: ' — Corporate Security runs a security checklist for each acquired site before close.' },
      { strong: 'Badge Provisioning', text: ' — Cannot happen until TOE and after w3 IDs are issued. A visitor pass is simpler pre-TOE.' },
      { strong: 'Americas', text: ' — Self-serve via the w3 badges tool. US employees get access to all IBM sites.' },
      { strong: 'International', text: ' — Employees upload photo to Box; local security managers distribute badges. Access is site-restricted.' },
    ],
    warnings: [],
  },
  {
    id: 'contracts',
    title: 'Contracts',
    tag: 'Legal',
    table: null,
    bullets: [
      { strong: 'First step', text: ' — Identify acquisition focals and obtain access to all active legacy contracts. Separate federal customers immediately.' },
      { strong: 'At TOB', text: ' — Legacy contracts are assigned to IBM legal entities. DBWI communications sent to all active customers.' },
      { strong: 'Post-TOB', text: ' — New customers and transactions run on IBM standard terms. Federal customers require specific handling — involve Legal early.' },
    ],
    warnings: [],
  },
  {
    id: 'q2c',
    title: 'Q2C — Quote to Cash',
    tag: 'Finance',
    table: null,
    bullets: [
      { strong: 'Accounts Receivable', text: ' — Review aged and open AR from due diligence. Drive AR down before migrating to IBM systems.' },
      { strong: 'Part Creation', text: ' — IBM part numbers for new clients after product GA. For a tuck-in, go under an existing PID — no new parts needed.' },
      { strong: 'Billing & Invoicing', text: ' — CDO and CIO (Bill Alcott) are key partners. DBWI is sent out at TOB.' },
    ],
    warnings: [],
  },
  {
    id: 'procurement',
    title: 'Procurement',
    tag: 'Finance',
    table: null,
    bullets: [
      { strong: 'PTU (Permission to Use)', text: ' — Required before IBM can use acquired tools under IBM contracts.' },
      { strong: 'Short-term payments', text: ' — APU (no PO required).' },
      { strong: 'Long-term suppliers', text: ' — Ariba (Lite).' },
      { strong: 'Sunsetting apps', text: ' — If a contract is still active, Procurement prefers a pre-paid close-out.' },
    ],
    warnings: [],
  },
]

export default function Processes() {
  const [open, setOpen] = useState(new Set(['cio-infra']))

  const toggle = (id) => {
    setOpen(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <section id="processes" className={styles.section}>
      <div className="container">
        <p className="section-eyebrow">T&amp;O Integration</p>
        <h2 className="section-title"><strong>Integration Process Areas</strong></h2>
        <p className="section-body">
          Key workstreams and processes the T&amp;O Integration team supports,
          based on real integration work including the DataStax acquisition.
        </p>

        <div className={styles.accordion}>
          {WORKSTREAMS.map((ws) => {
            const isOpen = open.has(ws.id)
            return (
              <div key={ws.id} className={styles.panel}>
                <button
                  className={`${styles.panelHeader} ${isOpen ? styles.panelOpen : ''}`}
                  onClick={() => toggle(ws.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.panelTitle}>{ws.title}</span>
                  <div className={styles.panelRight}>
                    <span className={`tag tag-blue`}>{ws.tag}</span>
                    <span className={styles.chevron}>{isOpen ? '▲' : '▼'}</span>
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.panelBody}>
                    {ws.table && (
                      <div className={styles.tableWrap}>
                        <table className={styles.table}>
                          <thead>
                            <tr>
                              <th>Process</th>
                              <th>Deadline</th>
                              <th>Key IBM Teams</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ws.table.map((row) => (
                              <tr key={row.process}>
                                <td>{row.process}</td>
                                <td><code className={styles.code}>{row.deadline}</code></td>
                                <td>{row.teams}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    <ul className={styles.bullets}>
                      {ws.bullets.map((b, i) => (
                        <li key={i}>
                          <strong>{b.strong}</strong>{b.text}
                        </li>
                      ))}
                    </ul>

                    {ws.warnings.map((w, i) => (
                      <div key={i} className="callout-warning">
                        <strong>⚠ Pain Point: </strong>{w}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
