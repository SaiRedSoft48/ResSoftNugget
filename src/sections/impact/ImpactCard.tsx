import React from "react";

import { ImpactProps } from "../../constants/constant";

const ImpactCard: React.FC<ImpactProps> = ({ card }) => {
  return (
    <div className="bg-[#262626] rounded-2xl w-[80%] md:w-[32.5%] h-[150px] md:h-[200px] py-6 px-4 flex flex-col justify-center items-start p-2 gap-1 mb-2 md:mb-0">
      <img
        className="h-[28px] w-[22px] md:h-[32px] md:w-[28px]"
        src={card.image}
        alt={`sample`}
      />
      <h1 className="text-white font-normal text-[16px] md:text-[20px] ">
        {" "}
        {card.headline}{" "}
      </h1>
      <p className="text-[#A3A3A3] text-[14px] md:text-[16px] ">
        {card.description}
      </p>
    </div>
  );
};

export default ImpactCard;
