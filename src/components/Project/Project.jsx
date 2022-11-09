import React from "react";

import { AiOutlineHtml5, AiOutlineLink } from "react-icons/ai";
import { DiCss3Full, DiNodejsSmall } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { IoLogoReact } from 'react-icons/io5';
import { SiExpress, SiPug } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

import "./Project.css";

const Project = () => {
  return (
    <section id="project">
      <div className="container">
        <h2 className="sec_title">
          Projects<span className="gradient-text">.</span>
        </h2>

        <div className="project_grp">
          <div className="project_card">
            <div className="card_header">
              <h4 className="gradient-text">Dine-in</h4>
              <div className="card_links">
                <a href="https://github.com/Sidyboy-Codes/First_repo_Dine_In">
                  <FiGithub />
                  code
                </a>
                <a href="https://sidyboy-codes.github.io/First_repo_Dine_In/">
                  <AiOutlineLink />
                  link
                </a>
              </div>
            </div>
            <div className="card_body">
              <p className="third-text">
                <span className="primary-text">Dine-in</span> is a landing page of an imaginary restaurant. It was my first project on my GitHub.
                Dine-in is completely created using just HTML and CSS. It was also my first HTML & CSS project. I tried to create it as responsive as
                possible that time.
              </p>
            </div>
            <div className="card_footer">
              <AiOutlineHtml5 />
              <DiCss3Full />
            </div>
          </div>

          {/* ********************************************************* */}

          <div className="project_card">
            <div className="card_header">
              <h4 className="gradient-text">Cityora</h4>
              <div className="card_links">
                <a href="https://github.com/Sidyboy-Codes/Cityora">
                  <FiGithub />
                  code
                </a>
              </div>
            </div>
            <div className="card_body">
              <p className="third-text">
                <span className="primary-text">Cityora</span> is web application which will give you latest weather forecast, News, and trending tweet
                # of any selected city. This web application uses three external APIs (openweather, news, twitter api){" "}
              </p>
            </div>
            <div className="card_footer">
              <AiOutlineHtml5 />
              <DiCss3Full />
              <TbBrandJavascript />
              <DiNodejsSmall />
              <SiExpress />
              <SiPug />
            </div>
          </div>

          {/* *************************************************************** */}

          <div className="project_card">
            <div className="card_header">
              <h4 className="gradient-text">Portfolio</h4>
              <div className="card_links">
                <a href="">
                  <FiGithub />
                  code
                </a>
                <a href="">
                  <AiOutlineLink />
                  link
                </a>
              </div>
            </div>
            <div className="card_body">
              <p className="third-text">
                This <span className="primary-text">Portfolio</span> is made using ReactJs. This portfolio is completely responsive. I created this portfolio from scratch, there is no use of
                any css framework such as TailwindCss or Bootstrap.
              </p>
            </div>
            <div className="card_footer">
              <AiOutlineHtml5 />
              <DiCss3Full />
              <IoLogoReact/>
            </div>
          </div>
        </div>
        <a className="btn" href="https://github.com/Sidyboy-Codes">
          more projects
          <FiGithub />
        </a>
      </div>
    </section>
  );
};

export default Project;
