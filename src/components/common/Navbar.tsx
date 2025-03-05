import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import logo from "../../assets/LOGO.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import Button from "./Button";

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isMobile) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <motion.div
      className="w-full flex justify-center items-center p-2 fixed top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      }}
    >
      <div
        className={`w-[95%] h-12 md:h-20 flex flex-row justify-between items-center px-2.5 md:px-8 rounded-full border-gray-900 
                ${isMobile ? "bg-[#171717] shadow-lg" : isScrolled ? "bg-[#171717] shadow-lg" : "bg-transparent"}`}
      >
        <div>
          <img
            className="w-[110px] h-[25px] md:w-[160px] md:h-[40px]"
            src={logo}
            alt="logo"
          />
        </div>
        <Button size="text-sm" pd="px-2.5 py-1.5" />
      </div>
    </motion.div>
  );
};

export default Navbar;
