import { motion } from "framer-motion";
import React from "react";

import { fadeUpHeading, HeroCicularMotion, HeroDescriptionMotion, HeroHexagonMotion, heroVectorMotion } from "../../constants/animations";
import MarqueeScroll from "../../sections/home/MarqueeScroll";
import { imageImports } from "../../utils/importImages";
import Button from "../common/Button";

import AnimatedHeading from "./AnimatedHeading ";


const Hero: React.FC = () => {
  const {
    hero_heading_img,
    hero_hexagon_img,
    hero_circular_img,
    hero_rotation_shield,
    hero_protect_shield
  } = imageImports;

  return (
    <div className="bg-black h-[100vh] md:h-[185vh] flex flex-col justify-center items-center overflow-hidden">
      <div className="relative h-[110vh] flex flex-col items-center text-center w-[100%] pt-40">
        <div className="absolute top-[80px] md:top-[120px] flex flex-row justify-between items-center md:left-1/4 2xl:left-1/3 h-[250px] w-[80vw] md:h-[360px] md:w-[580px]">
          <div className="h-[100%] w-[200%] relative md:left-[90px] md:top-[-80px] left-[10px] top-[-20px]">
            <motion.img
              className="relative left-[-10px] md:left-[-40px] top-[25px] md:top-[-25px] md:h-[160%] md:w-[50vw]"
              src={hero_rotation_shield}
              alt="hero_bg"
              style={{
                willChange: 'transform',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 6.0,
                ease: "linear",
              }}
            />
          </div>
        </div>
        <div className="hidden md:block absolute top-[80px] md:top-[40px] flex flex-row justify-between items-center h-[250px] w-[80vw] md:h-[65vh] 2xl:h-[50vh] md:w-[100vw]">
          <div className="h-[100%] w-[200%] relative md:left-[90px] md:top-[-80px] left-[10px] top-[-20px]">
            <img
              className="relative left-[-10px] md:left-[-20px] md:top-[55px] md:h-[140%] md:w-[90vw]"
              src={hero_protect_shield}
              alt="hero_bg"
            />
          </div>
        </div>

        <motion.img
          src={hero_hexagon_img}
          alt="Hexagon"
          className="hidden md:inline-block absolute z-50 right-[-140px] top-[80px] w-40 md:w-70 max-w-full"
          {...HeroHexagonMotion}
        />
        <motion.h1
          {...fadeUpHeading(0)}
          className="text-white text-[28px] md:text-7xl relative font-bold px-8 md:px-0"
        >
          <span className="relative inline-block">
            <span className="relative z-10">AI Agents, </span>
            <motion.img
              src={hero_heading_img}
              alt="Highlight"
              {...heroVectorMotion}
              className="absolute top-[-200%] md:top-[-40%] left-0 w-[170px] h-[200px] md:w-[480px] md:h-[120px] max-w-full"
            />
            <motion.img
              src={hero_heading_img}
              alt="Highlight"
              {...heroVectorMotion}
              className="absolute top-[-200%] md:top-[-40%] left-0 w-[170px] h-[200px] md:w-[480px] md:h-[120px] max-w-full"
            />
            <motion.img
              src={hero_heading_img}
              alt="Highlight"
              {...heroVectorMotion}
              className="absolute top-[-200%] md:top-[-40%] left-0 w-[170px] h-[200px] md:w-[480px] md:h-[120px] max-w-full"
            />
            <motion.img
              src={hero_heading_img}
              alt="Highlight"
              {...heroVectorMotion}
              className="absolute top-[-200%] md:top-[-40%] left-0 w-[170px] h-[200px] md:w-[480px] md:h-[120px] max-w-full"
            />
            <motion.img
              src={hero_heading_img}
              alt="Highlight"
              {...heroVectorMotion}
              className="absolute top-[-200%] md:top-[-40%] left-0 w-[170px] h-[200px] md:w-[480px] md:h-[120px] max-w-full"
            />
          </span>
          <span> built for speed, scale, and quality </span>
        </motion.h1>

        <motion.img
          src={hero_circular_img}
          alt="Circular"
          className="hidden md:inline-block absolute left-[-130px] top-[400px] w-40 md:w-60 z-999 max-w-full"
          {...HeroCicularMotion}
        />
        <motion.p
          className="text-[#A3A3A3] text-[14px] md:text-xl max-w-4xl mt-4 px-6 md:px-0"
          {...HeroDescriptionMotion}
        >
          Handling complex queries, boosting efficiency, and streamlining
          support, so your business scales faster with precision.
        </motion.p>
        <motion.div
          {...HeroDescriptionMotion}
        >
          <Button size="text-md" pd="px-3 py-2 mt-6" />
        </motion.div>
      </div>

      <div className="flex flex-col items-center text-center overflow-hidden h-[60vh] md:h-[60vh]">
        <AnimatedHeading />
        <p className="text-[#A3A3A3] text-[14px] md:text-xl max-w-2xl mx-auto mt-2 w-[90vw] md:w-auto">
          We efficiently manage over 15 million monthly interactions across
          Zomato, at 99.99% uptime.
        </p>
        <MarqueeScroll />
      </div>
    </div>
  );
};

export default Hero;
