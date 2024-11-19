// import React, { useState } from 'react';


// const Publish = () => {
//          const token = localStorage.getItem("authToken");
//         const [preview, setPreview] = useState(null);
      
//         const handleFileChange = (event) => {
//           const file = event.target.files[0];
//           if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//               setPreview(reader.result); // Set the preview image data URL
//             };
//             reader.readAsDataURL(file); // Convert the file to a data URL
//           }
//         }   

//   return (
//       <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//           <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
//               <form onSubmit>
//                   <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
//                       <div className="sm:col-span-12">
//                       <h6 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
//                         Publish Your Recipe
//                         </h6>
//                       </div>

//                       <div className="sm:col-span-3">
//                           <label  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
//                               Food name
//                           </label>
//                       </div>
//                       <div className="sm:col-span-9">
//                           <input
//                               id="foodName"
//                               name="foodName"
//                               type="text"
                            
//                               className="py-2 px-3 pe-11 block w-full bg-gray-100 border border-black rounded-lg"
//                               required
//                           />
//                       </div>

//                       <div className="sm:col-span-3">
//                           <label  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
//                           Ingredients
//                           </label>
//                       </div>
//                       <div className="sm:col-span-9">
//                           <input
//                               id="ingredients"
//                               name="ingredients"
//                               type="text"
                              
//                               className="py-2 px-3 pe-11 block w-full bg-gray-100 border border-black rounded-lg"
//                               required
//                           />
//                       </div>

//                       <div className="sm:col-span-3">
//                           <label  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
//                           Category
//                           </label>
//                       </div>
//                       <div className="sm:col-span-9">
//                         <select
//                             id="category"
//                             name="category"
//                             className="py-2 px-3 block w-full bg-gray-100 border border-black rounded-lg"
//                             required
//                         >
//                             <option value="">Select a category</option>
//                             <option value="Indian">Indian</option>
//                             <option value="Chinese">Chinese</option>
//                             <option value="Italian">Italian</option>
//                             <option value="SriLankan">Sri Lankan</option>
//                             <option value="Other">Other</option>
//                         </select>
//                         </div>


//                      <div className="sm:col-span-3">
//                           <label  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
//                           Description
//                           </label>
//                       </div>
//                       <div className="sm:col-span-9">
//                           <textarea
//                               id="description"
//                               name="description"
//                               className="py-2 px-3 pe-11 block w-full bg-gray-100 border border-black rounded-lg"
//                               rows="6"
//                               placeholder="Add anything else you want to share."
//                               required
//                           ></textarea>
//                       </div>

//                       <div className="sm:col-span-3">
//                           <label className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
//                               Attach Recipe Photo
//                           </label>
//                       </div>
//                       <div>
//                         <input
//                             type="file"
//                             name="adImage"
//                             id="adImage"
//                             onChange={handleFileChange}
//                             accept="image/*"
//                             required
//                         />
//                         {preview && (
//                             <div className="mt-4">
//                             <h3 className="text-gray-700 dark:text-neutral-400 w-28">Image Preview:</h3>
//                             <img
//                                 src={preview}
//                                 alt="Preview"
//                                 className="mt-2 object-cover rounded-lg border border-gray-300 max-w-72 max-h-56"
//                             />
//                             </div>
//                         )}
//                       </div>
//                   </div>
//                   <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-600 text-white hover:bg-yellow-700 disabled:opacity-50 disabled:pointer-events-none">
//                       Submit Advertisement
//                   </button>
//               </form>
//           </div>
//       </div>
//   );
// };

// export default Publish;

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Publish = () => {
    const token = localStorage.getItem("authToken");
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    foodName: '',
    ingredients: '',
    category: '',
    description: '',
  });
  const [recipeImg, setRecipeImg] = useState(null);
  const [loading, setLoading] = useState(false);
 

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image file changes
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setRecipeImg(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result); // Set the preview image data URL
      };
      reader.readAsDataURL(file); // Convert the file to a data URL
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Prepare the form data
    const data = new FormData();
    data.append('recipeImg', recipeImg);
    data.append('foodName', formData.foodName);
    data.append('ingredients', formData.ingredients);
    data.append('category', formData.category);
    data.append('description', formData.description);

    try {
      
        const response = await axios.post('http://localhost:8080/recipe/addRecipe', data, {
            headers: {
              'Authorization': `Bearer ${token}`,
               "Content-Type": "multipart/form-data"
            },
          });
      
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Your Recipe added successfully!',
          showConfirmButton: false,
          timer: 4000,
          toast: true,
          position: 'top-right',
        });
        
    }

    setFormData({
        foodName: '',
        ingredients: '',
        category: '',
        description: '',
      });
      setPreview(null);
      setRecipeImg(null);
}
    
    catch (error) {
        console.error("Error adding recipe:", error);
        Swal.fire({
          icon: 'error',
          title: 'Recipe adding failed!!!',
          showConfirmButton: false,
          timer: 4000,
          toast: true,
          position: 'top-right',
        });
        console.log(recipeImg); 
    } 
    
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <div className="sm:col-span-12">
              <h6 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
                Publish Your Recipe
              </h6>
            </div>

            <div className="sm:col-span-3">
              <label className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Food name
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                id="foodName"
                name="foodName"
                type="text"
                value={formData.foodName}
                onChange={handleInputChange}
                className="py-2 px-3 pe-11 block w-full bg-gray-100 border border-black rounded-lg"
                required
              />
            </div>

            <div className="sm:col-span-3">
              <label className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Ingredients
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                id="ingredients"
                name="ingredients"
                type="text"
                value={formData.ingredients}
                onChange={handleInputChange}
                className="py-2 px-3 pe-11 block w-full bg-gray-100 border border-black rounded-lg"
                required
              />
            </div>

            <div className="sm:col-span-3">
              <label className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Category
              </label>
            </div>
            <div className="sm:col-span-9">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="py-2 px-3 block w-full bg-gray-100 border border-black rounded-lg"
                required
              >
                <option value="">Select a category</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Italian">Italian</option>
                <option value="SriLankan">Sri Lankan</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Making Process
              </label>
            </div>
            <div className="sm:col-span-9">
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="py-2 px-3 pe-11 block w-full bg-gray-100 border border-black rounded-lg"
                rows="6"
                placeholder="Add anything else you want to share."
                required
              ></textarea>
            </div>

            <div className="sm:col-span-3">
              <label className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Attach Recipe Photo
              </label>
            </div>
            <div>
              <input
                type="file"
                name="recipeImg"
                id="recipeImg"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
              {preview && (
                <div className="mt-4">
                  <h3 className="text-gray-700 dark:text-neutral-400 w-28">Image Preview:</h3>
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-2 object-cover rounded-lg border border-gray-300 max-w-72 max-h-56"
                  />
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-600 text-white hover:bg-yellow-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? 'Submitting...' : 'Submit Recipe'}
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default Publish;
