import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Intelligent", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="hidden md:flex flex-row justify-between items-center gap-10">
        <div className="flex-col hidden md:flex c-space">
          <motion.h1
            className="text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Hi I'm Seetal
          </motion.h1>
          <div className="flex flex-col items-start">
            <motion.p
              className="text-5xl font-medium text-white"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              A Code Artisan <br /> Dedicated to Crafting
            </motion.p>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}
            >
              <FlipWords
                words={words}
                className="font-black text-aqua text-8xl"
              />
            </motion.div>
            <motion.p
              className="text-4xl font-medium text-white"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.8 }}
            >
              Digital Experiences.
            </motion.p>
          </div>
        </div>
        <div className="relative flex justify-center items-center"> {/* MOVED HERE */}
          <img
            src="/assets/seetal.png"
            alt="Seetal"
            className="max-h-[350px] w-auto z-10"
          />
          <div className="absolute z-0 flex justify-center items-center animate-ping">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="md:h-[90%] sm:h-[120%] min-h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66Z" />
            </svg>
          </div>
        </div>  
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden ">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Seetal
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-aqua text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Digital experiences
          </motion.p>
        </div>
      
        <div className="h-full flex items-center justify-center">
          <img
            src="/assets/seetal.png"
            alt="Seetal"
            className="max-h-[350px] w-auto"
          />
          <div class=" absolute z-10 flex justify-center items-center animate-ping">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" 
                class=" md:h-[90%] sm:h-[120%] min-h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " 
                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,
                  0,0,221.76,69.66ZM220,175.82a4,4,0,0,1-2.08,3.5l-88,48.18a4,4,0,0,1-3.84,0l-88-48.18a4,4,0,0,1-2.08-3.5V80.18a4,4,0,0,1,2.08-3.5l88-48.18a3.94,3.94,0,0,1,3.84,0l88,48.18a4,4,0,0,1,2.08,3.5Z">
                  </path>
              </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
