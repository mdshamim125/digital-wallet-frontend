import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How do I create an account?",
    a: "Click on the Register button on the homepage, provide your name, email and create a secure password.",
  },
  {
    q: "How do I add money to my wallet?",
    a: "Login to your dashboard, go to the Deposit section, and input your amount and choose your agent.",
  },
  {
    q: "Is my money safe?",
    a: "No, this is not safe! Its just transaction purpose",
  },
  {
    q: "Can I transfer money to other users?",
    a: "Absolutely! Use the Send Money feature, enter the recipient’s email, type the amount, and confirm the transaction instantly.",
  },
  {
    q: "How do I withdraw money from my wallet?",
    a: "Go to the Withdraw section in your dashboard, select your linked bank account or mobile money option, enter the amount, and confirm the withdrawal.",
  },
  {
    q: "Can I link my bank account or card?",
    a: "Yes, you can securely link your bank account or debit/credit card from the Settings > Payment Methods section.",
  },
  {
    q: "What should I do if I change my password?",
    a: "Go to the your dashboard, and then go your profile and set your new password by giving your old password correctly",
  },
  {
    q: "Are there transaction limits?",
    a: "No, there's no limitation for transaction",
  },
  {
    q: "How can I view my transaction history?",
    a: "Navigate to the Transactions tab in your dashboard to see all deposits, withdrawals, and transfers with detailed timestamps.",
  },
  {
    q: "How do I contact support?",
    a: "You can reach us anytime via the Contact Us page, email at support@digitalwallet.com, or through our in-app chat feature.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggle(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-gray-800 dark:text-white font-medium">
                  {faq.q}
                </h3>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
              {openIndex === idx && (
                <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
