import { CONTACT_INFO } from '../../data/siteData';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-light/10 text-slate">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 pb-12 border-b border-slate-light/10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-2">
              <span className="font-serif text-xl font-bold tracking-tight">
                Thoughtful <span className="text-teal">Investing</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-light mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#goals" className="text-slate-light/80 hover:text-teal transition-colors flex items-center">Goal Based Planning</a></li>
              <li><a href="#investments" className="text-slate-light/80 hover:text-teal transition-colors flex items-center">Mutual Funds & PMS</a></li>
              <li><a href="#smart-ideas" className="text-slate-light/80 hover:text-teal transition-colors flex items-center">Smart SIP Strategies</a></li>
              <li><a href="#value-added" className="text-slate-light/80 hover:text-teal transition-colors flex items-center">Estate & Tax Advisory</a></li>
            </ul>
          </div>

          {/* Contact & Support Column */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-light mb-4">Contact Info</h4>
            <div className="flex items-start space-x-2.5 text-sm text-slate-light/80">
              <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-teal break-all">{CONTACT_INFO.email}</a>
            </div>
            <div className="flex items-start space-x-2.5 text-sm text-slate-light/80">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-teal">{CONTACT_INFO.phone}</a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Block */}
        <div className="py-8 border-b border-slate-light/10 text-[11px] leading-relaxed text-slate-light/60 space-y-3">
          <p>
            <strong>Disclaimer:</strong> Thoughtful Investing is an AMFI-registered Mutual Fund Distributor (ARN-189284) operating in India. Mutual Fund investments are subject to market risks, read all scheme-related documents carefully before investing. Past performance is not indicative of future yields or returns.
          </p>
          <p>
            The content provided on this website is for informational and educational purposes only and should not be construed as legal, tax, investment, financial, or other professional advice. We do not guarantee any specific returns. Asset allocation and diversification do not guarantee a profit or protect against loss in declining markets.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-slate-light/60">
          <p>&copy; {currentYear} Thoughtful Investing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-teal">Privacy Policy</a>
            <a href="#terms" className="hover:text-teal">Terms of Service</a>
            <a href="#disclosure" className="hover:text-teal">Disclosures</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
