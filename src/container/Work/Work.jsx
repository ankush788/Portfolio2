/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Work.scss";

const projectdata = [
  {
    name: "Twitter-Clone Project Img",
    title: "Twitter-Clone Project",
    description:
      "Responsive clone application of Twitter. Developed using the MERN stack.",
    projectLink: "https://twitter-front-mauve.vercel.app/",
    imgUrl: images.TwitterClone,
    tags: ["MERN", "All"],
  },

  {
    name: "Elite Img",
    title: "Elite WebSite",
    description:
      "A dynamic media streaming web application. Fetches real time movie data via third-party API.",
    projectLink: "https://elite-pearl.vercel.app/home",
    imgUrl: images.Elite,
    tags: ["React JS", "All"],
  },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(projectdata);
    setFilterWork(projectdata);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text ">
        <span>P</span>
        rojects
      </h2>

      <div className="app__work-filter ">
        {["All", "MERN", "React JS"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text app__primarybg ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio floating "
      >
        {filterWork.map((work, index) => (
          // eslint-disable-next-line react/jsx-no-target-blank

          <div className="app__work-item app__flex app__primarybg" key={index}>
            <a
              href={work.projectLink}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "project",
  "app__whitebg"
);
