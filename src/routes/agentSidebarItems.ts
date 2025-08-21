import AgentOverview from "@/pages/agent/AgentOverview";
import type { ISidebarItem } from "@/type";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Agent Dashboard",
    items: [
      {
        title: "Overview",
        url: "/agent/overview",
        component: AgentOverview,
      },
    ],
  },
];
