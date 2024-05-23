import React, { useState, useEffect } from "react";
import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experience.scss";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        <span>E</span>xperience
      </h2>

      <div className="app__experience-container">
        <div className="app__experience-main">
          <div className="propel-img">
            <img src={images.Propel} />
          </div>
          <div className="app__experience-detail">
            <div className="app__experience-info">
              <p className="app__experience-postion">Web Development Intern</p>
              <p className="app__experience-date"> May 2024 - Present</p>
            </div>
            <div className="app__experience-company-name">Propel Mentorship </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__experience"),
  "skills",
  "app__primarybg"
);
