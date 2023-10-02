import { motion } from "framer-motion";

const buttonVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 1 },
    // specify the "transition" property within "visible" property
  },
};

const pVariants = {
  initial: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
    // specify the "transition" property within "visible" property
  },
};

export default function Home() {
  return (
    <div className="bg-black h-screen text-white overflow-hidden">
      <motion.button
        className="block mx-auto px-10 py-4 bg-blue-600 rounded-xl"
        variants={buttonVariants}
        initial={"initial"}
        animate={"visible"}
      >
        button
      </motion.button>
      <motion.p
        className="text-center text-lg mt-52"
        variants={pVariants}
        initial={"initial"}
        animate={"visible"}
      >
        Qui nulla dolor eu labore adipisicing officia irure nulla.
      </motion.p>
    </div>
  );
}
