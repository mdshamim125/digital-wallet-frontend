export default function StatsSection() {
  const stats = [
    { label: "Users", value: "120K+" },
    { label: "Transactions", value: "500K+" },
    { label: "Countries", value: "15+" },
    { label: "Support", value: "24/7" },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
