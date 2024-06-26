import React, { useState } from "react";

import images from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

// const contactData = [];
const Footer = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { username, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };
  //   contactData.push(contact);
  //   setLoading(false);
  //   setIsFormSubmitted(true);
  // };

  return (
    <>
      <h2 className="head-text" style={{ textTransform: "none" }}>
        <span>Drop </span> me a line
      </h2>
      <div className="app__footer-cards ">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ankushsingh20000003@gmail.com" className="p-text">
            ankushsingh20000003@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 8448606472" className="p-text">
            +91 8448606472
          </a>
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  // <h2 className="head-text">Take a coffee & chat with me</h2>

  // <div className="app__footer-cards">
  //   <div className="app__footer-card ">
  //     <img src={images.email} alt="email" />
  //     <a href="mailto:hello@micael.com" className="p-text">
  //       hello@micael.com
  //     </a>
  //   </div>
  //   <div className="app__footer-card">
  //     <img src={images.mobile} alt="phone" />
  //     <a href="tel:+1 (123) 456-7890" className="p-text">
  //       +1 (123) 456-7890
  //     </a>
  //   </div>
  // </div>
  //     {!isFormSubmitted ? (
  //       <div className="app__footer-form app__flex">
  //         <div className="app__flex">
  //           <input
  //             className="p-text"
  //             type="text"
  //             placeholder="Your Name"
  //             name="username"
  //             value={username}
  //             onChange={handleChangeInput}
  //           />
  //         </div>
  //         <div className="app__flex">
  //           <input
  //             className="p-text"
  //             type="email"
  //             placeholder="Your Email"
  //             name="email"
  //             value={email}
  //             onChange={handleChangeInput}
  //           />
  //         </div>
  //         <div>
  //           <textarea
  //             className="p-text"
  //             placeholder="Your Message"
  //             value={message}
  //             name="message"
  //             onChange={handleChangeInput}
  //           />
  //         </div>
  //         <button type="button" className="p-text" onClick={handleSubmit}>
  //           {!loading ? "Send Message" : "Sending..."}
  //         </button>
  //       </div>
  //     ) : (
  //       <div>
  //         <h3 className="head-text">Thank you for getting in touch!</h3>
  //       </div>
  //     )}
  //   </>
  // );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
