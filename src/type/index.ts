import type { ComponentType } from "react";
export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "admin" | "agent" | "user";
export type TUserStatus = "active" | "blocked";
export type TAgentStatus = "approved" | "suspended";
