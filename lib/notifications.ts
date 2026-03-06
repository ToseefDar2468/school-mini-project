import { notifications } from "@/data/notifications";

export type NotificationLink = {
  label: string;
  href: string;
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  active: boolean;
  category?: string;
  link?: NotificationLink;
};

export async function getNotifications(): Promise<Notification[]> {
  return notifications;
}
