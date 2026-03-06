"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";

const bulletPoints = [
  "Student-centered learning with academic rigor",
  "Holistic development through arts, sports, and clubs",
  "A safe, supportive campus with modern facilities",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-school.jpg"
          alt="Students learning in a modern classroom"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/60" />
      </div>
      <Container className="relative grid gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-surface/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
            Welcome to Meridian Academy
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl font-display">
            A modern school where academic excellence meets character and care.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Meridian Academy is dedicated to nurturing confident learners through
            rigorous academics, inspiring faculty, and a community that values
            integrity, curiosity, and growth.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className={buttonClasses({ variant: "primary", size: "lg" })}
            >
              Apply for admission <ArrowUpRight size={18} />
            </Link>
            <Link
              href="#services"
              className={buttonClasses({
                variant: "outline",
                size: "lg",
                className:
                  "border-primary-foreground/40 text-primary-foreground hover:border-primary-foreground/70",
              })}
            >
              Explore programs
            </Link>
          </div>
          <div className="grid gap-3 text-sm text-primary-foreground/80 sm:grid-cols-2">
            {bulletPoints.map((point) => (
              <div key={point} className="flex items-start gap-2">
                <CheckCircle2 size={18} className="mt-0.5 text-accent" />
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
                Academic highlights
              </p>
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-secondary">
                2025-26
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-semibold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">
                  Graduation and university placement rate.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">28</p>
                <p className="text-sm text-muted-foreground">
                  Clubs, teams, and student-led programs.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">1:12</p>
                <p className="text-sm text-muted-foreground">
                  Teacher-to-student ratio for personalized learning.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-muted/60 p-4">
              <p className="text-sm text-muted-foreground">
                "Meridian Academy challenges students academically while keeping
                them supported and confident."
              </p>
              <p className="mt-3 text-xs font-semibold text-foreground">
                Parent, Class of 2025
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
