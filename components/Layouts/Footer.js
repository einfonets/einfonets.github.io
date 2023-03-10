import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="/">
                    <img src="/images/white-logo.svg" alt="image" />
                  </a>
                </div>
                <p>
                  Secure IT Solutions for a more secure environment. We are a
                  Digital and IT based organization that provides a wide variety
                  of services, from site creation to technology advice. Our
                  staff is made up of seasoned professionals with in-depth
                  knowledge of the subject and significant skill for the
                  business. We make sure that our services are delivered on
                  schedule and that we demonstrate outcomes with our deeds.
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Company</h3>

                <ul className="services-list">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Careers</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Support</h3>

                <ul className="support-list">
                  <li>
                    <Link href="#">
                      <a>FAQ's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Community</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>

                <ul className="footer-contact-info">
                  <li>
                    Location:{" "}
                    <span>
                      1108, Shilp Zaveri, Shyamal Cross Road, Ahmedabad, Gujarat
                      380015
                    </span>
                  </li>
                  <li>
                    Email: <span>einfonets@gmail.com</span>
                  </li>
                  <li>
                    Phone: <span>+91 8320051094</span>
                  </li>
                </ul>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <p>Copyright &copy; {currentYear} Einfonets. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
