// src/pages/Skills.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
} from "react-icons/si";

const skillsData = [
  {
    name: "HTML5",
    level: 90,
    color: "bg-orange-500",
    icon: <SiHtml5 className="text-orange-500 w-6 h-6" />,
  },
  {
    name: "CSS3",
    level: 85,
    color: "bg-blue-600",
    icon: <SiCss3 className="text-blue-600 w-6 h-6" />,
  },
  {
    name: "JavaScript",
    level: 80,
    color: "bg-yellow-400",
    icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
  },
  {
    name: "React.js",
    level: 78,
    color: "bg-blue-400",
    icon: <SiReact className="text-blue-400 w-6 h-6" />,
  },
  {
    name: "Tailwind CSS",
    level: 75,
    color: "bg-cyan-400",
    icon: <SiTailwindcss className="text-cyan-400 w-6 h-6" />,
  },
  {
    name: "Node.js",
    level: 72,
    color: "bg-green-500",
    icon: <SiNodedotjs className="text-green-500 w-6 h-6" />,
  },
  {
    name: "Express.js",
    level: 70,
    color: "bg-gray-500",
    icon: <SiExpress className="text-gray-300 w-6 h-6" />,
  },
  {
    name: "MongoDB",
    level: 68,
    color: "bg-emerald-400",
    icon: <SiMongodb className="text-emerald-400 w-6 h-6" />,
  },
  {
    name: "WordPress",
    level: 75,
    color: "bg-indigo-500",
    icon: <SiWordpress className="text-indigo-500 w-6 h-6" />,
  },
];

const getProficiency = (level) => {
  if (level >= 85) return "Expert";
  if (level >= 70) return "Intermediate";
  return "Beginner";
};

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredSkills = skillsData.filter((skill) => {
    const matchesFilter =
      filter === "All" || getProficiency(skill.level) === filter;
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center py-16 px-6 overflow-hidden mt-19 ">
      {/* 🔥 Background Glow Option (can choose later) */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gray-800 via-purple-900 to-black opacity-20 blur-3xl pointer-events-none z-0"></div>

      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-cyan-400 z-10 text-center pt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-4xl mb-10 gap-4 z-10">
        <input
          type="text"
          placeholder="Search skills..."
          className="w-full sm:w-1/2 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-yellow-400 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="w-full sm:w-1/3 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-yellow-400 transition"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter skills by proficiency"
        >
          <option value="All">All Levels</option>
          <option value="Expert">Expert (85%+)</option>
          <option value="Intermediate">Intermediate (70%+)</option>
          <option value="Beginner">Beginner (&lt;70%)</option>
        </select>
      </div>

      <div className="w-full max-w-5xl grid gap-6 sm:grid-cols-2 z-10">
        {filteredSkills.length === 0 ? (
          <p className="text-center text-gray-400 italic col-span-full">
            No skills found.
          </p>
        ) : (
          filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex items-center space-x-4 bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-md hover:shadow-yellow-400/50 transition"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03 }}
            >
              <div>{skill.icon}</div>

              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-sm text-gray-300">
                    <CountUp end={skill.level} duration={1.5} suffix="%" />
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Skills;
