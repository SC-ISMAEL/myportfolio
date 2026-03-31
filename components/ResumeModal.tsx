"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownToLine, X } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  resumeUrl,
}: ResumeModalProps) {
  const resolvedResumeUrl = resumeUrl ?? "/Ismael_Resume(3).docx.pdf";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            className="fixed inset-4 md:inset-12 z-50 flex flex-col rounded-3xl border border-border/60 bg-white/95 shadow-2xl backdrop-blur"
          >
            <div className="flex items-center justify-between border-b border-border/50 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  Resume
                </p>
                <h2 className="text-xl font-semibold text-foreground">
                  Ismael · Minimal Web Engineer
                </h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-foreground/70 transition hover:bg-muted hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden bg-muted/40">
              <iframe
                src={resolvedResumeUrl}
                title="Ismael resume"
                className="h-full w-full"
              />
            </div>

            <div className="border-t border-border/50 px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-foreground/70">
                <p>Prefer an offline copy?</p>
                <p className="font-medium text-foreground">
                  hypermael002@gmail.com · github.com/SC-ISMAEL
                </p>
              </div>
              <a
                href={resolvedResumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
