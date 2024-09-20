import React from 'react';
import ContentBlock from './ContentBlock';

const PlatformSection: React.FC = () => {
  return (
    <section className="bg-[#f8f8f8] py-10 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black">An easy to use travel booking platform</h1>
        </div>
        {/* Block 1: Customize Content */}
        <ContentBlock
          title="Customize every content on your website"
          description="Offer your customer a seamless travel booking experience, customised to your brand."
          imgSrc="/platform/image-3.png"
          imgAlt="Customize your website"
        />

        {/* Block 2: Focus on what matters */}
        <ContentBlock
          title="Focus on what matters"
          description="We take care of the intricate details of travel expertise, accreditation, and airline partnerships, so you don’t have to."
          additionalText="Your customers can easily book flights with over 900 top airlines worldwide, along with accommodations, tours, and insurance. We save you time and resources so that you can focus on what matters most - running your business."
          imgSrc="/platform/image-2.png"
          imgAlt="Focus on what matters"
          reverse // This prop will reverse the image and text layout for this block
        />

        {/* Block 3: Earn more money */}
        <ContentBlock
          title="Earn more money"
          description="Take control of the entire travel experience. Effortlessly add markups to all travel products using our user-friendly dashboard."
          additionalText="Upsell your customers with accommodations, things to do, and insurance products."
          imgSrc="/platform/image-1.png"
          imgAlt="Earn more money"
        />
      </div>
    </section>
  );
};

export default PlatformSection;
