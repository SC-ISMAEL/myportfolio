"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Minimal layouts",
    description:
      "I champion whitespace, soft gradients, and precise typography so every screen feels calm and readable.",
  },
  {
    title: "Systems thinking",
    description:
      "Design tokens, reusable components, and predictable motion rules keep every surface aligned with the brand.",
  },
  {
    title: "Engineering clarity",
    description:
      "Next.js, React, and Express form the core of my builds—shipping fast, stable experiences with strong UX foundations.",
  },
  {
    title: "Open collaboration",
    description:
      "I keep communication short and transparent, pushing progress early through GitHub issues, Looms, and figma links.",
  },
];

const stacks = [
  {
    title: "Experience layer",
    items: ["Next.js", "React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Logic layer",
    items: ["Express.js", "Node.js", "REST APIs", "Supabase"],
  },
];

const stats = [
  { label: "Years crafting calm UIs", value: "3+" },
  { label: "Live prototypes shipped", value: "25+" },
  { label: "Stack comfort", value: "Next.js · React · Express" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ef] via-[#ffe6cc] to-[#ffcba3] pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            About Ismael
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
            Minimalist energy, engineered delivery.
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            I translate fuzzy product ideas into quiet, gradient-forward
            experiences. Each build respects accessibility, motion, and
            maintainable engineering practices while staying unmistakably orange.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((principle) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur"
            >
              <h2 className="text-xl font-semibold text-foreground">
                {principle.title}
              </h2>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/60 bg-white/75 p-5 text-center shadow-sm"
            >
              <p className="text-xs uppercase tracking-wide text-foreground/60">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stacks.map((stack) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                {stack.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                {stack.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-6 rounded-full bg-gradient-to-r from-primary to-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
