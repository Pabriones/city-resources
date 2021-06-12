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
import SubscribeMe from "./SubscribeMe";
import ContactSection from "./ContactSection";
import TopNav from "./TopNav";
import { ArrowRightCircle } from "react-bootstrap-icons";
import CovidMain from "./CovidMain";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

const LandingPage = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/homepage" />;
  }

  return (
    <body>
      <div id="LandingPage">
        <CovidMain />

        <div className="lp-container">
          <TopNav />
          <div className="lp-flex-container" />
        </div>
      </div>
      <div>
        <AboutPage />
        <ContactSection />
        <SubscribeMe />
        <Footer />
      </div>
    </body>
  );
};

LandingPage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LandingPage);
