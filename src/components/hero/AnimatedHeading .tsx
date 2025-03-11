import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const AnimatedHeading = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  const [scope, animate] = useAnimate()

  const [animationDuration, setAnimationDuration] = useState(0.8)
  const word = "ecosystem"

  useEffect(() => {
    const updateDuration = () => {
      setAnimationDuration(window.innerWidth < 768 ? 1.5 : 0.8)
    }

    updateDuration()
    window.addEventListener("resize", updateDuration)

    return () => window.removeEventListener("resize", updateDuration)
  }, [])

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          backgroundPositionX: "100%",
          y: [-2, -8, -2],
          scale: [1, 1.05, 1],
        },
        {
          duration: animationDuration / 2,
          delay: stagger(0.08, { from: "first" }),
          ease: "easeInOut",
          y: {
            times: [0, 0.5, 1],
          },
          scale: {
            times: [0, 0.5, 1],
          },
        },
      )
    } else {
      animate("span", { backgroundPositionX: "0%" }, { duration: 0.1 })
    }
  }, [isInView, animate, animationDuration])

  return (
    <h1 className="text-white text-[28px] md:text-[48px] md:leading-[60px] font-semibold w-[70vw] md:w-auto">
      Trusted by the Zomato{" "}
      <motion.div ref={ref} className="inline">
        <div ref={scope} className="inline">
          {word.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{
                backgroundPositionX: "0%",
                y: 0,
                scale: 1,
              }}
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: "linear-gradient(to right, white 0%, #6B46C1 100%)",
                backgroundSize: "1000% 100%",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </h1>
  )
}

export default AnimatedHeading

