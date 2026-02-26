# Portfolio Website Plan

Based on [design/design.md](design/design.md), this plan builds a React + TailwindCSS portfolio with a structured design system, professional hierarchy, and responsive layout.

## 1. Project Setup

- **Scaffold**: Create React app with Vite + TypeScript
- **Dependencies**: React, React Router, TailwindCSS v4
- **Structure**: See README.md for project structure

## 2. Design System

- **Color Palette** (`design/color_palette.yml`): Primary, secondary, tertiary, neutrals, semantic colors
- **Typography** (`design/typography.yml`): Fraunces (display) + Source Sans 3 (body)
- **Integration**: Design tokens in `src/index.css` via Tailwind v4 `@theme`

## 3. Layout and Structure

- **Header**: Logo, nav links, mobile hamburger menu, sticky
- **Footer**: Brand, sitemap links, social links, copyright
- **Sections**: Hero, About, Work, Skills, Contact

## 4. Responsive Design

- Mobile-first with Tailwind breakpoints (sm/md/lg/xl)
- Hamburger menu on mobile, full nav on desktop

## 5. Testing

- **Unit**: Vitest + React Testing Library (Header, Footer, App)
- **E2E**: Playwright smoke tests

## 6. Documentation

- README.md with setup, build, test, deploy instructions
