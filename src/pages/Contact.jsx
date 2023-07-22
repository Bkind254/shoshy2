import React from "react";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_et7cf47",
      "template_8et3cyd",
      form.current,
      "z9oCF2chLiFXCZlgJ"
    );
    e.target.reset();
  };

  return (
    <>
      <section>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <FaInstagram className="contact__option-icon" />
              <h4>Instagram</h4>
              <h5>BKind</h5>
              <a href="#" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
          </div>

          {/*=====END OF CONTACT OPTIONS=====*/}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn2">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
