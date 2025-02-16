import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { SiReduxsaga } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { motion } from "framer-motion";

export default function Intro4() {
  return (
    <div className="w-full text-white flex flex-col items-center justify-center gap-8 mt-16">
      <p className="text-4xl font-extrabold underline">Tech Stack</p>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className="text-3xl font-bold text-orange-500">Frontend</p>
        <div className="flex gap-6 text-5xl mt-4">
          {[
            RiNextjsLine,
            FaReact,
            SiTailwindcss,
            SiTypescript,
            SiPython,
            SiRecoil,
            SiReduxsaga,
          ].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ color: "#fff", scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Icon />
              <span className="text-sm mt-1">
                {Icon.name
                  .replace("Si", "")
                  .replace("Fa", "")
                  .replace("Ri", "")}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <p className="text-3xl font-bold text-green-500">Backend</p>
        <div className="flex gap-6 text-5xl mt-4">
          {[
            SiExpress,
            SiPrisma,
            SiMongodb,
            SiPostgresql,
            SiMysql,
            SiRedis,
            SiDocker,
            SiLangchain,
          ].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ color: "#fff", scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Icon />
              <span className="text-sm mt-1">
                {Icon.name
                  .replace("Si", "")
                  .replace("Fa", "")
                  .replace("Ri", "")}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
