"use client";

import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedSection({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
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
}: HTMLAttributes<HTMLDivElement>) {
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
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div variants={itemVariants} className={className} {...props} />
  );
}
