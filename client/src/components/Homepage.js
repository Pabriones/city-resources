import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Footer from "./Footer";
import AboutPage from "./AboutPage";
import AboutPage2 from "./AboutPage2";
import ContactSection from "./ContactSection";
import "../../src/css/LandingPage.css";
import TopNavHp from "./TopNavHp";
import CovidMain from "./CovidMain";

class Homepage extends React.Component {
  render() {
    return (
      <body>
        <div id="LandingPage">
          <CovidMain />

          <div className="lp-container">
            <TopNavHp />
          </div>
        </div>
        <div>
          <AboutPage />
     
          <ContactSection />
          <Footer />
        </div>
      </body>
    );
  }
}

export default Homepage;
