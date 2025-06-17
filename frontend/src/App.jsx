// App.jsx
import React from "react";

import Navbar from "./Portfolio/pages/Navbar";

import Home from "./Portfolio/Pages/Home";
import About from "./Portfolio/Pages/About";
import Skills from "./Portfolio/Pages/Skills";
import Projects from "./Portfolio/Pages/Projects";
import Contact from "./Portfolio/Pages/Contact";
import Footer from "./Portfolio/pages/Footer";

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Sections now inline on one page */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
