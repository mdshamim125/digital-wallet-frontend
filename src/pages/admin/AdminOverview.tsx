import LineChart from "@/components/modules/dashboard/LineChartComponent";
import NotFound from "@/components/NotFound";
import SkeletonCard from "@/components/SkeletonCard";
import SkeletonChart from "@/components/SkeletonChart";
import { useGetAdminOverviewQuery } from "@/redux/features/user/user.api";

const AdminOverview = () => {
  const { data, isLoading, isError } = useGetAdminOverviewQuery(null);
  const info = data?.data;

  if (isError) return <NotFound />;

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {isLoading
          ? [1, 2, 3, 4].map((_, idx) => (
              <SkeletonCard key={idx} height="h-24" />
            ))
          : [
              { title: "Total Users", value: info?.totalUsers },
              { title: "Total Agents", value: info?.totalAgents },
              { title: "Transactions", value: info?.totalTransactions },
              {
                title: "Total Volume",
                value: `$${info?.totalVolume.toLocaleString()}`,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4"
              >
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

      {/* Chart */}
      {isLoading ? <SkeletonChart /> : <LineChart data={info?.weeklyStats} />}
    </div>
  );
};

export default AdminOverview;
