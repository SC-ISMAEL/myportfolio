"use client";

import { motion } from "framer-motion";
import { Github, Mail, Send } from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    label: "Gmail",
    value: "hypermael002@gmail.com",
    href: "mailto:hypermael002@gmail.com",
    helper: "Replies within 24 hours",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "SC-ISMAEL",
    href: "https://github.com/SC-ISMAEL",
    helper: "Code, experiments, open work",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ef] via-[#ffe6cc] to-[#ffcba3] pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/70 shadow-sm">
            <Send className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-4xl font-semibold text-foreground">Let&apos;s keep it minimal.</h1>
          <p className="text-lg text-foreground/75">
            I gravitate toward focused collaborations—interfaces, systems, or prototypes that benefit from a calmer lens.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {contactOptions.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                      {item.label}
                    </p>
                    <p className="text-xl font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/75">{item.helper}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/70 bg-white/75 p-8 text-center shadow-sm backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
            Availability
          </p>
          <p className="mt-3 text-lg text-foreground/80">
            Slotting new freelance collaborations for <strong>January 2026</strong>.
          </p>
          <p className="mt-2 text-sm text-foreground/60">
            Email is the fastest way to reach me. I respond with a Loom or prototype when it helps the conversation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
