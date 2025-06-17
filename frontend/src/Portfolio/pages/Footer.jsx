import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 text-center border-t border-t-cyan-500">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Muhammad Ahsan</span> | Fullstack Developer | Word Press
      </p>
    </footer>
  );
};

export default Footer;
