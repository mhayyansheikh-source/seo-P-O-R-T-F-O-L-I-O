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
    const baseStyles = "inline-flex items-center justify-center rounded-full px-7 py-3 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";
    
    const variants = {
      primary: "bg-[var(--color-primary-dark)] text-white shadow-primary-btn hover:bg-[var(--color-secondary-dark)]",
      secondary: "bg-white text-[var(--color-primary-dark)] shadow-secondary-btn hover:bg-gray-50",
      tertiary: "bg-white text-[var(--color-primary-dark)] border border-gray-200 shadow-sm hover:bg-gray-50",
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
