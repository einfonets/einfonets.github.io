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
  const [openSafmical, setSafmical] = useState(false);
  const [openInfonet, setInfonet] = useState(false);
  const [openSocial, setSocial] = useState(false);
  const [openRTech, setRTech] = useState(false);

  const handleOpenType = () => setGophr(true);
  const handleCloseType = () => setGophr(false);

  const handleOpenSafmical = () => setSafmical(true);
  const handleCloseSafmical = () => setSafmical(false);

  const handleOpenInfonet = () => setInfonet(true);
  const handleCloseInfonet = () => setInfonet(false);

  const handleOpenSocial = () => setSocial(true);
  const handleCloseSocial = () => setSocial(false);

  const handleOpenRTech = () => setRTech(true);
  const handleCloseRtech = () => setRTech(false);

  return (
    <div className="featured-area pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
              <div className="single-featured-box single-featured-box-pointer">
                <img
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/th20rkbpaqzqtvdgcyex"
                  alt="image"
                />
                <h3>
                  Streamlining Delivery Operations: Our Delivery System
                  Development for Gophr
                </h3>

                <a className="read-more-btn" onClick={handleOpenType}>
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

                <a onClick={handleOpenType}>
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
              <div className="single-featured-box single-featured-box-pointer">
                <img
                  src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.30808-6/301146028_446738460836455_6026895188623288077_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_ohc=-ufLNRpO6CUAX-tA2Zh&_nc_ht=scontent.famd5-1.fna&oh=00_AfChdxu1REzrlpFtej56_-csSOhvXq0lO3Ty6GKlQ0pElQ&oe=64B1400D"
                  alt="image"
                />
                <h3>Helping Safmical Build a Robust E-commerce Platform</h3>

                <a className="read-more-btn" onClick={handleOpenSafmical}>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openSafmical} onClose={handleCloseSafmical}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>Project Safmical</span>
                      <IconButton
                        aria-label="close"
                        onClick={handleCloseSafmical}
                      >
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
                        style={{ border: "1px solid orange" }}
                        src="https://scontent.famd5-1.fna.fbcdn.net/v/t39.30808-6/301146028_446738460836455_6026895188623288077_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_ohc=-ufLNRpO6CUAX-tA2Zh&_nc_ht=scontent.famd5-1.fna&oh=00_AfChdxu1REzrlpFtej56_-csSOhvXq0lO3Ty6GKlQ0pElQ&oe=64B1400D"
                        alt="image"
                      />
                      <p style={{ textAlign: "justify", color: "grey" }}>
                        Safmical, a leading retailer, approached einfonets with
                        a vision to take their online retail business to new
                        heights. Our team collaborated closely with Safmical to
                        understand their business requirements and design a
                        customized e-commerce platform to meet their needs.
                        <br />
                        <br />
                        We are proud to have partnered with Safmical to deliver
                        a customized e-commerce solution that revolutionized
                        their online retail business. Our collaboration has
                        helped Safmical achieve its business objectives and
                        position itself as a leader in the online retail space.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <a onClick={handleOpenSafmical}>
                  <a className="link-btn"></a>
                </a>
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
              <div className="single-featured-box single-featured-box-pointer">
                <img src="/images/marketing-agency/infonet.jpg" alt="image" />
                <h3>Empowering Infonet with Top-tier Development Resources</h3>

                <a className="read-more-btn" onClick={handleOpenInfonet}>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openInfonet} onClose={handleCloseInfonet}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>Partner INFONET</span>
                      <IconButton
                        aria-label="close"
                        onClick={handleCloseInfonet}
                      >
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
                        src="/images/marketing-agency/infonet.jpg"
                        alt="image"
                      />
                      <p style={{ textAlign: "justify", color: "grey" }}>
                        einfonets is proud to partner with Infonet, a leading
                        technology solutions provider, to deliver exceptional
                        development services that meet their unique business
                        needs. Our partnership allows Infonet to access
                        highly-skilled developers who can provide customized
                        solutions to meet their project requirements.
                        <br />
                        <br />
                        Our flexible engagement models allow Infonet to access
                        development resources on-demand, ensuring that they have
                        the resources they need to deliver projects on-time and
                        within budget. Whether it's a dedicated team or staff
                        augmentation services, our resources can seamlessly
                        integrate with Infonet's existing teams to deliver
                        exceptional results.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <a onClick={handleOpenInfonet}>
                  <a className="link-btn"></a>
                </a>
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
              <div className="single-featured-box single-featured-box-pointer">
                <img
                  src="https://socialslothmarketing.com/wp-content/uploads/2021/10/cropped-Social-Sloth-Marketing-2-1.png"
                  alt="image"
                />
                <h3>Elevating Online Presence for Social Sloths</h3>

                <a className="read-more-btn" onClick={handleOpenSocial}>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openSocial} onClose={handleCloseSocial}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>
                        Project Social Sloths
                      </span>
                      <IconButton
                        aria-label="close"
                        onClick={handleCloseSocial}
                      >
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
                        src="https://socialslothmarketing.com/wp-content/uploads/2021/10/cropped-Social-Sloth-Marketing-2-1.png"
                        alt="image"
                      />
                      <p style={{ textAlign: "justify", color: "grey" }}>
                        einfonets is proud to have collaborated with Social
                        Sloths in developing their website and elevating their
                        online presence. Our team of expert developers worked
                        closely with Social Sloths to create a website that is
                        visually appealing, user-friendly, and optimized for
                        search engines.
                        <br />
                        <br />
                        Our services for Social Sloths encompassed everything
                        from design to development and testing. We ensured that
                        the website meets the latest industry standards and
                        adheres to best practices in web development.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <a onClick={handleOpenSocial}>
                  <a className="link-btn"></a>
                </a>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={150}
              animateOnce={true}
            >
              <div className="single-featured-box single-featured-box-pointer">
                <img src="/images/marketing-agency/Project.png" alt="image" />
                <h3>Bringing Rentech's idea to reality.</h3>

                <a className="read-more-btn" onClick={handleOpenRTech}>
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openRTech} onClose={handleCloseRtech}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>Partner Ren Tech</span>
                      <IconButton aria-label="close" onClick={handleCloseRtech}>
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
                        style={{ border: "1px solid orange" }}
                        src="/images/marketing-agency/Project.png"
                        alt="image"
                      />
                      <p style={{ textAlign: "justify", color: "grey" }}>
                        At Rentech, we're proud to provide innovative web and
                        mobile development solutions, as well as cutting-edge
                        data visualization expertise to revolutionize the future
                        of energy. Our team has worked closely with Rentech to
                        design and develop dynamic, user-friendly applications
                        that streamline workflows, optimize processes, and drive
                        business growth.
                        <br />
                        <br />
                        Whether they need a fully customized mobile app, a
                        powerful web platform, or advanced data visualization
                        tools, we help them achieve their goals and drive their
                        business forward.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <a onClick={handleOpenRTech}>
                  <a className="link-btn"></a>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
