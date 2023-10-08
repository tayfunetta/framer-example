import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-black h-[500vh] text-white pt-20">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 origin-left bg-red-600"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.div
        className="w-80 h-80 mt-[150vh] bg-blue-500"
        initial={{ x: -100 }}
        whileInView={{ x: 300 }}
        transition={{ ease: "easeOut", duration: 1 }}
        viewport={{ once: true, margin: "0px 0px -300px 0px" }}
      />
    </div>
  );
}
