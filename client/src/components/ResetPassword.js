import React, { useState } from "react";
import "../../src/css/ResetPassword.css";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import TopNav2 from "./TopNav2";
import { Button, Form, Row, Container, Col } from "react-bootstrap";

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  function ResetPasswordAlert() {
    window.location.reload();
    document.getElementById("pwAlert").innerHTML = "Instructions sent!";
    document.getElementById("pwAlert").style.backgroundColor = "green";
  }

  function resetPw(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wkyp2uz",
        "template_yrygo4o",
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
    <body>
      {" "}
      <TopNav2 />{" "}
      <div className="rpass-container">
        <div className="reset-text">
          <h1>Reset Password</h1>
          <p>
            Enter the email associated with your account and we'll send you an
            email with instructions to reset your password.
          </p>
        </div>{" "}
        <form onSubmit={resetPw}>
          <div className="row   ">
            <div className=" form-group pt-2 mx-auto rpass-email">
              <input
                type="email"
                className="form-control shadow-none rp-email-input"
                required="true"
                placeholder="Email Address"
                name="email"
                onChange={handleEmailChange}
                value={email}
              />
            </div>

            <div className="reset-submit">
              <button
                type="submit"
                className="reset-submitBtn"
                id="pwAlert"
                name="submit"
                onClick={ResetPasswordAlert}
                disabled={!email}
              >
                Send Instructions
              </button>
            </div>
          </div>
        </form>
        {/* <form>
          <div className="reset-text">
            <h1>Reset Password</h1>
            <p>
              Enter the email associated with your account and we'll send you an
              email with instructions to reset your password
            </p>
          </div>{" "}
          <div className="row   ">
            <div className=" form-group pt-2 mx-auto rpass-email">
              <input
                type="email"
                className="form-control shadow-none rp-email-input"
                required="true"
                placeholder="Email Address"
                name="email"
            
              />
            </div>

            <div className=" reset-submit  ">
              <button
                type="submit"
            
                className="  reset-submitBtn"
                id="submit"
                name="submit"
                onClick={notify}
                
              >
                Send Instructions
              </button>
              <ToastContainer transition={Bounce}/>
            </div>
          </div>
        </form> */}
      </div>{" "}
      <Footer />
    </body>
  );
}

export default ResetPassword;
