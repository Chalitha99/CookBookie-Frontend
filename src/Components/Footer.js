import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons flex space-x-4 items-center">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two space-x-4">
        <div className="footer-section-columns">
          <span>Contact</span>
          <span>Help</span>
          <span>Share</span>
          <span>Recipes</span>
          <span>Aboutus</span>
        </div>

        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>

        <div className="footer-section-columns ">
          <span>0702677466</span>
          <span>www.cookbookie.com</span>
          <span>cookbookie@hotmail.com</span>
          <span>No 89 ,Badulla</span>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
