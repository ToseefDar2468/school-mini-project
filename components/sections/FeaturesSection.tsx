import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Sparkles, Target, Users } from "lucide-react";

const features = [
  {
    title: "Executive-level rigor",
    description:
      "Senior advisors with deep sector experience lead every engagement.",
    icon: Award,
  },
  {
    title: "Outcome-driven delivery",
    description:
      "We align on measurable KPIs and build operating rhythms that keep teams focused.",
    icon: Target,
  },
  {
    title: "Collaborative partnership",
    description:
      "Embedded teams that work alongside your leaders and frontline teams.",
    icon: Users,
  },
  {
    title: "Future-ready insights",
    description:
      "Research-backed insights and scenario planning for long-term resilience.",
    icon: Sparkles,
  },
];

export function FeaturesSection() {
  return (
    <AnimatedSection id="features" className="bg-background">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Why Meridian"
          title="A differentiated advisory model built for speed and precision."
          description="Our approach blends strategic advisory with operational delivery to help leadership teams execute with confidence."
        />

        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem
                key={feature.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </AnimatedSection>
  );
}
