import Loader from "@/components/Loader";
import { motion } from "framer-motion";

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
    </div>
  );
}
