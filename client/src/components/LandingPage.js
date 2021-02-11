import React, { Fragment } from "react";
import "../../src/css/LandingPage.css";
import { Icon } from "semantic-ui-react";
import AboutPage from "./AboutPage";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
  return (
    <body>
      <div class="container">
        <div class="background">
          <div class="title">CITY RESOURCES</div>
          <div class="nav">
            <div class="nav">
            <Link to="#">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            </div>
            <div class="flex-container">
              <div>
                <Icon>
                  <a href=" ">
                    <button type="button" class="searchDirectoryBtn">
                      <p class="searchText">
                      <Link to="/directory">SEARCH DIRECTORY</Link>
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
                      <p class="emergencyText">
                         <Link to="/emergency">EMERGENCY AND CRISIS LINES</Link>
                        <ion-icon class="phone" name="call">
                        </ion-icon>
                      </p>
                    </button>
                  </a>
                </Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AboutPage/>
      </div>
    </body>
  );
}
}
export default LandingPage;
