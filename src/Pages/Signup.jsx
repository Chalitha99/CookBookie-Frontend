import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import ChefImage from '../Assets/chef.png'; 
import Logo from '../Assets/Logo.png'; 
import Navbar from "../Components/Navbar";
import BannerBackground from "../Assets/recipe_bg2.png"; 

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        phone: '',
        password: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/register', formData);
            console.log("Registration successful:", response.data);
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'You have been registered successfully.',
                showConfirmButton: false,
                timer: 4000,
                toast: true,
                position: 'top-right',
            });
            setFormData({
                name: '',
                username: '',
                phone: '',
                password: '',
            });

        } catch (error) {
            console.error("Registration failed:", error);
            
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'Please check your details and try again.',
                showConfirmButton: true,
            });
        }
    };

    return (
        <>
            <Navbar/>
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            
            <div className="flex items-center justify-center min-h-screen">
                <form onSubmit={handleSubmit} className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                        <div className="flex justify-center mx-auto">
                            <img className="w-18 h-18 sm:w-20 sm:h-20" src={Logo} alt="logo" />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                            <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">WELCOME to CookBookie !!!</a>
                            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                        </div>
                        
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="username">Username</label>
                            <input 
                                id="name" 
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" 
                                type="text" 
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="email">Email</label>
                            <input 
                                id="username" 
                                value={formData.username}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" 
                                type="email" 
                            />
                        </div>
                        
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="phone">Contact No</label>
                            <input 
                                id="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" 
                                type="text" 
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="password">Password</label>
                            <input 
                                id="password" 
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" 
                                type="password" 
                            />
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                Sign Up
                            </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                            <a href="/login" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or Log in</a>
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        </div>
                    </div>

                    <div className="hidden bg-gradient-to-r from-slate-50 to-orange-600 lg:block lg:w-1/2 bg-cover">
                        <img src={ChefImage} alt="Chef" className="w-full h-auto" />    
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;


