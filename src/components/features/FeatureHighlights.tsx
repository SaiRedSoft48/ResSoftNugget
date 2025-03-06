import { motion } from "framer-motion";
import React from "react";

import { FeatureHeadData } from "../../constants/constant";

const FeatureHighlights: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 py-4">
      {FeatureHeadData.map((each) => (
        <motion.div
          key={each.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#292524] h-[40px] w-[220px] rounded-full p-2 flex flex-row justify-start md:justify-center items-start md:items-center gap-2 pl-5 md:pl-0"
        >
          <img className="w-[28px] h-[22px]" src={each.image} alt={each.text} />
          <h1 className="text-white text-[14px] md:text-[18px] pl-1 md:pl-0">{each.text}</h1>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureHighlights;
