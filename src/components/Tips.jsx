import styles from './Tips.module.css'

const SECTIONS = [
  {
    category: 'For Success in the Team',
    tips: [
      {
        num: '01',
        title: 'Understand what the team does',
        body: 'The Software Integration & Transformation team coordinates IBM\'s M&A integrations — when IBM acquires a company, we make sure every workstream (IT, finance, real estate, contracts, data) stays on track. Understanding this big picture early will help everything else make sense.',
      },
      {
        num: '02',
        title: 'Learn the acronyms',
        body: 'The team runs on acronyms — TOB, TOE, BI Date, TPSRM, GTM, Q2C and more. Take time in your first week to go through the glossary and ask what comes up in meetings. You\u2019ll follow conversations much faster.',
      },
      {
        num: '03',
        title: 'Know your workstream leads',
        body: 'Workstream leads are the people you\u2019ll see in every meeting — they own their area and drive decisions. Identify them early, learn their names and roles, and understand what they\u2019re responsible for. They\u2019re your main contacts.',
      },
      {
        num: '04',
        title: 'Take notes in every meeting',
        body: 'Every meeting has a lot going on. Document what\u2019s discussed, what actions are assigned, and what questions come up. It helps you build a picture of what\u2019s happening and catch things you didn\u2019t fully understand the first time.',
      },
      {
        num: '05',
        title: 'Ask questions — even the "obvious" ones',
        body: 'These processes are complex and interconnected. If something doesn\u2019t make sense, ask. You\u2019ll learn faster and your team will appreciate the engagement.',
      },
    ],
  },
  {
    category: 'For Success at IBM',
    tips: [
      {
        num: '06',
        title: 'Do coffee chats',
        body: 'Reach out to people across the team and beyond for 15–30 min coffee chats. It\u2019s the best way to learn what others do, build your network, and make your internship feel less overwhelming.',
      },
      {
        num: '07',
        title: 'Volunteer for events',
        body: 'IBM runs a lot of internal events — volunteer when you can. It\u2019s a great way to get visibility, meet people outside your immediate team, and show initiative.',
      },
      {
        num: '08',
        title: 'Go to intern coffee hours and get to know other interns',
        body: 'The intern community is one of the best parts of IBM. Show up to intern events, grab coffee with other interns, and build those relationships — they\u2019ll last beyond the internship.',
      },
    ],
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

        {SECTIONS.map((section) => (
          <div key={section.category} className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>{section.category}</h3>
            <div className={styles.list}>
              {section.tips.map((tip) => (
                <div key={tip.num} className={styles.item}>
                  <span className={styles.num}>{tip.num}</span>
                  <div className={styles.content}>
                    <h4 className={styles.title}>{tip.title}</h4>
                    <p className={styles.body}>{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
