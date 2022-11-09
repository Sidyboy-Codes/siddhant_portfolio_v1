import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineScissors } from 'react-icons/hi';
import { ImMail4 } from "react-icons/im";
import { MdDownloading } from 'react-icons/md';
import footerImg from "./footerImg.png";

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
        <div className="scissorIcon"><HiOutlineScissors/></div>
      <div className="container">
        <h2 className="sec_title">
          Contact me<span className="gradient-text">.</span>
        </h2>

        <div className="contact_grp">


          <div className="contact_media">
            <a href="https://github.com/Sidyboy-Codes">
              <BsGithub />
            </a>

            <a href="https://www.linkedin.com/in/siddhantpatel69/">
              <BsLinkedin />
            </a>

            <a href="mailto:siddhantpatel69+portfolio@gmail.com">
              <ImMail4 />
            </a>
          </div>

        <a className="btn" href={"./assets/SIDDHANT_PATEL_Resume.pdf"} download>Resume <MdDownloading/></a>
          <img src={footerImg} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
