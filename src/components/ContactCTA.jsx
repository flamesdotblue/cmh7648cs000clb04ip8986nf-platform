import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-8"
          >
            <h3 className="text-2xl font-bold">Let’s design your next chapter</h3>
            <p className="mt-2 text-slate-300">
              Share a few details and our team will reach out to craft a proposal tailor-made under the blue moon.
            </p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-sky-400 outline-none px-4 py-2.5 placeholder:text-slate-400" placeholder="Ada Lovelace" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-sky-400 outline-none px-4 py-2.5 placeholder:text-slate-400" placeholder="you@domain.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Event Details</label>
                <textarea rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-sky-400 outline-none px-4 py-2.5 placeholder:text-slate-400" placeholder="Tell us about your vision, date, and location." />
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="w-full sm:w-auto rounded-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-5 py-3 transition-colors">
                  Request Proposal
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xl font-semibold">Contact</h4>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-sky-300" /> hello@bluemoo ntales.com</li>
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky-300" /> +1 (555) 012-3456</li>
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-sky-300" /> 42 Crescent Ave, Aurora City</li>
              </ul>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold">Working Hours</h4>
              <p className="mt-2 text-slate-300">Mon - Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-slate-400">Weekends by appointment</p>
            </div>
            <div className="absolute -inset-0.5 -z-10 rounded-2xl opacity-40 bg-gradient-to-tr from-sky-400/10 via-indigo-400/10 to-transparent" />
          </motion.div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Blue Moon Tales. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-sky-300">Home</a>
            <a href="#services" className="hover:text-sky-300">Services</a>
            <a href="#contact" className="hover:text-sky-300">Contact</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactCTA;
