import React from 'react';

export function CopyrightBar() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
      <span className="text-sm text-[var(--color-muted-text)]">
        &copy; {new Date().getFullYear()} SEO Ustaad Limited
      </span>
      <span className="text-sm text-[var(--color-muted-text)]">
        Karachi, Pakistan
      </span>
    </div>
  );
}
