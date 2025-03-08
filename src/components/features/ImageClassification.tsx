"use client"

import React, { useState } from "react"

import { featuresDescriptionfadeUp, featuresHeadingfadeUp } from "../../constants/animations"
import { imageImports } from "../../utils/importImages"
import MotionWrapper from "../common/MotionWrapper"

const ImageClassification: React.FC = () => {
  const { classfication_img } = imageImports
  const [isHovered, setIsHovered] = useState(false)

  const imageContainerHeight = isHovered ? "100%" : "100%"
  const contentOpacity = isHovered ? 1 : 0
  const contentTransition = "opacity 0.3s ease-in-out"

  return (
    <div className="h-[100%] flex flex-col justify-start items-center md:items-start gap-2 pl-3 md:border-r border-b border-[#262626] md:py-0 py-8">
      <MotionWrapper animation={featuresHeadingfadeUp}>
        <h1 className="text-white text-[20px] md:text-[24px] text-center md:text-left">
          Accurate Image Classification
        </h1>
      </MotionWrapper>
      <MotionWrapper animation={featuresDescriptionfadeUp}>
        <p className="md:text-base text-[#A3A3A3] pr-2 text-center md:text-left text-[14px] ">
          Enhance support by precisely categorizing images for faster resolutions
        </p>
      </MotionWrapper>
      <div
        className="h-[45vh] md:h-[68%] w-[90%] bg-[#171717] opacity-[0.8] rounded-2xl p-4 border-[#262626] border overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="rounded-2xl w-[100%] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${classfication_img})`,
            height: imageContainerHeight,
            transition: "height 0.3s ease-in-out",
          }}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl p-4 flex flex-col"
            style={{ opacity: contentOpacity, transition: contentTransition }}
          >
            <div className="flex flex-row justify-between items-start">
              <div>
                <p className="text-[#A3A3A3] text-[12px]">Primary Object</p>
                <p className="text-white text-[10px]">Paper cup with a hot beverage (coffee)</p>
              </div>
              <div className="absolute top-[8px] right-[10px] bg-purple-600 text-white text-sm px-2 py-1 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-[10px]"> Analysis Result</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[#A3A3A3] text-[12px]">Spillage Severity</p>
              <p className="text-white text-[10px]">High (liquid spilled over the cup and pooled around it)</p>
            </div>

            <div className="mt-4">
              <p className="text-[#A3A3A3] text-[12px]">Perishable Item</p>
              <p className="text-white text-[10px]">Yes (coffee is perishable, and exposure to air affects quality)</p>
            </div>

            <div className="mt-4">
              <p className="text-[#A3A3A3] text-[12px]">Potential Causes</p>
              <p className="text-white text-[10px]">Overfilled cup</p>
              <p className="text-white text-[10px]">Improper sealing/lid absence</p>
              <p className="text-white text-[10px]">Rough handling during transport</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ImageClassification)