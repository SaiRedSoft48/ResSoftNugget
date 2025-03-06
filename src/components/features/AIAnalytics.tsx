import React from "react";

import { featuresDescriptionfadeUp, featuresHeadingfadeUp } from "../../constants/animations";
import { imageImports } from "../../utils/importImages";
import MotionWrapper from "../common/MotionWrapper";

import QuestionRotator from "./QuestionRotator";
const AIAnalytics: React.FC = () => {
  const { search_img } = imageImports;
  return (
    <div className="h-[100%] md:w-[56%] flex flex-col justify-center md:justify-start items-center md:items-start gap-1 pl-3 md:border-r border-b border-[#262626] pt-4 py-8 md:py-0 md:pl-4">
      <MotionWrapper animation={featuresHeadingfadeUp}>
      <h1 className="text-white text-[20px] md:text-[24px] md:my-2">
        AI Powered Analytic
        </h1>
      </MotionWrapper>
      <MotionWrapper animation={featuresDescriptionfadeUp}>
        <p className="text-[14px] md:text-[16px] text-[#A3A3A3] md:text-left text-center md:my-2">
        Identify issues, ask questions and unlock valuable insights from your
        interaction
        </p>
      </MotionWrapper>
      <div className="flex flex-row justify-start md:pl-3 md:items-center gap-2 pt-4 md:my-2">
        <img className="h-[20px] w-[20px]" src={search_img} alt="search" />
        <p className="text-[#A3A3A3] text-[14px] md:text-[16px] self-start">
          Type your question
        </p>
      </div>
      <QuestionRotator />
    </div>
  );
};

export default AIAnalytics;
