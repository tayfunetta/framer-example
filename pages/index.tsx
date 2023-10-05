import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isToggled, setToggle] = useState<boolean>(false);
  const [isToggled2, setToggle2] = useState<boolean>(false);

  const toggle = () => setToggle(!isToggled);
  const toggle2 = () => setToggle2(!isToggled2);

  return (
    <div className="bg-black h-screen text-white pt-5">
      <h1 className="text-center text-4xl">Hello World HOO HOO</h1>
      <div
        id="toggle-container"
        className="flex justify-start items-center w-16 h-10 mx-auto mt-20 px-1 rounded-3xl bg-red-500"
        onClick={toggle}
        data-toggle={isToggled}
      >
        <motion.div
          id="toggle-ball"
          className="w-8 h-8 bg-gray-200 rounded-full"
          // if you specify the "layout" prop, the component will automatically animate
          // when its layout changes
          layout
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.div
        id="toggle-container2"
        className="flex justify-center items-center w-24 h-24 mx-auto mt-10 bg-white"
        onClick={toggle2}
        data-toggle={isToggled2}
        layout
        // boxShadow ve borderRadius özelliklerinin animasyon sonrası bozulmamaları için
        // onları motion özellikleri olarak tanımla
        // framer-motion onları otomatik olarak düzeltecektir
        initial={{ borderRadius: 50 }}
      >
        <motion.div
          id="toggle-ball2"
          className="w-7 h-7 bg-red-400 rounded-full"
          layout
        />
      </motion.div>
    </div>
  );
}
