"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#notifications" },
  { label: "Why Us", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition duration-300",
        scrolled
          ? "border-b border-border bg-surface/90 shadow-sm backdrop-blur"
          : "bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display">
            M
          </span>
          <span className="font-display">Meridian & Co.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#contact"
            className={buttonClasses({ variant: "outline", size: "sm" })}
          >
            Book a call
          </Link>
          <Link
            href="#contact"
            className={buttonClasses({ variant: "primary", size: "sm" })}
          >
            Request proposal
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-full border border-border p-2 text-foreground transition hover:border-primary/40 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open ? (
        <div className="lg:hidden">
          <div className="border-t border-border bg-surface">
            <Container className="flex flex-col gap-6 py-6">
              <nav className="flex flex-col gap-4 text-base font-medium text-foreground">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={buttonClasses({
                    variant: "outline",
                    size: "md",
                    className: "w-full",
                  })}
                >
                  Book a call
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={buttonClasses({
                    variant: "primary",
                    size: "md",
                    className: "w-full",
                  })}
                >
                  Request proposal
                </Link>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}
