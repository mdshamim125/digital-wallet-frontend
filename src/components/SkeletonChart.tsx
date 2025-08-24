const SkeletonChart = ({ height = "h-72" }) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg w-full ${height}`}
    ></div>
  );
};

export default SkeletonChart;
