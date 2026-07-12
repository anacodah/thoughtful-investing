import { motion } from 'framer-motion';
import {
  Compass,
  ClipboardList,
  PenTool,
  LayoutGrid,
  Activity,
  Trophy,
} from 'lucide-react';

const FRAMEWORK_STEPS = [
  {
    number: '01',
    icon: Compass,
    title: 'Understand',
    subtitle: 'Study Your Goals & Life Priorities',
    description:
      'Every investment journey begins with understanding what matters most to you — your timelines, aspirations, and non-negotiables.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Assess',
    subtitle: 'Know Your Risk Profile',
    description:
      'Every investor has a unique risk profile, financial situation, and emotional response to market fluctuations. We map yours precisely.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    subtitle: 'Build a Personalised Strategy',
    description:
      'Based on your goals and risk profile, we construct a customised investment roadmap — no templates, no off-the-shelf plans.',
  },
  {
    number: '04',
    icon: LayoutGrid,
    title: 'Build',
    subtitle: 'Create a Diversified Portfolio',
    description:
      'Once the strategy is finalised, we assemble a portfolio aligned to your financial objectives across asset classes.',
  },
  {
    number: '05',
    icon: Activity,
    title: 'Monitor',
    subtitle: 'Review, Track & Rebalance',
    description:
      'Markets evolve and life circumstances change. We continuously review performance and rebalance to keep you on course.',
  },
  {
    number: '06',
    icon: Trophy,
    title: 'Achieve',
    subtitle: 'Stay Focused on Long-Term Success',
    description:
      'The objective is not simply returns — it is achieving lasting financial independence and leaving a meaningful legacy.',
  },
];

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden py-24 border-b border-white/10"
      style={{ background: 'linear-gradient(135deg, #062F33 0%, #0A4A52 20%, #0D5C63 40%, #0E4C7A 65%, #0F2D5E 85%, #0A1A3E 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-cyan-400/30 via-teal/20 to-transparent blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-400/15 to-transparent blur-3xl opacity-55 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-teal/15 via-cyan-400/10 to-blue-600/15 blur-3xl opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">

        {/* ── About Us + Mission ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20"
        >
          {/* Left — About */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              About Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Making Every Investment{' '}
              <span style={{ background: 'linear-gradient(135deg, #14B8C4, #67E8F9, #93C5FD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>A Thoughtful One</span>
            </h2>
            <p className="text-sm md:text-base text-cyan-100/80 leading-relaxed font-normal">
              At Thoughtful Investing, we are committed to helping investors make informed decisions through suitable mutual fund solutions. We serve India's diverse investor community by offering transparent, goal-based options and personalised support at every stage of their investment journey.
            </p>
            <div className="h-[3px] w-16 shimmer-gradient rounded-full" />
          </div>

          {/* Right — Mission */}
          <div className="lg:col-span-7 flex items-center">
            <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.07] backdrop-blur-sm p-8 w-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] shimmer-gradient" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 block mb-3">
                Our Mission
              </span>
              <p className="font-serif text-xl sm:text-2xl font-medium text-white leading-snug">
                "To help every investor make thoughtful decisions by providing transparent mutual fund solutions, personalised support, and a disciplined approach to long-term wealth creation."
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Framework Header ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Our Process</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            The{' '}
            <span style={{ background: 'linear-gradient(135deg, #14B8C4, #67E8F9, #93C5FD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Thoughtful Investing</span>{' '}
            Framework
          </h3>
          <p className="text-sm md:text-base text-cyan-100/70 max-w-2xl mx-auto leading-relaxed font-normal">
            Successful investing is not about predicting markets or chasing short-term returns. It's about disciplined decisions, clear goals, and a proven process that holds through all market conditions.
          </p>
        </motion.div>

        {/* ── Framework Steps Grid ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FRAMEWORK_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative flex flex-col rounded-2xl border border-cyan-400/15 bg-white/[0.08] backdrop-blur-sm p-7 hover:border-cyan-400/40 hover:bg-white/[0.12] hover:shadow-lg hover:shadow-cyan-400/15 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient top bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] shimmer-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Step number + icon row */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-serif text-4xl font-bold leading-none select-none"
                    style={{
                      background: 'linear-gradient(135deg, #14B8C4, #67E8F9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {step.number}
                  </span>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-700 via-cyan-800 to-blue-900 text-cyan-100 shadow-sm group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-shadow duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-serif text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {step.title}
                </h4>
                <p className="text-[11px] font-semibold text-cyan-300/80 uppercase tracking-wider mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-cyan-100/65 leading-relaxed font-normal">
                  {step.description}
                </p>

                {/* Connector line (visible on lg, right side of cols 1-2 in each row) */}
                {index % 3 !== 2 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[50%] w-6 h-[1px] bg-gradient-to-r from-cyan-400/50 to-transparent z-10" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
