// import { useState } from "react";
// import Navbar from "../Components/Navbar";
// import { motion } from "framer-motion";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// // Dummy data for recipes
// const recipes = [
//   {
//     id: 1,
//     name: "Classic Pancakes",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
  
//     likes: 5,
//     liked: false,
//   },
//   {
//     id: 2,
//     name: "Spaghetti Carbonara",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Spaghetti Carbonara",
//     likes: 8,
//     liked: false,
//   },
//   {
//     id: 3,
//     name: "Grilled Sandwich",
    
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Grilled Sandwich",
//     likes: 3,
//     liked: false,
//   },
//   {
//     id: 4,
//     name: "Chocolate Cake",
    
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Chocolate Cake",
//     likes: 15,
//     liked: false,
//   },
//   {
//     id: 5,
//     name: "Fruit Salad",
    
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Fruit Salad",
//     likes: 7,
//     liked: false,
//   },
//   {
//     id: 6,
//     name: "Vegetable Soup",
    
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Vegetable Soup",
//     likes: 6,
//     liked: false,
//   },
// ];

// export default function RecipePage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recipeData, setRecipeData] = useState(recipes);
//   const itemsPerPage = 6;

//   const totalPages = Math.ceil(recipeData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentRecipes = recipeData.slice(startIndex, endIndex);

//   const handleLike = (id) => {
//     setRecipeData((prevRecipes) =>
//       prevRecipes.map((recipe) =>
//         recipe.id === id
//           ? {
//               ...recipe,
//               likes: recipe.liked ? recipe.likes - 1 : recipe.likes + 1,
//               liked: !recipe.liked,
//             }
//           : recipe
//       )
//     );
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <>
//       <Navbar />
//       <motion.h1
//         animate={{
//           rotateY: 360, // 3D rotation on the Y-axis
//         }}
//         transition={{
//           duration: 5, // Duration for one full rotation
//           repeat: Infinity, // Repeat the animation infinitely
//           ease: "anticipate", // Continuous, smooth rotation
//         }}
//         className="text-3xl text-center font-extrabold tracking-wider text-gray-900 mt-12 mb-12"
//         style={{
//           transformStyle: "preserve-3d", // Allow for 3D transformations
//         }}
//       >
//         Your favorite recipes are finally here...
//       </motion.h1>

//       <div className="bg-white rounded-xl">
//         <div className="search-bar-container flex justify-end p-4">
//           <input
//             type="text"
//             placeholder="Search recipes..."
//             className="border rounded px-4 py-2 w-full max-w-md  bg-slate-200 border-amber-400"
//           />
//         </div>

//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-">
//           <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
//             {currentRecipes.map((recipe) => (
//               <div
//                 key={recipe.id}
//                 className="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 mb-20 border-amber-400"
//               >
//                 <img
//                   alt={recipe.imageAlt}
//                   src={recipe.imageSrc}
//                   className="w-full h-48 object-cover"
//                 />
                
//                 <div className="p-4">
//                   <h3 className="text-lg text-black text-left">
                    
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {recipe.name}
                    
//                   </h3>
//                   <h3 className="absolute bottom-2 right-2 text-sm text-amber-600 bg-white/70 px-3 py-1 rounded-lg shadow">
                    
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {recipe.name}
                    
//                   </h3>
//                   <div className="mt-4 flex justify-between items-center">
//                     <button
//                       onClick={() => handleLike(recipe.id)}
//                       className="flex items-center space-x-1"
//                     >
//                       {recipe.liked ? (
//                         <AiFillHeart className="text-red-500 text-2xl" />
//                       ) : (
//                         <AiOutlineHeart className="text-gray-500 text-2xl" />
//                       )}
//                       <span className="text-gray-700">{recipe.likes}</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 flex justify-center space-x-2">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === index + 1
//                     ? "bg-gray-900 text-white"
//                     : "bg-white text-gray-900"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


export default function RecipePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("authToken");
  const itemsPerPage = 6;

  // Fetch recipes from the API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/recipe/allRecipes", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setRecipeData(response.data); // Assuming the API returns an array of recipes
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch recipes");
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const totalPages = Math.ceil(recipeData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecipes = recipeData.slice(startIndex, endIndex);

  const handleLike = (id) => {
    setRecipeData((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id
          ? {
              ...recipe,
              likes: recipe.liked ? recipe.likes - 1 : recipe.likes + 1,
              liked: !recipe.liked,
            }
          : recipe
      )
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <Navbar />
      <motion.h1
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "anticipate",
        }}
        className="text-3xl text-center font-extrabold tracking-wider text-gray-900 mt-12 mb-12"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        Your favorite recipes are finally here...
      </motion.h1>

      <div className="bg-white rounded-xl">
        <div className="search-bar-container flex justify-end p-4">
          <input
            type="text"
            placeholder="Search recipes..."
            className="border rounded px-4 py-2 w-full max-w-md bg-slate-200 border-amber-400"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
            {currentRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 mb-20 border-amber-400"
              >
                <img
                  
                  src={recipe.imgPath ? `data:image/png;base64,${recipe.imgPath}` : "/path/to/default-image.png"}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg text-black text-left">
                    {recipe.foodName}
                  </h3>

                  <h3 className="absolute bottom-2 right-2 text-sm text-amber-600 bg-white/70 px-3 py-1 rounded-lg shadow">
                    <span aria-hidden="true" className="absolute inset-0" />
                     {recipe.category}
                  </h3>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => handleLike(recipe.id)}
                      className="flex items-center space-x-1"
                    >
                      {recipe.liked ? (
                        <AiFillHeart className="text-red-500 text-2xl" />
                      ) : (
                        <AiOutlineHeart className="text-gray-500 text-2xl" />
                      )}
                      <span className="text-gray-700">{recipe.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}



