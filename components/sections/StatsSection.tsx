import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "1,250+", label: "Students enrolled across all grade levels" },
  { value: "98%", label: "Graduation and university placement rate" },
  { value: "85+", label: "Qualified teachers and academic mentors" },
  { value: "28", label: "Clubs, teams, and enrichment programs" },
];

export function StatsSection() {
  return (
    <AnimatedSection className="bg-surface">
      <Container>
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </AnimatedSection>
  );
}
