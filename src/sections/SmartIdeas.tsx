import { motion } from 'framer-motion';
import { Lightbulb, Percent, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';

const SIP_POINTS = [
  'Invest more when markets are cheap',
  'Pull back automatically when overvalued',
  'Hands-free — runs inside your SIP portal',
  'Better long-term IRR, less panic',
];

const TAX_POINTS = [
  'Year-round tax-loss harvesting',
  'ELSS for Section 80C with growth upside',
  'Right assets in the right wrappers',
  'Capital gains rollover — Sec 54EC / 54F',
];

export default function SmartIdeas() {
  return (
    <section
      id="smart-ideas"
      className="relative overflow-hidden bg-gradient-to-br from-cream via-cyan-400/[0.10] via-40% to-blue-700/[0.09] py-24 border-b border-slate-light/10"
    >
      {/* Background blobs */}
      <div className="absolute top-[-20%] left-[-10%] -z-10 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-cyan-400/35 via-teal/20 to-blue-600/10 blur-3xl opacity-90 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] -z-10 h-[700px] w-[700px] rounded-full bg-gradient-to-tl from-blue-700/30 via-cyan-500/20 to-teal/10 blur-3xl opacity-85 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Smart Ideas"
          heading="Two ideas that move the needle"
          description="Beyond standard investing — tactical approaches that quietly compound your advantage over time."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Smart SIP */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="group relative flex flex-col rounded-2xl border border-cyan-500/10 bg-white/80 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-lg hover:shadow-cyan-500/8 hover:border-cyan-400/30 transition-all duration-300"
          >
            {/* Gradient top bar */}
            <div className="h-[3px] shimmer-gradient w-full" />

            <div className="flex flex-col flex-1 p-8 space-y-5">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-cyan-500 text-white shadow-sm">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate leading-tight">Smart SIP</h3>
                  <p className="text-[11px] font-semibold text-gold uppercase tracking-wider mt-0.5">
                    Valuation-linked investing
                  </p>
                </div>
              </div>

              {/* One-liner */}
              <p className="text-sm text-slate-light leading-relaxed">
                A regular SIP is blind to market valuation. Smart SIP isn't —
                it automatically increases allocation in downturns and trims during overheated markets.
              </p>

              {/* Points */}
              <ul className="space-y-2.5">
                {SIP_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-slate">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-4 mt-auto border-t border-slate-light/8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-gold transition-colors"
                >
                  Set up Smart SIP
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Smart Tax Planning */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative flex flex-col rounded-2xl border border-cyan-500/10 bg-white/80 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-lg hover:shadow-blue-500/8 hover:border-cyan-400/30 transition-all duration-300"
          >
            {/* Gradient top bar */}
            <div className="h-[3px] shimmer-gradient w-full" />

            <div className="flex flex-col flex-1 p-8 space-y-5">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-sm">
                  <Percent className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate leading-tight">Smart Tax Planning</h3>
                  <p className="text-[11px] font-semibold text-gold uppercase tracking-wider mt-0.5">
                    Maximise post-tax returns
                  </p>
                </div>
              </div>

              {/* One-liner */}
              <p className="text-sm text-slate-light leading-relaxed">
                It's not what your portfolio earns — it's what you keep.
                We structure your assets to legally reduce capital gains tax and compound more of what's yours.
              </p>

              {/* Points */}
              <ul className="space-y-2.5">
                {TAX_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-slate">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-4 mt-auto border-t border-slate-light/8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-gold transition-colors"
                >
                  Request a tax audit
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
