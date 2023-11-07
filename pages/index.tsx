import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black h-screen text-white pt-20">
      <motion.h1
        className="text-center text-4xl"
        animate={{ fontSize: "52px", y: 100 }}
      >
        Hello World Hover
      </motion.h1>
      <motion.button
        className="block mx-auto px-10 py-4 bg-transparent border-4 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 200 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px 5px red",
          textShadow: "0px 0px 20px 20px red",
        }}
      >
        button
      </motion.button>

      <ul className="w-80 mx-auto text-xl relative top-80">
        <motion.li className="mb-3" whileHover={{ scale: 1.25, originX: 0 }}>
          Bear
        </motion.li>
        <motion.li className="mb-3" whileHover={{ scale: 1.25, originX: 0 }}>
          Monkey
        </motion.li>
        <motion.li className="mb-3" whileHover={{ scale: 1.25, originX: 0 }}>
          Elephant
        </motion.li>
        <motion.li className="mb-3" whileHover={{ scale: 1.25, originX: 0 }}>
          Hawk
        </motion.li>
      </ul>
    </div>
  );
}
