const Team = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Alice Johnson", "Bob Smith", "Charlie Lee"].map((name, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                {name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Team Member</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
