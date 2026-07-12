import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Philosophy from './sections/Philosophy';
import GoalPlanning from './sections/GoalPlanning';
import InvestmentSolutions from './sections/InvestmentSolutions';
import SmartIdeas from './sections/SmartIdeas';
import ValueAddedServices from './sections/ValueAddedServices';
import Founder from './sections/Founder';
import Contact from './sections/Contact';
import WhatsAppButton from './components/ui/WhatsAppButton';
import GoalPlanningPage from './pages/GoalPlanningPage';
import InvestmentsPage from './pages/InvestmentsPage';
import SmartIdeasPage from './pages/SmartIdeasPage';
import ValueAddedPage from './pages/ValueAddedPage';

// Thin shimmer gradient line between sections
function SectionDivider() {
  return (
    <div className="relative h-[2px] w-full overflow-hidden">
      <div
        className="absolute inset-0 shimmer-gradient"
        style={{ opacity: 0.55 }}
      />
    </div>
  );
}

// main landing page layout
function LandingPage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Philosophy />
      <SectionDivider />
      <GoalPlanning />
      <SectionDivider />
      <InvestmentSolutions />
      <SectionDivider />
      <SmartIdeas />
      <SectionDivider />
      <ValueAddedServices />
      <SectionDivider />
      <Founder />
      <SectionDivider />
      <Contact />
    </>
  );
}

// simple premium template for legal compliance pages
interface LegalPageProps {
  title: string;
  lastUpdated: string;
  content: string[];
}

function LegalPage({ title, lastUpdated, content }: LegalPageProps) {
  return (
    <div className="bg-cream py-20 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 bg-white border border-slate-light/10 rounded-2xl p-8 md:p-12 shadow-sm text-left">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gold">Regulatory Compliance</span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate mt-2 mb-1">{title}</h1>
        <p className="text-xs text-slate-light/60 pb-6 border-b border-slate-light/10">Last Updated: {lastUpdated}</p>
        
        <div className="space-y-6 pt-6 text-sm text-slate-light leading-relaxed font-normal">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-cream selection:bg-teal/10 selection:text-teal overflow-x-hidden w-full max-w-[100vw]">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/goal-planning" element={<GoalPlanningPage />} />
            <Route path="/investments" element={<InvestmentsPage />} />
            <Route path="/smart-ideas" element={<SmartIdeasPage />} />
            <Route path="/value-added" element={<ValueAddedPage />} />
            <Route
              path="/privacy"
              element={
                <LegalPage
                  title="Privacy Policy"
                  lastUpdated="July 2026"
                  content={[
                    "At Thoughtful Investing, we prioritize the protection of your personal and financial data. This privacy policy details how we gather, store, and utilize details when you interact with our website or book consultation services.",
                    "We collect basic contact info (such as name, email, phone number, and financial planning goals) explicitly provided by you through our consultation lead form. We use this detail solely to contact you and customize our financial advisory offerings.",
                    "We do not share, sell, or disclose client details to third-party marketing entities. Information is only shared with regulatory platforms or financial institutions (like mutual fund houses or registrars) to execute transactions requested by you.",
                    "Our digital environments employ standard secure sockets layer (SSL) encryption protocol. You retain full rights to request auditing, correction, or removal of your contact details from our active outreach list at any time."
                  ]}
                />
              }
            />
            <Route
              path="/terms"
              element={
                <LegalPage
                  title="Terms of Service"
                  lastUpdated="July 2026"
                  content={[
                    "By accessing this website, you agree to comply with and be bound by the following terms and conditions of use. Please review them carefully.",
                    "The content on this website is for general educational and informational purposes only. It does not constitute specific investment advice, a solicitation to buy or sell securities, or an endorsement of any particular financial product.",
                    "Thoughtful Investing acts as an AMFI-registered Mutual Fund Distributor. Mutual Fund investments are subject to market risks, and we do not guarantee any specific portfolio outcomes or minimum asset growth rates.",
                    "All logo assets, textual copy, and layout materials on this platform are the intellectual property of Thoughtful Investing. Unauthorized duplication or redistribution of these assets is prohibited."
                  ]}
                />
              }
            />
            <Route
              path="/disclosure"
              element={
                <LegalPage
                  title="Regulatory Disclosures"
                  lastUpdated="July 2026"
                  content={[
                    "In compliance with AMFI and SEBI guidelines, Thoughtful Investing (ARN-189284) provides comprehensive disclosures regarding the commission models and transaction standards associated with mutual fund distribution.",
                    "We operate as a Mutual Fund Distributor and receive distribution commissions from Asset Management Companies (AMCs) for products distributed. These commissions are paid out of the scheme expense ratios and are disclosed transparently to clients prior to execution.",
                    "Commission structures vary across asset schemes (Equity, Debt, Hybrid, Liquid) and AMCs, ranging between 0.10% and 1.50% per annum on the assets under advisory. A detailed AMC-wise commission chart is available upon request at our BkC, Mumbai office.",
                    "Clients are under no obligation to transact through our distributor channel and may choose to invest directly in direct plans of mutual funds at AMC portals."
                  ]}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
