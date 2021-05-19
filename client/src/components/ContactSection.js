import React from "react";
import "../../src/css/ContactSection.css";
import { Link as Link2 } from "react-router-dom";
import SimpleContactForm from "./SimpleContactForm";

const ContactSection = () => {
  return (
    <div class="container-fluid contact-container">
      <div id="ContactSection"></div>
      <div class="row contact-content">
        <div class="col-md contact-info">
          <h1>GET IN TOUCH</h1>

          <p>
            {" "}
            Any questions or comments? We would love to know your thoughts. If
            our information is no longer correct, or if there are any other
            resources we should add, please let us know!
          </p>

          <p>
            If you would like to add your resource to our page, please complete
            the add resource form.{" "}
          </p>

          <Link2 className="addResource" to="/addresource">
            <button type="button" class="addResourceBtn">
              Add Your Resource
            </button>{" "}
          </Link2>
        </div>

        <div class="col-sm contact-info">
          <SimpleContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
