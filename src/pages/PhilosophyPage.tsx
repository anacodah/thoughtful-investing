import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, ShieldCheck, PieChart, Brain, Handshake } from 'lucide-react';
import { PHILOSOPHY_PRINCIPLES } from '../data/siteData';

const ICONS = [Target, TrendingUp, ShieldCheck, PieChart, Brain, Handshake];

export default function PhilosophyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(i);
          });
        },
        {
          rootMargin: '-30% 0px -30% 0px',
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-teal/5 via-cream to-cyan-100/30"
    >
      {/* Dark Premium Header */}
      <div className="pt-20 pb-20 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4 block">Our Philosophy</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Investing is <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">more than</span> products.
          </h1>
          <p className="text-cyan-100/80 text-lg md:text-xl font-light leading-relaxed mb-10">
            Every recommendation we make is guided by timeless investment principles that prioritise your goals, manage risk thoughtfully, and build wealth with patience.
          </p>
          
          {/* Philosophy Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white p-2"
          >
            <img 
              src="/philosophy-visual.png" 
              alt="Philosophy Diagram" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Philosophy Principles Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Sticky Progress Sidebar */}
          <div className="lg:w-1/3 shrink-0">
            <div className="sticky top-32 space-y-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate mb-2">Core Principles</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The foundational tenets that guide our asset allocation and advisory processes.
                </p>
              </div>
              
              <div className="space-y-4">
                {PHILOSOPHY_PRINCIPLES.map((principle, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <div 
                      key={i} 
                      className={`flex items-center gap-3 transition-colors duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70 cursor-pointer'}`}
                      onClick={() => {
                        const el = itemRefs.current[i];
                        if (el) {
                          const y = el.getBoundingClientRect().top + window.scrollY - 150;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                    >
                      <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${isActive ? 'bg-teal' : 'bg-slate-300'}`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
                        {principle.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Scrollable Principles List */}
          <div className="lg:w-2/3 space-y-12">
            {PHILOSOPHY_PRINCIPLES.map((principle, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={i}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 transition-shadow hover:shadow-md"
                >
                  <div className="flex gap-6">
                    <div className="shrink-0 pt-1">
                      <div className="h-12 w-12 rounded-2xl bg-teal/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-teal" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-slate">
                        {principle.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
