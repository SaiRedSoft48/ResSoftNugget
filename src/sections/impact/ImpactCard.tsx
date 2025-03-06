import React from "react";


import MotionWrapper from "../../components/common/MotionWrapper";
import { featuresFadeUp } from "../../constants/animations";
import { ImpactProps } from "../../constants/constant";

const ImpactCard: React.FC<ImpactProps> = ({ card }) => {
  return (
    <div className="bg-[#171717] rounded-2xl w-[80%] md:w-[32.5%] h-[165px] md:h-[180px] py-6 px-4 flex flex-col justify-center items-start p-2 gap-2 mb-2 md:mb-0">
      <MotionWrapper animation={featuresFadeUp}>
        <div className="flex flex-col justify-center items-start gap-2">
      <img
        className="h-[28px] w-[22px] md:h-[30px] md:w-[25px]"
        src={card.image}
            alt={`sample${card.image}`}
      />
      <h1 className="text-white font-normal text-[16px] md:text-[20px] ">
        {card.headline}
      </h1>
      <p className="text-[#A3A3A3] text-[14px] md:text-[16px] ">
        {card.description}
          </p>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default ImpactCard;
