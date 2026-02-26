import { Section } from "./Section";

const SKILL_CATEGORIES = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    name: "Tools & Practices",
    skills: ["Git", "Docker", "CI/CD", "TDD", "Agile"],
  },
];

/**
 * Skills section: tech and domain highlights.
 */
export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 md:grid-cols-3">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.name}
            className="rounded-xl border border-grey-200 bg-surface p-6"
          >
            <h3 className="font-display mb-4 text-lg font-semibold text-primary">
              {category.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-grey-100 px-3 py-1.5 text-caption text-typography-secondary"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
