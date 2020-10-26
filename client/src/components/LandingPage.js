import React from "react";
import "../../src/css/LandingPage.css";
import { Icon } from "semantic-ui-react";

const LandingPage = () => {
  return (
 
      <div class="container">
        <div class="background">
          <div class="title">CITY RESOURCES</div>
          <div class="nav">
            <div class="nav">
              <a href="url">ABOUT </a>
              <a href="url">CONTACT</a>

              <div>
                {" "}
                <Icon>
                  <a href=" ">
                    <button type="button" class="searchDirectoryBtn">
                      <p class="searchText">
                        SEARCH DIRECTORY{" "}
                        <ion-icon
                          class="chevIconSearch"
                          name="chevron-forward-outline"
                        ></ion-icon>
                      </p>
                    </button>
                  </a>
                </Icon>
              </div>

              <Icon>
                <a href=" ">
                  <button type="button" class="emergencyLinesBtn">
                    <p class="emergenText">
                      EMERGENCY AND CRISIS LINES{" "}
                      <ion-icon
                        class="chevIconLines"
                        name="chevron-forward-outline"
                      ></ion-icon>
                    </p>
                  </button>
                </a>
              </Icon>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default LandingPage;
