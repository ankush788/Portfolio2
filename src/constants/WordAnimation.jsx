/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./WordAnimation.scss"; // Import the CSS file for styling

const WordAnimation = ({ words }) => {
  if (words.length === 0) {
    words = [];
  }
  const [currIndex, setCurrIndex] = useState(0);
  const [direction, setDirection] = useState(true);
  const [currWordIndex, setCurrWordIndex] = useState(0);

  const manageIndex = () => {
    if (direction === true) {
      setCurrIndex(currIndex + 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  const mangewordIndex = () => {
    setCurrIndex(0);
    setDirection(true);
    setCurrWordIndex((currWordIndex + 1) % words.length);
  };

  useEffect(() => {
    const animationInterval = setTimeout(
      () => {
        manageIndex();
        if (direction && currIndex === words[currWordIndex].length) {
          setTimeout(() => {
            setDirection(false);
          }, 2000);
        }

        if (!direction && currIndex === 0) {
          mangewordIndex();
        }
      },
      direction ? 100 : 50
    );

    return () => clearTimeout(animationInterval);
  }, [currIndex, currWordIndex, direction, words]);

  const displayWord = () => {
    return words[currWordIndex].slice(0, currIndex);
  };

  return <div className="word-animation">{displayWord()}</div>;
};

export default WordAnimation;
