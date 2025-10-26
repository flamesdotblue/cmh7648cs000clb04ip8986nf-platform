import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030617] text-slate-100 selection:bg-sky-400/30 selection:text-sky-100">
      {/* Ambient blue moon glows */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 h-[44rem] w-[44rem] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/5 blur-[120px]" />
      </div>

      <NavBar />
      <main>
        <section id="home"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}
