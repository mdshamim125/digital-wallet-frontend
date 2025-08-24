// components/LineChartComponent.jsx
import {
    LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type LineChartData = {
  week: string | number;
  weeklyTransactions: number;
  weeklyVolume: number;
};

interface LineChartProps {
  data: LineChartData[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart id="chart-section" data={data}>
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
  );
};

export default LineChartComponent;
