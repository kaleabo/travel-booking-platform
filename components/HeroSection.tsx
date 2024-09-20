import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-black lg:pt-36 md:pt-20 pt-10 text-center text-white">
      <div className="mx-auto max-w-4xl py-20">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-6xl">
          Start selling travel today on your own website
        </h1>
        <p className="mt-10 text-gray-500">
          Customize your travel website, and start selling. Let’s get your
          business off the ground with our intuitive tools!
        </p>
        <Link
          href={`/search`}
          className={buttonVariants({
            className: "mt-6 !px-16 h-12 text-white",
            variant: "default",
            size: "lg",
          })}
        >
          Try it now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
