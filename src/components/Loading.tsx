"use client";

import { motion, AnimatePresence } from "framer-motion";

const exampleStyle = {
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "1px",
  fontWeight: "800",
};

export default function Loading({ progress }: { progress: number }) {
  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-screen bg-black flex flex-col items-center justify-center gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl text-white font-bold tabular-nums"
          >
            <p className="text-[8rem] 2xl:text-[10rem]" style={exampleStyle}>
              {Math.min(progress, 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
