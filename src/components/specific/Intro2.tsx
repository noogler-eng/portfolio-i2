"use client";
import { motion } from "framer-motion";

export default function Intro2() {
  return (
    <motion.div
      className="p-4 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Dayananda Sagar College of Engineering, 26
      </motion.div>

      <motion.div
        className="flex items-center gap-2 mt-2 text-green-400 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.span
          className="w-2.5 h-2.5 bg-green-400 rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
        Open to work
      </motion.div>
    </motion.div>
  );
}
