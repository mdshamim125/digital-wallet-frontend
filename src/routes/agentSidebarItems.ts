import AgentOverview from "@/pages/agent/AgentOverview";
import type { ISidebarItem } from "@/type";
import AddMoney from "@/pages/agent/AddMoney";
import WithdrawMoney from "@/pages/agent/WithdrawMoney";
import ViewTransactions from "@/pages/agent/ViewTransactions";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Agent Dashboard",
    items: [
      {
        title: "Overview",
        url: "/agent/overview",
        component: AgentOverview,
      },
      {
        title: "Add Money",
        url: "/agent/add-money",
        component: AddMoney,
      },
      {
        title: "Withdraw Money",
        url: "/agent/withdraw-money",
        component: WithdrawMoney,
      },
      {
        title: "Transaction History",
        url: "/agent/transaction-history",
        component: ViewTransactions,
      },
    ],
  },
];
