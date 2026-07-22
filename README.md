# IBM Software Integration & Transformation — Intern Guide

A React + Vite onboarding guide for new interns joining IBM's Software Integration & Transformation team.

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:5173/sit-intern-guide/](http://localhost:5173/sit-intern-guide/)

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

This project auto-deploys via GitHub Actions on every push to `main`.

**First-time setup:**
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under "Source", select **GitHub Actions**
4. Push any commit to `main` — the workflow will build and deploy automatically

Your site will be live at:  
`https://<your-github-username>.github.io/sit-intern-guide/`

> **Note:** If you rename the repo, update `base` in `vite.config.js` to match the new repo name.

## Updating content

All content lives in the component files under `src/components/`. Each section is its own file:

| File | Section |
|------|---------|
| `AboutTeam.jsx` | Team members |
| `Acquisitions.jsx` | DataStax / HashiCorp / Confluent timeline |
| `KeyConcepts.jsx` | M&A concepts |
| `Processes.jsx` | T&O integration workstreams |
| `RecommendedReads.jsx` | White papers / links |
| `Glossary.jsx` | Acronyms |
| `Tips.jsx` | Intern tips |

To fill in the TBD acquisition dates, edit the `ACQUISITIONS` array in `Acquisitions.jsx`.
