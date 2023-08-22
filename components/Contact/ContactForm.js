import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import emailjs from "@emailjs/browser";
const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const errorContent = () => {
  MySwal.fire({
    title: "Unable to send message",
    text: "Please try again later",
    icon: "error",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  from_name: "",
  from_email: "",
  from_number: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_0bh8y4s",
          "template_vv9qetu",
          form.current,
          "dBnngQwaJyl442SZu"
        )
        .then(
          (result) => {
            setContact(INITIAL_STATE);
            alertContent();
          },
          (error) => {
            errorContent();
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-form">
      <h3>Write to us.</h3>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="form-control"
                value={contact.from_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="form-control"
                value={contact.from_email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="from_number"
                placeholder="Phone number"
                className="form-control"
                value={contact.from_number}
                onChange={handleChange}
                minLength={10}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form-control"
                value={contact.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Your Message"
                className="form-control"
                value={contact.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 text-center">
            <button type="submit" className="default-btn">
              Send Message <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
