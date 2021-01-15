import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />

        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
