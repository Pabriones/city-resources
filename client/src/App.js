import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";
import EmergencyPage from "./components/EmergencyPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/contact" component={ContactPage} />
      <Route path="/emergency" component={EmergencyPage} />
    </Switch>
  </Router>
  );
}

export default App;
