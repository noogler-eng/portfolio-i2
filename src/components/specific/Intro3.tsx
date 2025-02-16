import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Intro3() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl shadow-md w-4/12">
      {[
        {
          label: "Send an email",
          link: "mailto:sharadpoddar1001@gmail.com",
          display: "sharadpoddar1001@gmail.com",
        },
        {
          label: "DM on X",
          link: "https://x.com/SharadPoddar11",
          display: "@SharadPoddar11",
        },
        {
          label: "Connect on LinkedIn",
          link: "https://www.linkedin.com/in/sharad-poddar-895985283/",
          display: "Sharad Poddar",
        },
        {
          label: "Follow on GitHub",
          link: "https://github.com/noogler-eng",
          display: "@noogler-eng",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-between p-2 bg-stone-900 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-fit gap-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg font-medium text-white">{item.label}</span>
          <div className="flex items-center gap-2">
            <MoveRight className="text-blue-500" size={16} />
            <motion.div
              className="relative overflow-hidden inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <Link href={item.link} target="_blank">
                {item.display}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
