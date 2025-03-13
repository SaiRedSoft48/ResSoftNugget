import { motion } from "framer-motion"
import React from "react";

import { featuresDescriptionfadeUp, featuresHeadingfadeUp, rotateRightMotion, rotateLeftMotion } from "../../constants/animations";
import { imageImports } from "../../utils/importImages";
import MotionWrapper from "../common/MotionWrapper";

const FluidIntegrations: React.FC = () => {
  const { fluid_img, fluid_angle_one_img, fluid_angle_two_img, fluid_angle_three_img } = imageImports;
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
      {/* <div className="w-[100%] h-[100%] py-[100px] md:py-2 flex flex-row justify-center items-center">
        <motion.img {...rotateLeftMotion} className="absolute right-[100px] md:right-[240px] 2xl:right-[370px] h-[190px] md:h-[300px] 2xl:h-[350px] w-[200px] md:w-[290px] 2xl:w-[330px]" src={fluid_angle_one_img} alt="img" />
        <motion.img {...rotateRightMotion} className="absolute right-[75px] md:right-[200px] 2xl:right-[320px] h-[240px] md:h-[360px] 2xl:h-[410px] w-[250px] md:w-[370px] 2xl:w-[420px]" src={fluid_angle_two_img} alt="img" />
        <motion.img {...rotateLeftMotion} className="absolute right-[55px] md:right-[160px] 2xl:right-[280px]  h-[290px] md:h-[440px] 2xl:h-[490px] w-[290px] md:w-[450px] 2xl:w-[480px]" src={fluid_angle_three_img} alt="img" />
        <MotionWrapper animation={featuresHeadingfadeUp}>
          <div className="h-[40%] w-[78%] md:w-[65%] 2xl:w-[58%] mx-auto relative right-[-26px] top-[-20px]">
            <img className="h-[100%] w-[80%]" src={fluid_img} alt="fluid" />
          </div>
        </MotionWrapper>
      </div> */}
      <div className="w-full h-full py-[100px] md:py-2 flex justify-center items-center relative">
        <motion.img
          {...rotateLeftMotion}
          className="h-[190px] md:h-[220px] 2xl:h-[350px] w-[200px] md:w-[240px] 2xl:w-[330px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          src={fluid_angle_one_img}
          alt="img"
        />
        <motion.img
          {...rotateRightMotion}
          className="h-[240px] md:h-[320px] 2xl:h-[410px] w-[250px] md:w-[300px] 2xl:w-[420px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          src={fluid_angle_two_img}
          alt="img"
        />
        <motion.img
          {...rotateLeftMotion}
          className="h-[290px] md:h-[400px] 2xl:h-[490px] w-[290px] md:w-[380px] 2xl:w-[480px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          src={fluid_angle_three_img}
          alt="img"
        />
        <MotionWrapper animation={featuresHeadingfadeUp}>
          <div className="h-[38%] w-[78%] md:w-[54%] 2xl:w-[58%] mx-auto relative top-[-15px]">
            <img className="h-full w-[80%] mx-auto" src={fluid_img} alt="fluid" />
          </div>
        </MotionWrapper>
      </div>

    </div>
  );
};

export default FluidIntegrations;
