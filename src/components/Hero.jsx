import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

function Starscape() {
  const stars = useMemo(
    () => Array.from({ length: 64 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      opacity: 0.4 + Math.random() * 0.6,
    })),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white/80"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, boxShadow: '0 0 6px rgba(125,211,252,0.5)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, s.opacity, 0.2] }}
          transition={{ duration: 3 + s.delay, repeat: Infinity, repeatType: 'mirror', delay: s.delay }}
        />
      ))}
    </div>
  );
}

function MoonOrb() {
  return (
    <motion.div
      className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full"
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200 via-indigo-100 to-slate-200" />
      <div className="absolute inset-0 rounded-full shadow-[inset_-50px_-80px_140px_rgba(2,6,23,0.45)]" />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(120px 120px at 70% 35%, rgba(2,6,23,0.45), transparent), radial-gradient(80px 80px at 30% 60%, rgba(2,6,23,0.35), transparent), radial-gradient(60px 60px at 60% 75%, rgba(2,6,23,0.28), transparent)'
        }}
      />
      <div className="absolute -inset-4 rounded-full blur-2xl bg-sky-400/20" />
      <motion.div
        className="absolute -right-10 top-10 h-16 w-16 rounded-full bg-sky-300/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32">
      <Starscape />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            Crafting moonlit experiences
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-br from-sky-200 via-sky-400 to-indigo-300 bg-clip-text text-transparent">Blue Moon Tales</span>
            <br />
            Event Management Studio
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-300">
            We design, plan, and orchestrate unforgettable stories under a serene blue moon — from intimate gatherings to grand galas.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-5 py-3 transition-colors">
              Start Your Tale
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-sky-300/60 hover:text-sky-200 px-5 py-3 transition-all">
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative z-10 flex justify-center lg:justify-end">
          <MoonOrb />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030617] to-transparent" />
    </section>
  );
}
