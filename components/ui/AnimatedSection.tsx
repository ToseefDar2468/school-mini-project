"use client";

import type { ComponentPropsWithoutRef } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

type MotionSectionProps = ComponentPropsWithoutRef<typeof motion.section>;
type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

export function AnimatedSection({ className, ...props }: MotionSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className={cn("py-20", className)}
      {...props}
    />
  );
}

export function StaggerGroup({
  className,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      variants={containerVariants}
      className={className}
      {...props}
    />
  );
}

export function StaggerItem({
  className,
  ...props
}: MotionDivProps) {
  return (
    <motion.div variants={itemVariants} className={className} {...props} />
  );
}
