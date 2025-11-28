"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import ResumeModal from "@/components/ResumeModal";

const focusAreas = [
  "Calm UI systems",
  "Reliable front-end stacks",
  "Gradient driven storytelling",
];

const quickFacts = [
  { label: "Role", value: "Minimal web engineer" },
  { label: "Location", value: "Philippines" },
  { label: "Stack", value: "Next.js · React · Express" },
];

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#fff7ef] via-[#ffe6cc] to-[#ffcba3] pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-foreground/70">
                  Portfolio · 2025
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                  I&apos;m Ismael—also known as <span className="text-primary">SC-ISMAEL</span>—crafting serene interfaces with subtle
                  orange gradients and deliberate engineering.
                </h1>
                <p className="text-lg text-foreground/80 max-w-2xl">
                  I design and build minimal products that keep only what
                  matters: clear typography, generous breathing room, and
                  expressive motion. Every surface uses layered orange hues to
                  guide focus without distraction.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-white/40 bg-white/60 px-4 py-3 shadow-sm backdrop-blur"
                  >
                    <p className="text-xs uppercase tracking-wide text-foreground/60">
                      {fact.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-1">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wide text-foreground/60">
                  Current focus
                </p>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsResumeOpen(true)}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/70 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30"
                >
                  <FileText className="h-4 w-4" />
                  View resume
                </motion.button>
                <a
                  href="mailto:hypermael002@gmail.com"
                  className="flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/60"
                >
                  Say hello
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://github.com/SC-ISMAEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-sm backdrop-blur hover:border-primary/60"
                >
                  <p className="text-xs uppercase tracking-wide text-foreground/50">
                    GitHub
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-foreground">
                      SC-ISMAEL
                    </p>
                    <ArrowUpRight className="h-4 w-4 text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
                <a
                  href="mailto:hypermael002@gmail.com"
                  className="rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-wide text-foreground/50">
                    Gmail
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    hypermael002@gmail.com
                  </p>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-80 md:h-96 overflow-hidden rounded-[3rem] border border-white/50 shadow-2xl shadow-orange-200/60">
                <Image
                  src="/profile1.jpg"
                  alt="Portrait of Ismael"
                  fill
                  sizes="(max-width: 768px) 18rem, 20rem"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 inset-x-6 rounded-2xl bg-white/80 px-4 py-3 text-sm shadow-lg shadow-orange-200/70 backdrop-blur">
                Always iterating on quieter experiences with stronger impact.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/Ismael_Resume(3).docx.pdf"
      />
    </>
  );
}
