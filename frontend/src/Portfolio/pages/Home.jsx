import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import myImage from "../Portfolio-Images/ahsan-profile-2.jpg";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React JS",
  "Tailwind CSS",
  "Node. JS",
  "Express. JS",
  "MERN Stack",
  "Python",
  "C++",
  "Web Designer",
  "WordPress",
  "Data Entry Specialist",
  "MS Office",
  "UI/UX Design",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white px-6 md:px-16 py-12">
      {/* Left Text Content */}
      <div className="flex-1 md:pr-12 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mt-14"
        >
          👋 Hey, I'm <span className="text-cyan-400">Muhammad Ahsan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl mb-8"
        >
          Fullstack Developer building modern web experiences using the{" "}
          <span className="text-cyan-300 font-semibold">MERN Stack</span> and
          cutting-edge tools.
        </motion.p>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-4 flex-wrap justify-center md:justify-start mb-10"
        >
          {skills.map((name) => (
            <motion.span
              key={name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-full border border-cyan-600 text-cyan-300 font-medium bg-white/10 backdrop-blur-sm hover:bg-cyan-600 hover:text-black transition-all duration-300"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-start gap-4 mt-6 transition-all duration-300">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-md bg-cyan-500 text-gray-900 font-bold shadow-md hover:shadow-xl transition duration-300 text-center w-full sm:w-auto"
          >
            View My Work
          </motion.a>

          <motion.a
            href="/Ahsan Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-md bg-cyan-500 text-gray-900 font-bold shadow-md hover:shadow-xl transition duration-300 text-center w-full sm:w-auto"
          >
            Download Resume
          </motion.a>
        </div>

        {/* Social Icons - Moved Below Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex gap-6 mt-8 text-3xl justify-center md:justify-start text-cyan-400"
        >
          <a
            href="https://github.com/mohd-ahsan27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ahsan-0959b52ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/mohd___ahsan___"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.facebook.com/ahsan.rauf027"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300"
          >
            <FaFacebookSquare />
          </a>
        </motion.div>
      </div>

      {/* Right Profile Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center"
      >
        <div
          className="group w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-gray-900 
                  border-4 border-transparent hover:border-cyan-500 transition-all duration-500 
                  shadow-lg hover:shadow-cyan-400/50 hover:shadow-2xl"
        >
          <img
            src={myImage}
            alt="Muhammad Ahsan"
            className="w-full h-full object-cover object-top transform 
                 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
