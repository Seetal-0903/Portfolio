import { motion } from "framer-motion"; 
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const ResumeButton = () => {
  const [downloaded, setDownloaded] = useState(false);
  const resumePath = "/assets/Seetal_Panda_Resume.pdf"; 
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Seetal_Panda_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* View Resume Button */}
      <motion.a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="px-4 py-2 text-sm rounded-full font-extralight bg-primary text-white cursor-pointer shadow-md"
      >
        View Resume
      </motion.a>

      {/* Download Resume Button */}
      <motion.button
        onClick={handleDownload}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="relative px-4 py-2 text-sm rounded-full font-extralight bg-primary text-white cursor-pointer shadow-md overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {downloaded ? (
            <motion.span
              key="downloaded"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex items-center gap-2"
            >
              <img src="/assets/copy-done.svg" className="w-5" alt="Done" />
              Downloaded!
            </motion.span>
          ) : (
            <motion.span
              key="download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <img src="/assets/copy.svg" className="w-5" alt="Download" />
              Download Resume
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ResumeButton;
