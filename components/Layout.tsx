import { motion } from "framer-motion";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div className="overflow-x-hidden h-screen bg-purple-800 text-white text-center">
      {children}
    </motion.div>
  );
}

export default Layout;
