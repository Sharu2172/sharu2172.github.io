# D. Sharath — Data Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and TanStack Router. Deployed automatically to GitHub Pages via GitHub Actions.

## Live Site

[View Portfolio](https://sharu2172.github.io/portfolio/)

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Routing:** TanStack Router
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite 7
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (via GitHub Actions)

## Features

- Dark-themed, minimalist design
- Responsive layout for all screen sizes
- Sections: Hero, About, Experience, Projects, Skills, Education, Contact
- Resume download (PDF)
- Social links (GitHub, LinkedIn, Email)
- Automated deployment on every push to `main`

## Development

### Prerequisites

- [Bun](https://bun.sh/) (v1.2+)

### Install dependencies

```bash
bun install
```

### Run dev server

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
bun run build
```

The static site will be output to the `dist/` directory.

## Deployment

This project deploys automatically to GitHub Pages using GitHub Actions.

### Setup

1. Push this repository to GitHub.
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The workflow in `.github/workflows/deploy.yml` will handle the rest.

On every push to `main` (or `master`), the workflow will:
1. Install dependencies with Bun
2. Build the static site
3. Deploy to GitHub Pages

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain name.
2. Configure your DNS provider to point to GitHub Pages.
3. Update the `base` path in `vite.config.ts` from `process.env.BASE_PATH || "/"` to `"/"`.

## Project Structure

```
├── public/
│   └── D_Sharath_Resume.pdf    # Resume download
├── src/
│   ├── main.tsx                # SPA entry point
│   ├── router.tsx              # TanStack Router setup
│   ├── routes/
│   │   ├── __root.tsx          # Root layout
│   │   └── index.tsx           # Portfolio page (all sections)
│   ├── components/ui/          # shadcn/ui components
│   ├── lib/                    # Utilities
│   └── styles.css              # Tailwind CSS theme
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── package.json
└── README.md
```

## Customisation

### Update personal info

Edit `src/routes/index.tsx` to update:
- Name, tagline, and bio
- Work experience and projects
- Skills and education
- Contact details

### Update resume

Replace `public/D_Sharath_Resume.pdf` with your own resume file. Update the download links in `src/routes/index.tsx` if the filename changes.

### Update theme colours

Edit the CSS custom properties in `src/styles.css`.

## License

© D. Sharath. All rights reserved.
