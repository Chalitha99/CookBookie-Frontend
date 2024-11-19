import React, { useState } from "react";
import axios from "axios";  
import Navbar from "../Components/Navbar";
import RecipeBg from "../Assets/recipe_bg.png";
import Swal from 'sweetalert2';

const Contact = () => {
  const [message, setMessage] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 
  const token = localStorage.getItem("authToken");
  
  const handleInputChange = (e) => {
    setMessage(e.target.value); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }

    setIsLoading(true); 

    try {
      const response = await axios.post("http://localhost:8080/mail/send", {message: message}, {
        headers: {
          Authorization: `Bearer ${token}`, 
        }
       }
    );
    Swal.fire({
      icon: 'success',
      title: 'Your message has been sent successfully!',
      showConfirmButton: false,
      timer: 4000,
      toast: true,
      position: 'top-right',
  });
  setMessage("");
   
    } catch (error) {
      
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div>
      <Navbar />
      <div className="home-bannerImage-container">
        <img src={RecipeBg} alt="Recipe Background" />
      </div>
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <form className="contact-form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What is your issue??"
            value={message}
            onChange={handleInputChange}
            className="message-input" // Add styling class as needed
          />
          <button className="secondary-button" type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Contact;
