import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const AnimatedHeading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const [animationDuration, setAnimationDuration] = useState(0.8);

  useEffect(() => {
    const updateDuration = () => {
      setAnimationDuration(window.innerWidth < 768 ? 1.5 : 0.8);
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return (
    <h1 className="text-white text-[28px] md:text-[48px] md:leading-[60px] font-semibold w-[70vw] md:w-auto">
      Trusted by the Zomato{" "}
      <motion.span
        ref={ref}
        initial={{ backgroundPositionX: "0%" }}
        animate={isInView ? { backgroundPositionX: "100%" } : {}}
        transition={{ duration: animationDuration, ease: "easeInOut" }}
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, white 0%, #6B46C1 100%)",
          backgroundSize: "1000% 100%",
        }}
      >
        ecosystem
      </motion.span>
    </h1>
  );
};

export default AnimatedHeading;
