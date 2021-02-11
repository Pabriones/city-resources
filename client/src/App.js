import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import AboutPage2 from "./components/AboutPage2";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import EmergencyPage from "./components/EmergencyPage";
import SearchDirectoryPage from "./components/SearchDirectoryPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
   <div className= "cr-container">
     <div className="content-wrap">
  
      <LandingPage />
        <AboutPage />
        <AboutPage2 />
      
    </div>
           
     <Footer/> </div> 

  );
}

export default App;
