"use client";

import { motion } from "framer-motion";

const Photo = () => {
  return (
    <motion.div
      className="absolute top-4 right-4 w-full md:w-[40%] h-full z-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0.6, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <div className="absolute bottom-0 w-full h-[67%]">
      <img
        src="/assets/see_tal.png"
        alt="Seetal"
        className="w-full h-full object-cover"
      />
      </div>
    </motion.div>
  );
};

export default Photo;
