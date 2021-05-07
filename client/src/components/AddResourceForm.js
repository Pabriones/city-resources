import React from "react";
import { Form, Row, Container, Col } from "react-bootstrap";
import "../../src/css/AddResource.css";
import SubmitModal from "./SubmitModal";

const AddResourceForm = () => {
  return (
    <Container>
      <Row>
        <Col md>
          <div className="ar-textarea">
            <h1>Add your resource to our Directory.</h1>
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse facilisis metus non finibus vehicula. Nunc vulputate,
              mi vitae pellentesque sodales, tellus purus ultrices nisl, a
              sagittis justo lorem quis sapien. Suspendisse consectetur tempor
              varius. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nunc accumsan tellus ac ipsum
              porttitor, vulputate auctor neque pharetra.
            </p>
          </div>
        </Col>
        <Col md>
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
        </Col>
      </Row>
    </Container>
  );
};

export default AddResourceForm;
