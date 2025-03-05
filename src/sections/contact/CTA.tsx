import { motion } from "framer-motion";
import React from "react";

import cta_bg from "../../assets/CTA_bg.png";
import Button from "../../components/common/Button";

const CTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col justify-center items-center w-[100%]"
    >
      <div
        className="flex flex-col justify-center items-center py-4 md:py-0 md:h-[50vh] w-[88%] rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${cta_bg})` }}
      >
        <div className="flex flex-col justify-center items-center gap-8 w-[90%]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-white text-xl md:text-6xl text-center"
          >
            Ready to transform your business?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[#A3A3A3] text-md md:text-xl text-center md:px-4"
          >
            Get started and see how AI can transform your customer
            interactions—faster, smarter, better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button size="text-sm" pd="px-2.5 py-1.5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
