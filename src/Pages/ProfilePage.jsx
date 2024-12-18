import React from 'react';
import Sidebar from '../Components/Sidebar';
import Profile from '../Components/Profile';
import Navbar from "../Components/Navbar";
import RecipeBg from "../Assets/recipe_bg2.png";

export default function ProfilePage() {
  return (
    <>
    <Navbar />
    <div className="home-bannerImage-container">
          <img src={RecipeBg} alt="" />
      </div>
    <div className='container-fluid'>
      <div className='row'>
        {/* Sidebar */}
        <div className='col-2'>
          <div style={{ position: 'fixed', top: 0, left: 0, width: '16.6667%', height: '100vh' }}>
            <Sidebar />
          </div>
        </div>
        
        {/* Main Content (Profile) */}
        <div className='col-10' style={{ marginLeft: '16.6667%' }}>
          <div className='mt-5'>
            <Profile />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
  
}
