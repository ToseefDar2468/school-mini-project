import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Notification } from "@/lib/notifications";
import { cn } from "@/lib/utils";

type NotificationCardProps = {
  notification: Notification;
  variant?: "featured" | "standard";
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));

export function NotificationCard({
  notification,
  variant = "standard",
}: NotificationCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft",
        variant === "featured" && "border-primary/30 bg-primary/5",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          {notification.category ?? "Update"}
        </p>
        <p className="text-xs text-muted-foreground">
          {formatDate(notification.date)}
        </p>
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          {notification.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {notification.message}
        </p>
      </div>
      {notification.link ? (
        <Link
          href={notification.link.href}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          {notification.link.label} <ArrowUpRight size={16} />
        </Link>
      ) : null}
    </article>
  );
}
