import React from "react";
import "../../src/css/AboutPage.css";
import { Link as Link2 } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const AboutPage = () => {
  return (
    <body>
      <div id="AboutPage">
  
        <div className="ab1-container">
          <div className="row">
            {/*  <div className="imgContainer">
              <div className="ab1-img">
                <img
                  src={require("../Images/elijah-macleod-5LqilHen4Po-unsplash.jpg")}
                  alt=""
                  className="img1"
                />
              </div>
              <div>
                <div className="ab1-img1">
                  <img
                    src={require("../Images/jon-tyson-ajzN2AYNi1U-unsplash.jpg")}
                    alt=""
                    className="img2"
                  />
                </div>
                <div className="ab1-img2">
                  {" "}
                  <img
                    src={require("../Images/ali-arif-soydas-Lr49v_a5WOw-unsplash.jpg")}
                    alt=""
                    className="img3"
                  />
                </div>
              </div>
     </div> */}

            <div className="col">
              <div className="ab1-heading">
                <h1>THE CITY<br/> RESOURCE GUIDE</h1>
              </div>
              <div className="ab1-intro">
                <p>
                  This guide was created to help connect those in need to
                  different services like meals,<br/> childcare, housing, and many
                  more throughout Washington State
                </p>
    </div>
                <div>
                  <Icon>
                    <p className="searchText">
                      <button type="button" class="directLinkBtn">
                        {" "}
                        <Link2 className="directLink" to="/directory">
                          SEARCH DIRECTORY{" "}
                          <ion-icon
                            class="chevIconSearch"
                            name="chevron-forward-outline"
                          />{" "}
                        </Link2>
                      </button>
                    </p>
                  </Icon>
                </div>
          
            </div>
          </div>

          {/* <div className = "parallax">



<div className="space"> </div></div> */}

          {/*           <div>
            <div className="ab1-content">
              <div className="row">
                <p>
                  Poverty can be caused by many different factors, and these
                  factors vary by where a person lives in the world.
                </p>
              </div>
            </div>
            <div className="col">
              {" "}
              <ul className="ab1-list">
                <li> Unemployment </li>
                <li> Low-Paying Jobs</li>
                <li> Family History of Poverty (Cycle of Poverty) </li>
                <li> Discrimination </li>
                <li> Social Inequality</li>
              </ul>
            </div>{" "}
            <div className="col">
              <ul className="ab1-list">
                <li> Political Corruption & Instability </li>
                <li> Centralization of Power Debt (Personal & National) </li>
                <li> Family History of Poverty (Cycle of Poverty) </li>
                <li> Lack of Education & Resources Disease </li>{" "}
              </ul>
            </div>
            <div className="ab1-img-divider">
              <img
                src={require("../Images/sean-benesh-04YCqKIyN-8-unsplash.jpg")}
                alt=""
                width={"100%"}
              />
            </div>
          </div> */}
        </div>
        <div className="quote">
          "Seattle's homelessness crisis has been years in the making, and its
          roots run deep, touching racial inequity, economic disparities, mental
          health treatment, rising housing costs, mental health, addiction, and
          so much more. We have a responsibility to be honest that this crisis
          won't go away overnight. Lasting, meaningful progress will take years.
          But we still must act - and are acting - to improve life in Seattle."-
          Mayor Jenny Durkan
        </div>
      </div>
    </body>
  );
};

export default AboutPage;
