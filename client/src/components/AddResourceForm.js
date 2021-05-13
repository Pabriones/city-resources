import React from "react";
import { Form, Row, Container, Col } from "react-bootstrap";
import "../../src/css/AddResource.css";
import emailjs from "emailjs-com";
import "../../src/css/SimpleContactForm.css";

export default function SimpleContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g11nedj",
        "template_lu0019p",
        e.target,
        "user_yI6ZqqiUBuyWJcjomajAu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  // const AddResourceForm = () => {
  return (
    <Container>
      <div className="contact-form-container">
        <form>
          <form onSubmit={sendEmail}>
            <Row>
              <div className="ar-textarea">
                <h1>Add your resource to our Directory.</h1>
                <p>
                  If you are not listed and would like to be added to our
                  database. Please fill out the form below. If you have any
                  questions, feel free to send us an email at
                  info@cityresources.com
                </p>
              </div>
              <Col md>
                <div className="row mx-auto">
                  <div className="col-8 arform-group  ">
                    <label className="ar-form-label">Organization</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      required="true"
                      placeholder="Organization"
                      name="organization"
                    />
                  </div>

                  <div className="col-8 arform-group pt-3 ">
                    <label className="ar-form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      required="true"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                  <div className="col-8 arform-group  pt-3  ">
                    <label className="ar-form-label">Address</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      required="true"
                      placeholder="Address"
                      name="address"
                    />
                  </div>
                  <div className="col-8 arform-group   pt-3">
                    <label className="ar-form-label">Address 2</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Apartment, studio, or floor"
                      name="other"
                    />
                  </div>
                  <Row>
                    {" "}
                    <div className="ar-city   pt-3">
                      <label className="ar-form-label">City</label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        required="true"
                        placeholder="City"
                        name="city"
                      />
                    </div>
                    <div className="ar-state    pt-3 ">
                      <label className="ar-form-label">State</label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        required="true"
                        placeholder="State"
                        name="state"
                      />
                    </div>
                    <div className="ar-city   pt-3">
                      <label className="ar-form-label">Zipcode</label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Zip Code"
                        name="zipcode"
                      />
                    </div>{" "}
                  </Row>
                </div>
              </Col>
              <Col md>
                <div>
                  <div className="col-8 arform-group ">
                    <label className="ar-form-label">Contact Person</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      required
                      placeholder="Contact Person"
                      name="name"
                    />
                  </div>
                  <div className="col-8 arform-group pt-3  ">
                    <label className="ar-form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control shadow-none"
                      required="true"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div className="col-8 arform-group pt-5 ">
                    <label className="ar-form-label">Program Overview:</label>

                    <p>
                      What do you offer? What are the requirements, if any? Are
                      referrals required? List specifics.
                    </p>
                    <textarea
                      className="form-control shadow-none"
                      id=""
                      cols="20"
                      required="true"
                      rows="5"
                      name="programOverview"
                    ></textarea>
                  </div>
                  <div className="col-5 pt-3 arform-group ">
                    <input
                      type="submit"
                      className="ar-submitform-btn"
                      value="Submit for review"
                    ></input>
                  </div>
                </div>
              </Col>
              {/* <Col md>
          {" "}
          <div className="col-sm ar">
            <div className="ar-form-section">
              {" "}
              <Form className="ar-form">
                <Form.Row>
                  <Form.Group
                    className="form-input"
                    as={Col}
                    controlId="formGridName"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" />
                  </Form.Group>

                  <Form.Group
                    className="form-input"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Form.Row>

                <Form.Group className="form-input" controlId="gridPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="form-input" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="form-input" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
              </Form>{" "}
            </div>
          </div>
        </Col>

        <Col md>
          <Form className="ar-form">
            <Form.Row>
              <Form.Group
                className="form-input"
                as={Col}
                controlId="formGridCity"
              >
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group
                className="form-input"
                as={Col}
                controlId="formGridState"
              >
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Washington</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                className="form-input"
                as={Col}
                controlId="formGridZip"
              >
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group className="form-input" controlId="text-box">
              <Form.Label>Program Overview</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>

            <Form.Group className="form-input" id="formGridCheckbox">
              <Form.Check type="checkbox" label="I agree to  " />
            </Form.Group>

            <SubmitModal />
          </Form>
        </Col> */}
            </Row>{" "}
          </form>
        </form>
      </div>
    </Container>
  );
}

// export default AddResourceForm;
