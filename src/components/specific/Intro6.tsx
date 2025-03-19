import Image from "next/image";
import myimg from "../../../public/myimg.jpeg";
import { motion } from "framer-motion";

export default function Intro6() {
  return (
    <div className="relative w-fit mx-auto p-8 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 rounded-3xl shadow-xl">
      {/* Animated Glowing Tag */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg text-gray-700 font-semibold text-base tracking-wide border border-gray-200"
      >
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          🌟 Open to Learn New Things 🌟
        </span>
      </motion.div>

      {/* Floating Image Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
      >
        <Image
          src={myimg}
          alt="Sharad"
          height={450}
          className="object-cover w-full h-auto saturate-150"
        />
      </motion.div>
    </div>
  );
}
