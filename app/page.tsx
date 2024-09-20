import HeroSection from "../components/HeroSection";
import ImageHeader from "../components/ImageHeader";

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-black">
        {/* Hero Section */}
        <HeroSection />
        {/* Header Image */}
        <ImageHeader />
      </div>

    </div>
  );
};

export default Home;
