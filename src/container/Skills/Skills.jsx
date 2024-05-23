import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const data = [
  { name: "C++", bgColor: "", icon: images.cpp },
  { name: "DSA", bgColor: "", icon: images.algorithms },
  { name: "HTML", bgColor: "", icon: images.html },
  { name: "CSS", bgColor: "", icon: images.css },
  { name: "JavaScript", bgColor: "", icon: images.javascript },
  { name: "React", bgColor: "", icon: images.react },
  { name: "NodeJS", bgColor: "", icon: images.node },
  { name: "MongoDB", bgColor: "", icon: images.mongodb },
  { name: "SQL", bgColor: "", icon: images.Sql },
  { name: "Git", bgColor: "", icon: images.git },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(data);
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>S</span>kills
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex "
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
