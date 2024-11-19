import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import axios from 'axios';
import Swal from 'sweetalert2';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout= async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      console.log("Token:", token);  // Check token value
      const response = await axios.get('http://localhost:8080/logout', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
     console.log(response.status)

      if (response.status === 200) {
          

          Swal.fire({
              icon: 'success',
              title: 'Logout Successful!',
              text: 'You have logged out in successfully.',
              showConfirmButton: false,
              timer: 4000,
              toast: true,
              position: 'top-right',
          });

          localStorage.removeItem("authToken");
          setIsLoggedIn(false);
          
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
    // localStorage.removeItem("authToken");
    // setIsLoggedIn(false);
    // navigate("/login");
  };
  
  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Testimonials", icon: <CommentRoundedIcon /> },
    { text: "Contact", icon: <PhoneRoundedIcon /> },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
       

<Link to="/">Home</Link>
<Link to="/recipes">Recipes</Link>
<Link to="/profile">Profile</Link>
<Link to="/review">Reviews</Link>
<Link to="/contact">Contact</Link>


        {isLoggedIn ? (
          <button type="button" onClick={handleLogout} className="primary-button">Logout</button>
        ) : (
          <Link to="/login">
            <button className="primary-button">Login</button>
          </Link>
        )}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
