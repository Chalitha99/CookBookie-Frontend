import React from "react";
import uploadMeals from "../Assets/pick-meals-image.png";
import RecipeBg from "../Assets/recipe_bg.png";
import RateRecipes from "../Assets/choose-image.png";
import search from "../Assets/search.png";
import Navbar from "./Navbar";
const Work = () => {
  const workInfoData = [
    {
      image: uploadMeals,
      title: "Upload Recipes",
      text: "Share your favorite dishes with the community by uploading your own recipes, complete with ingredients, steps, and photos.",
    },
    {
      image: RateRecipes,
      title: "Rate Recipes",
      text: "Help others discover great meals by rating and reviewing the recipes you've tried.",
    },
    {
      image: search,
      title: "Search Recipes",
      text: "Easily find the perfect dish by searching through thousands of recipes using filters like ingredients, cuisine, and meal type.",
    },
    
  ];
  return (
    <div>
    <Navbar></Navbar>
    <div className="home-bannerImage-container">
          <img src={RecipeBg} alt="" />
      </div>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">ABOUT</p>
        <h1 className="primary-heading">who we are?</h1>
        <p className="primary-text">
          Welcome to our culinary community, where food lovers from around the world come together to share their favorite recipes, cooking tips, and kitchen stories.
          Our mission is to inspire home cooks of all skill levels with easy-to-follow recipes that turn everyday ingredients into delicious meals.
          Whether you're exploring new cuisines or perfecting classic dishes, our platform is designed to make cooking a joyful experience.
          Join us as we celebrate the love of food and the connections it creates, one recipe at a time!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Work;
