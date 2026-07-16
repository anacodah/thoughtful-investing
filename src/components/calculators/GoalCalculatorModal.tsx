import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { calculateFutureValue, calculateRequiredSIP, formatINR } from '../../utils/financialCalculations';

interface GoalCalculatorModalProps {
  goalId: string | null;
  onClose: () => void;
}

export default function GoalCalculatorModal({ goalId, onClose }: GoalCalculatorModalProps) {
  // Common state
  const [years, setYears] = useState<number>(10);
  const [expectedReturn, setExpectedReturn] = useState<number>(12); // 12% default
  const [inflation, setInflation] = useState<number>(6); // 6% default

  // Specific state
  const [currentCost, setCurrentCost] = useState<number>(2000000); // 20 Lakhs default
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000); // For wealth creation

  // Retirement specific
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [monthlyExpense, setMonthlyExpense] = useState<number>(50000);

  // Results
  const [futureValue, setFutureValue] = useState<number>(0);
  const [requiredSIP, setRequiredSIP] = useState<number>(0);

  // Set default values based on goal type when opened
  useEffect(() => {
    if (goalId === 'dream-home') {
      setCurrentCost(5000000); // 50L Downpayment
      setYears(5);
    } else if (goalId === 'education') {
      setCurrentCost(2500000); // 25L Higher Ed
      setYears(15);
      setInflation(8); // Edu inflation is higher
    } else if (goalId === 'wedding') {
      setCurrentCost(2000000); // 20L Wedding
      setYears(10);
    } else if (goalId === 'retirement') {
      setYears(30); // 60 - 30
    }
  }, [goalId]);

  // Calculations
  useEffect(() => {
    if (!goalId) return;

    if (goalId === 'wealth-creation') {
      // Wealth Creation: FV based on SIP
      const months = years * 12;
      const monthlyRate = expectedReturn / 100 / 12;
      let fv = 0;
      if (monthlyRate > 0) {
        fv = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
      } else {
        fv = monthlyInvestment * months;
      }
      setFutureValue(fv);
      setRequiredSIP(monthlyInvestment);
    } else if (goalId === 'retirement') {
      // Retirement: Calculate future monthly expense, then required corpus (assuming 4% withdrawal rate post-retirement)
      const yrsToRetirement = retirementAge - currentAge;
      if (yrsToRetirement > 0) {
        const futureMonthlyExpense = calculateFutureValue(monthlyExpense, inflation, yrsToRetirement);
        const yearlyExpenseInRetirement = futureMonthlyExpense * 12;
        const targetCorpus = yearlyExpenseInRetirement * 25; // 4% rule (100/4 = 25x yearly expense)

        setFutureValue(targetCorpus);
        setRequiredSIP(calculateRequiredSIP(targetCorpus, expectedReturn, yrsToRetirement));
      } else {
        setFutureValue(0);
        setRequiredSIP(0);
      }
    } else {
      // Home, Education, Wedding: PV -> FV -> SIP
      const fv = calculateFutureValue(currentCost, inflation, years);
      setFutureValue(fv);
      setRequiredSIP(calculateRequiredSIP(fv, expectedReturn, years));
    }
  }, [goalId, currentCost, years, expectedReturn, inflation, monthlyInvestment, currentAge, retirementAge, monthlyExpense]);

  if (!goalId) return null;

  const getTitle = () => {
    switch (goalId) {
      case 'dream-home': return 'Home Goal Planner';
      case 'retirement': return 'Retirement Calculator';
      case 'education': return 'Education Fund Calculator';
      case 'wedding': return 'Wedding Goal Planner';
      case 'wealth-creation': return 'Wealth Builder';
      default: return 'Goal Calculator';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 sm:p-8 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-white/10 rounded-xl">
                <Calculator className="h-6 w-6 text-cyan-300" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">{getTitle()}</h3>
                <p className="text-sm text-slate-300">Plan your financial future with precision.</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-300 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto bg-slate-50 flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Left: Inputs */}
              <div className="space-y-5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-2">Your Inputs</h4>

                {goalId === 'retirement' ? (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Current Age</label>
                      <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Retirement Age</label>
                      <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Current Monthly Expenses (₹)</label>
                      <input type="number" value={monthlyExpense} onChange={(e) => setMonthlyExpense(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                  </>
                ) : goalId === 'wealth-creation' ? (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Monthly Investment (SIP in ₹)</label>
                      <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Time Horizon (Years)</label>
                      <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Current Estimated Cost (₹)</label>
                      <input type="number" value={currentCost} onChange={(e) => setCurrentCost(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Years to Goal</label>
                      <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                  </>
                )}

                {/* Common Advanced Inputs */}
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-2 mb-4">Assumptions</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Expected Return (%)</label>
                      <input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                    {goalId !== 'wealth-creation' && (
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Inflation Rate (%)</label>
                        <input type="number" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Right: Results */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-teal border-b border-teal/10 pb-2 mb-6">Projections</h4>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-1">
                        {goalId === 'wealth-creation' ? 'Expected Corpus Built' : 'Target Corpus Needed'}
                      </p>
                      <p className="font-serif text-3xl font-bold text-slate-900">
                        {formatINR(futureValue)}
                      </p>
                      {goalId !== 'wealth-creation' && (
                        <p className="text-[10px] text-slate-400 mt-1">Adjusted for {inflation}% inflation</p>
                      )}
                    </div>

                    <div className="p-4 bg-teal/5 rounded-xl border border-teal/10">
                      <p className="text-xs text-teal-700 font-bold uppercase tracking-wider mb-1">
                        {goalId === 'wealth-creation' ? 'Your SIP' : 'Required Monthly SIP'}
                      </p>
                      <p className="font-serif text-2xl font-bold text-teal">
                        {formatINR(requiredSIP)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a href="/contact" className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-xl text-sm font-semibold transition-colors group">
                    Discuss with an Advisor
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200/60 px-3 py-2.5">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] leading-relaxed text-amber-700">
                        <strong>Indicative only.</strong> Results are based on assumed rates and do not account for market volatility. Actual returns may vary. Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
