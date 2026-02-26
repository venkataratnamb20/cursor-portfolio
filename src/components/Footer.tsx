const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "LinkedIn" },
  { label: "GitHub", href: "https://github.com", icon: "GitHub" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
];

const FOOTER_NAV = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

/**
 * Site footer with contact links, sitemap, and copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-grey-200 bg-background-alt">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-semibold text-typography">Portfolio</p>
            <p className="mt-1 text-caption text-typography-tertiary">
              Professional portfolio · Built with React & Tailwind
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <nav className="flex flex-wrap gap-6">
              {FOOTER_NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-caption text-typography-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption text-typography-tertiary hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-grey-200 pt-8">
          <p className="text-small text-typography-tertiary">
            © {year} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
