import React from 'react';
import { Moon, Calendar } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function NavBar() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030617]/60 backdrop-blur supports-[backdrop-filter]:bg-[#030617]/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <a href="#home" onClick={(e)=>handleClick(e,'#home')} className="group inline-flex items-center gap-2">
          <span className="relative">
            <Moon className="h-6 w-6 text-sky-300 transition-colors group-hover:text-sky-200" />
            <span className="absolute inset-0 -z-10 rounded-full bg-sky-500/30 blur-lg opacity-40" />
          </span>
          <span className="font-semibold tracking-tight text-slate-100">Blue Moon Tales</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e)=>handleClick(e,l.href)}
              className="text-sm text-slate-300 hover:text-sky-200 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={(e)=>handleClick(e,'#contact')}
          className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 hover:bg-sky-400 text-slate-900 font-medium px-4 py-2 transition-colors"
        >
          <Calendar className="h-4 w-4" />
          Get a Quote
        </a>
      </div>
    </header>
  );
}
