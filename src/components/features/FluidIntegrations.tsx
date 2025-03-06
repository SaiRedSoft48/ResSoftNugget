import React from "react";

import { featuresDescriptionfadeUp, featuresHeadingfadeUp } from "../../constants/animations";
import { imageImports } from "../../utils/importImages";
import MotionWrapper from "../common/MotionWrapper";

const FluidIntegrations: React.FC = () => {
  const { fluid_img } = imageImports;
  return (
    <div className=" h-[100%] md:w-[50%] py-4 px-2 md:px-4 flex flex-col justify-center items-center md:justify-start md:items-start gap-3 border-b border-[#262626] md:border-b-0">
      <MotionWrapper animation={featuresHeadingfadeUp}>
      <h1 className="text-white text-[20px] md:text-[24px]">
        Fluid Integrations
        </h1>
      </MotionWrapper>
      <MotionWrapper animation={featuresDescriptionfadeUp}>
      <p className="text-[14px] md:text-[16px] text-center md:text-left text-[#A3A3A3] pr-4">
        Integrate seamlessly with tools like Freshdesk, Zoho, and more{" "}
        </p>
      </MotionWrapper>
      <div className=" items-center w-[100%] py-2">
        <MotionWrapper animation={featuresHeadingfadeUp}>
          <img src={fluid_img} alt="fluid" />
        </MotionWrapper>
      </div>
    </div>
  );
};

export default FluidIntegrations;
