import { useGetAdminOverviewQuery } from "@/redux/features/user/user.api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Users, UserCheck, CreditCard, DollarSign } from "lucide-react";

const AdminOverview = () => {
  const { data } = useGetAdminOverviewQuery(null);
  const info = data?.data;

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        Admin Dashboard
      </h1>
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          {
            title: "Total Users",
            value: info?.totalUsers,
            icon: (
              <Users className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            ),
          },
          {
            title: "Total Agents",
            value: info?.totalAgents,
            icon: (
              <UserCheck className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            ),
          },
          {
            title: "Transactions",
            value: info?.totalTransactions,
            icon: (
              <CreditCard className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            ),
          },
          {
            title: "Total Volume",
            value: `$${info?.totalVolume.toLocaleString()}`,
            icon: (
              <DollarSign className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            ),
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4"
          >
            <div>{card.icon}</div>
            <div>
              <h2 className="text-gray-500 dark:text-gray-400 font-medium">
                {card.title}
              </h2>
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Weekly Stats Chart */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300">
        <h2 className="text-gray-700 dark:text-gray-200 font-semibold mb-4">
          Weekly Transactions & Volume
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={info?.weeklyStats}>
            <XAxis
              dataKey="week"
              tickFormatter={(week) => new Date(week).toLocaleDateString()}
              stroke="#8884d8"
            />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderRadius: "8px",
                color: "#fff",
              }}
              labelFormatter={(week) => new Date(week).toLocaleDateString()}
            />
            <Legend
              verticalAlign="top"
              height={36}
              wrapperStyle={{ color: "#fff" }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="weeklyTransactions"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="weeklyVolume"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminOverview;
