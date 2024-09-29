import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import Reviews from "./Reviews";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
     <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Bring joy to your kitchen !!
          </h1>
          <p className="primary-text">
            Welcome to a place where every recipe tells a story, and every meal brings us closer.
            Let’s cook, share, and savor the joy of food together!
          </p>
          <button className="secondary-button">
            Share Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <Reviews></Reviews>
    </div>
     
  );
};

export default Home;
