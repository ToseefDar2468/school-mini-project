import Image from "next/image";
import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Mission",
    description:
      "Provide a rigorous, inclusive education that develops confident learners and responsible citizens.",
  },
  {
    title: "Vision",
    description:
      "To be a leading school known for academic excellence, innovation, and community engagement.",
  },
  {
    title: "Values",
    description:
      "Integrity, curiosity, respect, and resilience guide our classrooms and student life.",
  },
];

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-background">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About us"
            title="A learning community built to help every student thrive."
            description="Meridian Academy blends strong academics with character development, modern facilities, and a nurturing environment where students are challenged to grow."
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-school.jpg"
                alt="Meridian Academy campus environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 via-transparent to-transparent" />
            </div>
            <div className="mt-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Our learning environment
              </p>
              <p className="text-sm text-muted-foreground">
                Bright classrooms, collaborative spaces, and a safe campus
                designed to inspire curiosity and confidence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
