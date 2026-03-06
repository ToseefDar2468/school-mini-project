import Image from "next/image";
import {
  AnimatedSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FacultyMember } from "@/lib/faculty";

type FacultySectionProps = {
  faculty: FacultyMember[];
};

export function FacultySection({ faculty }: FacultySectionProps) {
  return (
    <AnimatedSection id="faculty" className="bg-background">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Faculty"
          title="Meet the educators guiding every learner."
          description="Our faculty blend academic expertise with mentorship, ensuring every student receives personal attention."
        />

        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member) => (
            <StaggerItem
              key={member.id}
              className="group rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-3xl border border-border bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </AnimatedSection>
  );
}
