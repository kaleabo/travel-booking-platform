import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f8f8] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#f0f6fc] lg:flex justify-between items-center p-10 px-12 rounded-xl shadow-lg text-center">
          <div className="lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-black">Get your website today!</h2>
            <p className="text-gray-600 mb-4">
              Sell flights, hotels, and tours from around the world.
            </p>
          </div>
          <div className="flex justify-center space-x-3">
            <a href="tel:02839082932" className="text-xl font-bold p-1 px-5 rounded-lg bg-[#1e61dc] text-white">
              02839082932
            </a>
            <a href="mailto:hello@test.com" className="text-[#1e61dc] p-2 px-5 rounded-lg bg-white text-sm font-semibold">
              hello@test.com
            </a>
          </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
