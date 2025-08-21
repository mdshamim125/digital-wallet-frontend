import AdminOverview from "@/pages/admin/AdminOverview";
import ManageAgents from "@/pages/admin/ManageAgents";
import ManageUsers from "@/pages/admin/ManageUsers";
import ViewTransactions from "@/pages/admin/ViewTransactions";
import type { ISidebarItem } from "@/type";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "overview",
        url: "/admin/overview",
        component: AdminOverview,
      },
      {
        title: "transactions",
        url: "/admin/transactions",
        component: ViewTransactions,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "Manage Users",
        url: "/admin/manage-users",
        component: ManageUsers,
      },
      {
        title: "Manage Agents",
        url: "/admin/manage-agents",
        component: ManageAgents,
      },
    ],
  },
  // {
  //   title: "Tour Management",
  //   items: [
  //     {
  //       title: "Add Tour Type",
  //       url: "/admin/add-tour-type",
  //       component: AddTourType,
  //     },
  //     {
  //       title: "Add Tour",
  //       url: "/admin/add-tour",
  //       component: AddTour,
  //     },
  //     {
  //       title: "Habi Jabi",
  //       url: "/admin/habijabi",
  //       component: AddTour,
  //     },
  //   ],
  // },
];
