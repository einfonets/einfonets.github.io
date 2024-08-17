import React, { Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

class FeaturedService extends Component {
  render() {
    return (
      <div className="features-card-section pt-100 pb-70 bg-f8fbfa">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={50}
                animateOnce={true}
              >
                <div className="single-features-card tx-center">
                  <i className="bx bx-conversation"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Web/App Development</a>
                    </Link>
                  </h3>
                  <p>
                    Utilizing a variety of technologies our skilled team has
                    created countless responsive Web Apps and multi platform
                    Hybrid apps.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={100}
                animateOnce={true}
              >
                <div className="single-features-card tx-center">
                  <i className="bx bx-laptop"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Custom Product Development</a>
                    </Link>
                  </h3>
                  <p>
                    Expertly transforming ideas into scalable, efficient custom
                    software and product solutions tailored to your needs.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={150}
                animateOnce={true}
              >
                <div className="single-features-card tx-center">
                  <i className="bx bxs-badge-check"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>IT Solutions</a>
                    </Link>
                  </h3>
                  <p>
                    We manage your IT, so you can manage your business At
                    Einfonets, we provide our clients with proactive IT support
                    and responsive customer service.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-3 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={200}
                animateOnce={true}
              >
                <div className="single-features-card tx-center">
                  <i className="bx bxs-megaphone"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </h3>
                  <p>
                    Our aim is to reach every man. We enjoy working here since
                    it's a modern organisation with a staff of interested and
                    open-minded individuals.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedService;
