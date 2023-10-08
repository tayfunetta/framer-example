import Loader from "@/components/Loader";
import { motion } from "framer-motion";

const pathVariants = {
  initial: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    }
  },
};

export default function Home() {
  return (
    <div className="bg-black h-screen text-white pt-20">
      <motion.h1
        className="text-center text-4xl"
        animate={{
          y: 100,
        }}
      >
        Hello World HOO HOO
      </motion.h1>
      <Loader />

      <motion.svg viewBox="-41.766 -5.37 500 500" width="500" height="500">
        <motion.line variants={pathVariants} initial="initial" animate="visible"
          style={{
            fill: "rgb(216, 216, 216)",
            stroke: "white",
            strokeWidth: "3px",
          }}
          x1="117.84"
          y1="70.19"
          x2="178.103"
          y2="395.966"
        ></motion.line>
        <motion.path variants={pathVariants} initial="initial" animate="visible"
          style={{ stroke: "white", fill: "none", strokeWidth: "3px" }}
          d="M 38.484 88.09 C 258.91 36.668 263.609 212.965 99.344 208.615"
        ></motion.path>
        <motion.path variants={pathVariants} initial="initial" animate="visible"
          style={{ stroke: "white", fill: "none", strokeWidth: "3px" }}
          d="M 110.083 224.725 C 314.2 189.005 313.093 350.609 135.74 381.646"
        ></motion.path>
      </motion.svg>
    </div>
  );
}
