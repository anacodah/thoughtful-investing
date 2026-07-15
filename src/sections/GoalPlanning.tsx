import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Home, TrendingUp, GraduationCap, Heart, Shield, AlertCircle } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import GoalCalculatorModal from '../components/calculators/GoalCalculatorModal';

const GOALS = [
  {
    id: 'dream-home',
    title: "Dream Home",
    icon: Home,
    tag: "🏡 Home Planner",
    description:
      "Establish a structured savings pool for your down payment and mortgage payments, ensuring your home purchase never compromises your other lifetime goals.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=900",
    cta: "Plan Your Home Goal",
  },
  {
    id: 'retirement',
    title: "Retirement Planning",
    icon: TrendingUp,
    tag: "📈 Retirement Tool",
    description:
      "Build a robust inflation-adjusted capital base to transition from active income to self-sustaining passive wealth, guaranteeing complete financial autonomy.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900",
    cta: "Design Your Retirement",
  },
  {
    id: 'education',
    title: "Child's Education",
    icon: GraduationCap,
    tag: "🎓 Education Fund",
    description:
      "Hedge against rising global education inflation by building target-date portfolios that mature exactly when college tuition payments commence.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=900",
    cta: "Secure Education Fund",
  },
  {
    id: 'wedding',
    title: "Child's Wedding",
    icon: Heart,
    tag: "💍 Wedding Planner",
    description:
      "Celebrate life's biggest milestones without financial stress through thoughtful long-term planning. Pre-fund with balanced allocation strategies.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=900",
    cta: "Plan Wedding Milestones",
  },
  {
    id: 'wealth-creation',
    title: "Wealth Creation",
    icon: Shield,
    tag: "💼 Wealth Builder",
    description:
      "Aggressive yet disciplined capital compounding designed to build generational wealth and achieve complete financial independence ahead of schedule.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=900",
    cta: "Accelerate Wealth",
  },
  {
    id: 'emergency-corpus',
    title: "Emergency Corpus",
    icon: AlertCircle,
    tag: "🛡️ Safety Net",
    description:
      "Construct a bulletproof safety net in high-liquidity, low-volatility instruments to protect your long-term equity assets from unplanned liquidations.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=900",
    cta: "Build Emergency Net",
  },
];

export default function GoalPlanning() {
  const [activeId, setActiveId] = useState<string>('wedding');
  const [activeCalculatorGoal, setActiveCalculatorGoal] = useState<string | null>(null);

  return (
    <section
      id="goals"
      className="relative overflow-hidden bg-gradient-to-br from-cream via-cyan-500/[0.08] via-50% to-blue-700/[0.07] py-24 border-b border-slate-light/10"
    >
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-teal/20 via-cyan-500/15 to-blue-600/10 blur-3xl opacity-85 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-cyan-400/25 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Goal Based Planning"
          heading="Invest with Purpose"
          description="We align your savings with concrete life milestones. By planning for each objective individually, we ensure that your cash flow requirements are covered exactly when they arrive."
        />

        {/* Accordion container */}
        <div className="flex flex-col md:flex-row gap-3 h-[700px] md:h-[480px]">
          {GOALS.map((goal) => {
            const isActive = activeId === goal.id;
            const Icon = goal.icon;

            return (
              <motion.div
                key={goal.id}
                layout
                onClick={() => setActiveId(goal.id)}
                animate={{ flex: isActive ? 5 : 1 }}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                className="relative overflow-hidden rounded-2xl cursor-pointer select-none"
                style={{ minWidth: 0 }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url(${goal.image})` }}
                />

                {/* Dark gradient overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${isActive
                      ? 'bg-gradient-to-t from-slate/90 via-slate/40 to-slate/10'
                      : 'bg-gradient-to-t from-slate/85 via-teal/40 to-slate/30'
                    }`}
                />

                {/* Turquoise-blue gradient accent at top */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] shimmer-gradient transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                {/* COLLAPSED STATE — rotated title */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 shadow-lg">
                        <Icon className="h-5 w-5 text-white drop-shadow" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* EXPANDED STATE — full content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                      className="absolute inset-0 flex flex-col justify-end p-7 md:p-9"
                    >
                      {/* Icon badge */}
                      <div className="mb-4 inline-flex items-center gap-1.5 self-start rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold text-white">
                        <Icon className="h-3.5 w-3.5 text-cyan-300" />
                        {goal.tag.replace(/^.{1,2}\s/, '')}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-3 drop-shadow-lg">
                        {goal.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-sm font-normal">
                        {goal.description}
                      </p>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={(e) => { e.stopPropagation(); setActiveCalculatorGoal(goal.id); }}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer"
                        >
                          {goal.tag}
                        </button>
                        <a
                          href="#contact"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-teal hover:bg-cyan-50 transition-colors shadow-sm"
                        >
                          Book Consultation
                        </a>
                      </div>

                      {/* Explore link */}
                      <a
                        href="#contact"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                      >
                        Explore Planning
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <GoalCalculatorModal 
        goalId={activeCalculatorGoal} 
        onClose={() => setActiveCalculatorGoal(null)} 
      />
    </section>
  );
}
