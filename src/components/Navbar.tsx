import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Miles', href: '#miles' },
  { label: 'Collection', href: '#collection' },
  { label: 'Journeys', href: '#journeys' },
  { label: 'Unseen NE', href: '#unseen' },
  { label: 'Private', href: '#private' },
  { label: 'Community', href: '#community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-900/90 backdrop-blur-md py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-ultra text-ivory-50">
            SILENT
          </span>
          <span className="font-display text-2xl tracking-ultra text-gold-gradient">
            MILES
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-mega text-ivory-200/70 transition-colors duration-300 hover:text-champagne-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full border border-champagne-400/50 px-6 py-2 text-xs font-semibold uppercase tracking-mega text-champagne-300 transition-all duration-300 hover:bg-champagne-400 hover:text-charcoal-900"
          >
            Start Journey
          </a>
        </div>

        <button
          className="text-ivory-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-charcoal-900/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-mega text-ivory-200/80 transition-colors hover:text-champagne-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-full border border-champagne-400/50 px-6 py-2 text-center text-xs font-semibold uppercase tracking-mega text-champagne-300"
            >
              Start Journey
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
