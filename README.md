# Portfolio

A one-page developer portfolio built with React and Vite (plain JavaScript, no TypeScript).

## How it's organized

- `src/App.jsx` — all the content lives in the `profile`, `about`, `skillGroups`,
  and `projects` objects at the top of this file. Edit those, and the page
  updates. The JSX below them (the `Hero`, `About`, `Skills`, `Projects`,
  `Footer` functions) is the structure — you shouldn't need to touch it to
  update your info.
- `src/App.css` — all the visual styling (colors, spacing, layout).
- `src/index.css` — global reset and the color/font variables used everywhere
  else (`:root` at the top).
- `index.html` — the page's `<title>`, description, and the Google Fonts
  (JetBrains Mono + Inter) it loads.

## Things to fill in before you deploy

Search the project for `TODO` — there are a few:

- `email` in `App.jsx` — your real contact email.
- `resumeUrl` — a link to a hosted PDF of your resume (Google Drive share
  link, or upload the PDF into `public/` and link to `/resume.pdf`).
- `linkedin` — your LinkedIn URL, or leave it as an empty string to hide the
  button entirely.
- Each project's `href` — link to the real GitHub repo once it's public.
  Add a live deployed link too, once Sentinel is hosted somewhere.

## Running it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Building for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploying

This is a static site, so Vercel or Netlify both work with zero config:

1. Push this project to a new GitHub repo.
2. On Vercel or Netlify, "import" that repo.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

Both will give you a live URL, and will redeploy automatically every time you
push to `main`.
# portfolio
