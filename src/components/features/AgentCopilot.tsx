import { motion } from "framer-motion";
import React from "react";

import { featuresDescriptionfadeUp, featuresHeadingfadeUp } from "../../constants/animations";
import { Agents } from "../../constants/constant";
import MotionWrapper from "../common/MotionWrapper";
const AgentCopilot: React.FC = () => {
  return (
    <div className="h-[100%] md:w-[50%] md:border-r border-b md:border-b-none lg:border-b-0 border-[#262626] px-2 md:px-4 py-4 flex flex-col justify-center md:justify-start items-center md:items-start gap-3">
     <MotionWrapper animation={featuresHeadingfadeUp}>
      <h1 className="text-white text-[20px] md:text-[24px]">
        Agent Co-pilot
        </h1>
      </MotionWrapper>
      <MotionWrapper animation={featuresDescriptionfadeUp}>
      <p className="text-[14px] md:text-[16px] text-[#A3A3A3] pr-4 text-center md:text-left">
        Assist your team with real-time personalized customer insights and
        actions
        </p>
      </MotionWrapper>
      <div className="flex flex-col justify-between items-center w-[100%] py-2 gap-4 md:gap-0">
        {Agents.map((each, index) => {
          return (
            <motion.div
              initial={featuresHeadingfadeUp.initial}
              whileInView={featuresHeadingfadeUp.whileInView}
              transition={featuresHeadingfadeUp.transition}
              viewport={featuresHeadingfadeUp.viewport}
              key={index}
              className="w-[100%] h-[16vh] md:h-[22%] bg-[#171717] border border-[#262626] rounded-2xl p-4 flex flex-col justify-center items-start gap-2 md:gap-1"
            >
              <img className="w-[22px] md:w-[25px]" src={each.image} alt="time" />
              <h1 className="text-white text-[16px] md:text-[20px]"> {each.headline} </h1>
              <p className="text-[#A3A3A3] text-[12px] md:text-[14px] pr-4">
                {each.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentCopilot;
