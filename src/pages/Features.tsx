import {
  Send,
  Shield,
  Activity,
  BarChart3,
  Headphones,
  Gift,
  Globe,
  SmartphoneCharging,
} from "lucide-react";

const features = [
  {
    title: "Secure Wallet",
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    desc: "Your money is safe with top-notch encryption and fraud detection.",
  },
  {
    title: "Instant Transfers",
    icon: <Send className="w-8 h-8 text-green-500" />,
    desc: "Send money to anyone instantly, anytime, anywhere.",
  },
  {
    title: "Transaction History",
    icon: <Activity className="w-8 h-8 text-purple-500" />,
    desc: "Track and filter all your transactions in one place.",
  },

  {
    title: "Bill Payments",
    icon: <SmartphoneCharging className="w-8 h-8 text-indigo-500" />,
    desc: "Pay utility bills, mobile recharges, and services directly from your wallet.",
  },
  {
    title: "Spending Analytics",
    icon: <BarChart3 className="w-8 h-8 text-pink-500" />,
    desc: "Visualize spending patterns and manage your finances better.",
  },
  {
    title: "24/7 Support",
    icon: <Headphones className="w-8 h-8 text-teal-500" />,
    desc: "Get real-time help from our dedicated customer support team.",
  },
  {
    title: "Rewards & Cashback",
    icon: <Gift className="w-8 h-8 text-red-500" />,
    desc: "Earn exciting rewards and cashback on every eligible transaction.",
  },
  {
    title: "Global Payments",
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    desc: "Send and receive money across borders with multi-currency support.",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          Features
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
