import React, { useState } from "react";
import { motion } from "framer-motion";
import bg_changer_img from "../Portfolio-Images/bg-changer.png";
import ttt_img from "../Portfolio-Images/tic-tac-toe-img.png";
import rps_img from "../Portfolio-Images/rock-paper-scissors.jfif";
import seg_img from "../Portfolio-Images/email-generator.png";
import portfolio_img from "../Portfolio-Images/portfolio-img.jfif";

// Projects Data
const projects = [
  {
    title: "🔄 Background Changer",
    description:
      "A simple yet interactive web app built with HTML, CSS, and JavaScript. It features a button that, when clicked, changes the background color of the page to a randomly generated color. Each color change also displays its corresponding HEX value on screen.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://bachground-changer-demo.netlify.app/",
    codeLink: "https://github.com/mohd-ahsan27/background-changer",
    image: bg_changer_img,
  },
  {
    title: "❌⭕ Tic Tac Toe Game",
    description:
      "A clean and responsive Tic Tac Toe game built using HTML, Tailwind CSS, and JavaScript. The game updates and displays the score of Player X and Player O after each round. It includes two functional buttons: Reset – clears the board but keeps the score, and New Game – resets both the board and the scores.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    demoLink: "https://tic-tac-toe-demo-101.netlify.app/",
    codeLink: "https://github.com/mohd-ahsan27/Tic-Tac-Toe-Game",
    image: ttt_img,
  },
  {
    title: "✊🖐✌ Rock Paper Scissors Game",
    description:
      "A simple and interactive Rock Paper Scissors game built using HTML, Tailwind CSS, and JavaScript. The player selects between Rock, Paper, or Scissors to compete against a computer-generated choice, with the result displayed instantly.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    demoLink: "https://rock-paper-scissors-demo-link.netlify.app/",
    codeLink: "https://github.com/mohd-ahsan27/Rock-Paper-Scissor-Game",
    image: rps_img,
  },
  {
    title: "💡 Smart Email Generator (Gemini AI)",
    description:
      "An intelligent email generator built using React, JavaScript, and Tailwind CSS, powered by Google's Gemini API. Users can select an email type (e.g., job application, complaint, thank-you) from a dropdown and generate professional emails instantly. The app also includes:\n\n✍️ Generate, 🔁 Regenerate, 📋 Copy, and ♻️ Reset buttons\n\n📂 Back/Forward navigation to review previously generated emails\n\n📱 Fully responsive UI for smooth use across devices.",
    tech: ["React JS", "Tailwind CSS", "JavaScript", "Node.JS", "Express.JS", "Gemini API"],
    demoLink: "https://smart-email-generator-ai-demo-link.netlify.app/",
    codeLink: "https://github.com/mohd-ahsan27/Email-Generator-Gemini-API-",
    image: seg_img,
  },
  {
    title: "Responsive Portfolio UI Design",
    description:
      "A modern and responsive portfolio UI built using React JS and Tailwind CSS. It features reusable React components, smooth scroll animations, and a dynamic image slider to showcase projects or testimonials. Designed to offer a professional and interactive user experience across all devices.",
    tech: ["React JS", "Tailwind CSS", "JavaScript", "Image Slider"],
    demoLink: "https://portfolio-ui-design-demo.netlify.app/",
    codeLink: "https://github.com/mohd-ahsan27/Portfolio-Design-React-Tailwind",
    image: portfolio_img,
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
};

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const allTechs = ["All", ...new Set(projects.flatMap((p) => p.tech))];

  const filtered =
    selectedTech === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selectedTech));

  return (
    <motion.section
      className="min-h-screen px-6 sm:px-16 py-16 flex flex-col items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-cyan-400 mb-10 mt-24 sm:mt-28"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedTech === tech
                ? "bg-cyan-500 text-black"
                : "bg-gray-700 text-gray-300 hover:bg-cyan-600 hover:text-white"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
      >
        {filtered.map((project) => (
          <motion.div
            key={project.title}
            className="rounded-2xl p-6 cursor-pointer backdrop-blur-md transition-all duration-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-400/30"
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, j) => (
                <span
                  key={j}
                  className="text-xs bg-cyan-400/20 text-cyan-200 px-2 py-1 rounded-full font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-cyan-600 hover:bg-cyan-800 text-white font-semibold px-3 py-2 rounded-lg shadow transition"
              >
                Visit Project
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-cyan-600 hover:bg-cyan-800 text-white font-semibold px-3 py-2 rounded-lg shadow transition"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
