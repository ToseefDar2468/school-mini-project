import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Briefcase,
  LineChart,
  ShieldCheck,
  Workflow,
  Building2,
  Globe2,
} from "lucide-react";

const services = [
  {
    title: "Academic Programs",
    description:
      "A challenging curriculum from early years through senior grades, aligned with global standards.",
    icon: LineChart,
  },
  {
    title: "Student Development",
    description:
      "Leadership, mentoring, and wellbeing programs that support every student's growth.",
    icon: Workflow,
  },
  {
    title: "Co-Curricular Life",
    description:
      "Sports, arts, and clubs that build confidence, teamwork, and creativity.",
    icon: ShieldCheck,
  },
  {
    title: "Digital Learning",
    description:
      "Technology-enabled classrooms, blended learning, and modern academic tools.",
    icon: Briefcase,
  },
  {
    title: "Career Guidance",
    description:
      "Academic counseling, university readiness, and future pathway planning.",
    icon: Building2,
  },
  {
    title: "Safe Campus",
    description:
      "Secure facilities, student support services, and strong pastoral care.",
    icon: Globe2,
  },
];

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="bg-surface">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Programs"
          title="Holistic programs designed for academic and personal success."
          description="From rigorous academics to co-curricular excellence, we provide a balanced education that prepares students for the future."
        />

        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={service.title}
                className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary/15">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </AnimatedSection>
  );
}
