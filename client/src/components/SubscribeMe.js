import React, {useState} from "react";
import "../../src/css/SubscribeMe.css";
import { Link as Link2 } from "react-router-dom";
import SimpleContactForm from "./SimpleContactForm";
import emailjs from "emailjs-com";

const SubscribeMe = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  function alertUser() {
    document.getElementById("alert").innerHTML = "Yay! You're added!";
    document.getElementById("alert").style.backgroundColor = "green";
  }
  
  function subscribe(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wkyp2uz",
        "template_5xd7yrd",
        e.target,
        "user_HarQvCQDVRSyllfUxOCDt"
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

 

  return (
    <div class="row sub-content">
      <h1>Join our mailing list!</h1>
      <p>
        Sign up to receive email updates on events nearby, new resources and
        more.
      </p>
      <form onSubmit={subscribe}>
        <div className="row  subscribe-section ">
          <div className=" form-group pt-2 mx-auto sub-email">
            <input
              type="email"
              className="form-control shadow-none sub-input"
              required="true"
              placeholder="Email Address"
              name="email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>

          <div className="sub-submit">
            <button
              type="submit"
              className="subBtn"
              id="alert"
              name="submit"
              onClick={alertUser}
              disabled={!email}
            >
              ADD ME TO THE LIST!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubscribeMe;
