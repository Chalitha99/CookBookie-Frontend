import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Recipes from "./Components/Recipes";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import LoginP from "./Components/LoginP";
import SignUp from "./Components/Signup";
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

