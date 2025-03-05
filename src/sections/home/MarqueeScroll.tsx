import React from "react";
import Marquee from "react-fast-marquee";

import { imageImports } from "../../utils/importImages";

const MarqueeScroll: React.FC = () => {
  const { zomato_img, blinkit_img, hyperpure_img, district_img } = imageImports;
  return (
    <div className="relative w-[92%] my-5 overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-black to-transparent pointer-events-none md:z-10" />
      <div className="absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-black to-transparent pointer-events-none md:z-10" />
      <Marquee direction="left" speed={60}>
        {[
          zomato_img,
          blinkit_img,
          hyperpure_img,
          district_img,
          zomato_img,
          blinkit_img,
          hyperpure_img,
          district_img,
        ].map((img, index) => (
          <div key={index} className="mx-[20px] md:mx-[40px]">
            <img className="w-[100px] md:w-[200px]" src={img} alt="Brand" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeScroll;
