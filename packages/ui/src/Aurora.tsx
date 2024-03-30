import { motion } from "framer-motion";
import { AuroraBackground } from "./AuroraBackground";

export function Aurora() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-5xl md:text-7xl italic dark:text-white text-center font-icon">
          Zilfi
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Building at scale for humans
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

