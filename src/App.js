import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Recipes from "./Pages/Recipes";
import Reviews from "./Pages/Reviews";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import LoginP from "./Pages/LoginP";
import SignUp from "./Pages/Signup";
import ProfilePage from "./Pages/ProfilePage";
import PublishPage from "./Pages/PubishPage";
import HistoryPage from "./Pages/HistoryPage";

function App() {
  return (
    <Router>
      <div className="App">
      
        
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/login" element={<LoginP/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/profile" element={<ProfilePage />} /> 
          <Route path="/publish" element={<PublishPage/>}/>
          <Route path="/history" element={<HistoryPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
