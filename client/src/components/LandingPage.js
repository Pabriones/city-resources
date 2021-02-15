import React, { Fragment } from "react";
import "../../src/css/LandingPage.css";
import { Icon } from "semantic-ui-react";
import Footer from "./Footer";
import AboutPage from "./AboutPage";
import AboutPage2 from "./AboutPage2";
import ContactSection from "./ContactSection"
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import LoginModal from './LoginModal';

class LandingPage extends React.Component {
  render() {
    return (
      <body>
        <div id="LandingPage">
          <div className="lp-container">
            <div className="lp-title">CITY RESOURCES </div>{" "}
            <div className="lp-nav">
              <Link1
                className="lp-link"
                to="AboutPage"
                spy={true}
                duration={500}
              >
                ABOUT
              </Link1>

              <Link1 className="lp-link" to="ContactSection" spy={true} duration={500}>
                CONTACT
              </Link1>
              <Link1
                className="lp-link2"
                to="contact"
                spy={true}
                duration={500}
              >
                
								<LoginModal />
				
              </Link1>

           
              
              <Link1
                className="lp-link2"
                to="contact"
                spy={true}
                duration={500}
              >
                REGISTER
              </Link1>
            </div>
            <div className="lp-flex-container">
              <div>
                <Icon>
                  <button type="button" class="searchDirectoryBtn">
                    <p className="searchText">
                      <Link2 className="btnLink" to="/directory">
                        SEARCH DIRECTORY
                      </Link2>
                      <ion-icon
                        class="chevIconSearch"
                        name="chevron-forward-outline"
                      ></ion-icon>
                    </p>
                  </button>
                </Icon>
              </div>

             {/*  <div>
                <Icon>
                  <button type="button" class="emergencyLinesBtn">
                    <p className="emergencyText">
                      <Link2 className="btnLink" to="/emergency">
                        EMERGENCY AND CRISIS LINES
                      </Link2>
                      <ion-icon className="phone" name="call"></ion-icon>
                    </p>
                  </button>
                </Icon>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <AboutPage />
          <AboutPage2 />
          <ContactSection/>
          <Footer />
        </div>
      </body>
    );
  }
}

export default LandingPage;
