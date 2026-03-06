import type { Notification } from "@/lib/notifications";

export const notifications: Notification[] = [
  {
    id: "n-1001",
    title: "Q2 Strategy Briefing Released",
    message:
      "Our latest quarterly briefing outlines market signals, risk scenarios, and growth priorities for executive teams.",
    date: "2026-02-28",
    active: true,
    category: "Insights",
    link: {
      label: "Read the summary",
      href: "#contact",
    },
  },
  {
    id: "n-1002",
    title: "Client Operations Playbook v3",
    message:
      "Updated playbook with streamlined governance, KPI templates, and execution rhythms for distributed teams.",
    date: "2026-02-14",
    active: true,
    category: "Operations",
  },
  {
    id: "n-1003",
    title: "Meridian Executive Roundtable",
    message:
      "A private session on resilient growth strategy with leaders across technology, logistics, and healthcare.",
    date: "2026-01-30",
    active: true,
    category: "Events",
    link: {
      label: "Request an invite",
      href: "#contact",
    },
  },
  {
    id: "n-1004",
    title: "Sustainability Benchmark Report",
    message:
      "New benchmarking data highlighting the operational impact of sustainability initiatives across 120 firms.",
    date: "2026-01-05",
    active: false,
    category: "Research",
  },
  {
    id: "n-1005",
    title: "Client Success: AeroTech Expansion",
    message:
      "Scaled a multi-region program launch in eight weeks with a 24% increase in operating efficiency.",
    date: "2025-12-15",
    active: false,
    category: "Case Study",
  },
];
