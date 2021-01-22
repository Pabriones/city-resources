import React from "react";
import "../../src/css/LandingPage.css";
import { Icon } from "semantic-ui-react";

const LandingPage = () => {
  return (
    <body>
      <div class="lp-container">
        <div class="lp-title">CITY RESOURCES</div>

        <div class="lp-nav">
          <a href="url">ABOUT </a>
          <a href="url">CONTACT</a>
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
