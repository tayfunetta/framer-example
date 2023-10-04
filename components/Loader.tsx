import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, 30],
    transition: {
      x: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
      y: { duration: 0.25, repeat: Infinity, repeatType: "reverse" },
    },
  },
  animationTwo: {
    y: [0, 30],
    x: 0,
    transition: {
      y: { duration: 0.25, repeat: Infinity, repeatType: "reverse" },
    },
  },
};

function Loader() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="w-3 h-3 mx-auto bg-white rounded-full"
        variants={loaderVariants}
        animate={animation}
      />
      <button className="bg-white text-black px-4 py-2 rounded-lg" onClick={() => cycleAnimation()}>
        asdasda
      </button>
    </>
  );
}

export default Loader;
