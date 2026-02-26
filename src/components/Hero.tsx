/**
 * Hero section: name, tagline, primary CTA.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center"
    >
      <p className="mb-4 text-caption font-medium uppercase tracking-widest text-primary">
        Welcome
      </p>
      <h1 className="font-display mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-typography md:text-5xl lg:text-6xl">
        Hi, I&apos;m Your Name
      </h1>
      <p className="mb-10 max-w-2xl text-body-lg text-typography-secondary">
        A passionate developer building elegant solutions. I create clean, user-focused
        experiences with modern technologies.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#work"
          className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-lg border-2 border-primary px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-primary/10"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
