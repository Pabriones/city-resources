import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div>
      <LandingPage />
      <div>
        <AboutPage />
      </div>
    </div>
  );
}

export default App;
