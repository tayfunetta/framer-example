import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black h-screen text-white overflow-hidden">
      <motion.button
        className="block mx-auto px-10 py-4 bg-blue-600 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        button
      </motion.button>
      <motion.p
        className="text-center text-lg"
        initial={{ y: 700 }}
        animate={{ y: 200 }}
        transition={{ type:"spring", stiffness: 120 }}
      >
        Qui nulla dolor eu labore adipisicing officia irure nulla.
      </motion.p>
    </div>
  );
}
