/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, ArrowUpCircle, Send, Wallet } from "lucide-react";
import { useGetUserOverviewQuery } from "@/redux/features/user/user.api";
import { Link } from "react-router";
import SkeletonCard from "@/components/SkeletonCard";
import SkeletonTable from "@/components/SkeletonTable";

export default function UserOverview() {
  const { data, isLoading } = useGetUserOverviewQuery(null);

  // console.log(data);

  if (isLoading) {
    return (
      <div className="flex flex-col">
        <SkeletonCard />
        <SkeletonTable />
      </div>
    );
  }

  return (
    <div className="p-6 grid gap-6 md:grid-cols-3">
      {/* Wallet Balance */}
      <Card
        id="stats-cards"
        className="col-span-3 md:col-span-1 shadow-lg rounded-2xl"
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Wallet className="w-6 h-6 text-blue-600" />
            Wallet Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-bold text-blue-700 text-3xl">
            ${Number(data?.data?.walletBalance || 0).toFixed(5)}
          </p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="col-span-3 md:col-span-2 shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Link to="/user/deposit-money">
            <Button className="rounded-xl shadow-md" variant="default">
              <ArrowDownCircle className="w-5 h-5 mr-2" />
              Deposit Money
            </Button>
          </Link>

          <Link to="/user/send-money">
            <Button className="rounded-xl shadow-md" variant="secondary">
              <Send className="w-5 h-5 mr-2" />
              Send Money
            </Button>
          </Link>

          <Link to="/user/withdraw-money">
            <Button className="rounded-xl shadow-md" variant="destructive">
              <ArrowUpCircle className="w-5 h-5 mr-2" />
              Withdraw
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="col-span-3 shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-left">
                  <th className="p-2">Type</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Fee</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.recentTransactions?.map((tx: any) => (
                  <tr key={tx._id} className="border-b">
                    <td className="p-2 capitalize">
                      {tx.type.replace("_", " ")}
                    </td>
                    <td className="p-2">${tx.amount}</td>
                    <td className="p-2">${tx.fee}</td>
                    <td
                      className={`p-2 font-medium ${
                        tx.status === "completed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {tx.type}
                    </td>
                    <td className="p-2">
                      {new Date(tx.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
