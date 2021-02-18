import React from "react";
import "../../src/css/AboutPage.css";

const AboutPage = () => {
  return (
    <body>
      <div id="AboutPage">
        <div className="ab1-container">
          <div className="ab1-heading">
            <h1>THE CITY RESOURCE GUIDE</h1>
          </div>


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
              <div className="ab1-intro">
                <p>
                  was created to help connect those in need to different
                  services like meals, childcare, and housing throughout
                  Washington State.
                </p>
                <p>
                  This guide provides the tools to easily find the services
                  offered near you. Important documents can
                  easily be uploaded and saved in your account so you’ll never
                  forget them at your appointments!
                </p>
              </div>{" "}
            </div>
          </div>

          <div className = "parallax">



<div className="space"> </div></div>
 
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
      </div>
    </body>
  );
};

export default AboutPage;
