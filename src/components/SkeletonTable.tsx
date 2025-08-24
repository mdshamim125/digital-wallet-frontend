// components/SkeletonTable.jsx
const SkeletonTable = ({ columns = 10, rows = 10 }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, idx) => (
              <th
                key={idx}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"
              >
                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rIdx) => (
            <tr
              key={rIdx}
              className="border-b border-gray-300 dark:border-gray-600"
            >
              {Array.from({ length: columns }).map((_, cIdx) => (
                <td key={cIdx} className="px-4 py-3">
                  <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;
