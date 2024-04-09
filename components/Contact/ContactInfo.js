import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info">
        <div className="contact-info-content">
          <h3>Contact us by Phone Number or Email Address</h3>

          <h2>
            <a href="tel:+917016547685" className="number">
              +91 7016547685
            </a>
            <span className="or">OR</span>
            <a href="mailto:info@einfonets.com" className="email">
              info@einfonets.com
            </a>
          </h2>

          <ul className="social">
            {/* <li>
              <a href="https://twitter.com/" target="_blank">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="bx bxl-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="bx bxl-facebook"></i>
              </a>
            </li> */}
            <li>
              <a
                href="https://in.linkedin.com/company/einfonets-technologies"
                target="_blank"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/einfonets" target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/+917016547685" target="_blank">
                <i className="bx bxl-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
