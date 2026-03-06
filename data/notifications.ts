import type { Notification } from "@/lib/notifications";

export const notifications: Notification[] = [
  {
    id: "n-1001",
    title: "Admissions Open for 2026-27 Academic Year",
    message:
      "Submit applications for Kindergarten through Grade 12. Early submissions receive priority scheduling.",
    date: "2026-02-26",
    active: true,
    category: "Admissions",
    link: {
      label: "Start application",
      href: "#contact",
    },
  },
  {
    id: "n-1002",
    title: "Spring Term Assessment Schedule",
    message:
      "Midterm assessments begin March 18. Timetables are now available for all grade levels.",
    date: "2026-02-15",
    active: true,
    category: "Academics",
  },
  {
    id: "n-1003",
    title: "Founders Day and Community Showcase",
    message:
      "Join us on April 5 for student performances, exhibitions, and campus tours.",
    date: "2026-01-30",
    active: true,
    category: "Events",
    link: {
      label: "View event details",
      href: "#contact",
    },
  },
  {
    id: "n-1004",
    title: "Winter Break Notice",
    message:
      "Campus will be closed from December 23 through January 2. Classes resume January 3.",
    date: "2026-01-05",
    active: false,
    category: "Holiday",
  },
  {
    id: "n-1005",
    title: "STEM Lab Expansion Completed",
    message:
      "New robotics and design labs are now open for middle and high school students.",
    date: "2025-12-15",
    active: false,
    category: "Campus Life",
  },
];
