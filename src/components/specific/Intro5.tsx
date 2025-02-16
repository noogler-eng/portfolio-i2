"use client";
import projectsData from "../../../projects.json";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro5() {
  const [activeTab, setActiveTab] = useState(Object.keys(projectsData)[0]);

  const colors = [
    "bg-gradient-to-r hover:from-stone-900 hover:via-stone-800 hover:to-indigo-900",
    "bg-gradient-to-r hover:from-stone-900 hover:via-stone-800 hover:to-red-500",
    "bg-gradient-to-r hover:from-stone-900 hover:via-stone-800 hover:to-fuchsia-900",
    "bg-gradient-to-r hover:from-stone-400 hover:via-stone-800 hover:to-green-500",
    "bg-gradient-to-r hover:from-stone-400 hover:via-stone-500 hover:to-pink-500",
  ];

  return (
    <div className="w-full text-white flex flex-col items-center justify-center gap-8 mt-16">
      <p className="text-4xl font-extrabold underline">Projects</p>
      <div className="flex gap-4">
        {Object.keys(projectsData).map((category) => (
          <button
            key={category}
            className={`text-xl font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === category
                ? "bg-orange-500 text-white"
                : "bg-stone-900 text-white-800 hover:bg-stone-500"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category.replace("-", " ")}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        className="w-3/4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-3 mt-4">
          {projectsData[activeTab as keyof typeof projectsData]?.map(
            (project: any, index: any) => (
              <motion.div
                key={index}
                className={`bg-stone-900 p-6 rounded-lg shadow-lg transition-shadow duration-300 flex flex-row items-start gap-4 items-center hover:${
                  colors[index % colors.length]
                }`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={project.image[0]}
                  alt={project.name}
                  className="w-48 h-32 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <p className="text-gray-400 mt-2">
                    {project.des.slice(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.stack.map((tech: any, idx: any) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-stone-800 text-white px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-start items-center gap-4 mt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}
