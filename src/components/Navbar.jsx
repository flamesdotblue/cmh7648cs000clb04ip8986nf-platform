import React from 'react';
import { Moon, Calendar, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/0 bg-[#030617]/40 supports-[backdrop-filter]:bg-[#030617]/40 backdrop-blur-xl border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2 select-none">
          <span className="relative">
            <Moon className="h-6 w-6 text-sky-300 group-hover:text-sky-200 transition-colors" />
            <span className="absolute inset-0 blur-lg opacity-40 bg-sky-500/40 rounded-full -z-10" />
          </span>
          <span className="font-semibold tracking-tight text-slate-100">Blue Moon Tales</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 hover:bg-sky-400 text-slate-900 font-medium px-4 py-2 transition-colors">
            <Calendar className="h-4 w-4" />
            Plan an Event
          </a>
          <a href="#contact" className="p-2 rounded-full border border-white/10 hover:border-sky-400/60 hover:text-sky-300 transition-all">
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
