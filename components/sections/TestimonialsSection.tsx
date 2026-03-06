import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Meridian brought structure to our growth plan and helped us execute across five markets in a single quarter.",
    name: "Elena Ramirez",
    title: "Chief Strategy Officer, Northbridge Health",
  },
  {
    quote:
      "Their team embedded with ours and delivered a transformation roadmap that was both practical and ambitious.",
    name: "Michael Chen",
    title: "COO, Velocity Industrial",
  },
  {
    quote:
      "We finally have a governance rhythm that keeps leadership and frontline teams aligned every week.",
    name: "Amelia Foster",
    title: "VP Operations, Horizon Logistics",
  },
];

export function TestimonialsSection() {
  return (
    <AnimatedSection className="bg-background">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Leaders trust Meridian when execution matters most."
          description="We partner with leadership teams who demand strategic clarity and operational precision."
        />
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem
              key={item.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                “{item.quote}”
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
