import React, { Component } from "react";
import Link from "next/link";

class OurLovingClients extends Component {
  render() {
    return (
      <section className="our-loving-clients ptb-100 bg-f4f5fe">
        <div className="container">
          <div className="section-title" style={{ maxWidth: "610px" }}>
            <h2>Our Loving Clients and Partners</h2>
          </div>

          <div className="clients-logo-list align-items-center">
            <div className="single-clients-logo">
              <Link href="/portfolio">
                <a href="#">
                  <img
                    style={{ height: "50px" }}
                    src="https://uk.gophr.com/wp-content/uploads/2019/10/Gophr_Logo_Landscape_1.png"
                    alt="image"
                  />
                </a>
              </Link>
            </div>

            <div className="single-clients-logo">
              <Link href="/portfolio">
                <a href="#">
                  <img
                    style={{ height: "50px" }}
                    src="https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/5e483324a87501581789988.jpg"
                    alt="image"
                  />
                </a>
              </Link>
            </div>

            <div className="single-clients-logo">
              <Link href="/portfolio">
                <a href="#">
                  <img
                    style={{ height: "50px" }}
                    src="https://images.squarespace-cdn.com/content/v1/63f75049a7445f5596bac55b/e64a2405-643a-45f5-a290-1c9afb9b16ba/infonet_logo.png?format=1500w"
                    alt="image"
                  />
                </a>
              </Link>
            </div>

            <div className="single-clients-logo">
              <Link href="/portfolio">
                <a href="#">
                  <img
                    style={{ height: "50px" }}
                    src="https://media.licdn.com/dms/image/C560BAQGWP_gt6S7ijA/company-logo_200_200/0/1590951258845?e=2147483647&v=beta&t=cFaaCWxrOA3YBIcIVMW8HO01FpVPU3S5rG2KskdBMSE"
                    alt="image"
                  />
                </a>
              </Link>
            </div>

            <div className="single-clients-logo">
              <Link href="/portfolio">
                <a href="#">
                  <img
                    src="/images/marketing-agency/Projectc.png"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurLovingClients;
