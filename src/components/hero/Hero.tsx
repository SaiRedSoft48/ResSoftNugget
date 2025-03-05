import { motion } from "framer-motion";
import React from "react";

import MarqueeScroll from "../../sections/home/MarqueeScroll";
import { imageImports } from "../../utils/importImages";
import Button from "../common/Button";

import AnimatedHeading from "./AnimatedHeading ";

const Hero: React.FC = () => {
  const {
    hero_heading_img,
    hero_hexagon_img,
    hero_circular_img,
    hero_bg_one_img,
    hero_bg_two_img,
  } = imageImports;
  return (
    <div className="bg-black h-[100vh] md:h-[185vh] flex flex-col justify-center items-center overflow-hidden">
      <div className="relative h-[110vh] flex flex-col items-center text-center w-[100%] pt-40 overflow-hidden">
        <div className="absolute top-[80px] md:top-[40px] flex flex-row justify-between items-center md:left-1/5 h-[200px] w-[80vw] md:h-[400px] md:w-[60vw]">
          <div className="h-[100%] w-[50%]">
            <motion.img
              initial={{ y: -150, scale: 0.5, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8,
              }}
              className="relative left-[-10px] md:left-[-40px] top-[25px] md:top-[-25px] md:h-[100%] w-[100%]"
              src={hero_bg_one_img}
              alt="hero_bg"
            />
          </div>
          <div className="h-[100%] w-[50%]">
            <motion.img
              initial={{ y: 150, scale: 0.5, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8,
              }}
              className="relative md:bottom-[-55px] bottom-[-95px] md:h-[100%] w-[100%]"
              src={hero_bg_two_img}
              alt="hero_bg"
            />
          </div>
        </div>
        <motion.img
          src={hero_hexagon_img}
          alt="Hexagon"
          className="hidden md:inline-block absolute z-50 right-[-140px] top-[80px] w-40 md:w-70 max-w-full"
          initial={{ y: -100, scale: 0.5, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8,
          }}
        />
        <motion.h1
          className="text-white text-[28px] md:text-7xl relative font-bold px-8 md:px-0"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8,
          }}
        >
          <span className="relative z-10">AI Agents, </span>
          <motion.img
            src={hero_heading_img}
            alt="Highlight"
            className="absolute top-[-83px] left-[42px] md:top-[-25px] md:left-[20px] w-[170px] h-[200px] md:w-[480px] md:h-[120px] max-w-full"
            initial={{ scaleX: 2, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              duration: 1.2,
            }}
            style={{ transformOrigin: "center" }}
          />
          <motion.img
            src={hero_heading_img}
            alt="Highlight"
            className="absolute top-[-83px] left-[42px] md:top-[-25px] md:left-[20px] w-[170px] h-[200px] md:w-[480px] md:h-[120px] max-w-full"
            initial={{ scaleX: 2, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              duration: 1.2,
            }}
            style={{ transformOrigin: "center" }}
          />
          <span> build for speed, scale, and quality </span>
        </motion.h1>
        <motion.img
          src={hero_circular_img}
          alt="Circular"
          className="hidden md:inline-block absolute left-[-130px] top-[400px] w-40 md:w-60 max-w-full"
          initial={{ y: -100, scale: 0.5, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8,
            delay: 0.2,
          }}
        />
        <motion.p
          className="text-[#A3A3A3] text-[14px] md:text-xl max-w-4xl mt-4 px-6 md:px-0"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1,
            delay: 0.2,
          }}
        >
          Handling complex queries, boosting efficiency, and streamlining
          support, so your business scales faster with precision.
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1,
            delay: 0.2,
          }}
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
