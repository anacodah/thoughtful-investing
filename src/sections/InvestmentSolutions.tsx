import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';

const PRODUCTS = [
  {
    id: 'mutual-funds',
    label: 'Mutual Funds',
    title: 'Mutual Funds',
    tagline: 'Diversified Growth',
    description:
      'Access a highly curated list of active and passive mutual funds spanning Large, Mid, Small Cap, Sectoral, and Multi-Asset strategies, tailored to your tax bracket and asset allocation guidelines.',
    features: [
      'Professional fund management',
      'High liquidity & transparency',
      'Tax-efficient compounding',
      'Low minimum investment sizes',
    ],
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'equity-etf',
    label: 'Equity & ETFs',
    title: 'Equity & ETFs',
    tagline: 'Direct Growth & Market Tracking',
    description:
      'Establish direct exposure to structural growth themes using Exchange Traded Funds that track broad indices at low expense ratios, backed by core direct stock portfolios.',
    features: [
      'Broad market indexing',
      'Intraday liquidity & pricing',
      'Minimal tracking error',
      'Cost-effective core allocation',
    ],
    image:
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'fixed-income',
    label: 'Fixed Income',
    title: 'Fixed Income',
    tagline: 'Stability & Predictability',
    description:
      'Anchor your portfolio with high-grade corporate bonds, government securities, state development loans, and debt mutual funds designed to provide consistent cash flows and volatility dampening.',
    features: [
      'Capital preservation focus',
      'Regular cash flow options',
      'Predictable returns',
      'Insulation from equity volatility',
    ],
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'smallcase',
    label: 'Smallcase',
    title: 'Smallcase',
    tagline: 'Thematic Direct Equity',
    description:
      'Invest in curated baskets of direct stocks and ETFs managed by registered research professionals. Experience transparent, theme-based equity investing without pooling of assets.',
    features: [
      'Direct stock ownership',
      'Full visibility & control',
      'No lock-in periods',
      'Thematic and sector-focused ideas',
    ],
    image:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'pms-aif',
    label: 'PMS & AIF',
    title: 'PMS & AIF',
    tagline: 'Bespoke High-Conviction Mandates',
    description:
      'Designed for HNIs and Ultra-HNIs, PMS offers concentrated portfolios with direct fund manager access, while AIFs offer exposure to pre-IPO equity, venture debt, and private credit strategies.',
    features: [
      'High-conviction concentrated picks',
      'Direct fund manager interaction',
      'Tailored tax-planning setups',
      'Strict SEBI category oversight',
    ],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'global',
    label: 'Global Investing',
    title: 'Global Investing',
    tagline: 'Geographical Risk Hedging',
    description:
      'Diversify beyond borders by investing in global markets and world-leading companies to create a truly international portfolio and hedge against domestic currency depreciation.',
    features: [
      'International Diversification',
      'Global Market Access',
      'Currency Diversification',
      'World-class Companies',
    ],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=900',
  },
];

export default function InvestmentSolutions() {
  const [activeId, setActiveId] = useState('global');

  const active = PRODUCTS.find((p) => p.id === activeId)!;

  return (
    <section
      id="investments"
      className="relative overflow-hidden bg-gradient-to-tr from-white via-cyan-500/[0.05] to-blue-600/[0.04] py-24 border-b border-slate-light/10"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/20 via-teal/10 to-transparent blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-blue-600/18 via-cyan-400/10 to-transparent blur-3xl opacity-75 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Investment Solutions"
          heading="Institutional-Grade Allocations"
          description="We provide comprehensive access to diverse asset classes. Our selection process is strictly qualitative and quantitative, ensuring low costs, maximum transparency, and optimal tax location."
        />

        {/* Tab Bar */}
        <div className="relative mb-10 flex items-center justify-center overflow-x-auto pb-px">
          <div className="flex items-center gap-0 border-b border-slate-light/15 w-full justify-center min-w-max">
            {PRODUCTS.map((product) => {
              const isActive = product.id === activeId;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveId(product.id)}
                  className={`relative shrink-0 px-5 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isActive
                      ? 'text-teal'
                      : 'text-slate-light hover:text-slate'
                  }`}
                >
                  {product.label}
                  {isActive && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] shimmer-gradient"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Left — Image */}
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-cyan-900/10 border border-cyan-500/10 aspect-[4/3] lg:aspect-auto lg:h-[420px]">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                initial={{ scale: 1.06, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right — Content */}
            <div className="space-y-6">
              {/* Eyebrow */}
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                {active.tagline}
              </p>

              {/* Title */}
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate leading-tight">
                {active.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-slate-light leading-relaxed font-normal">
                {active.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-3 pt-2">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-cyan-500 shadow-sm">
                      <Check className="h-3 w-3 text-white stroke-[3]" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal via-cyan-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white hover:from-teal-dark hover:via-teal hover:to-cyan-600 transition-all duration-300 shadow-sm shadow-cyan-500/20 hover:shadow-md"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
