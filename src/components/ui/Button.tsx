import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/20';
  
  const variants = {
    primary: 'bg-teal text-white hover:bg-teal-dark shadow-sm hover:shadow-md border border-transparent',
    secondary: 'bg-gold text-slate hover:bg-gold-dark shadow-sm hover:shadow-md border border-transparent',
    outline: 'border border-slate-light/20 bg-transparent text-slate hover:bg-cream hover:border-slate-light/40',
    text: 'bg-transparent text-slate-light hover:text-teal hover:underline px-0 py-0 rounded-none'
  };

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4'
  };

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2 shrink-0">{icon}</span>}
    </>
  );

  const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClassName}>
        {buttonContent}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      className={finalClassName}
      {...(props as any)}
    >
      {buttonContent}
    </motion.button>
  );
};
