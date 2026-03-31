import React from "react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-border/60 bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
        <p>
          © {year} ISMAEL JR S. CODILLA · BSIT STUDENT
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:hypermael002@gmail.com"
            className="hover:text-foreground"
          >
            hypermael002@gmail.com
          </a>
          <a
            href="https://github.com/SC-ISMAEL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            github.com/SC-ISMAEL
          </a>
          <span className="text-xs text-foreground/60">
            Crafted with Next.js & minimal gradients
          </span>
        </div>
      </div>
    </footer>
  );
}

