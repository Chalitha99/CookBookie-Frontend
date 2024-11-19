// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from 'sweetalert2';

// export default function Example() {
//   const [userID, setUserID] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const token = localStorage.getItem("authToken");

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/user/getUser", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const userData = response.data;
//         setUserID(userData.id);
//         setName(userData.name);
//         setEmail(userData.username);
//         setPhone(userData.phone);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(
//         `http://localhost:8080/user/updateUser/${userID}`,
//         {
//           name,
//           username: email,
//           phone,
//           currentPassword,
//           newPassword,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       Swal.fire({
//         icon: 'success',
//         title: 'User details updated successfully!',
//         text: 'Your user details and credentials updated successfully!',
//         showConfirmButton: false,
//         timer: 4000,
//         toast: true,
//         position: 'top-right',
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'User Update failed',
//         text: 'Please check your current password and email again!',
//         showConfirmButton: true,
//       });
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setProfilePicture(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   return (
//     <form onSubmit={handleUpdate}>
//       <div className="mb-4 flex items-center gap-4">
//   {/* Profile Picture Upload */}
//   <label htmlFor="profile-picture" className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-600 shadow-lg cursor-pointer">
//     {preview ? (
//       <img src={preview} alt="Profile Preview" className="w-full h-full object-cover" />
//     ) : (
//       <div className="flex items-center justify-center h-full text-gray-400 text-sm">Upload</div>
//     )}
//   </label>
//   <input
//     id="profile-picture"
//     type="file"
//     accept="image/*"
//     onChange={handleFileChange}
//     className="hidden"
//   />

//   {/* Save Button */}
//   <button
//     type="submit"
//     className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
//   >
//     Save
//   </button>
// </div>


//       <div className="border-b border-gray-900/10 pb-12">
//         <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
//         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//           <div className="sm:col-span-3">
//             <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
//               Name
//             </label>
//             <div className="mt-2">
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-8/12 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 placeholder-yellow-400 focus:ring-2 focus:ring-yellow-600 text-sm"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-4">
//             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//               Email address
//             </label>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-2/4 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 placeholder-yellow-400 focus:ring-2 focus:ring-yellow-600 text-sm"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-3">
//             <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
//               Contact Number
//             </label>
//             <div className="mt-2">
//               <input
//                 id="phone"
//                 name="phone"
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-8/12 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 placeholder-yellow-400 focus:ring-2 focus:ring-yellow-600 text-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="border-b border-gray-900/10 pb-12">
//         <h2 className="text-base font-semibold leading-7 text-gray-900">Password Change</h2>
//         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//           <div className="sm:col-span-3">
//             <label htmlFor="current-password" className="block text-sm font-medium leading-6 text-gray-900">
//               Current Password
//             </label>
//             <div className="mt-2">
//               <input
//                 id="current-password"
//                 name="current-password"
//                 type="password"
//                 value={currentPassword}
//                 onChange={(e) => setCurrentPassword(e.target.value)}
//                 className="w-8/12 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 placeholder-yellow-400 focus:ring-2 focus:ring-yellow-600 text-sm"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-3">
//             <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-gray-900">
//               New Password
//             </label>
//             <div className="mt-2">
//               <input
//                 id="new-password"
//                 name="new-password"
//                 type="password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 className="w-8/12 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 placeholder-yellow-400 focus:ring-2 focus:ring-yellow-600 text-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
//         >
//           Update
//         </button>
//       </div>
//     </form>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Example() {
  const [userID, setUserID] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [preview, setPreview] = useState(null);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/getUser", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const userData = response.data;
        setUserID(userData.id);
        setName(userData.name);
        setEmail(userData.username);
        setPhone(userData.phone);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);
  

  const handleProfilePictureUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profilePicture", profilePicture);

    try {
        const response = await axios.put(
            `http://localhost:8080/api/img/uploadProfilePicture/${userID}`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                },
            }
        );
        
        Swal.fire({
            icon: "success",
            title: response.data || "Profile picture updated!",
            showConfirmButton: false,
            timer: 4000,
            toast: true,
            position: "top-right",
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Profile picture update failed",
            text: "Please try again.",
            showConfirmButton: true,
        });
    }
};


  const handleUserDetailsUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8080/user/updateUser/${userID}`,
        {
          name,
          username: email,
          phone,
          currentPassword,
          newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      Swal.fire({
        icon: "success",
        title: "User details updated successfully!",
        showConfirmButton: false,
        timer: 4000,
        toast: true,
        position: "top-right",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "User details update failed",
        text: "Please check your current password and email again!",
        showConfirmButton: true,
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      {/* Profile Picture Update Form */}
      <form onSubmit={handleProfilePictureUpdate} className="mb-4 flex items-center gap-4">
        <label htmlFor="profile-picture" className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-600 shadow-lg cursor-pointer">
          {preview ? (
            <img src={preview} alt="Profile Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-sm">Upload</div>
          )}
        </label>
        <input
          id="profile-picture"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="submit"
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500"
        >
          Save Picture
        </button>
      </form>

      {/* User Details Update Form */}
      <form onSubmit={handleUserDetailsUpdate}>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-8/12 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 focus:ring-2 focus:ring-yellow-600 text-sm"
              />
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-2/4 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 focus:ring-2 focus:ring-yellow-600 text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Contact Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-8/12 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 focus:ring-2 focus:ring-yellow-600 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Password Change</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="current-password" className="block text-sm font-medium leading-6 text-gray-900">
                Current Password
              </label>
              <input
                id="current-password"
                name="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-8/12 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 focus:ring-2 focus:ring-yellow-600 text-sm"
              />
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-gray-900">
                New Password
              </label>
              <input
                id="new-password"
                name="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-8/12 rounded border py-1 text-yellow-900 shadow ring-1 ring-yellow-300 focus:ring-2 focus:ring-yellow-600 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500"
          >
            Save Details
          </button>
        </div>
      </form>
    </div>
  );
}
