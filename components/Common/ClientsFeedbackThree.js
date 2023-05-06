import React, { Component } from "react";
import PersonOutlineIcon from "@material-ui/icons/AccountBox";
class ClientsFeedbackThree extends Component {
  render() {
    return (
      <section className="testimonials-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>
              Whats Our Clients Said About{" "}
              <span style={{ textTransform: "lowercase" }}>einfonets</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="single-testimonials-item">
                <div className="client-info">
                  <PersonOutlineIcon
                    color="secondary"
                    style={{ fontSize: "100px" }}
                  />
                  <h3>Jainil Solanki</h3>
                  <span>G.M at Ren Tech</span>
                </div>

                <div className="testimonials-desc">
                  <p style={{ textAlign: "justify" }}>
                    I would highly recommend einfonets to anyone looking for a
                    reliable and trustworthy partner for their project. Their
                    dedication, professionalism, and expertise make them a
                    standout company in their field, and I look forward to
                    working with them again in the future.
                    <br />
                    <br />
                  </p>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-testimonials-item">
                <div className="client-info">
                  <PersonOutlineIcon
                    color="primary"
                    style={{ fontSize: "100px" }}
                  />
                  <h3>Kapil Manchanda</h3>
                  <span>CEO at INFONET</span>
                </div>

                <div className="testimonials-desc">
                  <p style={{ textAlign: "justify" }}>
                    They demonstrated exceptional expertise, and their ability
                    to provide a custom solution tailored to our needs was
                    impressive. Communication was clear and timely, and the end
                    product exceeded our expectations. I highly recommend
                    einfonets for any project.
                  </p>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-6 col-sm-6">
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author/author8.jpg" alt="image" />
                  <h3>James Andy</h3>
                  <span>CEO at 3S</span>
                </div>

                <div className="testimonials-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 col-sm-6">
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author/author9.jpg" alt="image" />
                  <h3>Jisan James</h3>
                  <span>CEO at IT4u</span>
                </div>

                <div className="testimonials-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default ClientsFeedbackThree;
