import React from "react";
import FeatureCard from "./FeatureCard";
import Link from "next/link";

const EverythingYouNeedSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-black font-bold text-center my-10">
          Everything you need, in one link
        </h2>
        <div className="grid grid-cols-1 p-6 md:grid-cols-12 gap-8">
          <Link href={`/search`} className="md:col-span-4">
            <FeatureCard
              imgSrc="/feature/image-1.png"
              title="Search"
              description="Make searching flights an intuitive experience for your customers."
            />
          </Link>
          <Link href={`/book`} className="md:col-span-4">
            <FeatureCard
              imgSrc="feature/image-2.png"
              title="Book"
              description="Capture all relevant details from your customer in a one-step checkout"
            />
          </Link>
          <Link href={`/ancillaries`} className="md:col-span-4">
            <FeatureCard
              imgSrc="/feature/image-3.png"
              title="Ancillaries"
              description="Let your customers book premium sears and pay for additional baggage."
            />
          </Link>
          <div className="md:col-span-6">
            <FeatureCard
              imgSrc="/feature/image-4.png"
              title="payment integration"
              description="Take payments securely from your customers using our payments."
            />
          </div>
          <div className="md:col-span-6">
            <FeatureCard
              imgSrc="/feature/image-5.png"
              title="order management"
              description="Register interest today..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeedSection;
