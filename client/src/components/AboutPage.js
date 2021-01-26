import React from "react";
import "../../src/css/AboutPage.css";

const AboutPage = () => {
  return (
    <body>
      <div className="ab1-container">
        <div className="ab1-heading">
          The City Resource Guide provides a comprehensive, up-to-date list of
          services for people experiencing homelessness and poverty.
        </div>

        <div className="ab1-img">
          <img
            src={require("../Images/elijah-macleod-5LqilHen4Po-unsplash.jpg")}
            alt=""
            className="img1"
          />
        </div>

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

        <div className="ab1-intro">
          According to a study done by the National Law Center on Homelessness
          and Poverty done in 2007, 3.5 million people (1.35 million of them
          children) are likely to experience homelessness in a given year.
          <p>
            In 2018, more than 38 million people are lived in poverty in
            America. Four a family of four, that means earning just $25,000 per
            year.
          </p>
        </div>
        <div className="ab1-content">
          <div className="row">
          <p>
            Poverty can be caused by many different factors, and these factors
            vary by where a person lives in the world.
          </p>
        </div></div>

       
          <div className="col"> <ul className="ab1-list">
          <li> Unemployment </li>
          <li> Low-Paying Jobs</li>
          <li> Family History of Poverty (Cycle of Poverty) </li>
          <li> Discrimination </li>
          <li> Social Inequality</li></ul>
         </div> <div className="col">
        <ul className="ab1-list">
       
          <li> Political Corruption & Instability </li>
          <li> Centralization of Power Debt (Personal & National) </li>
          <li> Family History of Poverty (Cycle of Poverty) </li>
          <li> Lack of Education & Resources Disease </li> </ul>
      </div>  

        <div className="ab1-img-divider">
          <img
            src={require("../Images/sean-benesh-04YCqKIyN-8-unsplash.jpg")}
            alt=""
            width={"100%"}
          />
        </div>
      </div>
    </body>
  );
};

export default AboutPage;
