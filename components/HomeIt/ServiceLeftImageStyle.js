import React, { Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

class ServiceLeftImageStyle extends Component {
  render() {
    return (
      <section className="services-area bg-left-color bg-left-shape bg-f4f6fc ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="services-image">
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={50}
                animateOnce={true}
              >
                <div className="image">
                  <img src="/images/services/service2.png" alt="image" />
                </div>
              </ScrollAnimation>
            </div>

            <div className="services-content it-service-content">
              <div className="content">
                <div className="icon">
                  <img src="/images/logo-icon.svg" alt="image" />
                </div>

                <h2>Custom Software and Product Development</h2>
                <p>
                  Einfonets specializes in Custom Software and Product
                  Development, delivering tailored solutions to meet your unique
                  business needs. Our expert team transforms your ideas into
                  innovative, high-quality software products, ensuring
                  efficiency, scalability, and success.
                </p>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Client Centric
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Expert Team
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Cost Effective
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      End-to-End Development
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Quality Assurance
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Lasting Support
                    </div>
                  </div>
                </div>

                <Link href="/service-details">
                  <a className="default-btn">
                    Learn More
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceLeftImageStyle;
