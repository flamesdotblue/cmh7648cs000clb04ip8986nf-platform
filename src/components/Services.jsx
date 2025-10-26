import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Calendar, Users, Star } from 'lucide-react';

function ServiceCard({ icon: Icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
    >
      <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-sky-400/10 via-indigo-400/10 to-transparent" />
      <div className="relative flex items-start gap-4">
        <div className="shrink-0 rounded-xl p-3 bg-sky-400/10 border border-sky-400/20 text-sky-200">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          <p className="mt-1 text-sm text-slate-300">{desc}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-1 text-amber-300/80">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="relative py-20 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[44rem] h-[44rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Orchestrating magic under a blue moon</h2>
          <p className="mt-3 text-slate-300">Full-service planning and design to make your moments glow.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={PartyPopper}
            title="Concept & Design"
            desc="Bespoke themes, mood boards, and spatial design with celestial palettes and textures."
            delay={0.05}
          />
          <ServiceCard
            icon={Calendar}
            title="Planning & Coordination"
            desc="Vendor sourcing, timelines, logistics, and run-of-show perfected to the minute."
            delay={0.15}
          />
          <ServiceCard
            icon={Users}
            title="Guest Experience"
            desc="Immersive journeys from invitations to afterglow, with thoughtful, human touches."
            delay={0.25}
          />
        </div>
      </div>
    </section>
  );
}
