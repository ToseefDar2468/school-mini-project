import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Mission",
    description:
      "Equip leadership teams with the strategic clarity and operating discipline required to scale with confidence.",
  },
  {
    title: "Vision",
    description:
      "Become the most trusted advisory partner for organizations navigating complex transformation.",
  },
  {
    title: "Approach",
    description:
      "We blend executive advisory with hands-on execution, ensuring every recommendation turns into action.",
  },
];

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-background">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About us"
            title="A strategic partner for leaders who need direction and momentum."
            description="Meridian & Co. is a boutique advisory firm focused on operational alignment, growth strategy, and execution. Our teams work alongside your leadership to build sustainable performance."
          />
          <StaggerGroup className="grid gap-6">
            {pillars.map((pillar) => (
              <StaggerItem
                key={pillar.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative rounded-3xl border border-border bg-surface p-6 shadow-card">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
            <div className="mt-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Trusted by growth leaders
              </p>
              <p className="text-sm text-muted-foreground">
                We partner with executive teams across finance, healthcare,
                logistics, and technology to deliver measurable impact.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
