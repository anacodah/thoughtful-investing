import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  TrendingUp,
  ShieldCheck,
  PieChart,
  Brain,
  Handshake,
} from 'lucide-react';
import { PHILOSOPHY_PRINCIPLES } from '../data/siteData';

const ICONS = [Target, TrendingUp, ShieldCheck, PieChart, Brain, Handshake];

export default function Philosophy() {
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
          rootMargin: '-30% 0px -30% 0px', // triggers when item is in middle 40% of viewport
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="philosophy"
      className="relative bg-gradient-to-br from-white via-cyan-500/[0.05] to-blue-600/[0.04] border-b border-slate-light/10 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-cyan-400/20 via-teal/10 to-transparent blur-3xl opacity-80 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-600/15 via-cyan-400/10 to-transparent blur-3xl opacity-70 pointer-events-none -z-10" />

      {/* Thin turquoise accent on right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/*
          Flexbox row — default align-items:stretch makes BOTH columns
          the same height (= the taller right column), which gives the
          left column enough scroll-room for position:sticky to work.
        */}
        <div className="flex flex-col lg:flex-row">

          {/* ── Left: Sticky Heading ─────────────────── */}
          <div className="lg:w-5/12 py-24 lg:pr-12 shrink-0">
            <div className="sticky top-24 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
                Our Philosophy
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate leading-tight">
                Investing is{' '}
                <span className="gradient-text">more than</span>{' '}
                products.
              </h2>
              <p className="text-sm md:text-base text-slate-light leading-relaxed font-normal max-w-sm">
                Every recommendation we make is guided by timeless investment
                principles that prioritise your goals, manage risk thoughtfully,
                and build wealth with patience.
              </p>

              {/* Progress counter */}
              <div className="pt-2">
                <p className="text-xs text-slate-light/50 font-medium tracking-widest uppercase">
                  {String(activeIndex + 1).padStart(2, '0')} of{' '}
                  {String(PHILOSOPHY_PRINCIPLES.length).padStart(2, '0')}
                </p>
                <div className="flex gap-1.5 mt-2">
                  {PHILOSOPHY_PRINCIPLES.map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ width: i === activeIndex ? 28 : 8, opacity: i === activeIndex ? 1 : 0.25 }}
                      transition={{ duration: 0.3 }}
                      className="h-[3px] rounded-full shimmer-gradient"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: All Principles ────────────────── */}
          <div className="lg:w-7/12 lg:border-l lg:border-slate-light/10 lg:pl-14 py-24 divide-y divide-slate-light/8">
            {PHILOSOPHY_PRINCIPLES.map((principle, i) => {
              const Icon = ICONS[i];
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className={`py-10 first:pt-0 last:pb-0 border-l-2 pl-6 -ml-6 transition-colors duration-300 ${
                    isActive ? 'border-teal' : 'border-transparent'
                  }`}
                >
                  <div className="flex gap-5">
                    {/* Number */}
                    <span
                      className={`font-serif text-3xl font-bold leading-none shrink-0 select-none transition-colors duration-300 ${
                        isActive ? 'gradient-text' : 'text-slate-light/40'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 shrink-0 text-teal" />
                        <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight text-slate">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed font-normal text-slate-light">
                        {principle.description}
                      </p>
                      {isActive && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: 48 }}
                          transition={{ duration: 0.4 }}
                          className="h-[2px] shimmer-gradient rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
