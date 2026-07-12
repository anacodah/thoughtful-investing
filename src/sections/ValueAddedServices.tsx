import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Landmark, FileCheck2, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'insurance',
    number: '01',
    icon: ShieldAlert,
    title: 'Insurance & Risk Mitigation',
    tagline: 'Protect what you build.',
    description:
      'Wealth creation is meaningless without wealth protection. We analyse your liabilities and dependencies to design coverage that fits your actual risk — not generic off-the-shelf plans.',
    items: [
      { name: 'Term Life Insurance', detail: 'Pure term plans sized to replace income and cover outstanding debt.' },
      { name: 'Super Top-up Medical', detail: 'Shields your corpus from healthcare costs and hospitalisation.' },
      { name: 'Global Health Cover', detail: 'For those who travel or seek treatment internationally.' },
      { name: 'Asset & General Insurance', detail: 'Protection for real estate, vehicles, and key business assets.' },
    ],
    gradient: 'linear-gradient(135deg, #062F33 0%, #0A4A52 40%, #0E7C86 100%)',
    accent: '#14B8C4',
    bgImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'loans',
    number: '02',
    icon: Landmark,
    title: 'Smarter Leverage & Credit',
    tagline: 'Access capital without selling.',
    description:
      'Liquidity when you need it, at rates that make sense. We structure debt so it works for your portfolio — not against it. No rushed sales, no missed compounding.',
    items: [
      { name: 'Home Loans', detail: 'New purchase financing, balance transfers, and rate optimisations.' },
      { name: 'Loan Against MF', detail: 'Instant liquidity against your portfolio without triggering tax events.' },
      { name: 'Premium Credit Advisory', detail: 'Tailored advice on high-reward spending and credit systems.' },
      { name: 'Short-term Credit', detail: 'Structured solutions for working capital or bridge financing.' },
    ],
    gradient: 'linear-gradient(135deg, #0E4C7A 0%, #1D6FA4 40%, #0E7C86 100%)',
    accent: '#67E8F9',
    bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'estate',
    number: '03',
    icon: FileCheck2,
    title: 'Estate Planning & Legacy',
    tagline: 'Leave no room for ambiguity.',
    description:
      'A clear legal framework for your assets ensures your legacy passes exactly as you intend — without family discord, legal delays, or tax inefficiency.',
    items: [
      { name: 'Will Drafting', detail: 'Legally enforceable Will outlining precise asset division.' },
      { name: 'Private Family Trusts', detail: 'Structured trusts for minor children or conditional inheritance.' },
      { name: 'Asset Documentation', detail: 'Centralised record of all holdings for seamless handover.' },
      { name: 'Succession Planning', detail: 'Multi-generational wealth strategy beyond a simple Will.' },
    ],
    gradient: 'linear-gradient(135deg, #0F2D5E 0%, #0E4C7A 40%, #0D5C63 100%)',
    accent: '#93C5FD',
    bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=900',
  },
];

export default function ValueAddedServices() {
  const [activeId, setActiveId] = useState('insurance');
  const active = SERVICES.find((s) => s.id === activeId)!;
  const ActiveIcon = active.icon;

  return (
    <section
      id="value-added"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-600/[0.04] to-cyan-500/[0.06] py-24"
    >
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl opacity-75 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-teal/15 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Value Added Services</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-slate leading-tight mt-3">
            Complete Financial <span className="gradient-text">Stewardship</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

          {/* ── Left Rail: Service Selectors ─────────── */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`group relative text-left rounded-2xl p-5 transition-all duration-300 overflow-hidden border ${
                    isActive
                      ? 'border-transparent shadow-lg'
                      : 'border-slate-light/10 bg-white/60 hover:border-cyan-400/20 hover:bg-white/80'
                  }`}
                  style={isActive ? { background: service.gradient } : {}}
                >
                  {/* Active shimmer top bar */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] shimmer-gradient" />
                  )}

                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-white/15 border border-white/20'
                          : 'bg-gradient-to-br from-teal/10 to-cyan-400/10 border border-cyan-500/10'
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${isActive ? 'text-white' : 'text-teal'}`}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <p
                        className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                          isActive ? 'text-white/50' : 'text-slate-light/50'
                        }`}
                      >
                        {service.number}
                      </p>
                      <h3
                        className={`font-serif text-base font-bold leading-tight ${
                          isActive ? 'text-white' : 'text-slate'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 font-medium ${
                          isActive ? '' : 'text-slate-light'
                        }`}
                        style={isActive ? { color: service.accent } : {}}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Right: Animated Detail Panel ─────────── */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-2xl h-full min-h-[380px]"
              >
                {/* Background photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ backgroundImage: `url(${active.bgImage})` }}
                />
                {/* Dark gradient overlay over the photo */}
                <div
                  className="absolute inset-0 opacity-[0.85] mix-blend-multiply"
                  style={{ background: active.gradient.replace('135deg', '160deg') }}
                />

                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                  {/* Top: icon + title */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/15 shadow-sm">
                      <ActiveIcon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                        {active.title}
                      </h3>
                      <p className="text-sm font-semibold mt-1" style={{ color: active.accent }}>
                        {active.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/70 leading-relaxed font-normal mb-8 max-w-xl">
                    {active.description}
                  </p>

                  {/* Service items as a 2-col grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    {active.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm"
                      >
                        <p className="text-sm font-semibold text-white mb-1">{item.name}</p>
                        <p className="text-xs text-white/55 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 self-start"
                    style={{ color: active.accent }}
                  >
                    Book a Consultation
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
