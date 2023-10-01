import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black h-screen text-white pt-20">
      <motion.h1
        className="text-center text-4xl"
        animate={{ fontSize: "52px", color: "hsl(120, 100, 50)", x: 100, y: 100 }}
      >
        Hello World lesson 2
      </motion.h1>
    </div>
  );
}
