import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState<boolean>(true);
  setTimeout(() => {
    setIsVisible(false);
  }, 2000);

  return (
    <div className="bg-black h-screen text-white overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            id="button"
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
            exit={{ y: -300 }}
          >
            button
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
