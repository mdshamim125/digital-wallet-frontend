const SkeletonCard = ({ width = "w-full", height = "h-20" }) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg ${width} ${height}`}
    ></div>
  );
};

export default SkeletonCard;
