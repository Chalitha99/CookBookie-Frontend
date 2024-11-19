import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const History = () => {
  const [recipes, setRecipes] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/recipe/myRecipes", {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });
        setRecipes(response.data); 
      } catch (err) {
        setError("Failed to fetch recipes.");
      } finally {
        setLoading(false); 
      }
    };

    fetchRecipes();
  }, []);

  
  if (loading) {
    return <p className="text-center text-gray-700">Loading recipes...</p>;
  }

 
  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <section className="dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <motion.h1
            animate={{
              rotateY: 360, // 3D rotation on the Y-axis
            }}
            transition={{
              duration: 5, // Duration for one full rotation
              repeat: Infinity, // Repeat the animation infinitely
              ease: "anticipate", // Continuous, smooth rotation
            }}
            className="text-3xl text-center font-extrabold tracking-wider text-gray-900 mt-12 mb-12"
            style={{
              transformStyle: "preserve-3d", // Allow for 3D transformations
            }}
          >
            Your delightful recipes collection
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="border border-amber-500 rounded-lg p-4 shadow-lg"
            >
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  
                  src={recipe.imgPath ? `data:image/png;base64,${recipe.imgPath}` : "/path/to/default-image.png"}
                  alt={recipe.foodName}
                />
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                {recipe.foodName}
              </h1>
              <hr className="w-32 my-6 text-blue-500" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {recipe.description}
              </p>

              {/* Update and Delete Buttons */}
              <div className="mt-4 flex space-x-4">
                <button className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-yellow-600">
                  Update
                </button>
                <button className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;


