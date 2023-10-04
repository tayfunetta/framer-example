import { motion } from "framer-motion";

const loaderVariant = {
  visible: {
    x: [0, -20, 20],
    // y: [0, -20, 20],
    transiton: {
      x: { repeat: Infinity, repeatType: "reverse" },
    },
  },
};

function Loader() {
  return (
    <motion.div
      className="w-3 h-3 mx-auto bg-white rounded-full"
      variants={loaderVariant}
      animate="visible"
    />
  );
}

export default Loader;
