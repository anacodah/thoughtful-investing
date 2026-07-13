import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import InteractiveEcosystem from '../components/interactive/InteractiveEcosystem';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cyan-500/[0.09] via-40% to-blue-600/[0.08] pt-2 pb-8 lg:pt-1 lg:pb-14">
      {/* Decorative top grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Top-right turquoise blob */}
      <div className="absolute top-[-15%] right-[-12%] -z-10 h-[750px] w-[750px] rounded-full bg-gradient-to-br from-cyan-400/35 via-teal/25 to-blue-600/20 blur-3xl opacity-90 pointer-events-none" />
      {/* Bottom-left blue blob */}
      <div className="absolute bottom-[-15%] left-[-12%] -z-10 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-blue-700/25 via-cyan-500/20 to-teal/15 blur-3xl opacity-85 pointer-events-none" />
      {/* Center subtle shimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-teal/10 via-cyan-400/10 to-blue-500/10 blur-3xl opacity-70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">

        {/* Brand heading — flush to navbar, dark gradient */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center pt-1 pb-3 lg:pt-0 lg:pb-4 overflow-hidden"
        >
          <span
            className="font-serif font-bold tracking-[0.15em] uppercase select-none pointer-events-none"
            style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
              background: 'linear-gradient(135deg, #062F33 0%, #0D5C63 20%, #0E7C86 45%, #155E8A 70%, #0F2D5E 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer-gradient 6s ease infinite',
            }}
          >
            Thoughtful Investing
          </span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          
          {/* Hero Left Content */}
          <div className="text-left lg:col-span-6 space-y-6 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/20 bg-gradient-to-r from-teal/[0.07] to-cyan-400/[0.07] px-3.5 py-1 text-xs font-semibold tracking-wide text-teal"
            >
              <span className="h-1.5 w-1.5 rounded-full shimmer-gradient shrink-0" />
              <span>Helping You Build Wealth, Thoughtfully.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate leading-[1.1]"
            >
              Personal Finance{' '}
              <span className="gradient-text">Professionals.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-light leading-relaxed font-normal"
            >
              Goal-based financial planning rooted in trust, discipline and long-term relationships—not short-term market noise.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                href="#contact"
                icon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto"
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                href="/philosophy"
                className="w-full sm:w-auto"
              >
                Our Philosophy
              </Button>
            </motion.div>

          
          </div>

          {/* Hero Right Ecosystem */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <InteractiveEcosystem />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
