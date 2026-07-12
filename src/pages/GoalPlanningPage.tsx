import React, { useState } from 'react';
import { Check, Target, Calculator, Clock, Briefcase, Activity, ShieldCheck, Car, ShoppingBag, Plane, GraduationCap, Home, Heart, TrendingUp, AlertCircle, Sparkles, MonitorSmartphone } from 'lucide-react';

const alignmentItems = [
  'Time Horizon',
  'Risk Capacity',
  'Liquidity Needs',
  'Tax Efficiency',
  'Goal Certainty'
];

const processSteps = [
  { icon: Target, title: 'Define the Goal', description: 'How much money will you need?' },
  { icon: Calculator, title: 'Calculate Future Cost', description: 'Account for inflation and rising expenses.' },
  { icon: Clock, title: 'Determine Time Horizon', description: '6 months, 2 years, 3 years, 5 years, 10 years, or 15 years.' },
  { icon: Briefcase, title: 'Select Suitable Investments', description: 'Based on risk and liquidity requirements.' },
  { icon: Activity, title: 'Monitor Progress', description: 'Track regularly and make adjustments if required.' },
  { icon: ShieldCheck, title: 'Protect the Goal', description: 'Gradually move assets to safer options as the goal approaches.' }
];

const shortTermGoals = [
  {
    title: 'Dream CAR',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    description: 'Plan for your next car or two-wheeler without disrupting long-term investments.'
  },
  {
    title: 'Major Purchases',
    icon: MonitorSmartphone,
    image: '/major-purchases.jpg',
    description: 'Furniture, gadgets, home renovation, or business equipment.'
  },
  {
    title: 'Travel & Vacations',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    description: 'Create a dedicated investment plan for domestic and international travel goals.'
  }
];

const lifeGoalsData = [
  {
    id: 'how-it-helps',
    title: 'How Thoughtful Investing Helps',
    icon: Sparkles,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">Every goal is unique, and so is the journey to achieve it.</p>
        <p>At <strong className="text-teal">Thoughtful Investing</strong>, we partner with you through every stage of life—understanding your aspirations, designing personalized strategies, monitoring progress, and making timely adjustments as circumstances evolve.</p>
        <div>
          <p className="font-bold text-slate mb-2">Our Process</p>
          <p className="text-teal font-semibold mb-4">Discover → Plan → Invest → Review → Achieve</p>
          <ul className="space-y-2">
            {['Understand your goals and priorities', 'Create a personalized financial roadmap', 'Recommend suitable investment solutions', 'Monitor progress regularly', 'Help you stay disciplined through market cycles'].map((item, i) => (
              <li key={i} className="flex items-start space-x-2"><Check className="h-4 w-4 text-teal shrink-0 mt-1" /><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Your goals. Our guidance. A thoughtful journey towards financial success."</p>
      </div>
    )
  },
  {
    id: 'education',
    title: "Children's Education",
    icon: GraduationCap,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">Every parent dreams of providing the best education for their children. However, rising education costs can make this goal challenging without proper planning.</p>
        <p>At Thoughtful Investing, we help you estimate future education expenses, create a personalized investment roadmap, and stay on track so your child can pursue their dreams without financial constraints.</p>
        <div>
          <p className="font-bold text-slate mb-4">Our approach includes:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Estimating future education costs</li>
            <li>Building a dedicated education corpus</li>
            <li>Periodic reviews and course corrections</li>
            <li>Balancing growth and risk over time</li>
          </ul>
        </div>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Because your child's aspirations deserve thoughtful planning today."</p>
      </div>
    )
  },
  {
    id: 'home',
    title: "Dream Home",
    icon: Home,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">Owning a home is one of life's most cherished milestones. Whether it's your first home, a larger family home, or a retirement retreat, careful financial planning can make the journey smoother.</p>
        <p>We help you determine how much to save, where to invest, and how to achieve your homeownership goals while maintaining overall financial stability.</p>
        <div>
          <p className="font-bold text-slate mb-4">Our approach includes:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Down payment planning</li>
            <li>Home loan affordability analysis</li>
            <li>Goal-based investment strategies</li>
            <li>Managing cash flows and timelines</li>
          </ul>
        </div>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Turning your dream address into reality through disciplined planning."</p>
      </div>
    )
  },
  {
    id: 'wedding',
    title: "Child's Wedding",
    icon: Heart,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">A child's wedding is a special occasion filled with joy, celebration, and cherished memories. It can also be one of the largest financial commitments for a family.</p>
        <p>We help you prepare well in advance so that the celebration remains memorable without creating financial stress.</p>
        <div>
          <p className="font-bold text-slate mb-4">Our approach includes:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Estimating future wedding expenses</li>
            <li>Creating a dedicated investment plan</li>
            <li>Balancing tradition with financial prudence</li>
            <li>Ensuring other goals remain unaffected</li>
          </ul>
        </div>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Celebrate life's special moments with confidence and peace of mind."</p>
      </div>
    )
  },
  {
    id: 'retirement',
    title: "Retirement Planning",
    icon: TrendingUp,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">Retirement is not about stopping work—it's about having the freedom to live life on your terms.</p>
        <p>Whether you envision traveling, pursuing hobbies, spending time with family, or simply enjoying financial independence, a well-planned retirement corpus is essential.</p>
        <p>We help you build a retirement strategy that aims to provide sustainable income and peace of mind throughout your golden years.</p>
        <div>
          <p className="font-bold text-slate mb-4">Our approach includes:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Retirement corpus estimation</li>
            <li>Inflation-adjusted planning</li>
            <li>Income generation strategies</li>
            <li>Regular monitoring and rebalancing</li>
          </ul>
        </div>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Because financial independence should last a lifetime."</p>
        <button className="mt-4 bg-gradient-to-r from-teal to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all">
          Retirement Planning Calculator →
        </button>
      </div>
    )
  },
  {
    id: 'emergency',
    title: "Emergency Fund",
    icon: AlertCircle,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">Life is unpredictable. Medical emergencies, job transitions, business disruptions, or unexpected expenses can occur when least expected.</p>
        <p>An emergency fund acts as your financial safety net, helping you navigate uncertainties without disturbing your long-term investments.</p>
        <p>We help you determine the right emergency corpus and structure it for easy access when needed.</p>
        <div>
          <p className="font-bold text-slate mb-4">Our approach includes:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Emergency fund assessment</li>
            <li>Liquidity planning</li>
            <li>Cash flow analysis</li>
            <li>Risk management strategies</li>
          </ul>
        </div>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Prepared today for the uncertainties of tomorrow."</p>
      </div>
    )
  },
  {
    id: 'travel-lifestyle',
    title: "Travel & Lifestyle Goals",
    icon: Plane,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">Whether it's an international vacation, a dream pilgrimage, a luxury purchase, or a once-in-a-lifetime experience, meaningful life experiences deserve thoughtful planning.</p>
        <p>We help you create a disciplined savings and investment strategy to achieve your lifestyle aspirations without compromising your financial future.</p>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Enjoy today while planning responsibly for tomorrow."</p>
      </div>
    )
  },
  {
    id: 'vehicle',
    title: "Vehicle Purchase",
    icon: Car,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">Buying a vehicle often represents convenience, comfort, and an important lifestyle milestone.</p>
        <p>We help you plan for your purchase in a financially efficient manner, balancing affordability, financing options, and your broader financial goals.</p>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Drive your dreams without derailing your finances."</p>
      </div>
    )
  },
  {
    id: 'wealth',
    title: "Wealth Creation",
    icon: ShieldCheck,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">Beyond specific goals, many investors aspire to build long-term wealth and financial freedom.</p>
        <p>Through disciplined investing, strategic asset allocation, and regular reviews, we help you grow your wealth while staying aligned with your risk profile and life objectives.</p>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Creating wealth with purpose, discipline, and clarity."</p>
      </div>
    )
  },
  {
    id: 'major-purchases',
    title: "Major Purchases",
    icon: ShoppingBag,
    content: (
      <div className="space-y-6">
        <p className="font-bold text-slate">Life is filled with milestones that often come with significant expenses—whether it's renovating your home, upgrading your furniture, buying premium gadgets, or investing in other important lifestyle purchases.</p>
        <p>Planning ahead allows you to achieve these goals without disrupting your long-term financial journey or relying on costly debt.</p>
        <p>We help you create a structured investment plan that aligns with your timeline, budget, and financial priorities.</p>
        <div>
          <p className="font-bold text-slate mb-4">Our Approach Includes:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Goal-based investment planning</li>
            <li>Estimating the required investment amount</li>
            <li>Time horizon and risk-based investment selection</li>
            <li>Regular progress tracking and plan review</li>
            <li>Helping you avoid unnecessary loans for planned purchases</li>
          </ul>
        </div>
        <p className="italic text-slate-light/80 border-l-4 border-gold pl-4 mt-6">"Because every milestone deserves thoughtful planning."</p>
      </div>
    )
  }
];

export default function GoalPlanningPage() {
  const [activeGoalId, setActiveGoalId] = useState(lifeGoalsData[0].id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal/5 via-cream to-cyan-100/30">
      {/* Page Header */}
      <div className="pt-12 pb-12 px-6 text-center border-b border-slate-light/5">
        <span className="text-xs font-bold uppercase tracking-wider text-teal">Our Approach</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate mt-3">Goal Based Planning</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 space-y-32">
        
        {/* Section: Why Every Goal Needs a Different Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-slate leading-tight">
              Why Every Goal Needs a <span className="text-teal">Different Strategy</span>
            </h2>
            
            <div className="space-y-3 text-slate-light/90 leading-relaxed">
              <p className="font-semibold text-slate text-lg">Most investors make one common mistake:</p>
              <p>They invest short-term money in long-term products.</p>
              <p>When markets become volatile near the goal date, the outcome becomes uncertain.</p>
            </div>
            
            <div className="pt-4">
              <p className="font-semibold text-slate mb-4">At Thoughtful Investing, we help align:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {alignmentItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2.5">
                    <div className="h-5 w-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-teal" />
                    </div>
                    <span className="text-slate-light text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 rounded-3xl blur-2xl opacity-40"></div>
             <div className="relative bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-950 border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl h-full flex flex-col justify-center overflow-hidden">
                {/* Decorative subtle overlay */}
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
                
                <div className="space-y-5 relative z-10">
                   <div className="h-1 w-10 bg-gold"></div>
                   <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">
                     "Investing without a goal is like driving without a destination."
                   </h3>
                   <p className="text-cream/80 italic text-sm">
                     We ensure every rupee in your portfolio has a specific purpose and timeline attached to it.
                   </p>
                </div>
             </div>
          </div>
        </div>

        {/* Section: Our Planning Process */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate mb-3">Our Planning Process</h2>
            <div className="h-1 w-12 bg-teal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col group">
                  <div className="absolute -top-6 -left-3 text-7xl font-serif font-black text-teal/5 z-0 transition-colors duration-500 group-hover:text-teal/10 select-none">
                    0{index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="h-8 w-8 rounded-full bg-white shadow-sm border border-slate-light/10 flex items-center justify-center text-teal shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg font-bold text-slate leading-tight">{step.title}</h3>
                    </div>
                    <p className="text-slate-light/80 text-sm leading-relaxed pl-11">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Short Term Goals */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate mb-3">Short Term Goals</h2>
            <div className="h-1 w-12 bg-teal mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-light">Targeted planning for goals achievable within 1 to 3 years.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shortTermGoals.map((goal, idx) => {
              const Icon = goal.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-light/10 group hover:shadow-lg transition-all duration-300">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src={goal.image} alt={goal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-teal">
                      <Icon className="h-5 w-5" />
                      <h3 className="font-bold text-lg text-slate">{goal.title}</h3>
                    </div>
                    <p className="text-sm text-slate-light/80 leading-relaxed">{goal.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Life Goal Planning */}
        <div className="space-y-12 border-t border-slate-light/10 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
             <div>
                <h2 className="text-3xl font-serif font-bold text-slate mb-3">Life Goal Planning</h2>
                <div className="h-1 w-12 bg-teal rounded-full"></div>
             </div>
             <button className="hidden md:inline-flex mt-4 md:mt-0 bg-gold text-slate font-bold px-6 py-2 rounded hover:bg-yellow-400 transition-colors shadow-sm">
                Plan Your Goals
             </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
             {/* Sidebar Navigation */}
             <div className="w-full lg:w-1/3 flex-shrink-0 sticky top-24 space-y-1">
               {lifeGoalsData.map((goal) => {
                 const Icon = goal.icon;
                 const isActive = activeGoalId === goal.id;
                 return (
                   <button
                     key={goal.id}
                     onClick={() => setActiveGoalId(goal.id)}
                     className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-left ${isActive ? 'bg-gradient-to-r from-teal to-cyan-700 text-white shadow-md' : 'hover:bg-white text-slate hover:text-teal'}`}
                   >
                     <Icon className={`h-4 w-4 ${isActive ? 'text-gold' : 'text-slate-light/60'}`} />
                     <span className="font-medium text-sm">{goal.title}</span>
                   </button>
                 );
               })}
               <button className="md:hidden mt-6 w-full bg-gold text-slate font-bold px-6 py-3 rounded hover:bg-yellow-400 transition-colors shadow-sm">
                  Plan Your Goals
               </button>
             </div>

             {/* Content Area */}
             <div className="w-full lg:w-2/3 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-light/10 min-h-[500px]">
               {lifeGoalsData.map((goal) => {
                 if (goal.id !== activeGoalId) return null;
                 const Icon = goal.icon;
                 return (
                   <div key={goal.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <div className="inline-flex items-center space-x-3 bg-slate-900 px-5 py-2.5 rounded-lg mb-8 shadow-sm">
                       <Icon className="h-5 w-5 text-gold" />
                       <h3 className="font-bold text-white text-lg m-0 leading-none">{goal.title}</h3>
                     </div>
                     <div className="text-slate-light leading-relaxed prose prose-slate">
                       {goal.content}
                     </div>
                   </div>
                 );
               })}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
