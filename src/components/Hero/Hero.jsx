import React from "react";

import heroImg from "./hero-img.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero_text">
          <span className="third-text">Hello World! 👋,</span>
          <h1>
            I'm <span className="gradient-text">Siddhant Patel.</span>
          </h1>
          <p className="third-text">
            Enthusiastic <span className="primary-text">Junior Web Developer</span>, who <span className="primary-text">thrives to learn</span> new
            stuff and loves to <span className="primary-text">explore different technologies</span>. It's great fun for me to
            <span className="primary-text"> solve errors</span> 😋 and I enjoy it.
          </p>
          <a href="#contact" className="btn">
            Hire me
          </a>
        </div>
        <img src={heroImg} />
      </div>
    </section>
  );
};

export default Hero;
