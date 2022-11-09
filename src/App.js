import React from "react";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
