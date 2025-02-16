"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = ["Home", "Blog", "Hobbies"];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex gap-4 px-4 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-md">
        {navItems.map((item) => {
          const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <Link
              key={item}
              href={href}
              className="relative px-3 py-1 text-white text-sm font-medium"
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  initial={{ scaleX: 0.8, opacity: 0.5 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                />
              )}
              <motion.span
                className={`relative z-10 ${
                  isActive ? "text-black" : "hover:text-gray-300"
                }`}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
