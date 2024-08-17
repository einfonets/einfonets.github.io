import React, { Component } from "react";
import Link from "next/link";
import { Stack } from "@mui/material";

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
                  Your success story begins with us. Contact us today to explore
                  how our comprehensive services can elevate your business to
                  new heights. If you want to avail the advantage of emerging
                  technologies and evolving mobile platforms, einfonets can be
                  your one-stop destination.
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
                    <Link href="/portfolio">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blogs</a>
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
                    Email: <span>info@einfonets.com</span>
                  </li>
                  <li>
                    Phone: <span>+91 7016547685</span>
                  </li>
                </ul>

                <ul className="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/einfonets-technologies"
                      target="_blank"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/einfonets"
                      target="_blank"
                    >
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

              <Stack
                direction={"row"}
                alignItems={"center"}
                flexWrap={"wrap"}
                my={2}
              >
                <iframe
                  width="150"
                  height="150"
                  src="https://shareables.clutch.co/share/badges/2125539/40711?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  title="Top Clutch Genexus Development Ahmedabad 2024"
                ></iframe>
                <div>
                  <a
                    href="https://businessfirms.co/company/einfonets-technologies"
                    target="_blank"
                  >
                    <img
                      height="140"
                      width="140"
                      alt="company widget"
                      src="https://businessfirms.co/images/bfirms-certified.png"
                    />
                  </a>
                </div>
              </Stack>
              <div
                className="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="2"
                data-height="45"
                data-nofollow="true"
                data-expandifr="true"
                data-clutchcompany-id="2125539"
                style={{ marginTop: 8 }}
              ></div>
              <div
                className="goodfirm-widget"
                data-widget-type="goodfirms-widget-t1"
                data-widget-pattern="poweredby-star"
                data-height="60"
                data-company-id="146852"
                style={{ maxWidth: 212 }}
              ></div>
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
