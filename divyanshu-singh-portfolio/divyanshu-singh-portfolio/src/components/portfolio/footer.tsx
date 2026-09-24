"use client";

import { Newsletter } from "./newsletter";

export function Footer() {
  return (
    <footer className="relative border-t border-ink/10 mt-auto">
      <div className="container-portfolio">
        {/* Studio Notes newsletter strip */}
        <Newsletter />

        {/* Legal bar */}
        <div className="border-t border-ink/10 dark:border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-7 pb-[max(28px,env(safe-area-inset-bottom))]">
            <p className="font-mono-x text-[9.5px] md:text-[10px] tracking-[0.2em] uppercase text-ink-faint text-center sm:text-left">
              © 2026 Divyanshu Singh. All rights reserved.
            </p>
            <p className="font-mono-x text-[9.5px] md:text-[10px] tracking-[0.2em] uppercase text-ink-faint text-center sm:text-right">
              Built with all skills &amp; knowledge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
