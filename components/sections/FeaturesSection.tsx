import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Sparkles, Target, Users } from "lucide-react";

const features = [
  {
    title: "Experienced faculty",
    description:
      "Highly qualified teachers who mentor students with care and expertise.",
    icon: Award,
  },
  {
    title: "Modern classrooms",
    description:
      "Technology-enabled learning spaces that encourage curiosity and collaboration.",
    icon: Target,
  },
  {
    title: "Balanced growth",
    description:
      "A healthy mix of academics, athletics, arts, and community service.",
    icon: Users,
  },
  {
    title: "Student-centered learning",
    description:
      "Personalized guidance that helps every learner achieve their potential.",
    icon: Sparkles,
  },
];

export function FeaturesSection() {
  return (
    <AnimatedSection id="features" className="bg-background">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Why Meridian"
          title="A learning environment built for excellence and wellbeing."
          description="We prioritize strong academics, supportive mentorship, and a community culture that helps students thrive."
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
