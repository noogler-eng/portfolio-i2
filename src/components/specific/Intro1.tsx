import FlipWords from "../FlipWords";
import { motion } from "framer-motion";

export default function Intro1() {
  return (
    <div className="flex flex-col items-start slef-start w-full">
      <p className="text-lg text-gray-400">Hi, I am</p>
      <div className="flex flex-wrap items-center gap-3">
        <motion.h1
          className="text-5xl font-bold text-transparent bg-clip-text"
          animate={{
            color: [
              "#ff0000",
              "#ff7300",
              "#ffeb00",
              "#47ff00",
              "#00c3ff",
              "#a200ff",
              "#ff0000",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        >
          Sharad Poddar
        </motion.h1>
        <FlipWords
          words={["@frontend-engineer", "@software-developer"]}
          duration={5000}
          classes="text-5xl font-semibold text-gray-300"
        />
      </div>
    </div>
  );
}
