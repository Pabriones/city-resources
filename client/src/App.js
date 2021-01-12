import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div>
      <LandingPage />
      <div>
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
