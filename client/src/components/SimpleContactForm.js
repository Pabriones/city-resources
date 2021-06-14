import emailjs from "emailjs-com";
import React, {useState} from "react";
import "../../src/css/SimpleContactForm.css";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function SimpleContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  function sendMsg() {
    document.getElementById("msgAlert").innerHTML = "Message Sent!";
    document.getElementById("msgAlert").style.backgroundColor="green"
  }

  function sendEmail(e) {
    e.preventDefault();

		emailjs.sendForm('service_g11nedj', 'template_bmvagbl', e.target, 'user_yI6ZqqiUBuyWJcjomajAu').then(
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
	// 	document.getElementById('submit').disabled = false;
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
                onChange={handleNameChange}
                value={name}
              />
            </div>
            <div className=" form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control shadow-none"
                required
                placeholder="Email Address"
                name="email"
                onChange={handleEmailChange}
                value={email}
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
                onChange={handleMessageChange}
                value={message}
              ></textarea>
            </div>
            <div className="  form-group  mx-auto">
              <button
                type="submit"
                className="contact-form-btn"
                id="msgAlert"
                name="submit"
                onClick={sendMsg}
                disabled={!email || !name || !message}
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
