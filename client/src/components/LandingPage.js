import React from "react";
import "../../src/css/LandingPage.css";
import {
  Container,
  Jumbotron,
  Accordion,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import Footer from "./Footer";
import AboutPage from "./AboutPage";
import AboutPage2 from "./AboutPage2";
import ContactSection from "./ContactSection";
import TopNav from "./TopNav";
import { ArrowRightCircle } from "react-bootstrap-icons";
import CovidMain from './CovidMain'

class LandingPage extends React.Component {
  render() {
    return (
      <body>
        <div id="LandingPage">
  
       <CovidMain/>
           
        
          <div className="lp-container">
            <TopNav />
            <div className="lp-flex-container"></div>
          </div>
        </div>
        <div>
          <AboutPage />
          {/* <AboutPage2 /> */}
          <ContactSection />
          <Footer />
        </div>
      </body>
    );
  }
}

export default LandingPage;
