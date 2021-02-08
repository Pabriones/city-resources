import React, { useState } from "react";
import Axios from "axios";
import Modal from "react-modal";
import { Grid } from "semantic-ui-react";
import "../css/ContactPage.css";

const ContactPage = () => {
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successModalMsg, setSuccessModalMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/contact", {
      firstname: contactFirstName,
      lastname: contactLastName,
      email: contactEmail,
      message: contactMessage,
    }).then((res) => {
      if (res.data.status === "1") {
        setSuccessModalMsg(res.data.message);
        setIsSuccessModalOpen(true);
      }
    });

    setContactFirstName("");
    setContactLastName("");
    setContactEmail("");
    setContactMessage("");
  };

  return (
    <div className="container">
      <Grid divided="vertically">
        <Grid.Row columns={1}>
          <div className="ContactIntro">
            <h1>We are here for you!</h1>
          </div>
         
          <div className="ContactIntro">
            <p>Any questions or comments? <br></br>
            We would love to know your thoughts. If our<br></br>
            is no longer correct, or if there <br></br>
            are any other resources we should add,<br></br>
            please let us know!
            </p>
          </div>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <div className="SubmitForm">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div align="left" width="50%">
                  <div className="label">First Name: </div>
                  <input
                    size="40"
                    type="text"
                    id="fname"
                    value={contactFirstName}
                    onChange={(e) => setContactFirstName(e.target.value)}
                  />
                  <br />
                  <div className="label">Last Name: </div>
                  <input
                    size="40"
                    type="text"
                    id="lname"
                    value={contactLastName}
                    onChange={(e) => setContactLastName(e.target.value)}
                  />
                  <br />
                  <div className="label">Email Address: </div>

                  <input
                    size="40"
                    type="text"
                    id="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                  <br />
                  <br />
                  <div className="TextForm">Questions/Comments: </div>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                    ></textarea>
                    <input type="submit" value="Send" />
                  
                </div>
              </form>
            </div>
            <Modal
              isOpen={isSuccessModalOpen}
              onRequestClose={() => setIsSuccessModalOpen(false)}
            >
              <div>
                <button onClick={() => setIsSuccessModalOpen(false)}>
                  Close
                </button>
              </div>
              <p>{successModalMsg}</p>
            </Modal>
          </Grid.Column>
          
       
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ContactPage;
