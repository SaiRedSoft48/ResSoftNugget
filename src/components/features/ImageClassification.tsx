import React from "react";

import { imageImports } from "../../utils/importImages";

const ImageClassification: React.FC = () => {
  const { one_img } = imageImports;
  return (
    <div className="h-[100%] flex flex-col justify-start items-center md:items-start gap-2 pl-3 md:border-r border-b border-[#262626] md:py-0 py-4">
      <h1 className="text-white text-[20px] md:text-[24px] text-center md:text-left">
        Accurate Image Classification
      </h1>
      <p className="md:text-base text-[#A3A3A3] pr-2 text-center md:text-left text-[14px] ">
        Enhance support by precisely categorizing images for faster resolutions
      </p>
      <div className="h-[45vh] md:h-[68%] w-[90%] bg-[#171717] opacity-[0.8] rounded-2xl p-4 border-[#262626] border">
        <div
          className="rounded-2xl h-[100%] w-[100%] bg-cover bg-center"
          style={{ backgroundImage: `url(${one_img})` }}
        ></div>
      </div>
    </div>
  );
};

export default React.memo(ImageClassification);
