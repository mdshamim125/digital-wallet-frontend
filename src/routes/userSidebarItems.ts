import WithdrawMoney from "@/pages/user/WithdrawMoney";
import { DepositMoney } from "@/pages/user/DepositMoney";
import SendMoney from "@/pages/user/SendMoney";
import UserOverview from "@/pages/user/UserOverview";
import type { ISidebarItem } from "@/type";
import TransactionHistory from "@/pages/user/TransactionHistory";
import UserProfile from "@/pages/user/UserProfile";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "User Dashboard",
    items: [
      {
        title: "Overview",
        url: "/user/overview",
        component: UserOverview,
      },
      {
        title: "Deposit Money",
        url: "/user/deposit-money",
        component: DepositMoney,
      },
      {
        title: "Send Money",
        url: "/user/send-money",
        component: SendMoney,
      },
      {
        title: "Withdraw Money",
        url: "/user/withdraw-money",
        component: WithdrawMoney,
      },
      {
        title: "Transaction History",
        url: "/user/transaction-history",
        component: TransactionHistory,
      },
      {
        title: "Profile",
        url: "/user/profile",
        component: UserProfile,
      },
    ],
  },
];
