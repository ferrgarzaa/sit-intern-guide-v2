import styles from './Tips.module.css'

const TIPS = [
  {
    num: '01',
    title: 'Learn the timeline anchors first',
    body: 'Every deadline is relative to Close, TOB, TOE, or BI Date. Know those four dates for your current project before anything else — everything flows from them.',
  },
  {
    num: '02',
    title: 'Start approval processes early — always',
    body: 'TPSRM, GPO, CIO-163, Slack integrations, badge provisioning — all take time. If you think it\u2019s too early to start, it\u2019s probably the right time. Delays here cascade across the whole integration.',
  },
  {
    num: '03',
    title: 'Identify workstream leads and acquisition focals immediately',
    body: 'Every workstream needs an IBM lead and an acquisition focal. Finding these people early is the single most important first step in any process. You can\u2019t drive anything without them.',
  },
  {
    num: '04',
    title: 'Document pain points as they happen',
    body: 'This guide exists because someone took notes during DataStax. Every integration surfaces new issues — write them down in real time so the next team doesn\u2019t repeat them.',
  },
  {
    num: '05',
    title: 'The acquired employees are your partners',
    body: 'Many processes depend on acquired employees taking action themselves — and many may not stay post-TOB. Build relationships early, communicate clearly. They\u2019re going through a big transition too.',
  },
  {
    num: '06',
    title: 'Ask questions — even the "obvious" ones',
    body: 'These processes are complex and interconnected. If something doesn\u2019t make sense, ask. You\u2019ll learn faster and your team will appreciate the engagement.',
  },
]

export default function Tips() {
  return (
    <section id="tips" className={styles.section}>
      <div className="container">
        <p className="section-eyebrow">Intern Advice</p>
        <h2 className="section-title"><strong>Tips for New Interns</strong></h2>
        <p className="section-body">
          Things learned the hard way &mdash; so you don&apos;t have to.
        </p>

        <div className={styles.grid}>
          {TIPS.map((tip) => (
            <div key={tip.num} className={styles.card}>
              <span className={styles.num}>{tip.num}</span>
              <h4 className={styles.title}>{tip.title}</h4>
              <p className={styles.body}>{tip.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
