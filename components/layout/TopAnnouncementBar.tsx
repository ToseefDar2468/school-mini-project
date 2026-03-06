import { Bell } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Notification } from "@/lib/notifications";

type TopAnnouncementBarProps = {
  notifications: Notification[];
};

const sortByDate = (items: Notification[]) =>
  [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export function TopAnnouncementBar({
  notifications,
}: TopAnnouncementBarProps) {
  const active = sortByDate(notifications.filter((item) => item.active));
  const items = active.slice(0, 3);

  if (items.length === 0) return null;

  const messages = items.map(
    (item) => `${item.title} — ${item.message}`,
  );

  return (
    <div className="border-b border-border bg-foreground text-primary-foreground">
      <Container className="flex items-center gap-4 py-2 text-xs sm:text-sm">
        <div className="flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-primary-foreground">
          <Bell size={14} className="text-primary-foreground" />
          Latest Notice
        </div>
        <div className="marquee flex-1">
          <div className="marquee-track">
            <div className="flex items-center gap-6 pr-6">
              {messages.map((message, index) => (
                <span key={`${message}-${index}`} className="whitespace-nowrap">
                  {message}
                </span>
              ))}
            </div>
            <div
              className="flex items-center gap-6 pr-6"
              aria-hidden="true"
            >
              {messages.map((message, index) => (
                <span key={`${message}-dup-${index}`} className="whitespace-nowrap">
                  {message}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
