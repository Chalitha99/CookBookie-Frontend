import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../Components/Navbar";
import axios from 'axios';
import Swal from 'sweetalert2';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/reviewList", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        if (response.status === 200) {
          setReviews(response.data); 
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [token]);

  const displayedReviews = reviews.slice(currentIndex, currentIndex + 3);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      rating,
      comment,
    };

    try {
      const response = await axios.post("http://localhost:8080/user/addReview", reviewData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Your Review added successfully!',
          showConfirmButton: false,
          timer: 4000,
          toast: true,
          position: 'top-right',
        });
        setRating("");
        setComment("");
        setReviews([{ review: reviewData, userImage: null }, ...reviews]); 
      }
    } catch (error) {
      console.error("Error adding review:", error);
      Swal.fire({
        icon: 'error',
        title: 'Review adding failed!!!',
        showConfirmButton: false,
        timer: 4000,
        toast: true,
        position: 'top-right',
      });
      setRating("");
      setComment("");
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-8">
        <div className="work-section-wrapper mt-8">
          <div className="work-section-top text-center">
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">
              Discover what our community of food lovers has to say! From
              family favorites to new culinary creations, our users share their
              experiences, tips, and delicious results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mt-20 gap-20">
            {displayedReviews.map((reviewObj, index) => (
              <div key={index} className="w-80 bg-white rounded-lg shadow-md p-4 text-center">
                <img
                  src={reviewObj.userImage ? `data:image/png;base64,${reviewObj.userImage}` : "/path/to/default-image.png"}
                  alt="Reviewer"
                  className="mx-auto w-16 h-16 rounded-full"
                />
                <p className="my-4">{reviewObj.review.comment}</p>
                <div className="testimonials-stars-container flex justify-center mb-2">
                  {Array.from({ length: reviewObj.review.rating }, (_, idx) => (
                    <AiFillStar key={idx} />
                  ))}
                </div>
                <h2>{reviewObj.name}</h2>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-20 mb-32">
            {reviews.length > 2 && (
              <div className="flex space-x-5">
                {Array.from({ length: Math.ceil(reviews.length / 3) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index * 3)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index * 3 ? "bg-gray-700" : "bg-gray-400"}`}
                  ></button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add a Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="rating">
                Rating
              </label>
              <select
                id="rating"
                className="w-full p-3 border rounded-lg bg-gray-50"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Select rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="comment">
                Comment
              </label>
              <textarea
                id="comment"
                className="w-full p-3 border rounded-lg bg-gray-50"
                placeholder="Write your comment"
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-slate-500 transition duration-200"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;

