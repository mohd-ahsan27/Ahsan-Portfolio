// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ImPhone } from "react-icons/im";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate backend logic or EmailJS here
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center px-6 py-20">
      <motion.h2 
        className="text-5xl font-bold text-cyan-400 mb-10 text-center pt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className="w-full max-w-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,204,255,0.3)] border border-cyan-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Subject", name: "subject", type: "text" },
            { label: "Message", name: "message", type: "textarea" },
          ].map((field, idx) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.2 }}
            >
              <label className="block text-sm mb-1 text-gray-300">
                {field.label}*
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  rows="5"
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                  required
                ></textarea>
              ) : (
                <input
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                  required
                />
              )}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-cyan-600 text-black font-bold py-3 rounded-lg transition hover:bg-cyan-700 shadow-lg"
          >
            🚀 Send Message
          </motion.button>
        </form>

        {/* Social Links in Row */}
        <motion.div
          className="mt-10 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-6">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-500" />
              <a
              
                href="mailto:ahsanbinrauf27@gmail.com"
                className="hover:underline text-cyan-300"
              >
                ahsanbinrauf27@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaLinkedin className="text-blue-500" />
              <a
                href="https://www.linkedin.com/in/muhammad-ahsan-0959b52ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-300"
              >
                linkedin.com/in/mohd-ahsan
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaGithub className="text-white" />
              <a
                href="https://github.com/mohd-ahsan27"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-200"
              >
                github.com/muhammad-ahsan
              </a>
            </p>
          </div>

          {/* Contact Number */}
          <div className="mt-6 flex flex-wrap justify-center items-center text-gray-300 gap-4">
            <div className="flex items-center gap-2">
              <ImPhone className="text-green-400" />
              <span>+92 300 7765093</span>
            </div>
            <span className="text-gray-500">|</span>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Gujrat, Punjab | Pakistan</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
