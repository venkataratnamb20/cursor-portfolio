import { Section } from "./Section";

const PROJECTS = [
  {
    title: "Project Alpha",
    description:
      "A modern web application with real-time collaboration features. Built with React and Node.js.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Project Beta",
    description:
      "Mobile-first e-commerce platform with intuitive UX. Handles thousands of daily transactions.",
    tags: ["React", "Tailwind", "Stripe"],
    href: "#",
  },
  {
    title: "Project Gamma",
    description:
      "Developer tools and CLI for streamlining workflows. Open source with 2k+ GitHub stars.",
    tags: ["TypeScript", "Rust", "CLI"],
    href: "#",
  },
];

/**
 * Work section: project cards with titles, descriptions, links.
 */
export function Work() {
  return (
    <Section id="work" title="Featured Work">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group rounded-xl border border-grey-200 bg-surface p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <h3 className="font-display mb-2 text-xl font-semibold text-typography group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mb-4 text-body text-typography-secondary leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-badge/50 px-3 py-1 text-caption text-typography-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
