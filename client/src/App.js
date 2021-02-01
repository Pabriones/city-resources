import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import AboutPage2 from "./components/AboutPage2";
import Footer from "./components/Footer";
 
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
