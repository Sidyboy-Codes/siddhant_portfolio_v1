import React from "react";

import "./Skill.css";
import data from "./Skills.json";

const Skill = () => {
  return (
    <section id="skill">
      <div className="container">
        <h2 className="sec_title">
          Skills<span className="gradient-text">.</span>
        </h2>
        <div className="skill_grp">
          {data.map((skill) => {
            return <img src={`${skill.path}`} key={skill.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
