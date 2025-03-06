import React from "react";

import { ImpactData } from "../../constants/constant";

import ImpactCard from "./ImpactCard";


const Impact: React.FC = () => {
  return (
    <div className="bg-black py-6">
      <div className="flex flex-col gap-2 items-center"
      >
        <h1 className="text-white text-[28px] md:text-[48px] md:leading-[60px] font-semibold">
          Maximize Efficiency
        </h1>
        <p className="text-[#A3A3A3] text-[14px] w-[80vw] text-center md:w-auto  md:text-lg my-2">
          Optimize workflows, drive faster issue resolutions, and achieve
          measurable cost reductions
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center md:w-[90%] mt-2">
          {ImpactData.map((card) => (
            <ImpactCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Impact;
