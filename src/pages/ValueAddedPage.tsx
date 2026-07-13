import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, HeartPulse, Car, Landmark, FileText, ShieldAlert, ShieldCheck, Plane, Home, CreditCard, BadgeIndianRupee, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

/* ─────────────── Insurance Content ─────────────── */
function InsuranceContent() {
  return (
    <div className="space-y-10">

      {/* Life & Health — two column visual */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Life Insurance */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-teal/10 rounded-xl"><Shield className="h-5 w-5 text-teal" /></div>
            <h3 className="font-serif text-lg font-bold text-slate-800">Life Insurance</h3>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            Adequate life cover tailored to your financial goals — from pure term plans to ULIPs — ensuring your family's security and tax savings.
          </p>
          <div className="space-y-2">
            {['Pure Term Plan', 'Return of Premium Plan', 'Unit Linked Insurance (ULIP)', 'Tax savings on premiums paid'].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Health Insurance */}
        <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-rose-100 rounded-xl"><HeartPulse className="h-5 w-5 text-rose-500" /></div>
            <h3 className="font-serif text-lg font-bold text-slate-800">Health Insurance</h3>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            Protection against rising medical costs and critical illness — with significant tax deductions under Sec 80D.
          </p>
          {/* Tax stat pills */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-rose-100">
              <span className="text-xs text-slate-500 font-medium">Self / Spouse / Children</span>
              <span className="text-sm font-bold text-rose-600">₹25,000 deduction</span>
            </div>
            <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-rose-100">
              <span className="text-xs text-slate-500 font-medium">Parents (60+ years)</span>
              <span className="text-sm font-bold text-rose-600">₹50,000 deduction</span>
            </div>
            <p className="text-xs text-slate-400 italic pl-1">Under Section 80D, Income Tax Act</p>
          </div>
        </div>

      </div>

      {/* General Insurance — icon grid */}
      <div>
        <h3 className="font-serif text-lg font-bold text-slate-800 mb-4">General Insurance</h3>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { icon: Car, label: 'Motor', color: 'bg-blue-50 text-blue-600' },
            { icon: Plane, label: 'Travel', color: 'bg-sky-50 text-sky-600' },
            { icon: Home, label: 'Home', color: 'bg-amber-50 text-amber-600' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className={`flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 bg-white`}>
              <div className={`p-2.5 rounded-lg ${color}`}><Icon className="h-5 w-5" /></div>
              <span className="text-xs font-semibold text-slate-700">{label}</span>
            </div>
          ))}
        </div>

        {/* New India Assurance compact */}
        <div className="bg-slate-900 rounded-2xl p-5 text-white">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-gold font-bold text-sm">NEW INDIA ASSURANCE</p>
              <p className="text-slate-400 text-xs">India's Premier Multinational</p>
            </div>
            <ShieldCheck className="h-6 w-6 text-teal/60" />
          </div>
          <div className="flex flex-wrap gap-2">
            {['Shopkeepers', 'FIRE', 'Overseas Travel', 'Marine', 'D&O Liability', 'Cyber', 'Student Safety'].map(item => (
              <span key={item} className="text-xs bg-white/10 text-slate-300 px-2.5 py-1 rounded-full border border-white/10">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-400 italic border-t border-slate-100 pt-4">
        Insurance is the subject matter of solicitation. Information provided is for educational purposes only.
      </p>
    </div>
  );
}

/* ─────────────── Loans Content ─────────────── */
function LoansContent() {
  const loanTypes = [
    { icon: Home, label: 'Home Loans', desc: 'Finance your dream home with competitive rates', color: 'bg-teal-50 text-teal' },
    { icon: CreditCard, label: 'Personal Loans', desc: 'Quick access to funds for any personal need', color: 'bg-blue-50 text-blue-600' },
    { icon: Landmark, label: 'Loan Against MF', desc: 'Leverage your portfolio without selling investments', color: 'bg-purple-50 text-purple-600' },
    { icon: TrendingUp, label: 'Balance Transfer', desc: 'Switch to better interest rates effortlessly', color: 'bg-amber-50 text-amber-600' },
    { icon: CreditCard, label: 'Credit Cards', desc: 'Smart credit with rewards and cashback', color: 'bg-rose-50 text-rose-500' },
  ];

  return (
    <div className="space-y-6">
      <p className="text-slate-500 text-sm leading-relaxed">
        Access the right financing through our digital platform and lending partners — compare offers from leading institutions in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {loanTypes.map(({ icon: Icon, label, desc, color }) => (
          <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className={`p-2.5 rounded-xl shrink-0 ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-800 text-sm">{label}</p>
              <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-teal/5 to-cyan-400/5 border border-teal/15 rounded-2xl p-5 flex items-center gap-4">
        <div className="p-3 bg-teal/10 rounded-xl shrink-0">
          <Users className="h-5 w-5 text-teal" />
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Our advisors help you compare eligible offers across lenders and choose the solution best suited to your financial profile.
        </p>
      </div>
    </div>
  );
}

/* ─────────────── Estate Planning Content ─────────────── */
function EstatePlanningContent() {
  const steps = [
    {
      icon: FileText,
      step: '01',
      title: 'Create a Will',
      desc: 'A legally valid document defining how your assets are distributed — avoiding family disputes and legal delays.',
    },
    {
      icon: ShieldAlert,
      step: '02',
      title: 'Set Up a Trust',
      desc: 'A structured vehicle to hold and transfer assets to beneficiaries, offering control and tax advantages.',
    },
    {
      icon: ShieldCheck,
      step: '03',
      title: 'Nomination Registration',
      desc: 'Ensure every financial account, policy, and investment has correct nominations to enable smooth inheritance.',
    },
  ];

  return (
    <div className="space-y-6">
      <p className="text-slate-500 text-sm leading-relaxed">
        Estate planning ensures your wealth passes to the right people at the right time — minimizing legal delays, taxes, and family conflict.
      </p>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map(({ icon: Icon, step, title, desc }) => (
          <div key={step} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="text-[10px] font-black text-slate-300 tracking-wider">{step}</span>
              <div className="p-2.5 bg-teal/10 rounded-xl">
                <Icon className="h-4 w-4 text-teal" />
              </div>
            </div>
            <div className="pt-1">
              <p className="font-semibold text-slate-800 text-sm mb-1">{title}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA note */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-5 flex items-center gap-4">
        <BadgeIndianRupee className="h-8 w-8 text-gold shrink-0" />
        <div>
          <p className="text-white text-sm font-semibold">Will Writing via Legal Experts</p>
          <p className="text-slate-400 text-xs mt-1">We connect you with competent attorneys to draft your will professionally. Contact us to get started.</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Page ─────────────── */
const tabs = [
  { id: 'insurance', label: 'Insurance', icon: ShieldCheck, image: '/insurance.jpg', content: <InsuranceContent /> },
  { id: 'loans', label: 'Loans', icon: Landmark, image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=900', content: <LoansContent /> },
  { id: 'estate-planning', label: 'Estate Planning', icon: FileText, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=900', content: <EstatePlanningContent /> },
];

export default function ValueAddedPage() {
  const [activeId, setActiveId] = useState('insurance');
  const active = tabs.find(t => t.id === activeId)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-teal/5 via-cream to-cyan-100/30"
    >
      {/* Dark Premium Header */}
      <div className="pt-12 pb-12 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4 block">Beyond Investments</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Value Added Services</h1>
          <p className="text-cyan-100/80 text-lg md:text-xl font-light leading-relaxed">
            Comprehensive financial solutions including insurance, financing, and estate planning to protect and preserve your legacy.
          </p>
        </div>
      </div>

      {/* Centered horizontal tab bar */}
      <div className="bg-white/70 backdrop-blur-md border-b border-slate-200/60 sticky top-[64px] z-20">
        <div className="flex justify-center gap-1 py-3 px-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8"
          >
            {/* Image panel */}
            <div className="relative lg:w-[38%] shrink-0 rounded-2xl overflow-hidden h-60 lg:h-auto min-h-[300px] group">
              <img
                src={active.image}
                alt={active.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-serif text-xl font-bold">{active.label}</p>
                <p className="text-white/70 text-xs mt-1">{tabs.find(t => t.id === activeId)?.label === 'Insurance' ? 'Life · Health · General' : tabs.find(t => t.id === activeId)?.label === 'Loans' ? 'Home · Personal · MF · Credit' : 'Will · Trust · Nomination'}</p>
              </div>
            </div>

            {/* Content panel */}
            <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 overflow-y-auto max-h-[600px]">
              {active.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
