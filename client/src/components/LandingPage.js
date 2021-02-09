import React from "react";
import "../../src/css/LandingPage.css";
import { Icon } from "semantic-ui-react";
import { Link } from "react-scroll";


const LandingPage = () => {
  return (
    <body>
      <div id="LandingPage">
        <div className="lp-container">
          <div className="lp-title">CITY RESOURCES</div>

          <div className="lp-nav">
            <Link className="lp-link" to="AboutPage" spy={true} duration={500}>
              ABOUT
            </Link>
            <Link className="lp-link" to="Contact" spy={true} duration={500}>
              CONTACT
            </Link>
          </div>
          <div className="lp-flex-container">
            <div>
              <Icon>
                <a href=" ">
                  <button type="button" class="searchDirectoryBtn">
                    <p className="searchText">
                      SEARCH DIRECTORY
                      <ion-icon
                        class="chevIconSearch"
                        name="chevron-forward-outline"
                      ></ion-icon>
                    </p>
                  </button>
                </a>
              </Icon>
            </div>

            <div>
              <Icon>
                <a href=" ">
                  <button type="button" class="emergencyLinesBtn">
                    <p className="emergencyText">
                      EMERGENCY AND CRISIS LINES
                      <ion-icon className="phone" name="call"></ion-icon>
                    </p>
                  </button>
                </a>
              </Icon>
            </div>
          </div>
        </div>
        </div>
      </body>
    );
  }

export default LandingPage;
