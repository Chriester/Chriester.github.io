import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar modo claro/oscuro"
      className="text-lg leading-none p-2 rounded-lg text-accent hover:bg-dark/10 transition-colors"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-light/95 backdrop-blur-sm border-b border-line">
      <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="justify-self-start text-xl font-bold text-accent">
          Chris
        </a>

        <ul className="hidden md:flex items-center gap-6 justify-self-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text hover:text-brand transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 justify-self-end">
          <ThemeToggle />

          <button
            type="button"
            className="md:hidden text-accent p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <ul
        className={`md:hidden overflow-hidden transition-all duration-300 bg-dark-light ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {links.map((link) => (
          <li key={link.href} className="border-t border-line">
            <a
              href={link.href}
              className="block px-4 py-3 text-text hover:text-brand transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
