import emailjs from "emailjs-com";
import React from "react";
import "../../src/css/SimpleContactForm.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SimpleContactForm() {
  const notify = () => {
    toast.success("Message sent!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g11nedj",
        "template_bmvagbl",
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

  // function EnableSend() {
  //   document.getElementById("submit").disabled = false;
  // }

  return (
    <div>
      <div className="contact-form-container">
        <form onSubmit={sendEmail}>
          <div className="row   ">
            <div className="  form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control shadow-none"
                required
                placeholder="Name"
                name="name"
                // onClick={EnableSend}
              />
            </div>
            <div className=" form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control shadow-none"
                required
                placeholder="Email Address"
                name="email"
                // onClick={EnableSend}
              />
            </div>
            <div className=" form-group pt-2 mx-auto">
              <textarea
                className="form-control shadow-none"
                id=""
                cols="20"
                required
                rows="4"
                placeholder="Your message"
                name="message"
                // onClick={EnableSend}
              ></textarea>
            </div>
            <div className="  form-group  mx-auto">
              <button
                type="submit"
                className="contact-form-btn"
                id="submit"
                name="submit"
                onClick={notify}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
