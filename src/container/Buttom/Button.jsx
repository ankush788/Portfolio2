import React from "react";
import images from "../../constants/images";
import "./Button.scss";
export default function Buttom() {
  function redirect(event) {
      event.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1eocpHarVuBRPhyykJ49PhdXEeqFTxua3/view?pli=1",
      "_blank"
    );
  }
  return (
    <a
      className="app__flex resume-button"
      onClick={(event) => redirect(event)}
     
    >
      <img src={images.Resume} alt="" />
      <p>Resume</p>
    </a>
  );
}
