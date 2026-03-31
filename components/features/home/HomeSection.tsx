"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { FileText, ArrowUpRight } from "lucide-react";
import ResumeModal from "@/components/ResumeModal";

const profileFacts = [
  { label: "Age", value: "22" },
  { label: "Occupation", value: "Student" },
  { label: "Location", value: "Buagsong Cordova, Cebu" },
  {
    label: "Education",
    value: "Bachelor of Science in Information Technology",
  },
];

export function HomeSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen pt-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-card shadow-xl border border-border/60 p-6 md:p-8 flex flex-col gap-6"
            >
              <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h1 className="text-lg font-semibold tracking-tight">
                    ISMAEL JR S. CODILLA
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    BSIT STUDENT
                  </p>
                </div>
                <nav className="flex gap-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Home</span>
                  <span>About</span>
                  <span>Contacts</span>
                </nav>
              </header>

              <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
                <div className="space-y-4">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl">
                    <Image
                      src="/profile1.jpg"
                      alt="Ismael standing at Buagsong Cordova, Cebu"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    &quot;I am Ismael Jr S. Codilla, a BSIT student from Cebu
                    dedicated to bridging the gap between complex problems and
                    innovative digital solutions.&quot;
                  </p>
                </div>

                <dl className="space-y-3 text-sm">
                  {profileFacts.map((fact) => (
                    <div key={fact.label} className="grid grid-cols-[110px_1fr]">
                      <dt className="text-muted-foreground">{fact.label}</dt>
                      <dd className="font-medium text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs md:text-sm font-semibold text-primary-foreground shadow-md"
                >
                  <FileText className="h-4 w-4" />
                  View resume
                </motion.button>
                <a
                  href="mailto:hypermael002@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-xs md:text-sm font-semibold text-foreground hover:bg-accent/60"
                >
                  Say hello
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="rounded-3xl bg-card shadow-lg border border-border/60 p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image
                      src="/profile1.jpg"
                      alt="Ismael circular profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold">
                      ISMAEL JR S. CODILLA
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      BSIT STUDENT
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>About</span>
                  <span>Contacts</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  I am Ismael Jr S. Codilla, an aspiring IT professional focused
                  on mastering modern technologies and solving complex problems
                  through creative digital solutions.
                </p>
              </div>

              <div className="rounded-3xl bg-card shadow-lg border border-border/60 p-6 space-y-4 text-sm">
                <p className="font-semibold">Contacts</p>
                <div className="space-y-2">
                  <p>Facebook: ISMAEL CODILLA</p>
                  <p>Facebook: ISMAEL JR. S. CODILLA</p>
                  <p>Email: hypermael002@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 rounded-3xl bg-card shadow-xl border border-border/60 p-6 md:p-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center"
          >
            <div className="space-y-3 text-sm">
              <h2 className="text-base md:text-lg font-semibold">
                ISMAEL JR S. CODILLA
              </h2>
              <p className="text-xs text-muted-foreground">
                BSIT STUDENT
              </p>
              <ul className="mt-4 space-y-2">
                <li>📞 09502288760</li>
                <li>📧 hypermael002@gmail.com</li>
                <li>📍 Buagsong Cordova, Cebu</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden border-4 border-border/70">
                <Image
                  src="/profile1.jpg"
                  alt="Ismael contact avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.section>
        </div>
      </section>
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/Ismael_Resume(3).docx.pdf"
      />
    </>
  );
}

