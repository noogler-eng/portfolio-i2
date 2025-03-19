"use client";
import projectsData from "../../../projects.json";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro5() {
  const [activeTab, setActiveTab] = useState(Object.keys(projectsData)[0]);

  const colors = [
    "hover:bg-gradient-to-r hover:from-gray-900 hover:via-gray-800 hover:to-indigo-900",
    "hover:bg-gradient-to-r hover:from-gray-900 hover:via-gray-800 hover:to-red-500",
    "hover:bg-gradient-to-r hover:from-gray-900 hover:via-gray-800 hover:to-fuchsia-900",
    "hover:bg-gradient-to-r hover:from-gray-400 hover:via-gray-800 hover:to-green-500",
    "hover:bg-gradient-to-r hover:from-gray-400 hover:via-gray-500 hover:to-pink-500",
  ];

  return (
    <div className="w-full text-white flex flex-col items-center justify-center gap-16 mt-20 pb-24 bg-gradient-to-br from-black via-gray-900 to-black mb-16">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text pt-12"
      >
        🚀 Projects
      </motion.p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4">
        {Object.keys(projectsData).map((category) => (
          <button
            key={category}
            className={`text-lg font-semibold px-6 py-3 rounded-full transition-all duration-300 border ${
              activeTab === category
                ? "bg-orange-500 text-white border-orange-600 shadow-xl"
                : "bg-gray-800 text-gray-200 border-gray-700 hover:bg-orange-600 hover:text-white"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <motion.div
        key={activeTab}
        className="w-11/12 md:w-3/4 mt-8 grid grid-cols-1 gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {projectsData[activeTab as keyof typeof projectsData]?.map(
          (project: any, index: number) => (
            <motion.div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 transition duration-300 flex flex-col md:flex-row gap-8 ${
                colors[index % colors.length]
              }`}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Project Image */}
              <img
                src={project.image[0]}
                alt={project.name}
                className="w-full md:w-64 h-44 object-cover rounded-xl shadow-md"
              />

              {/* Project Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.des.slice(0, 150)}...
                  </p>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-gray-800 text-gray-200 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-6 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white font-medium shadow"
                  >
                    🌐 Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition text-white font-medium shadow"
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
}
