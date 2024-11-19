import React, { useState } from "react";
import loginpage from '../Assets/chef-girl.png'
import Logo from '../Assets/Logo.png'
import Navbar from "../Components/Navbar";
import BannerBackground from "../Assets/recipe_bg2.png"; 
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const LoginP = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', formData);

            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('authToken', token);

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'You have logged in successfully.',
                    showConfirmButton: false,
                    timer: 4000,
                    toast: true,
                    position: 'top-right',
                });

                setFormData({
                    username: '',
                    password: '',
                });

                navigate('/');
            }

        } catch (error) {
            console.error("Login failed:", error);
            
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Please check your details and try again.',
                showConfirmButton: true,
            });
        }
    }

 return (
        <>
        <Navbar/>
        <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
        </div>

        <div className="flex items-center justify-center mt-28">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl ">
            <div className="hidden bg-gradient-to-r from-slate-50 to-orange-600 lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: `url(${loginpage})`,backgroundSize: '85%' ,backgroundRepeat: 'no-repeat'}}></div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <img className="w-18 h-18 sm:w-20 sm:h-20" src={Logo} alt="logo" />
                </div>

               

                

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">WELCOME BACK!!!</a>
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                    <input  id="username" 
                            value={formData.username}
                            onChange={handleChange} 
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                </div>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                        
                    </div>
                    <input id="password" 
                           value={formData.password}
                           onChange={handleChange} 
                           className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                </div>

                <div className="mt-6">
                    <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Login
                    </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    
                </div>
                
                <div className="flex items-center justify-between mt-4">
                    
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    <a href="/signup" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    
                </div>
            </form>
            </div>
        </div></div>
        </>
    );
};

export default LoginP;
