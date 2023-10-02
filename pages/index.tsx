import { motion } from "framer-motion";

const buttonVariants = {
  initial: {
    y: -100,
  },
  visible: {
    y: 50,
  },
};
// YOU CAN NOT SPECIFY 'REPEATTYPE' property in variants
// this will throw an error
// specify repeatType in whileHover property instead.

export default function Home() {
  return (
    <div className="bg-black h-screen text-white overflow-hidden">
      <motion.button
        className="block mx-auto px-10 py-10 bg-blue-600 rounded-xl"
        variants={buttonVariants}
        initial={"initial"}
        animate={"visible"}
        
        // use repeat properties to loop animation
        // make sure to specify hover property inline so as to prevent the app throwing an error
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.15,
          },
        }}
      >
        button
      </motion.button>
    </div>
  );
}
