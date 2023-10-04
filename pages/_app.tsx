import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    // if you specify "wait" as the mode, the entering animation will not start until the exiting animation has finished.
    // if you specify "popLayout", the entering animation will start immediately, without waiting for the exiting animation to finish.
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.route}
        initial={{
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        animate={{
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        exit={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
        }}
        transition={{ delay: 0.1, duration: 0.25 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
