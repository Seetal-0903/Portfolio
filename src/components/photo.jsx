"use client";

import { motion } from "framer-motion";

const Photo = () => {
  return (
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
    
  );
};

export default Photo;

