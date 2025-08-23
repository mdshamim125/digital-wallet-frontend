/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  useGetAllUsersQuery,
  useUpdateStatusMutation,
} from "@/redux/features/user/user.api";
import { toast } from "sonner";

export default function ManageAgent() {
  const { data: users, refetch } = useGetAllUsersQuery(null);
  const [updateStatus, { isLoading }] = useUpdateStatusMutation();

  const filteredUsers = users?.data?.filter(
    (user: any) => user.role === "agent"
  );

  const handleUpdateStatus = async (id: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === "approved" ? "suspended" : "approved";
      console.log(newStatus, id);
      const res = await updateStatus({
        id,
        statusInfo: { agentStatus: newStatus },
      }).unwrap();
      refetch();

      toast.success(`User status updated to ${newStatus}`);
      console.log("Status updated:", res);
    } catch (error: any) {
      console.error("Failed to update status:", error);
      toast.error(error?.data?.message || "Failed to update status");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Agents</h2>
      <Table>
        <TableCaption className="sr-only">
          A list of all registered users.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers?.map((user: any) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.agentStatus}</TableCell>
              <TableCell>
                {user.agentStatus === "approved" ? (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() =>
                      handleUpdateStatus(user._id, user.agentStatus)
                    }
                    disabled={isLoading}
                  >
                    Suspend
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleUpdateStatus(user._id, user.agentStatus)
                    }
                    disabled={isLoading}
                  >
                    Approve
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
