import React from "react"

import headingSvg from "../../assets/hero/Vector.svg";

import FeatureHighlights from "./FeatureHighlights"

const FeatureHeader: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-white text-[28px] md:text-[48px] md:leading-[60px] font-semibold w-[80vw] m-auto px-2 md:px-0">
        <span className="relative z-10">The only </span>
        <span className="relative inline-block">
          <span className="relative z-10 font-bold">AI toolbox</span>
          <img src={headingSvg}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-auto z-0"
          />
          <img src={headingSvg}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-auto z-0"
          />
        
        </span>
        <span className="relative z-10"> you'll ever need</span>
      </h1>

      <p className="text-[#A3A3A3] text-[14px] md:text-lg max-w-2xl mx-auto mt-2">
        From conversational AI agents to co-pilots, unlock endless possibilities to transform your business
      </p>
      <FeatureHighlights />
    </div>
  )
}

export default React.memo(FeatureHeader)

