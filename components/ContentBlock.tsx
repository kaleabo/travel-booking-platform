import React from "react";

interface ContentBlockProps {
  title: string;
  description: string;
  additionalText?: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  description,
  additionalText,
  imgSrc,
  imgAlt,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col p-6 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center mb-12 gap-8`}
    >
      <div>
        <h2 className="text-2xl text-black md:text-3xl md:font-bold font-semibold mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mb-6">{description}</p>
        {additionalText && <p className="text-gray-600">{additionalText}</p>}
      </div>
      <img src={imgSrc} alt={imgAlt} className="w-full md:w-1/2" />
    </div>
  );
};

export default ContentBlock;
