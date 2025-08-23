import AdminOverview from "@/pages/admin/AdminOverview";
import ManageAgents from "@/pages/admin/ManageAgents";
import ManageUsers from "@/pages/admin/ManageUsers";
import Profile from "@/pages/admin/Profile";
import ViewTransactions from "@/pages/admin/ViewTransactions";
import type { ISidebarItem } from "@/type";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        component: AdminOverview,
      },
      {
        title: "Transactions",
        url: "/admin/transactions",
        component: ViewTransactions,
      },
      {
        title: "Profile",
        url: "/admin/profile",
        component: Profile,
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
