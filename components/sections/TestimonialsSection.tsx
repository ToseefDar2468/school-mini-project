import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Meridian Academy has helped my daughter build confidence while excelling academically. The teachers truly know each student.",
    name: "Elena Ramirez",
    title: "Parent, Grade 9",
  },
  {
    quote:
      "The balance between academics and activities is outstanding. My son loves the robotics lab and debate club.",
    name: "Michael Chen",
    title: "Parent, Grade 7",
  },
  {
    quote:
      "The college counseling program was exceptional. I felt prepared and supported throughout every application.",
    name: "Amelia Foster",
    title: "Alumni, Class of 2024",
  },
];

export function TestimonialsSection() {
  return (
    <AnimatedSection className="bg-background">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Families trust Meridian Academy with their children's future."
          description="Hear from parents and alumni about the learning experience and supportive community."
        />
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem
              key={item.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                "{item.quote}"
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground">{item.title}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </AnimatedSection>
  );
}
