import emailjs from "emailjs-com";
import React from 'react';
import "../../src/css/SimpleContactForm.css";

export default function SimpleContactForm() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_g11nedj', 'template_bmvagbl', e.target, 'user_yI6ZqqiUBuyWJcjomajAu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="contact-form-container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-2 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control shadow-none" required="true" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control shadow-none" required="true" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control shadow-none" id="" cols="20" required="true" rows="4" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-5 pt-3  ">
                            <input type="submit" className="contact-form-btn" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}