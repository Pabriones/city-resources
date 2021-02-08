import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import EmergencyPage from "./components/EmergencyPage";

function App() {
  return (
    <div>
      <LandingPage />
      <div>
        <EmergencyPage />
      </div>
    </div>
  );
}

export default App;
