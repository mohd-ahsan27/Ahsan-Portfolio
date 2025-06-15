// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center px-6 py-12 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 🌌 Background Glow for whole section */}
      <motion.div
        className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-gray-800 via-sky-700 to-black opacity-20 blur-2xl rounded-full pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      <motion.h2
        className="text-4xl font-bold mb-8 text-cyan-400 z-10"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* 🌟 GLOW BOX WRAPPER */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-3xl -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.2 }}
        ></motion.div>

        <motion.div
          className="max-w-4xl bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl z-10"
          variants={fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.p
            className="text-lg leading-relaxed text-gray-300 mb-8"
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hello! I'm <span className="text-white font-semibold">Muhammad Ahsan</span>, a passionate Fullstack Developer who loves building
            modern, fast, and intuitive web apps. I work with{" "}
            <span className="text-purple-400 font-semibold">HTML & CSS</span>,{" "}
            <span className="text-yellow-400 font-semibold">JavaScript</span>,{" "}
            <span className="text-blue-400 font-semibold">React.js</span>,{" "}
            <span className="text-red-400 font-semibold">MERN Stack</span>,{" "}
            <span className="text-gray-300 font-semibold">Node & Express</span>, and{" "}
            <span className="text-indigo-400 font-semibold">Tailwind CSS</span>.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8 text-gray-200"
          >
            <motion.div
              variants={fadeSlideLeft}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-xl cursor-pointer bg-gray-700 hover:bg-gray-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">🎯 My Mission</h3>
              <p className="leading-relaxed">
                I aim to craft clean, responsive apps that solve real-world problems and make life easier and better for users.
              </p>
            </motion.div>

            <motion.div
              variants={fadeSlideRight}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-xl cursor-pointer bg-gray-700 hover:bg-gray-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">🎮 Fun Fact</h3>
              <p className="leading-relaxed">
                I enjoy working with WordPress, UI/UX design, and exploring new tech trends. I'm always curious to learn new tools and love working on creative side projects.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
