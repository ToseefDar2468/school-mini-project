import Link from "next/link";
import { Container } from "@/components/ui/Container";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#notifications" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg font-semibold text-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display">
              M
            </span>
            <span className="font-display">Meridian & Co.</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A modern advisory partner helping leaders align strategy, operations,
            and execution for measurable growth.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-foreground">Quick Links</p>
          <ul className="space-y-2 text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-foreground">Contact</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>hello@meridianandco.com</li>
            <li>+1 (415) 555-0136</li>
            <li>101 Market Street, San Francisco</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-foreground">Follow</p>
          <ul className="space-y-2 text-muted-foreground">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© 2026 Meridian & Co. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service</p>
      </Container>
    </footer>
  );
}
