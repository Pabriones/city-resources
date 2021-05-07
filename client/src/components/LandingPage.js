import React from "react";
import "../../src/css/LandingPage.css";

import Footer from "./Footer";
import AboutPage from "./AboutPage";
import AboutPage2 from "./AboutPage2";
import ContactSection from "./ContactSection";
import TopNav from "./TopNav";

class LandingPage extends React.Component {
  render() {
    return (
      <body>
        <div id="LandingPage">
          <div className="lp-container">
            <TopNav />
            <div className="lp-flex-container"></div>
          </div>
        </div>
        <div>
          <AboutPage />
          <AboutPage2 />
          <ContactSection />
          <Footer />
        </div>
      </body>
    );
  }
}

export default LandingPage;
