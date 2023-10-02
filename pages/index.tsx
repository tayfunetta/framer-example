import { motion } from "framer-motion";

const buttonVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 50,
    transition: { delay: 1, duration: 1 },
    // specify the "transition" property within "visible" property
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
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

const ulVariants = {
  initial: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const liVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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
        whileHover="hover"
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

      <motion.ul
        className="w-80 mx-auto"
        variants={ulVariants}
        initial="initial"
        animate="visible"
      >
        <motion.li variants={liVariants}>aaa</motion.li>
        <motion.li variants={liVariants}>aaa</motion.li>
        <motion.li variants={liVariants}>aaa</motion.li>
        <motion.li variants={liVariants}>aaa</motion.li>
        <motion.li variants={liVariants}>aaa</motion.li>
      </motion.ul>

      <motion.div
        className="mt-[7rem] bg-teal-600 w-36 h-36 rounded-full"
        animate={{ x: 700 }}
        transition={{ type: "spring", damping: 13 }}
      />
    </div>
  );
}
