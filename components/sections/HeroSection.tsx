"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";

const bulletPoints = [
  "Executive advisory with measurable outcomes",
  "Operational playbooks designed for scale",
  "Cross-functional teams that deliver fast",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <Container className="relative grid gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            Strategic advisory · execution partner
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl font-display">
            Modern advisory for ambitious teams that need clarity and momentum.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Meridian & Co. aligns strategy, operations, and execution so leadership
            teams can move faster with confidence. We deliver the insight,
            structure, and hands-on support to turn plans into results.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className={buttonClasses({ variant: "primary", size: "lg" })}
            >
              Start a project <ArrowUpRight size={18} />
            </Link>
            <Link
              href="#services"
              className={buttonClasses({ variant: "outline", size: "lg" })}
            >
              Explore services
            </Link>
          </div>
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {bulletPoints.map((point) => (
              <div key={point} className="flex items-start gap-2">
                <CheckCircle2 size={18} className="mt-0.5 text-secondary" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-36 w-36 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative space-y-6 rounded-3xl border border-border bg-surface p-8 shadow-card">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Impact snapshot
              </p>
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-secondary">
                2026 Outlook
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-semibold text-foreground">+38%</p>
                <p className="text-sm text-muted-foreground">
                  Operational efficiency improved in six months.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">$92M</p>
                <p className="text-sm text-muted-foreground">
                  Growth pipeline influenced across client engagements.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">14</p>
                <p className="text-sm text-muted-foreground">
                  Global teams activated with new governance models.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-muted/60 p-4">
              <p className="text-sm text-muted-foreground">
                “Meridian delivered the strategic clarity our leadership team
                needed to act decisively across regions.”
              </p>
              <p className="mt-3 text-xs font-semibold text-foreground">
                COO, Horizon Logistics Group
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
