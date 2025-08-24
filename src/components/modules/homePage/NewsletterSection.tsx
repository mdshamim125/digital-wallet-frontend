import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setLoading(true);

    // simulate async submission
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("Thanks for subscribing!");
    }, 1200);
  };

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 id="subscribe-us" className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-500">
          Stay Updated
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-500">
          Subscribe to our newsletter to get the latest updates and offers.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg w-full sm:w-auto flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-lg text-white transition-colors duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            }`}
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
