import React from 'react';

interface FeatureCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-[#f0f6fc] hover:rotate-6 transition-all ease-in-out p-6 pr-0 rounded-xl">
      <img src={imgSrc} alt={title} className="w-full -ml-2" />
      <h3 className="text-2xl text-black font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
