import React, { useState } from "react";
import logo from "../images/logo.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import hamburger from "../images/hamburger.png";
import { Link } from "react-router-dom";

const Nav = ({ toggle, settoggle }) => {
  return (
    <div className="fixed">
      <div className="nav">
        <div className="images-nav">
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>

          <div className={`${!toggle ? "none" : "socials"}`}>
            <a href="https://www.instagram.com/xxsamuu_/" target="_blank">
              <img src={instagram} className="instagram" />
            </a>
            <a href="https://github.com/xxsamuu" target="_blank">
              <img src={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-roufaeil-36b8bb25b/"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
          </div>
        </div>

        <div className="links">
          <a href="#whoami">whoami</a>
          <a href="#projects">my projects</a>
          <a
            href="https://samprogramming.zohobookings.eu/#/customer/samuelroufaeil"
            target="_blank"
          >
            schedule a call
          </a>
          <div
            className={`${toggle ? "close-menu" : "hamburger-menu"} menu`}
            onClick={() => settoggle(!toggle)}
          >
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
            {toggle && (
              <div className="toggle-links">
                <a href="#whoami">whoami</a>
                <a href="#projects">my projects</a>
                <a
                  href="https://samprogramming.zohobookings.eu/#/customer/samuelroufaeil"
                  target="_blank"
                >
                  schedule a call
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
