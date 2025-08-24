import { Shield, Send, Activity } from "lucide-react";

const features = [
  {
    title: "Secure Wallet",
    desc: "Top-notch security for all your transactions.",
    icon: <Shield className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Instant Transfers",
    desc: "Send money instantly to any user safely.",
    icon: <Send className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Track Transactions",
    desc: "View all your transactions with ease.",
    icon: <Activity className="w-10 h-10 text-purple-500" />,
  },
];

const FeatureSection = () => {
  return (
    <div>
      <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                {f.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-center">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
