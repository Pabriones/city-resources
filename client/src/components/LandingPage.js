import React from "react";
import "../../src/css/LandingPage.css";
import { Icon } from "semantic-ui-react";

const LandingPage = () => {
  return (
    <body>
      <div className="lp-container">
        <div className="lp-title">CITY RESOURCES</div>

        <div className="lp-nav">
          <a href="#sectionabt" className="lp-link">ABOUT </a>
          <a href="url" className="lp-link"> CONTACT</a>
          </div>
        <div class="lp-flex-container">
          <div>
            <Icon>
              <a href=" ">
                <button type="button" class="searchDirectoryBtn">
                  <p class="searchText">
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
                  <p class="emergencyText">
                    EMERGENCY AND CRISIS LINES
                    <ion-icon class="phone" name="call"></ion-icon>
                  </p>
                </button>
              </a>
            </Icon>
          </div>
        </div>
      </div>
    </body>
  );
};

export default LandingPage;
