import React from "react";
import Navbar from "./Navbar";
import RecipeBg2 from "../Assets/recipe_bg2.png";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="home-bannerImage-container">
          <img src={RecipeBg2} alt="" />
      </div>
    <div className="about-section-container">
     
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">RECIPE</p>
        <h1 className="primary-heading">
           Discover and Share Delicious Recipes for Every Occasion
        </h1>
        <p className="primary-text">
        Explore a world of flavors with our collection of mouth-watering recipes, perfect for every occasion and skill level.
        Whether you're in the mood for a quick weeknight dinner or an elaborate feast, you’ll find inspiration here.
       
        </p>
        <p className="primary-text">
        Share your own culinary creations and connect with a community of passionate home cooks.
        From comforting classics to adventurous new dishes, there's something for everyone.
        Start cooking, sharing, and enjoying today!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
