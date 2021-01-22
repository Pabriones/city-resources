import React from "react";
import "../../src/css/AboutPage2.css";

const AboutPage2 = () => {
  return (
    <body>
      <div class="container2">
        <div class="background2">
          <div class="content">
            <h1>
            
              While there are many root causes, in many cases adverse life
              events such as a health issue, the loss of a job, or the need to
              escape a domestic violence situation can quickly catapult our
              neighbors into homelessness. These root causes are inherently
              interconnected, and for our unsheltered neighbors each factor
              listed below, in many instances, they are compounded by each
              other.
            </h1>

            <h2> Mental Health and Addiction</h2>
            <p>
              Drug overdose is currently the leading cause of death among people
              who are homeless. In King County, more people enter detox for
              heroin than they do alcohol. In 2014, the 156 opiate overdose
              deaths were the highest ever recorded in King County - more than
              triple the number of deaths in 2009.
            </p>
            <h2>Economic Disparities & Poverty</h2>
            <p>
              Seattle has a booming economy and high-wage jobs. But too many
              residents are being pushed out in the face of rising housing and
              living costs, and the growth in our economy has not been shared
              nearly widely enough.
            </p>
            <h2>Lack of Affordable Housing</h2>
            <p>
              According to the Census Bureau, Seattle was the fastest growing
              city in the nation, increasing our population by almost 19 percent
              over the past ten years. Affordable housing development coupled
              with rising rents in the private market has not kept pace with the
              need. As the number of affordable units continue to decrease, the
              cost of housing continues to skyrocket; over the past six years,
              rents have increased 57%.
            </p>

            <h2>Racial Disparities</h2>
            <p>
              People experiencing homelessness are disproportionately people of
              color. The systemic issues of racial inequity and the policies
              that drive that inequity is woven throughout our City. These
              disparities continue to show up in many ways - educational
              attainment, life expectancy and access to healthcare, access to
              affordable housing, and access to jobs training for family-wage
              jobs - and are key indicators in determining success in Seattle.
            </p>
          </div>



          <div>   
            <div class="crop2">
          <img
            src={require("../Images/steve-knutson-lQ2BzDNmnHE-unsplash.jpg")}
            alt=""
            width={"50%"}
          />
        </div>
        <div class="crop3">
          <img
            src={require("../Images/nick-bolton-ktC7QQ7hLTw-unsplash.jpg")}
            alt=""
            width={"50%"}
          />
        </div>
        </div>
        </div>
      </div>
    </body>
  );
};

export default AboutPage2;
