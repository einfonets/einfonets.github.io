import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

import baseUrl from "../../utils/baseUrl";

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

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/storedata`;
      const { name, email, number } = contact;
      const payload = { name, email, number };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
      window.open(
        "https://docs.google.com/forms/d/1E7XevWhOT6ble7nnpXfNQ9FFRrlSoRJI9bs-sqkZYvI/viewform?edit_requested=true",
        "_blank"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control"
                value={contact.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <span>Email address</span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <span>Phone number</span>
              <input
                type="text"
                name="number"
                placeholder="Phone number"
                className="form-control"
                value={contact.number}
                onChange={handleChange}
                minLength={10}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 text-center">
            <button type="submit" className="default-btn register-btn">
              Register now <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
