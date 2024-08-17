import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Features extends Component {
  render() {
    return (
      <section className="features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Amazing Features</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={50}
                animateOnce={true}
              >
                <div className="features-box">
                  <div className="icon">
                    <i className="bx bx-conversation"></i>
                  </div>
                  <h3>Transparent Communication</h3>
                  <p>
                    We prioritize open and honest communication, ensuring that
                    our clients are always informed and involved throughout the
                    project lifecycle.
                  </p>

                  <div className="back-icon">
                    <i className="bx bx-conversation"></i>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-4 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={100}
                animateOnce={true}
              >
                <div className="features-box">
                  <div className="icon">
                    <i className="bx bxs-badge-check"></i>
                  </div>
                  <h3>End-to-End Solutions</h3>
                  <p>
                    From initial consultation to final deployment, we offer
                    comprehensive IT solutions tailored to meet your business
                    needs and objectives.
                  </p>

                  <div className="back-icon">
                    <i className="bx bxs-badge-check"></i>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-4 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={150}
                animateOnce={true}
              >
                <div className="features-box">
                  <div className="icon">
                    <i className="bx bxs-dashboard"></i>
                  </div>
                  <h3>Agile Development</h3>
                  <p>
                    Our agile development approach ensures rapid and flexible
                    response to change, delivering high-quality software that
                    meets your evolving needs.
                  </p>

                  <div className="back-icon">
                    <i className="bx bxs-dashboard"></i>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-4 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={200}
                animateOnce={true}
              >
                <div className="features-box">
                  <div className="icon">
                    <i className="bx bxs-bell-ring"></i>
                  </div>
                  <h3>Deadlines follow us</h3>
                  <p>
                    We are committed to meeting deadlines. Our proactive
                    approach ensures that every project milestone is achieved on
                    time, every time.
                  </p>

                  <div className="back-icon">
                    <i className="bx bxs-bell-ring"></i>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-4 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={250}
                animateOnce={true}
              >
                <div className="features-box">
                  <div className="icon">
                    <i className="bx bxs-info-circle"></i>
                  </div>
                  <h3>Out of the box solutions</h3>
                  <p>
                    We provide innovative and creative solutions that go beyond
                    conventional approaches, helping your business stand out and
                    succeed.
                  </p>

                  <div className="back-icon">
                    <i className="bx bxs-info-circle"></i>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-4 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={300}
                animateOnce={true}
              >
                <div className="features-box">
                  <div className="icon">
                    <i className="bx bx-cog"></i>
                  </div>
                  <h3>Support till the end of world</h3>
                  <p>
                    Our commitment to support knows no bounds. We're here for
                    you, providing exceptional service and assistance, ensuring
                    your initiative thrive long-term.
                  </p>

                  <div className="back-icon">
                    <i className="bx bx-cog"></i>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
