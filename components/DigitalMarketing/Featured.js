import React, { Component, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close } from "@material-ui/icons";
export default function Featured() {
  const [openGophr, setGophr] = useState(false);

  const handleOpenType = () => setGophr(true);
  const handleCloseType = () => setGophr(false);

  return (
    <div className="featured-area pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
              <div className="single-featured-box">
                <img
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/th20rkbpaqzqtvdgcyex"
                  alt="image"
                />
                <h3>
                  Streamlining Delivery Operations: Our Delivery System
                  Development for Gophr
                </h3>

                <a className="read-more-btn" onClick={handleOpenType} href="#">
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openGophr} onClose={handleCloseType}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>Project Gophr</span>
                      <IconButton aria-label="close" onClick={handleCloseType}>
                        <Close />
                      </IconButton>
                    </div>
                  </DialogTitle>

                  <DialogContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <img
                        style={{ border: "1px solid orange", padding: "20px" }}
                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/th20rkbpaqzqtvdgcyex"
                        alt="image"
                      />
                      <p style={{ textAlign: "justify", color: "grey" }}>
                        At einfonets, we had the privilege of working with
                        Gophr, a leading delivery and logistics company, to help
                        them develop their delivery system. Our team
                        collaborated closely with Gophr's stakeholders to
                        understand their unique business requirements and design
                        a customized solution that could meet their needs.
                        <br />
                        <br />
                        With our expertise and dedication, we were able to
                        deliver a solution that met Gophr's expectations and
                        helped them establish themselves as a leader in the
                        delivery and logistics industry. We are proud to have
                        been a part of their success story and look forward to
                        continuing our partnership with them in the future.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <a onClick={handleOpenType} href="#">
                  <a className="link-btn"></a>
                </a>
              </div>
            </ScrollAnimation>
          </div>

          {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={100}
                animateOnce={true}
              >
                <div className="single-featured-box">
                  <img
                    src="https://www.mckinsey.com/~/media/images/global/seoimageplaceholder.jpg"
                    alt="image"
                  />
                  <h3>Partnering with McKinsey & Co to Deliver VMX Project</h3>

                  <Link href="/service-details">
                    <a className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </Link>

                  <Link href="/service-details">
                    <a className="link-btn"></a>
                  </Link>
                </div>
              </ScrollAnimation>
            </div> */}

          <div className="col-lg-4 col-md-6 col-sm-6">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={150}
              animateOnce={true}
            >
              <div className="single-featured-box">
                <img
                  src="https://scontent.famd4-1.fna.fbcdn.net/v/t39.30808-6/301146028_446738460836455_6026895188623288077_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=385h1FjW06YAX_M6i0-&_nc_ht=scontent.famd4-1.fna&oh=00_AfDaW9FG7SwUJ5frtu3gJyonpFx-3EmS7ru8NnjO-dJtag&oe=645A3D0D"
                  alt="image"
                />
                <h3>Helping Safmical Build a Robust E-commerce Platform</h3>

                <Link href="/service-details">
                  <a className="read-more-btn">
                    Read More <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </Link>

                <Link href="/service-details">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={150}
                animateOnce={true}
              >
                <div className="single-featured-box">
                  <img
                    src="https://cdn.vox-cdn.com/thumbor/GbHOgen68M0gEZ7MqLB_y5cYB3Y=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19590127/acastro_200109_1777_verizon_0001.0.jpg"
                    alt="image"
                  />
                  <h3>Trusted Web Development Partner for Verizon</h3>

                  <Link href="/service-details">
                    <a className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </Link>

                  <Link href="/service-details">
                    <a className="link-btn"></a>
                  </Link>
                </div>
              </ScrollAnimation>
            </div> */}

          <div className="col-lg-4 col-md-6 col-sm-6">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={150}
              animateOnce={true}
            >
              <div className="single-featured-box">
                <img src="/images/marketing-agency/infonet.jpg" alt="image" />
                <h3>Empowering Infonet with Top-tier Development Resources</h3>

                <Link href="/service-details">
                  <a className="read-more-btn">
                    Read More <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </Link>

                <Link href="/service-details">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={150}
                animateOnce={true}
              >
                <div className="single-featured-box">
                  <img
                    src="https://assets.mofoprod.net/network/images/bluejeans_logo.original.jpg"
                    alt="image"
                  />
                  <h3>
                    Enabling the Future of Remote Collaboration with BlueJeans
                    by Verizon
                  </h3>

                  <Link href="/service-details">
                    <a className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </Link>

                  <Link href="/service-details">
                    <a className="link-btn"></a>
                  </Link>
                </div>
              </ScrollAnimation>
            </div> */}

          <div className="col-lg-4 col-md-6 col-sm-6">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={150}
              animateOnce={true}
            >
              <div className="single-featured-box">
                <img
                  src="https://socialslothmarketing.com/wp-content/uploads/2021/10/cropped-Social-Sloth-Marketing-2-1.png"
                  alt="image"
                />
                <h3>Elevating Online Presence for Social Sloths</h3>

                <Link href="/service-details">
                  <a className="read-more-btn">
                    Read More <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </Link>

                <Link href="/service-details">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={150}
              animateOnce={true}
            >
              <div className="single-featured-box">
                <img src="/images/marketing-agency/Project.png" alt="image" />
                <h3>Bringing Rentech's idea to reality.</h3>

                <Link href="/service-details">
                  <a className="read-more-btn">
                    Read More <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </Link>

                <Link href="/service-details">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
