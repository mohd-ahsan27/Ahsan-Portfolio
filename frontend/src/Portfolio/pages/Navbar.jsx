// Navbar.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with cyan gradient */}
        <span
          className="text-3xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent drop-shadow-md hover:brightness-110 transition duration-300"
        >
          Mohd Ahsan
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 text-md">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 px-3 py-2 rounded-md hover:bg-cyan-500 hover:text-white hover:shadow-md transition duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-cyan-400 text-3xl focus:outline-none hover:text-cyan-300 transition duration-200"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-6 space-y-3 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 transition duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
    