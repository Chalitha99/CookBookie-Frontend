import React from "react";
import ProfilePic from "../Assets/malsha.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">REVIEWS</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Discover what our community of food lovers has to say! From tried-and-true family favorites to exciting new culinary creations, our users share their experiences, tips, and delicious results.
        Read through reviews to find inspiration, helpful feedback, and heartwarming stories of how these recipes bring people together.
        Whether you're a seasoned chef or just starting your cooking journey, see how these dishes have delighted kitchens around the world.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I tried the creamy garlic pasta recipe, and it turned out amazing!
        The instructions were easy to follow, and the result was a rich, flavorful dish that my whole family loved.
        I added a bit of extra Parmesan and paired it with some garlic bread on the side.
        This is definitely going to be a regular meal in our house!
        Highly recommend it to anyone looking for a quick and delicious dinner idea.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Malsha Karunarathna</h2>
      </div>
    </div>
  );
};

export default Testimonial;
