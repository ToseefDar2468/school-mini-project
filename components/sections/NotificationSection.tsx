import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NotificationCard } from "@/components/notifications/NotificationCard";
import type { Notification } from "@/lib/notifications";

type NotificationSectionProps = {
  notifications: Notification[];
};

const sortByDate = (items: Notification[]) =>
  [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export function NotificationSection({ notifications }: NotificationSectionProps) {
  const active = sortByDate(notifications.filter((item) => item.active));
  const latest = active[0];
  const recent = sortByDate(
    notifications.filter((item) => item.id !== latest?.id),
  ).slice(0, 4);

  return (
    <AnimatedSection id="notifications" className="bg-surface">
      <Container className="space-y-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Announcements"
            title="Latest updates from Meridian & Co."
            description="Stay informed with strategic insights, client milestones, and upcoming advisory sessions."
          />
          <div className="rounded-2xl border border-border bg-muted px-6 py-4 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Latest announcement</p>
            <p>Only the most current active update is highlighted.</p>
          </div>
        </div>

        <StaggerGroup className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {latest ? (
            <StaggerItem>
              <NotificationCard notification={latest} variant="featured" />
            </StaggerItem>
          ) : null}
          <StaggerItem className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Recent updates
            </p>
            <div className="mt-4 space-y-4">
              {active.slice(1, 4).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-1 border-b border-border pb-4 last:border-none last:pb-0"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.message}
                  </p>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerGroup>

        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Archive
          </p>
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recent.map((notification) => (
              <StaggerItem key={notification.id}>
                <NotificationCard notification={notification} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </AnimatedSection>
  );
}
