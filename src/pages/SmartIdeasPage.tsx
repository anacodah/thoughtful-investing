import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, PieChart, Landmark, ArrowRight, BarChart3, Activity, Calculator } from 'lucide-react';

const smartStrategies = [
  {
    id: 'smart-sip',
    title: 'Smart SIP',
    subtitle: 'Invest more when markets offer better value.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    content: (
      <div className="space-y-4 text-slate-light leading-relaxed">
        <p>While regular SIPs create discipline, Smart SIPs aim to take advantage of market corrections and attractive valuations. By deploying additional investments during periods of market pessimism, investors may potentially improve long-term returns without trying to predict short-term market movements.</p>
        <blockquote className="border-l-4 border-gold pl-4 italic text-slate/80 font-serif my-6">
          "Be fearful when others are greedy and greedy when others are fearful."
        </blockquote>
        <p>Instead of trying to predict market tops and bottoms, we follow a disciplined framework that identifies periods of market stress, valuation comfort, and investor pessimism to deploy additional capital when opportunities emerge.</p>

        <div className="mt-6 bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-4">
          <h4 className="font-bold text-slate mb-2">Framework Example:</h4>
          <div>
            <span className="font-bold text-teal">Regular Monthly SIP →</span> Always continues for your wealth building and to achieve your life goals.
          </div>
          <div>
            <span className="font-bold text-teal">Annual Step Up SIP →</span> Increase investments as income grows. Goal Accelerator SIPs systematically increase contributions to help achieve goals earlier and build a larger corpus.
          </div>
          <div>
            <span className="font-bold text-teal">Market Opportunity SIP →</span> Additional investments during corrections.
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'asset-allocation',
    title: 'Smart Asset Allocation',
    subtitle: 'Buy low and sell high through discipline.',
    icon: PieChart,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    content: (
      <div className="space-y-8 text-slate-light leading-relaxed">
        <div>
          <h4 className="flex items-center gap-2 font-bold text-slate text-lg mb-2">
            <BarChart3 className="h-5 w-5 text-teal" /> Asset Allocation Rebalancing
          </h4>
          <p>Markets often push portfolios away from their intended allocation. Periodic rebalancing helps investors reduce risk and potentially enhance long-term returns by booking gains from outperforming assets and reallocating to underperforming ones.</p>
        </div>

        <div>
          <h4 className="flex items-center gap-2 font-bold text-slate text-lg mb-2">
            <Activity className="h-5 w-5 text-teal" /> Making Windfalls Work
          </h4>
          <p className="font-medium text-slate/80 mb-1">Avoid investing large sums at the wrong time.</p>
          <p>For investors receiving bonuses, inheritances, business proceeds, or retirement benefits, a structured deployment strategy can help reduce timing risk while maintaining growth opportunities.</p>
        </div>

        <div>
          <h4 className="flex items-center gap-2 font-bold text-slate text-lg mb-2">
            <ShieldCheck className="h-5 w-5 text-teal" /> Downside Protection Framework
          </h4>
          <p className="font-medium text-slate/80 mb-1">Focus on preserving capital during difficult markets.</p>
          <p>Thoughtful risk management can be as important as return generation. Proper asset allocation and diversification can help investors stay invested through market cycles.</p>
        </div>
      </div>
    )
  }
];

export default function SmartIdeasPage() {
  const location = useLocation();
  const [activeStrategyId, setActiveStrategyId] = useState(smartStrategies[0].id);

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      if (smartStrategies.some(s => s.id === hashId)) {
        setActiveStrategyId(hashId);
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      }
    }
  }, [location.hash]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-teal/5 via-cream to-cyan-100/30"
    >

      {/* Dark Premium Header - matches Investments Page spacing */}
      <div className="pt-12 pb-12 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4 block">Strategic Advisory</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Smart Ideas</h1>
          <p className="text-cyan-100/80 text-lg md:text-xl font-light leading-relaxed">
            Advanced strategies for wealth accumulation, risk mitigation, and tax optimization to help you invest smarter.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 space-y-24">

        {/* Section 1: Smart Investing Strategies */}
        <section>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-slate">Smart Investing Strategies</h2>
            <div className="h-1 w-20 bg-gold mt-4 mx-auto md:mx-0 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Sidebar Navigation */}
            <div className="w-full lg:w-1/3 flex-shrink-0 sticky top-24">
              <div className="space-y-3">
                {smartStrategies.map((strategy) => {
                  const Icon = strategy.icon;
                  const isActive = activeStrategyId === strategy.id;

                  return (
                    <button
                      key={strategy.id}
                      onClick={() => setActiveStrategyId(strategy.id)}
                      className={`w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all text-left group ${isActive
                        ? 'bg-slate-900 shadow-md border-transparent text-white'
                        : 'bg-white border border-slate-200 text-slate hover:border-teal-500/30 hover:shadow-sm'
                        }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-white/10' : 'bg-slate-50 group-hover:bg-teal-50 text-teal-600'}`}>
                          <Icon className={`h-5 w-5 ${isActive ? 'text-gold' : ''}`} />
                        </div>
                        <span className={`font-semibold ${isActive ? '' : ''}`}>
                          {strategy.title}
                        </span>
                      </div>
                      {isActive && <ArrowRight className="h-4 w-4 text-white/50" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Display Area */}
            <div className="w-full lg:w-2/3">
              {smartStrategies.map((strategy) => {
                if (strategy.id !== activeStrategyId) return null;

                return (
                  <div key={strategy.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="h-64 w-full relative">
                      <img src={strategy.image} alt={strategy.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                        <h3 className="text-3xl font-serif font-bold text-white mb-2">{strategy.title}</h3>
                        <p className="text-white/90 font-medium">{strategy.subtitle}</p>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <div className="prose prose-slate max-w-none">
                        {strategy.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Smart Tax Planning */}
        <section>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-slate">Smart Tax Planning</h2>
            <div className="h-1 w-20 bg-gold mt-4 mx-auto md:mx-0 rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

              <div className="space-y-6 text-slate-light leading-relaxed">
                <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full mb-2">
                  <Landmark className="h-4 w-4" />
                  <span className="text-sm font-bold uppercase tracking-wider">Thoughtful Tax Planning</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate leading-tight">
                  Tax Harvesting & Tax Loss Harvesting
                </h3>
                <p>Tax harvesting and tax loss harvesting are two legal strategies to reduce taxable income. Tax harvesting involves selling and reinvesting to maximize long-term capital gains exemptions, while tax loss harvesting offsets gains by selling underperforming assets. Both strategies help reduce tax liability and optimize investment returns.</p>

                <div className="mt-8">
                  <h4 className="font-bold text-slate mb-3">Managing Investments with Tax Efficiency in Mind</h4>
                  <p className="mb-4">Thoughtful tax planning can help investors better understand the tax implications of their investment decisions. At Thoughtful Investing, we help investors understand concepts such as:</p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Tax Gain Harvesting</li>
                    <li>Tax Loss Harvesting</li>
                    <li>Capital Gains Tax Considerations</li>
                    <li>Tax-Efficient Investing Practices</li>
                  </ul>
                  <p className="mt-4 italic text-sm text-slate-500">Our objective is to help investors make informed decisions by understanding the tax aspects associated with their investments.</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Highlight Box for Exemption */}
                <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Calculator className="h-32 w-32" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2 text-gold">Reduce your LTCG taxes</h4>
                    <p className="text-sm text-white/80 mb-6">In 2018, a 10% long-term capital gains (LTCG) tax was introduced. The budget for 2024 further increased the LTCG tax rate to 12.5% for all classes of assets.</p>

                    <div className="bg-white/10 rounded-xl p-5 border border-white/20 mb-4">
                      <p className="font-bold text-lg text-cyan-300 mb-1">Rs. 1.25 Lakhs Exemption</p>
                      <p className="text-sm text-white/90">The first Rs. 1.25 Lakhs of LTCG is exempt from the 12.5% LTCG tax.</p>
                    </div>

                    <p className="text-sm text-white/80 leading-relaxed">
                      <strong>Tax Harvesting</strong> utilizes this Rs. 1.25 Lakh annual exemption by selling and buying back your investment such that you "realise" gains and not pay taxes on the exempt amount.
                    </p>

                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-medium">At a 12.5% rate, you could save up to <span className="text-gold font-bold">Rs 15,625</span> in LTCG taxes every year by doing this diligently.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                    <h5 className="font-bold text-green-800 mb-2">Tax Gain Harvesting</h5>
                    <p className="text-xs text-green-700/80 mb-2 font-semibold">Utilize available tax exemptions efficiently.</p>
                    <p className="text-xs text-green-900/70">Strategically booking gains and reinvesting can help reduce future tax liability while maintaining long-term investment exposure.</p>
                  </div>

                  <div className="bg-rose-50 border border-rose-100 rounded-xl p-5">
                    <h5 className="font-bold text-rose-800 mb-2">Tax Loss Harvesting</h5>
                    <p className="text-xs text-rose-700/80 mb-2 font-semibold">Turn market declines into tax-saving opportunities.</p>
                    <p className="text-xs text-rose-900/70">Temporary losses can be used to offset gains and reduce tax liability, improving post-tax returns.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
