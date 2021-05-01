import React from "react";
import "../../src/css/ContactSection.css";
import { Icon } from "semantic-ui-react";
import { Link as Link2 } from "react-router-dom";
import { Nav, Row, Col, Container, Button } from "react-bootstrap";

const ContactSection = () => {
  return (
    <body>
      <div id="ContactSection"></div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h1>CONTACT US</h1>
            <p>
              Any questions or comments? We would love to know your thoughts. If
              our information is no longer correct, or if there are any other
              resources we should add, please let us know!
            </p>
          </div>
          </div>
          <div className="contact-info-2">
            <div className="row">
              <div className="col-sm">
                <div>
                  <Container>
                    <Row>
                      <Col>
                        <div className="email">
                          <p>E-mail</p>
                          <h2>hello@cityresources.com </h2>
                        </div>
                      </Col>
                      <Col>
                      <div className="add-resource">
                        <p>
                          If you would like to add your resource to our page,
                          please complete the form.<br/>
                        
                        <Link2 className="addResource" to="/addresource">
                          {" "}
                          <button type="button" class="addResourceBtn">
                            {" "}
                            Add Your Resource
                          </button>{" "}
                        </Link2></p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
     
        {/*               <div class="col-xs-6">
                <div className="emergencyNumbers">
                  <h1>24HR EMERGENCY HELP LINES</h1>
                  <li>
                    Arab American Community Coalition...................(206)
                    634-9001{" "}
                  </li>
                  <li>
                    Child Protective
                    Services............................................(866)
                    363-4276
                  </li>
                  <li>
                    Crisis Connections 24-Hour Crisis Line..............(866)
                    427-4747{" "}
                  </li>
                  <li>
                    Domestic Violence
                    Hotline........................................(800)
                    799-7233{" "}
                  </li>
                  <li>
                    King Country Sexual Assault Resource Center...(888) 998-6423
                  </li>
                  <li>
                    National Problem Gambling Helpline...................(800)
                    522-4700
                  </li>
                  <li>
                    National Suicide Prevention
                    Hotline......................(800) 273-8255
                  </li>
                  <li>
                    Planned
                    Parenthood.....................................................(206)
                    744-2500{" "}
                  </li>
                  <li>
                    Veterans Affairs Crisis
                    Line.........................................(800) 273-8255
                  </li>
                  <li>
                    Washington Poison Center Information Line......(800)
                    222-1222
                  </li>
                  <li>
                    Washington Recovery
                    Helping.................................(866) 789-1511
                  </li>
                </div>
              </div> */}

        {/*         <div className="ab2-images">
          <div className="ab2-crop">
            <img
              src={require("../Images/steve-knutson-lQ2BzDNmnHE-unsplash.jpg")}
              alt=""
              width={"50%"}
            />
          </div>
          <div className="ab2-crop2">
            <img
              src={require("../Images/nick-bolton-ktC7QQ7hLTw-unsplash.jpg")}
              alt=""
              width={"50%"}
            />
          </div>
        </div> */}
      </div>
    </body>
  );
};

export default ContactSection;
