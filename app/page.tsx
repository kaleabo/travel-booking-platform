import HeroSection from "../components/HeroSection";
import ImageHeader from "../components/ImageHeader";
import FeaturesSection from "../components/FeaturesSection";

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
    </div>
  );
};

export default Home;
