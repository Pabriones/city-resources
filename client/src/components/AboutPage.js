import React from "react";
import "../../src/css/AboutPage.css";
import { Link as Link2 } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

const AboutPage = () => {
  return (
    <body>
      <div class="container-fluid about-page-container">
        <div id="AboutPage"></div>
        <div class="row about-page-title">
          <h1>
            THE CITY
            <br /> RESOURCE GUIDE
          </h1>
        </div>
        <div class="row about-page-intro">
          This guide was created to help connect those in need to different
          services like meals, childcare, housing, and many more throughout
          Washington State.
        </div>
        <div class="row about-page-directory-button">
          <Link2 class="directLink" to="/directory">
            {" "}
            <button type="button" class="directLinkBtn">
              {" "}
              SEARCH DIRECTORY <ArrowRight size={20} />
            </button>
          </Link2>
        </div>
      </div>
      <div class="container-fluid quote">
        <p>"Seattle's homelessness crisis has been years in the making, and its
        roots run deep, touching racial inequity, economic disparities, mental
        health treatment, rising housing costs, mental health, addiction, and so
        much more. We have a responsibility to be honest that this crisis won't
        go away overnight. Lasting, meaningful progress will take years. But we
        still must act - and are acting - to improve life in Seattle."- Mayor
        Jenny Durkan</p>
      </div>
      <div class="parallax">
          <div class="space"> </div>
        </div>
    </body>

    // <body>
    //
    //     <div class="container ab1-container">
    //       <div class="row ab1-intro">
    //         <div class="col ab1-intro">
    //           <div class="ab1-heading">
    //             <h1>
    //               {" "}
    //               THE CITY
    //               <br /> RESOURCE GUIDE
    //             </h1>
    //           </div>
    //           <div class="ab1-intro">
    //             <p>
    //               This guide was created to help connect those in need to
    //               different services like meals, childcare, housing, and many
    //               more throughout Washington State.
    //             </p>
    //           </div>
    //           <div>
    //             <p class="searchText">
    // <Link2 class="directLink" to="/directory">
    //   {" "}
    //   <button type="button" class="directLinkBtn">
    //     {" "}
    //     SEARCH DIRECTORY <ArrowRight size={20} />
    //   </button>
    // </Link2>
    //             </p>
    //           </div>
    //         </div>
    //       </div>{" "}
    //     </div>

    // <div class="quote">
    //   "Seattle's homelessness crisis has been years in the making, and its
    //   roots run deep, touching racial inequity, economic disparities, mental
    //   health treatment, rising housing costs, mental health, addiction, and
    //   so much more. We have a responsibility to be honest that this crisis
    //   won't go away overnight. Lasting, meaningful progress will take years.
    //   But we still must act - and are acting - to improve life in Seattle."-
    //   Mayor Jenny Durkan
    // </div>
        // <div class="parallax">
        //   <div class="space"> </div>
        // </div>
    //   </div>
    // </body>
  );
};

export default AboutPage;
