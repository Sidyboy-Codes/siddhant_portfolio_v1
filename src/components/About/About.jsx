import React from "react";

import "./About.css";

import { BsPeople } from "react-icons/bs";
import { HiOutlineLightBulb, HiOutlineSearchCircle } from "react-icons/hi";
import { MdOutlineStars } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="sec_title">
          About me<span className="gradient-text">.</span>
        </h2>
        <div className="feature_grp">
          
          <div className="feature_card">
            <HiOutlineLightBulb />
            <div className="feature_desc">
              <h4 className="gradient-text">Creative</h4>
              <p>I enjoy attempting to make new and inventive ideas a reality.</p>
            </div>
          </div>

          {/* ****************************************************** */}
          <div className="feature_card">
            <HiOutlineSearchCircle />
            <div className="feature_desc">
              <h4 className="gradient-text">Curious</h4>
              <p>I enjoy discovering, investigating, and learning something new.</p>
            </div>
          </div>

          {/* ******************************************************* */}

          <div className="feature_card">
            <MdOutlineStars />
            <div className="feature_desc">
              <h4 className="gradient-text">Passionate</h4>
              <p>I am passionate about my profession and interests, such as coding and astronomy.</p>
            </div>
          </div>

          {/* ******************************************************* */}

          <div className="feature_card">
            <BsPeople />
            <div className="feature_desc">
              <h4 className="gradient-text">Team Work</h4>
              <p>I believe in teamwork. I am more focused on accomplishing final goal and keeping perfect co-ordination.</p>
            </div>
          </div>

          {/* ******************************************************* */}

          <div className="feature_card">
            <TbHeartHandshake />
            <div className="feature_desc">
              <h4 className="gradient-text">Compassionate</h4>
              <p>Empathy lets me connect with people which helps in, handling situations, and getting things done.</p>
            </div>
          </div>

          {/* ******************************************************* */}

          <div id="disci_card" className="feature_card">
            <HiOutlineLightBulb />
            <div className="feature_desc">
              <h4 className="gradient-text">Discipline</h4>
              <p>Despite tremendous odds, self-discipline is the thing which keeps me striving toward my goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
