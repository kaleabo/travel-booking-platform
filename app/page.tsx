import HeroSection from "../components/HeroSection";
import ImageHeader from "../components/ImageHeader";
import FeaturesSection from "../components/FeaturesSection";
import EverythingYouNeedSection from "../components/EverythingYouNeedSection";
import PlatformSection from "../components/PlatformSection";

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

      {/* Platform Section */}
      <PlatformSection />
    </div>
  );
};

export default Home;
