import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full px-7 py-3 font-medium transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04] active:scale-95";
    
    const variants = {
      primary: "bg-[var(--color-primary)] text-white shadow-primary-btn hover:bg-[var(--color-ink)]",
      secondary: "bg-white text-[var(--color-primary)] shadow-secondary-btn hover:bg-gray-50",
      tertiary: "bg-white text-[var(--color-primary)] border border-gray-200 shadow-sm hover:bg-gray-50",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
