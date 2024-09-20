import React from "react";
import StepCard from "./StepCard";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-black font-bold text-center my-10">
          The fastest way to sell travel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StepCard
            step={1}
            title="Subscribe"
            description="Subscribe to the website plan on Intraverse."
          />
          <StepCard
            step={2}
            title="Customize"
            description="Customize every content on your website to fit your brand."
          />
          <StepCard
            step={3}
            title="Start selling"
            description="Publish to your own domain and start selling instantly."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
