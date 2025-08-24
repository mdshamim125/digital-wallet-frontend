/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import { useGetAgentOverviewQuery } from "@/redux/features/user/user.api";

export default function AgentOverview() {
  const { data } = useGetAgentOverviewQuery(null);
  console.log(data?.data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Wallet Balance */}
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Wallet className="w-5 h-5 text-blue-600" /> Wallet Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-blue-700">
            ${data?.data?.walletBalance}
          </p>
        </CardContent>
      </Card>

      {/* Cash In Summary */}
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <ArrowDownCircle className="w-5 h-5 text-green-600" /> Cash In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-green-600">
            ${data?.data?.cashInTotal}
          </p>
        </CardContent>
      </Card>

      {/* Cash Out Summary */}
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <ArrowUpCircle className="w-5 h-5 text-red-600" /> Cash Out
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-red-600">
            ${data?.data?.cashOutTotal}
          </p>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="md:col-span-3 shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y">
            {data?.data?.recentActivity?.map((tx: any) => (
              <li key={tx._id} className="flex justify-between py-3 text-sm">
                <div>
                  <p className="capitalize font-medium">
                    {tx.type.replace("_", " ")}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(tx.createdAt).toLocaleString()}
                  </p>
                </div>
                <p
                  className={`font-bold ${
                    tx.type.includes("withdraw")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  ${tx.amount}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
