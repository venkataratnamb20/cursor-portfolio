# Portfolio Website

A modern professional portfolio website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for fast development and building
- **Tailwind CSS v4** for styling
- **Design system**: Pastel color palette and Fraunces + Source Sans 3 typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Output is in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Testing

### Unit / Component Tests (Vitest)

```bash
npm run test        # Watch mode
npm run test:run    # Single run
```

### E2E Smoke Tests (Playwright)

```bash
npm run test:e2e
```

Install browsers first if needed: `npx playwright install chromium`

## Project Structure

```
portfolio2/
├── design/           # Design system
│   ├── design.md     # Design guidelines
│   ├── color_palette.yml
│   └── typography.yml
├── src/
│   ├── components/   # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Work.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── styles/       # Global CSS
│   ├── test/         # Test setup
│   └── App.tsx
├── e2e/              # Playwright E2E tests
└── public/
```

## Customization

- **Colors**: Edit `design/color_palette.yml` and sync values in `src/index.css` `@theme` block
- **Typography**: Edit `design/typography.yml` and update `src/index.css`
- **Content**: Update placeholder text in `src/components/` (Hero, About, Work, Skills, Contact)
- **Projects**: Edit the `PROJECTS` array in `src/components/Work.tsx`
- **Skills**: Edit the `SKILL_CATEGORIES` array in `src/components/Skills.tsx`

## Deployment

### Docker

**Architecture:** App containers serve the React build; Nginx acts as load balancer, reverse proxy, and cache.

| Service | Role |
|---------|------|
| `app` | Serves static files (port 8080, internal) |
| `nginx` | Load balancer, proxy cache, security headers (port 8080, exposed) |

**Single container (all-in-one):**

```bash
docker build -t portfolio2:latest .
docker run -p 8080:8080 portfolio2:latest
```

**Multi-container (app + nginx with LB and cache):**

```bash
docker compose up --build -d
```

With load balancing (2+ app replicas):

```bash
docker compose up --build -d --scale app=2
```

Then open [http://localhost:8080](http://localhost:8080).

**Makefile:**

```bash
make docker-build    # Build app image
make docker-up      # Start app + nginx (compose)
make docker-down    # Stop
make docker-logs    # View nginx logs
```

See [docs/DOCKER.md](docs/DOCKER.md) for production best practices.

### Static Host

Alternatively, build and deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
# Upload dist/ contents
```

## License

Private project.
