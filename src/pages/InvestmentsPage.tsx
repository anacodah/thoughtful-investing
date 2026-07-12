import React, { useState } from 'react';
import { PieChart, Landmark, TrendingUp, Briefcase, Globe, ArrowRight, ShieldAlert } from 'lucide-react';

const investmentProducts = [
  {
    id: 'mutual-funds',
    title: 'Mutual Funds',
    subtitle: 'Smarter Path to Long-Term Wealth',
    icon: PieChart,
    content: (
      <div className="space-y-5 text-slate-light leading-relaxed">
        <p>Mutual funds offer a convenient and cost-effective way to build a diversified portfolio across equity, debt, and other asset classes.</p>
        <p>At <strong className="text-slate">Thoughtful Investing</strong>, we take the time to understand your financial goals, investment horizon, and risk profile to help you identify suitable mutual fund solutions and adopt a disciplined approach towards achieving your long-term financial objectives.</p>
        <p>We provide access to a wide range of mutual fund schemes offered by leading Asset Management Companies (AMCs), enabling investors to choose from various investment categories based on their needs and preferences.</p>
      </div>
    )
  },
  {
    id: 'fixed-income',
    title: 'Fixed Income Products',
    subtitle: 'Income-Oriented Solutions for Stability and Diversification',
    icon: Landmark,
    content: (
      <div className="space-y-5 text-slate-light leading-relaxed">
        <p>Fixed income products can play an important role in a well-diversified portfolio by helping investors seek regular income, capital stability, and portfolio diversification.</p>
        <p>At <strong className="text-slate">Thoughtful Investing</strong>, we offer a seamless and paperless investment experience across a range of fixed income products, including Government Securities (G-Secs), State Development Loans (SDLs), Bank Fixed Deposits, and Corporate Fixed Deposits.</p>
        <p>Our team helps investors identify suitable fixed income solutions based on their financial goals, investment horizon, liquidity needs, and risk profile.</p>
      </div>
    )
  },
  {
    id: 'equity-etfs',
    title: 'Equity & ETFs',
    subtitle: 'Build Long-Term Wealth Through Equities and ETFs',
    icon: TrendingUp,
    content: (
      <div className="space-y-5 text-slate-light leading-relaxed">
        <p>Equities and Exchange Traded Funds (ETFs) provide investors with an opportunity to participate in the growth of businesses and the broader economy over the long term.</p>
        <p>At <strong className="text-slate">Thoughtful Investing</strong>, we offer a convenient digital investing experience across listed equities and ETFs. Our focus is on helping investors access diversified investment opportunities and make informed investment decisions aligned with their financial objectives.</p>
      </div>
    )
  },
  {
    id: 'alternatives',
    title: 'Smallcase, PMS & AIF',
    subtitle: 'Access Beyond Traditional Investments',
    icon: Briefcase,
    content: (
      <div className="space-y-5 text-slate-light leading-relaxed">
        <p>For investors seeking a broader investment universe, Thoughtful Investing facilitates access to a range of specialized third-party investment solutions.</p>
        <div className="space-y-4 mt-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate mb-1">Smallcase</h4>
            <p className="text-sm">Curated stock and ETF portfolios managed by registered professionals.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate mb-1">Portfolio Management Services (PMS)</h4>
            <p className="text-sm">Professionally managed investment portfolios tailored by SEBI-registered portfolio managers.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate mb-1">Alternative Investment Funds (AIFs)</h4>
            <p className="text-sm">Access to alternative strategies including Venture Capital, Private Equity, Long-Short, and other specialized investment approaches.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'global',
    title: 'Global Investing',
    subtitle: 'Access the World, Diversify Your Portfolio',
    icon: Globe,
    content: (
      <div className="space-y-5 text-slate-light leading-relaxed">
        <p>Today's investment opportunities extend far beyond national boundaries. Global investing provides access to international markets, companies, and themes that may not be available within India.</p>
        <p>Through international stocks, ETFs, mutual funds, and other global investment solutions, investors can diversify their portfolios across economies, sectors, and currencies.</p>
        <p>At <strong className="text-slate">Thoughtful Investing</strong>, we facilitate access to global investment opportunities and help investors navigate the various options, processes, and considerations involved in international investing.</p>
      </div>
    )
  }
];

export default function InvestmentsPage() {
  const [activeProductId, setActiveProductId] = useState(investmentProducts[0].id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal/5 via-cream to-cyan-100/30">
      {/* Dark Premium Header */}
      <div className="pt-12 pb-12 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4 block">Our Offerings</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Investment Solutions</h1>
          <p className="text-cyan-100/80 text-lg md:text-xl font-light leading-relaxed">
            Curated financial products designed to build, grow, and preserve your wealth across all market cycles.
          </p>
        </div>
      </div>

      {/* Main Content Area - Light Background */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/3 flex-shrink-0 sticky top-24">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6 px-2">Explore Solutions</h2>
            <div className="space-y-2">
              {investmentProducts.map((product) => {
                const Icon = product.icon;
                const isActive = activeProductId === product.id;
                
                return (
                  <button
                    key={product.id}
                    onClick={() => setActiveProductId(product.id)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all text-left group ${
                      isActive 
                        ? 'bg-white shadow-md border border-cyan-100 ring-1 ring-cyan-500/20' 
                        : 'hover:bg-white/50 border border-transparent text-slate hover:text-cyan-700'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-cyan-50 text-cyan-600' : 'bg-slate-100 text-slate-400 group-hover:bg-cyan-50 group-hover:text-cyan-600'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`font-semibold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {product.title}
                      </span>
                    </div>
                    {isActive && <ArrowRight className="h-4 w-4 text-cyan-500" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Display Area */}
          <div className="w-full lg:w-2/3">
            {investmentProducts.map((product) => {
              if (product.id !== activeProductId) return null;
              const Icon = product.icon;
              
              return (
                <div key={product.id} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-500">
                  <div className="inline-flex items-center space-x-3 bg-cyan-50/50 border border-cyan-100 px-4 py-2 rounded-full mb-6">
                    <Icon className="h-4 w-4 text-cyan-600" />
                    <span className="text-sm font-bold text-cyan-800 uppercase tracking-wider">{product.title}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate mb-8 leading-snug">
                    {product.subtitle}
                  </h3>
                  
                  <div className="prose prose-slate prose-lg max-w-none">
                    {product.content}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg flex items-center space-x-2">
                      <span>Discuss this solution</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Footnote / Disclaimer */}
        <div className="mt-24 max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex items-start space-x-4">
          <ShieldAlert className="h-6 w-6 text-slate-400 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-slate-700 mb-2">Our Advisory Role</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our role is to help investors understand available options, product structures, eligibility criteria, and associated risks, enabling informed investment decisions. All investments are subject to market risks. Please read all scheme related documents carefully.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
