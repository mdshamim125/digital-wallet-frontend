import AdminOverview from "@/pages/admin/AdminOverview";
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
