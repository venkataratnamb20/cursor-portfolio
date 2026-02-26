import { Section } from "./Section";

/**
 * Contact section: email, social links.
 */
export function Contact() {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-8 text-body-lg text-typography-secondary">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities
          to be part of your vision.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            hello@example.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-grey-300 px-6 py-3 text-base font-medium text-typography transition-colors hover:border-primary hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-grey-300 px-6 py-3 text-base font-medium text-typography transition-colors hover:border-primary hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
