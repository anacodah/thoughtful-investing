import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  heading,
  description,
  align = 'center',
  className = ''
}) => {
  const isLeft = align === 'left';

  return (
    <div className={`max-w-3xl mb-16 ${isLeft ? 'text-left' : 'mx-auto text-center'} ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-slate leading-tight"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-slate-light leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
