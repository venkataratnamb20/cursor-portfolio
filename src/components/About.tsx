import { Section } from "./Section";

/**
 * About section: bio, photo placeholder, brief intro.
 */
export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="aspect-square max-w-md overflow-hidden rounded-2xl bg-grey-200">
          <div className="flex h-full w-full items-center justify-center text-caption text-typography-tertiary">
            Your photo
          </div>
        </div>
        <div>
          <p className="mb-4 text-body text-typography leading-relaxed">
            I&apos;m a developer with a passion for crafting intuitive digital experiences.
            With expertise in front-end and full-stack development, I bring ideas to life
            through clean code and thoughtful design.
          </p>
          <p className="mb-6 text-body text-typography-secondary leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
            to open source, or sharing knowledge with the developer community.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-body font-medium text-primary hover:underline"
          >
            Let&apos;s connect →
          </a>
        </div>
      </div>
    </Section>
  );
}
