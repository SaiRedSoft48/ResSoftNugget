import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { threadAnimation } from "../../constants/animations";
import { threadPath2 } from "../../constants/constant";

import FeatureHighlights from "./FeatureHighlights";

const FeatureHeader: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = headerRef.current;

    if (target) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(target);


      return () => {
        if (target) {
          observer.unobserve(target);
        }
      };
    }
  }, [hasAnimated]);

  return (
    <div ref={headerRef} className="text-center">
      <h1 className="text-white text-[28px] md:text-[48px] md:leading-[60px] font-semibold w-[80vw] m-auto px-2 md:px-0">
        <span className="relative z-10">The only </span>
        <span className="relative inline-block">
          <span className="relative z-10 font-bold">AI toolbox</span>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-auto z-0">
            {hasAnimated && (
              <svg
                viewBox="-30 0 346 83"
                fill="none"
                className="w-full h-full stroke-secondary"
                preserveAspectRatio="none"
              >
                <motion.path
                  d={threadPath2}
                  stroke="#ff7f50"
                  strokeWidth="2"
                  fill="none"
                  initial="initial"
                  animate="animate"
                  variants={threadAnimation}
                />
              </svg>
            )}
          </div>
        </span>
        <span className="relative z-10"> you'll ever need</span>
      </h1>

      <p className="text-[#A3A3A3] text-[14px] md:text-lg max-w-2xl mx-auto mt-2">
        From conversational AI agents to co-pilots, unlock endless possibilities to transform your business
      </p>
      <FeatureHighlights />
    </div>
  );
};

export default React.memo(FeatureHeader);
