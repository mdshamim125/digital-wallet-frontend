import FeatureSection from "@/components/modules/homePage/FeatureSection";
import HeroSection from "@/components/modules/homePage/HeroSection";
import NewsletterSection from "@/components/modules/homePage/NewsletterSection";
import StatsSection from "@/components/modules/homePage/StatsSection";
import Testimonials from "@/components/modules/homePage/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <Testimonials />
      <NewsletterSection />
    </div>
  );
};

export default Home;
