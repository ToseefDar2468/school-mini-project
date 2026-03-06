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
    title: "Strategy & Growth",
    description:
      "Market positioning, portfolio prioritization, and growth plans built for execution.",
    icon: LineChart,
  },
  {
    title: "Operational Excellence",
    description:
      "End-to-end process redesign, KPI governance, and efficiency programs.",
    icon: Workflow,
  },
  {
    title: "Risk & Resilience",
    description:
      "Scenario planning and mitigation frameworks that keep leadership ahead of disruption.",
    icon: ShieldCheck,
  },
  {
    title: "Transformation Office",
    description:
      "Program management and transformation cadence for multi-team initiatives.",
    icon: Briefcase,
  },
  {
    title: "Enterprise Enablement",
    description:
      "Organizational design, talent alignment, and leadership operating rhythms.",
    icon: Building2,
  },
  {
    title: "Global Expansion",
    description:
      "Go-to-market strategy and cross-border execution support for new regions.",
    icon: Globe2,
  },
];

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="bg-surface">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="Advisory services built for leadership teams that need results."
          description="We combine strategic insight with hands-on delivery so initiatives move from whiteboard to measurable impact."
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
