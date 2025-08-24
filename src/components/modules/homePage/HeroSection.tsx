import { useNavigate } from "react-router";
import HeroImage from "@/assets/images/HeroImage.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center py-6 px-6 sm:px-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">
        Your Digital Wallet for a Smarter Life
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-3 max-w-xl">
        Fast, secure, and reliable wallet system. Manage, send, and receive
        money seamlessly anytime, anywhere.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Get Started
        </button>
        <button
          onClick={() => navigate("/about")}
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Learn More
        </button>
      </div>

      {/* Hero Image */}
      <img
        src={HeroImage}
        alt="Digital Wallet Hero"
        className="mt-6 h-[350px] w-full max-w-2xl rounded-lg shadow-lg"
      />
    </section>
  );
};

export default HeroSection;
