import React from "react";  
import Navbar from "./Navbar";  // Assuming you still want to keep the Navbar  
import RecipeBg2 from "../Assets/loginpage.jpg"; // You can choose to keep this or remove it based on your needs  
import FormElementsSearchRoundedBaseBasic from "./SearchBar"; // Importing the search bar component  
const About = () => {  
  return (  
    <div>  
      <Navbar />  
      
      {/* Search Bar Section */}  
      <div className="search-bar-container flex justify-end">  
  <FormElementsSearchRoundedBaseBasic className="search-input" />  
</div>  

      {/* New Section After Search Bar */}  
      <section className="bg-white dark:bg-gray-900">  
        <div className="container px-6 py-10 mx-auto">  
          <div className="lg:-mx-6 lg:flex lg:items-center">  
            <img  
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"  
              src={RecipeBg2}
              alt=""  
            />  
            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">  

              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">  
                Help us improve our productivity  
              </h1>  

              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">  
                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad  
                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa  
                aperiam dolorum, obcaecati corrupti aspernatur a. ”  
              </p>  

              <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>  
              <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>  

              <div className="flex items-center justify-between mt-12 lg:justify-start">  
                <button  
                  title="left arrow"  
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"  
                >  
                  <svg  
                    xmlns="http://www.w3.org/2000/svg"  
                    className="w-6 h-6"  
                    fill="none"  
                    viewBox="0 0 24 24"  
                    stroke="currentColor"  
                    strokeWidth="2"  
                  >  
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />  
                  </svg>  
                </button>  

                <button  
                  title="right arrow"  
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"  
                >  
                  <svg  
                    xmlns="http://www.w3.org/2000/svg"  
                    className="w-6 h-6"  
                    fill="none"  
                    viewBox="0 0 24 24"  
                    stroke="currentColor"  
                    strokeWidth="2"  
                  >  
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />  
                  </svg>  
                </button>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>  
    </div>  
  );  
};  

export default About;