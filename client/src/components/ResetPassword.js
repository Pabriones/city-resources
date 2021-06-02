import React from "react";
import "../../src/css/ResetPassword.css";
import Footer from "./Footer";
import TopNav2 from "./TopNav2";
import { Button, Form, Row, Container, Col } from "react-bootstrap";

function EnableSend() {
  document.getElementById("submit").disabled = false;
}
function sentMessage() {
  document.getElementById("submit").innerHTML = "Message sent.";
}

function ResetPassword() {
  return (
    <body>
      {" "}
      <TopNav2 />{" "}
      <div className="rpass-container">
        <form>
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
                onClick={EnableSend}
              />
            </div>

            <div className=" reset-submit  ">
              <button
                type="submit"
                className="  reset-submitBtn"
                id="submit"
                name="submit"
                onClick={sentMessage}
                disabled="true"
              >
                Send Instructions
              </button>
         
            </div>
          </div>
        </form>
      </div>{" "}
      <Footer />
    </body>
  );
}

export default ResetPassword;
