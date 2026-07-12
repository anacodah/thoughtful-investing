import { useState, useRef, useEffect } from 'react';
import { NAV_ITEMS } from '../../data/siteData';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small buffer to prevent accidental closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-light/10 bg-white/95 backdrop-blur-md relative">
      {/* Thin turquoise-blue accent bar at the bottom of navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] shimmer-gradient opacity-60" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        
        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center lg:space-x-3 xl:space-x-5 2xl:space-x-8">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdownItems && handleMouseEnter(item.label)}
              onMouseLeave={() => item.dropdownItems && handleMouseLeave()}
            >
              <a
                href={item.href}
                className="flex items-center lg:text-xs xl:text-sm font-medium text-slate-light hover:text-teal transition-colors duration-200 py-2 whitespace-nowrap"
                onClick={() => {
                  if (item.dropdownItems) {
                    setActiveDropdown(activeDropdown === item.label ? null : item.label);
                  }
                }}
              >
                {item.label}
                {item.dropdownItems && (
                  <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180 text-teal' : ''
                  }`} />
                )}
              </a>

              {/* Rich Dropdown Panel */}
              <AnimatePresence>
                {item.dropdownItems && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 z-50 mt-2 w-80 -translate-x-1/2 rounded-xl border border-slate-light/10 bg-white p-4 shadow-xl shadow-slate-900/5 ring-1 ring-black/5"
                  >
                    <div className="space-y-1">
                      {item.dropdownItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block rounded-lg p-2.5 hover:bg-cream transition-colors duration-150 group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate group-hover:text-teal transition-colors">
                              {subItem.label}
                            </span>
                            <ArrowRight className="h-3.5 w-3.5 -translate-x-2 opacity-0 text-gold transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </div>
                          {subItem.description && (
                            <p className="mt-1 text-xs text-slate-light/80 leading-relaxed font-normal">
                              {subItem.description}
                            </p>
                          )}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block flex-shrink-0 ml-3 xl:ml-6">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal via-cyan-600 to-blue-700 hover:from-teal-dark hover:via-teal hover:to-cyan-600 lg:px-4 xl:px-5 py-2 text-xs font-semibold text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-cyan-500/20 whitespace-nowrap"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-lg p-1.5 text-slate lg:hidden hover:bg-cream transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-slate-light/10 bg-white lg:hidden overflow-hidden"
          >
            <div className="space-y-4 px-6 py-6 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-light/5 pb-2">
                    <a
                      href={item.href}
                      onClick={() => {
                        if (!item.dropdownItems) {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className="text-base font-semibold text-slate"
                    >
                      {item.label}
                    </a>
                  </div>
                  
                  {item.dropdownItems && (
                    <div className="grid grid-cols-1 gap-2 pl-4">
                      {item.dropdownItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group block rounded-md py-1.5 hover:text-teal"
                        >
                          <span className="text-sm font-medium text-slate-light group-hover:text-teal">
                            {subItem.label}
                          </span>
                          {subItem.description && (
                            <p className="text-xs text-slate-light/60 font-normal">
                              {subItem.description}
                            </p>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-light/10">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-teal py-3 text-sm font-semibold text-white hover:bg-teal-dark transition-all duration-300"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
