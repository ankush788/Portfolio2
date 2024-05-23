import React from "react";
import { motion } from "framer-motion";
import images from "../../constants";

import WordAnimation from "../../constants/WordAnimation";

import { AppWrap } from "../../wrapper";
import "./Header.scss";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const linkData = [
  "https://github.com/ankush788",
  "https://leetcode.com/ankush920/",
  "https://www.linkedin.com/in/𝐀𝐧𝐤𝐮𝐬𝐡-𝐒𝐢𝐧𝐠𝐡-a19581232/",
  "https://www.codechef.com/users/ankushsingh200",
];
function redirect(destination) {
  window.open(destination, "_blank");
}
const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge  floating">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Ankush Singh</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">
            <WordAnimation words={["Computer Geek", "Logic builder", "Developer"]} />
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="app__header-img floating"
    >
      <img src={images.profilePhoto} alt="profile_bg" />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles floating"
    >
      {[images.github, images.leetcode, images.linkdin, images.codechef].map(
        (circle, index) => (
          <div
            className="circle-cmp app__flex "
            key={`circle-${index}`}
            onClick={() => {
              redirect(linkData[index]);
            }}
          >
            <img src={circle} alt="profile_bg" />
          </div>
        )
      )}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
