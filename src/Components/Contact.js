import React from "react";
import Navbar from "./Navbar";
import RecipeBg from "../Assets/recipe_bg.png";
const Contact = () => {
  return (

    <div>
    <Navbar></Navbar>
    <div className="home-bannerImage-container">
          <img src={RecipeBg} alt="" />
      </div>
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Malsha@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Contact;
