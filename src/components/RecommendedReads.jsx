import styles from './RecommendedReads.module.css'

const READS = [
  {
    firm: 'Bain',
    firmColor: '#c8102e',
    firmTextColor: '#fff',
    title: '10 Steps to Successful M&A Integration',
    desc: 'Practical framework for executing a successful post-merger integration from day one.',
    url: 'https://www.bain.com/insights/10-steps-to-successful-ma-integration/',
    urlLabel: 'bain.com',
  },
  {
    firm: 'Bain',
    firmColor: '#c8102e',
    firmTextColor: '#fff',
    title: 'Merger Integration Blueprint',
    desc: 'A strategic blueprint covering planning, governance, and value capture in M&A integrations.',
    url: 'https://www.bain.com/insights/merger-integration-blueprint/',
    urlLabel: 'bain.com',
  },
  {
    firm: 'Deloitte',
    firmColor: '#86bc25',
    firmTextColor: '#fff',
    title: 'M&A Integration Plan Checklist',
    desc: 'A practical checklist for building a comprehensive M&A integration plan across workstreams.',
    url: 'http://deloitte.com/us/en/services/consulting/articles/mergers-acquisitions-integration-plan-checklist.html',
    urlLabel: 'deloitte.com',
  },
  {
    firm: 'EY',
    firmColor: '#ffe600',
    firmTextColor: '#161616',
    title: 'Nine Steps to Setting Up an M&A Integration Program',
    desc: 'A nine-step guide to designing and launching an effective M&A integration program.',
    url: 'https://www.ey.com/en_us/insights/mergers-acquisitions/nine-steps-to-setting-up-an-m-a-integration-program',
    urlLabel: 'ey.com',
  },
  {
    firm: 'EY',
    firmColor: '#ffe600',
    firmTextColor: '#161616',
    title: 'Integration Approach Report',
    desc: 'In-depth report on integration methodology, operating model design, and execution strategy.',
    url: 'https://www.ey.com/content/dam/ey-unified-site/ey-com/en-vn/insights/strategy-tran/documents/ey-integration-approach-report-version1-20200131.pdf',
    urlLabel: 'EY Integration Approach Report (PDF)',
  },
  {
    firm: 'BCG',
    firmColor: '#00a651',
    firmTextColor: '#fff',
    title: 'Post-Merger Integration',
    desc: "BCG's perspective on post-merger integration, value creation, and common pitfalls.",
    url: 'https://www.bcg.com/capabilities/mergers-acquisitions-transactions-pmi/post-merger-integration',
    urlLabel: 'bcg.com',
  },
]

export default function RecommendedReads() {
  return (
    <section id="reads" className={styles.section}>
      <div className="container">
        <p className="section-eyebrow">Learning Resources</p>
        <h2 className="section-title"><strong>Recommended Reads</strong></h2>
        <p className="section-body">
          White papers and frameworks shared with new team members. Reading these will give
          you a strong foundation in M&amp;A integration best practices from top consulting firms.
        </p>

        <div className={styles.grid}>
          {READS.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div
                className={styles.badge}
                style={{ background: r.firmColor, color: r.firmTextColor }}
              >
                {r.firm}
              </div>
              <div className={styles.body}>
                <h4 className={styles.title}>{r.title}</h4>
                <p className={styles.desc}>{r.desc}</p>
                <span className={styles.link}>↗ {r.urlLabel}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
