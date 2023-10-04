import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black h-screen text-white pt-20">
      <h1 className="text-center text-4xl">Hello World HOO HOO</h1>
      <motion.div
        className="w-36 h-36 mx-auto bg-emerald-500 rounded-lg"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.3}
      />
    </div>
  );
}
