import React from "react";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 md:block flex">
      <div className="text-2xl hover:rotate-6 transition-all ease-in-out cursor-pointer size-[100px] text-black rounded-[8px] items-center justify-center bg-blue-100 gap-[10px] inline-flex font-bold mb-2">
        {step}
      </div>
      <div className="md:space-y-0 space-y-2 md:p-0 p-3">
        <h3 className="text-2xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
