import HeroSection from "../components/HeroSection";
import ImageHeader from "../components/ImageHeader";
import FeaturesSection from "../components/FeaturesSection";
import EverythingYouNeedSection from "../components/EverythingYouNeedSection";

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-black">
        {/* Hero Section */}
        <HeroSection />
        {/* Header Image */}
        <ImageHeader />
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Everything You Need Section */}
      <EverythingYouNeedSection />
    </div>
  );
};

export default Home;
