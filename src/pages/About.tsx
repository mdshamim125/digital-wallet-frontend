import Mission from "@/components/modules/about/Mission";
import Story from "@/components/modules/about/Story";
import Vision from "@/components/modules/about/Vision";
import Features from "./Features";
import Team from "@/components/modules/about/Team";

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          About Us
        </h1>

        <Story />

        <Mission />

        <Vision />
        {/* Features */}
        <Features />

        {/* Team */}
        <Team />
      </div>
    </section>
  );
};

export default About;
