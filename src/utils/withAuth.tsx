import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/type";
import { Navigate, useLocation } from "react-router";
import type { ComponentType } from "react";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    const location = useLocation();
    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
      return <Navigate to="/unauthorized" replace />;
    }

    return <Component />;
  };
};
