import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, GraduationCap, Heart, Shield, AlertCircle, TrendingUp } from 'lucide-react';

interface GoalNode {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number; // percentage in 500px viewBox
  y: number;
  cssPosition: string; // Tailwind absolute position class
  description: string;
}

const GOAL_NODES: GoalNode[] = [
  {
    id: 'home',
    label: 'Dream Home',
    icon: Home,
    x: 95,
    y: 85,
    cssPosition: 'top-[12%] left-[4%]',
    description: 'Plan for capital down payments and low-interest mortgage structures.'
  },
  {
    id: 'education',
    label: 'Education',
    icon: GraduationCap,
    x: 405,
    y: 85,
    cssPosition: 'top-[12%] right-[4%]',
    description: 'Build dedicated college funds to match international inflation curves.'
  },
  {
    id: 'retirement',
    label: 'Retirement',
    icon: TrendingUp,
    x: 440,
    y: 250,
    cssPosition: 'top-[47%] right-[0%]',
    description: 'Structure inflation-adjusted passive income for full life autonomy.'
  },
  {
    id: 'emergency',
    label: 'Emergency',
    icon: AlertCircle,
    x: 405,
    y: 415,
    cssPosition: 'bottom-[12%] right-[4%]',
    description: 'Reserve 6-12 months of living expenses in ultra-safe liquid reserves.'
  },
  {
    id: 'wealth',
    label: 'Wealth',
    icon: Shield,
    x: 95,
    y: 415,
    cssPosition: 'bottom-[12%] left-[4%]',
    description: 'Maximize compound returns via disciplined equity allocations.'
  },
  {
    id: 'legacy',
    label: 'Legacy',
    icon: Heart,
    x: 60,
    y: 250,
    cssPosition: 'top-[47%] left-[0%]',
    description: 'Smooth wealth transition through Will and Trust structuring.'
  }
];

export default function InteractiveEcosystem() {
  const [selectedGoal, setSelectedGoal] = useState<GoalNode | null>(null);
  const [hoveredGoal, setHoveredGoal] = useState<string | null>(null);

  // SVG Bezier curved connections from center (250, 250) to (x, y)
  const getCurvePath = (x: number, y: number) => {
    // Control points to create elegant curved paths out from the center
    const cx1 = 250 + (x - 250) * 0.5;
    const cy1 = 250;
    const cx2 = 250;
    const cy2 = y;
    return `M 250 250 C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x} ${y}`;
  };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px] select-none rounded-full p-4">
      
      {/* Background Soft Glows */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-teal/5 blur-3xl" />
        <div className="h-48 w-48 rounded-full bg-gold/5 blur-2xl" />
      </div>

      {/* SVG Connections Layer */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full pointer-events-none"
      >
        {GOAL_NODES.map((node) => {
          const isHovered = hoveredGoal === node.id;
          const isSelected = selectedGoal?.id === node.id;
          return (
            <g key={node.id}>
              {/* Gold backing curve */}
              <motion.path
                d={getCurvePath(node.x, node.y)}
                fill="none"
                stroke={isSelected || isHovered ? '#C5A880' : '#E5E5E0'}
                strokeWidth={isSelected || isHovered ? 2 : 1.25}
                strokeDasharray={node.id === 'emergency' ? '4 4' : 'none'}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: isSelected || isHovered ? 0.7 : 0.25 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              />
              {/* Highlight dash flow animation if selected */}
              {(isSelected || isHovered) && (
                <motion.path
                  d={getCurvePath(node.x, node.y)}
                  fill="none"
                  stroke="#0D5C63"
                  strokeWidth={2}
                  strokeDasharray="8 12"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -40 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Center Circle (YOUR Future) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-teal/15 bg-white shadow-lg ring-4 ring-cream/90"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-light/60">YOUR</span>
          <span className="font-serif text-lg font-bold text-teal leading-tight">Future</span>
          <div className="mt-1.5 h-1 w-1 rounded-full bg-gold" />
        </motion.div>
      </div>

      {/* Surrounding Goal Pills */}
      {GOAL_NODES.map((node, index) => {
        const Icon = node.icon;
        const isHovered = hoveredGoal === node.id;
        const isSelected = selectedGoal?.id === node.id;

        // Add subtle offset variations to floating animation based on index
        const floatDelay = index * 0.4;

        return (
          <div key={node.id} className={`absolute z-30 ${node.cssPosition}`}>
            <motion.button
              type="button"
              onMouseEnter={() => setHoveredGoal(node.id)}
              onMouseLeave={() => setHoveredGoal(null)}
              onClick={() => setSelectedGoal(selectedGoal?.id === node.id ? null : node)}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                delay: floatDelay,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`flex items-center space-x-2.5 rounded-full border px-4 py-2 text-xs font-semibold shadow-sm transition-all duration-200 ${
                isSelected
                  ? 'border-teal bg-teal text-white'
                  : isHovered
                  ? 'border-gold bg-cream text-slate'
                  : 'border-slate-light/10 bg-white text-slate hover:border-gold'
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isSelected ? 'text-white' : 'text-teal'}`} />
              <span>{node.label}</span>
            </motion.button>
          </div>
        );
      })}

      {/* Goal Info Popup Card */}
      <AnimatePresence>
        {selectedGoal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute bottom-[-15%] left-[5%] right-[5%] z-40 rounded-xl border border-slate-light/15 bg-white/95 p-4 shadow-xl backdrop-blur-md text-center"
          >
            <div className="flex items-center justify-between border-b border-slate-light/10 pb-2">
              <div className="flex items-center space-x-2">
                <selectedGoal.icon className="h-4 w-4 text-teal" />
                <h4 className="font-serif text-base font-bold text-slate">{selectedGoal.label}</h4>
              </div>
              <button
                onClick={() => setSelectedGoal(null)}
                className="rounded-full p-0.5 text-slate-light/50 hover:bg-cream hover:text-slate transition-colors"
              >
                <XButton />
              </button>
            </div>
            <p className="mt-2 text-left text-xs text-slate-light leading-relaxed">
              {selectedGoal.description}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <a
                href={`#goals`}
                onClick={() => setSelectedGoal(null)}
                className="text-[11px] font-bold text-teal hover:underline"
              >
                Learn planning details &rarr;
              </a>
              <a
                href="#contact"
                className="rounded-full bg-teal/10 hover:bg-teal/20 px-3 py-1 text-[10px] font-bold text-teal transition-colors"
              >
                Book Advice
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Small helper components
function XButton() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
