export interface NavItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string; description?: string }[];
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export interface GoalItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  ctaText: string;
}

export interface InvestmentProduct {
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

export interface ServiceCategory {
  title: string;
  description: string;
  services: string[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Philosophy', href: '/philosophy' },
  {
    label: 'Goal Based Planning',
    href: '/goal-planning',
    dropdownItems: [
      { label: 'Dream Home', href: '#goals-home', description: 'Plan and secure the capital for your primary residence or vacation home.' },
      { label: 'Retirement Planning', href: '#goals-retirement', description: 'Build a corpus to maintain your lifestyle and independence post-career.' },
      { label: "Children's Education", href: '#goals-education', description: 'Fund higher education at top-tier global institutions without stress.' },
      { label: "Children's Wedding", href: '#goals-wedding', description: 'Prepare for your children’s milestone events in a structured manner.' },
      { label: 'Wealth Creation', href: '#goals-wealth', description: 'Grow your purchasing power through disciplined equity compounding.' },
      { label: 'Emergency Corpus', href: '#goals-emergency', description: 'Secure 6-12 months of living expenses in highly liquid, safe assets.' },
      { label: 'Short-term Goals', href: '#goals-shortterm', description: 'Capital preservation strategies for horizons of less than 3 years.' }
    ]
  },
  {
    label: 'Investments',
    href: '/investments',
    dropdownItems: [
      { label: 'Mutual Funds', href: '#inv-mutual-funds', description: 'Diversified portfolios managed by professional fund houses.' },
      { label: 'Equity & ETF', href: '#inv-equity', description: 'Direct participation in corporate growth with broad market indices.' },
      { label: 'Fixed Income', href: '#inv-fixed-income', description: 'High-grade bonds and fixed yield papers for capital preservation.' },
      { label: 'Smallcase', href: '#inv-smallcase', description: 'Thematic, transparent portfolios of direct equities and ETFs.' },
      { label: 'PMS', href: '#inv-pms', description: 'Portfolio Management Services for customized, high-conviction portfolios.' },
      { label: 'AIF', href: '#inv-aif', description: 'Alternative Investment Funds offering unique long-short or real estate strategies.' },
      { label: 'Global Investing', href: '#inv-global', description: 'Geographical diversification across US equities and international index funds.' }
    ]
  },
  {
    label: 'Smart Ideas',
    href: '/smart-ideas',
    dropdownItems: [
      { label: 'Smart SIP', href: '#smart-sip', description: 'Optimized systematic investment plans utilizing market valuations.' },
      { label: 'Smart Tax Planning', href: '#smart-tax', description: 'Legally minimize tax liabilities while building wealth via ELSS, PPF, etc.' }
    ]
  },
  {
    label: 'Value Added Services',
    href: '/value-added-services',
    dropdownItems: [
      { label: 'Insurance', href: '#vas-insurance', description: 'Comprehensive risk coverage through Life, Medical, and General insurance.' },
      { label: 'Loans', href: '#vas-loans', description: 'Mortgages, Personal, and Leverage against existing mutual funds.' },
      { label: 'Estate Planning', href: '#vas-estate', description: 'Will drafting and documentation to ensure seamless inheritance.' }
    ]
  },
  { label: 'Contact', href: '/contact' }
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    title: 'Goal-First Investing',
    description: 'We believe money is a tool to achieve life outcomes. We never select an investment product until we have clearly defined the goal, the horizon, and the required rate of return.'
  },
  {
    title: 'Long-Term Wealth Creation',
    description: 'True wealth compounding is silent and slow. We guide clients away from short-term market noise, trading frenzies, and speculative fads to focus on long-term compound interest.'
  },
  {
    title: 'Risk Before Return',
    description: 'Managing downside risk is our highest priority. By understanding your cash flow dependencies and risk tolerance, we ensure your portfolio can withstand market drawdowns without forcing premature liquidations.'
  },
  {
    title: 'Diversification Matters',
    description: 'Asset allocation is the single most important driver of portfolio returns and volatility. We balance assets across domestic equities, global equities, fixed income, and alternative strategies.'
  },
  {
    title: 'Discipline Over Emotion',
    description: 'The investor behavior gap is the greatest destroyer of wealth. We act as behavioral coaches, keeping you committed during market panics and keeping you grounded during market bubbles.'
  },
  {
    title: 'Trust & Transparency',
    description: 'We disclose all commissions, fees, and product details upfront. Our advice is aligned with your long-term success, and we build relations meant to span generations.'
  }
];

export const GOALS: GoalItem[] = [
  {
    id: 'dream-home',
    title: 'Dream Home',
    iconName: 'Home',
    description: 'Establish a structured savings pool for your down payment and subsequent mortgage payments, ensuring your home purchase does not compromise other lifetime goals.',
    ctaText: 'Plan Your Home Goal'
  },
  {
    id: 'retirement',
    title: 'Retirement Planning',
    iconName: 'TrendingUp',
    description: 'Build a robust inflation-adjusted capital base to transition from active income to self-sustaining passive wealth, guaranteeing complete financial autonomy.',
    ctaText: 'Design Your Retirement'
  },
  {
    id: 'education',
    title: "Children's Education",
    iconName: 'GraduationCap',
    description: 'Hedge against rising global education inflation by building target-date portfolios that mature exactly when college tuition payments commence.',
    ctaText: 'Secure Education Fund'
  },
  {
    id: 'wedding',
    title: "Children's Wedding",
    iconName: 'Heart',
    description: 'Pre-fund family milestone celebrations through balanced allocation strategies, avoiding high-interest debt or emergency capital depletion.',
    ctaText: 'Plan Wedding Milestones'
  },
  {
    id: 'wealth-creation',
    title: 'Wealth Creation',
    iconName: 'Shield',
    description: 'Aggressive yet disciplined capital compounding designed to build generational wealth and achieve complete financial independence ahead of schedule.',
    ctaText: 'Accelerate Wealth'
  },
  {
    id: 'emergency-corpus',
    title: 'Emergency Corpus',
    iconName: 'AlertCircle',
    description: 'Construct a bulletproof safety net in high-liquidity, low-volatility instruments to protect your long-term equity assets from unplanned liquidations.',
    ctaText: 'Build Emergency Net'
  },
  {
    id: 'short-term',
    title: 'Short-term Goals',
    iconName: 'Calendar',
    description: 'Preserve capital for near-term requirements (travel, tax payouts, asset purchases) using ultra-short bonds and systematic liquid funds.',
    ctaText: 'Set Short-term Targets'
  }
];

export const INVESTMENT_PRODUCTS: InvestmentProduct[] = [
  {
    title: 'Mutual Funds',
    tagline: 'Diversified Growth',
    description: 'Access a highly curated list of active and passive mutual funds spanning Large, Mid, Small Cap, Sectoral, and Multi-Asset strategies, tailored to match your specific tax bracket and asset allocation guidelines.',
    features: ['Professional fund management', 'High liquidity & transparency', 'Tax-efficient compounding', 'Low minimum investment sizes']
  },
  {
    title: 'Equity & ETFs',
    tagline: 'Direct Growth and Market Tracking',
    description: 'Establish direct exposure to structural growth themes using Exchange Traded Funds (ETFs) that track broad indices (Nifty, Nasdaq) at low expense ratios, backed by core direct stock portfolios.',
    features: ['Broad market indexing', 'Intraday liquidity & pricing', 'Minimal tracking error', 'Cost-effective core allocation']
  },
  {
    title: 'Fixed Income',
    tagline: 'Stability and Predictability',
    description: 'Anchor your portfolio with high-grade corporate bonds, government securities, state development loans, and debt mutual funds designed to provide consistent cash flows and volatility dampening.',
    features: ['Capital preservation focus', 'Regular cash flow options', 'Predictable returns', 'Insulation from equity volatility']
  },
  {
    title: 'Smallcase',
    tagline: 'Thematic Direct Equity',
    description: 'Invest in curated baskets of direct stocks and ETFs managed by registered research professionals. Experience transparent, theme-based equity investing without the pooling of assets.',
    features: ['Direct stock ownership', 'Full visibility & control', 'No lock-in periods', 'Thematic and sector-focused ideas']
  },
  {
    title: 'Portfolio Management Services (PMS)',
    tagline: 'Bespoke High-Conviction Mandates',
    description: 'Designed for Ultra-HNIs, PMS offers concentrated portfolios (15-30 stocks) focusing on active alphageneration. Enjoy direct access to seasoned fund managers and highly customized investment strategies (Min INR 50L).',
    features: ['High-conviction concentrated stock picks', 'Direct interaction with fund managers', 'Tailored tax-planning setups', 'Regular portfolio reviews & audits']
  },
  {
    title: 'Alternative Investment Funds (AIF)',
    tagline: 'Sophisticated Alternative Strategies',
    description: 'For accredited investors seeking non-correlated returns. AIFs offer exposure to pre-IPO equity, venture debt, long-short hedge funds, and private credit to build institutional-grade diversification (Min INR 1Cr).',
    features: ['Low correlation with public markets', 'Specialized investment mandates', 'Participation in early-stage growth', 'Strict SEBI category oversight']
  },
  {
    title: 'Global Investing',
    tagline: 'Geographical Risk Hedging',
    description: 'Diversify away from single-country currency risk by investing in major global companies and ETFs. Benefit from exposure to global innovation leaders (tech, biotech) and currency appreciation.',
    features: ['Hedge against domestic currency depreciation', 'Access to global tech and innovation leaders', 'Geographic asset allocation', 'Streamlined LRS regulatory compliance']
  }
];

export const SMART_IDEAS = {
  sip: {
    title: 'Smart SIP',
    subtitle: 'Valuation-Linked Systematic Investing',
    description: 'Traditional SIPs invest the same amount every month regardless of market valuation. Our Smart SIP strategy automatically increases allocation when valuations are cheap and tempers allocation when markets are historically expensive. This systematic valuation-linked rebalancing dramatically improves long-term internal rate of return (IRR) while minimizing drawdown anxiety.',
    keyPoints: [
      'Valuation-driven dynamic allocation (P/E, P/B ratio-linked)',
      'Automated equity profit booking into liquid assets during market bubbles',
      'Increased allocation during market panics to capture maximum compounding',
      'Hands-free execution integrated directly with your SIP portal'
    ]
  },
  tax: {
    title: 'Smart Tax Planning',
    subtitle: 'Maximize Post-Tax Compounding',
    description: 'It is not what your portfolio earns; it is what you keep after taxes. We structure your assets across Equity, Debt, and Alternatives to legally minimize Capital Gains tax. By leveraging tax-loss harvesting, utilizing ELSS allocations, planning family-member trusts, and choosing indexation benefit structures, we ensure your long-term wealth compounding remains highly tax-efficient.',
    keyPoints: [
      'Year-round Tax Loss Harvesting strategies',
      'Optimized ELSS (Equity Linked Savings Scheme) configurations',
      'Tax-efficient asset location (placing high-tax assets in exempt wrappers)',
      'Structured planning for capital gains rollover (Section 54EC / 54F)'
    ]
  }
};

export const VALUE_ADDED_SERVICES = {
  insurance: {
    title: 'Insurance & Risk Mitigation',
    description: 'Wealth creation is meaningless without wealth protection. We analyze your liabilities and dependencies to recommend optimal, commission-free risk mitigation plans.',
    items: [
      { name: 'Life Insurance', detail: 'Pure Term plans designed to replace economic value and cover outstanding debt.' },
      { name: 'Medical Insurance', detail: 'Super Top-up structures and global covers to shield wealth from healthcare costs.' },
      { name: 'General Insurance', detail: 'Asset protection for real estate, automobiles, and key business interests.' }
    ]
  },
  loans: {
    title: 'Smarter Leverage & Credit Solutions',
    description: 'Access capital quickly when liquidity matches. We help structure debt to ensure interest rates remain minimal and loan terms remain highly flexible.',
    items: [
      { name: 'Home Loans', detail: 'New purchase financing, structural balance transfers, and interest rate optimizations.' },
      { name: 'Loan Against Mutual Funds (LAMF)', detail: 'Instant liquidity against your portfolio without selling units or triggering tax events.' },
      { name: 'Credit Cards & Short-term Credit', detail: 'Tailored advice on premium high-reward spending systems.' }
    ]
  },
  estate: {
    title: 'Estate Planning & Legacy Preservation',
    description: 'Ensure smooth, undisputed transition of wealth to subsequent generations. We provide standard legal drafting and execution structures to prevent family discord.',
    items: [
      { name: 'Will Drafting', detail: 'Simple, legally enforceable Will creation outlining precise division of assets.' },
      { name: 'Estate Documentation & Trusts', detail: 'Setting up Private Family Trusts for minor children or asset distribution rules.' }
    ]
  }
};

export const FOUNDER_DATA = {
  name: 'Siddharth Mehta, CFP®',
  title: 'Founder & Managing Partner',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=750', // placeholder premium business portrait
  quote: 'Disciplined investing is not about beating the market; it is about controlling your own behavior and staying true to your goals.',
  bio: [
    'Siddharth Mehta is a Certified Financial Planner (CFP) with over 18 years of experience in private wealth advisory and asset allocation. Prior to founding Thoughtful Investing, he served as Director of Wealth Advisory at a premier global banking institution, where he managed portfolios for high-net-worth families and corporate treasuries.',
    'Disillusioned by the transactional, product-selling culture of corporate banking, Siddharth established Thoughtful Investing to focus strictly on goal-based planning, transparent advisory, and long-term client relations.',
    'Under his leadership, the firm has grown to manage wealth for over 450 families, focusing on asset allocation discipline, emotional coaching during market cycles, and robust multi-generational planning.'
  ],
  credentials: [
    'Certified Financial Planner (CFP®) - Financial Planning Standards Board',
    'MBA in Finance - SPJIMR, Mumbai',
    'B.Com (Hons.) - St. Xavier\'s College, Kolkata',
    'AMFI Registered Mutual Fund Advisor (ARN-189284)',
    '18+ Years of Private Wealth Experience'
  ]
};

export const CONTACT_INFO = {
  email: 'support@thoughtfulinvesting.in',
  phone: '+91 8356907979',
  whatsapp: '919223256885',
  address: 'Suite 402, Signature Towers, BKC, Mumbai - 400051',
  workingHours: 'Mon - Fri: 9:30 AM - 6:30 PM | Sat: By Appointment Only',
  web3FormsKey: import.meta.env.VITE_WEB3FORMS_KEY // Placeholder for users to customize
};
