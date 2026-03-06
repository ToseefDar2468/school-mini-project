import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    title: "Email",
    detail: "hello@meridianandco.com",
    icon: Mail,
  },
  {
    title: "Phone",
    detail: "+1 (415) 555-0136",
    icon: Phone,
  },
  {
    title: "Office",
    detail: "101 Market Street, San Francisco",
    icon: MapPin,
  },
];

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-surface">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation with our advisory team."
          description="Tell us about your goals and we will respond with a tailored plan of action."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <StaggerGroup className="grid gap-6">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem
                  key={card.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {card.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{card.detail}</p>
                  </div>
                </StaggerItem>
              );
            })}
            </StaggerGroup>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-6 text-sm text-muted-foreground shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Office location
              </p>
              <p className="mt-3 text-sm">
                Map placeholder for 101 Market Street, San Francisco.
              </p>
              <div className="mt-4 aspect-[5/3] rounded-xl border border-border bg-surface/70" />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-8 shadow-card">
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Alex"
                    className="h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Morgan"
                    className="h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-foreground">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  className="h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-foreground">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals or challenges."
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  This form is currently for demonstration purposes only.
                </p>
                <Button type="button" size="lg">
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
