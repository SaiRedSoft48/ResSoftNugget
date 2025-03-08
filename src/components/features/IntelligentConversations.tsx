import React from "react";

import { featuresDescriptionfadeUp, featuresHeadingfadeUp } from "../../constants/animations";
import { useMediaQuery } from "../../hooks/useMediaQuery"; 
import { imageImports } from "../../utils/importImages";
import MotionWrapper from "../common/MotionWrapper";

const IntelligentConversations: React.FC = () => {
  const { support_desk_img, support_mb_img } = imageImports;
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="h-[100%] flex flex-col justify-center items-center md:justify-start md:items-start gap-3 border-b border-[#262626]">
      <MotionWrapper animation={featuresHeadingfadeUp}>
        <h1 className="text-white text-center md:text-left text-[20px] md:text-[24px] pl-3">
          Intelligent Conversations. Effortless Support
        </h1>
      </MotionWrapper>
      <MotionWrapper animation={featuresDescriptionfadeUp}>
        <p className="text-[#A3A3A3] pl-3 text-center md:text-left text-[14px] md:text-[16px]">
          Seamlessly integrate data sources and SOPs to generate accurate responses and actions
        </p>
      </MotionWrapper>
      <div className="h-[100%] w-[94%] bg-[#171717] opacity-[0.8] rounded-t-2xl px-4 pt-4 self-center relative overflow-hidden">
        <div
          className="rounded-t-2xl h-[98%] w-[100%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${isMobile ? support_mb_img : support_desk_img})`,
          }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>
      </div>

    </div>
  );
};

export default IntelligentConversations;
