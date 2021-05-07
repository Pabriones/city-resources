import React from "react";
import "../../src/css/LandingPage.css";
import {
  Container,
  Jumbotron,
  Accordion,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import Footer from "./Footer";
import AboutPage from "./AboutPage";
import AboutPage2 from "./AboutPage2";
import ContactSection from "./ContactSection";
import TopNav from "./TopNav";
import { ArrowRightCircle } from "react-bootstrap-icons";

class LandingPage extends React.Component {
  render() {
    return (
      <body>
        <div id="LandingPage">
          <Jumbotron fluid>
            <Container className="lp-covid-jumbo">
              <h3>
                For the most update information about COVID-19, please visit the{" "}
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                  className="lp-jumbo-link"
                >
                  CDC Website
                </a>
                .
              </h3>
              <p>
                {" "}
                <h4>Vaccine appointments are available!</h4>
                King County:{" "}
                <a
                  href="https://seattle.signetic.com/home/93d64636-e4a2-eb11-b1ac-002248089768"
                  className="lp-jumbo-link"
                >
                  Schedule an appointment
                </a>
                <br />
                General vaccine locator:{" "}
                <a
                  href="https://vaccinelocator.doh.wa.gov/"
                  className="lp-jumbo-link"
                >
                  Find an appointment
                </a>{" "}
                <br /> <br />
                <a
                  href="https://kingcounty.gov/depts/health/covid-19/~/media/depts/health/communicable-diseases/documents/C19/COVID-19-testing-locations.ashx"
                  className="lp-jumbo-link"
                >
                  Free Covid-19 testing sites
                </a>
              </p>
            </Container>
          </Jumbotron>
          <div className="lp-container">
            <TopNav />
            <div className="lp-flex-container"></div>
          </div>
        </div>
        <div>
          <AboutPage />
          {/* <AboutPage2 /> */}
          <ContactSection />
          <Footer />
        </div>
      </body>
    );
  }
}

export default LandingPage;
