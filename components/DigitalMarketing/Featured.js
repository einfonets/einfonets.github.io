import React, { Component, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
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
  const initialDialogstates = {
    openGophr: false,
    openSafmical: false,
    openInfonet: false,
    openSocial: false,
    openRTech: false,
    openClonetto: false,
    openOurco: false,
    openOcr: false,
  };
  const [handleDialogStates, setDialogStates] = useState(initialDialogstates);

  const {
    openGophr,
    openSafmical,
    openInfonet,
    openSocial,
    openRTech,
    openClonetto,
    openOurco,
    openOcr,
  } = handleDialogStates;
  const handleCloseDialogs = () => {
    setDialogStates(initialDialogstates);
  };

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

                <a
                  className="read-more-btn"
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openGophr: true,
                    })
                  }
                >
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openGophr} onClose={handleCloseDialogs}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>Project Gophr</span>
                      <IconButton
                        aria-label="close"
                        onClick={handleCloseDialogs}
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

                <a
                  onClick={() =>
                    setDialogStates({ ...handleDialogStates, openGophr: true })
                  }
                >
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
                <img
                  width={416}
                  src="data:image/jpeg;base64,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"
                  alt="image"
                />
                <h3>Helping Safmical Build a Robust E-commerce Platform</h3>

                <a
                  className="read-more-btn"
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openSafmical: true,
                    })
                  }
                >
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openSafmical} onClose={handleCloseDialogs}>
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
                        onClick={handleCloseDialogs}
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
                        src="data:image/jpeg;base64,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"
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

                <a
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openSafmical: true,
                    })
                  }
                >
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
                <img src="/images/marketing-agency/infonet.jpg" alt="image" />
                <h3>Empowering Infonet with Top-tier Development Resources</h3>

                <a
                  className="read-more-btn"
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openInfonet: true,
                    })
                  }
                >
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openInfonet} onClose={handleCloseDialogs}>
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
                        onClick={handleCloseDialogs}
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

                <a
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openInfonet: true,
                    })
                  }
                >
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
                <img
                  src="https://socialslothmarketing.com/wp-content/uploads/2021/10/cropped-Social-Sloth-Marketing-2-1.png"
                  alt="image"
                />
                <h3>Elevating Online Presence for Social Sloths</h3>

                <a
                  className="read-more-btn"
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openSocial: true,
                    })
                  }
                >
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openSocial} onClose={handleCloseDialogs}>
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
                        onClick={handleCloseDialogs}
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

                <a
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openSocial: true,
                    })
                  }
                >
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

                <a
                  className="read-more-btn"
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openRTech: true,
                    })
                  }
                >
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openRTech} onClose={handleCloseDialogs}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>Partner Ren Tech</span>
                      <IconButton
                        aria-label="close"
                        onClick={handleCloseDialogs}
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

                <a
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openRTech: true,
                    })
                  }
                >
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
                <img
                  src="/images/clients/clonetto.png"
                  alt="image"
                  style={{ background: "black" }}
                />
                <h3>Tailoring Themes, Crafting Clonetto's vision</h3>

                <a
                  className="read-more-btn"
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openClonetto: true,
                    })
                  }
                >
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openClonetto} onClose={handleCloseDialogs}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>Project Clonetto</span>
                      <IconButton
                        aria-label="close"
                        onClick={handleCloseDialogs}
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
                        style={{
                          border: "1px solid orange",
                          background: "black",
                        }}
                        src="/images/clients/clonetto.png"
                        alt="image"
                      />
                      <p style={{ textAlign: "justify", color: "grey" }}>
                        Working closely with Clonetto, we crafted a
                        game-changing theme customization solution. Our team
                        harnessed advanced coding and design skills to empower
                        users to effortlessly create their digital aesthetics.
                        With Clonetto's new product, personalized online
                        presence is now at your fingertips.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <a
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openClonetto: true,
                    })
                  }
                >
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
                <img
                  src="data:image/png;base64,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"
                  alt="image"
                  width={416}
                  style={{
                    height: "416px",
                    objectFit: "contain",
                  }}
                />
                <h3>
                  Helping Ourco building platform that connects communities.
                </h3>

                <a
                  className="read-more-btn"
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openOurco: true,
                    })
                  }
                >
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openOurco} onClose={handleCloseDialogs}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>Project Ourco</span>
                      <IconButton
                        aria-label="close"
                        onClick={handleCloseDialogs}
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
                        style={{
                          border: "1px solid orange",
                          objectFit: "contain",
                          aspectRatio: "1",
                        }}
                        src="data:image/png;base64,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"
                        alt="image"
                      />
                      <p style={{ textAlign: "justify", color: "grey" }}>
                        Partnering with Ourco, we crafted a tailored app that
                        reflects their essence. Our team's expertise led to an
                        intuitive, high-performance app, streamlining user
                        engagement and embodying Ourco's values seamlessly. With
                        this collaboration, we've turned ideas into a dynamic
                        digital reality.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <a
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openOurco: true,
                    })
                  }
                >
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
                <img
                  src="https://ocr.alkurn.co.in/static/media/logo.50463c0a.png"
                  alt="image"
                  width={416}
                  style={{
                    height: "416px",
                    objectFit: "contain",
                  }}
                />
                <h3>
                  Elevating OCR's Impact: Revolutionizing Online Casino Reviews
                  Together.
                </h3>

                <a
                  className="read-more-btn"
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openOcr: true,
                    })
                  }
                >
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </a>

                <Dialog open={openOcr} onClose={handleCloseDialogs}>
                  <DialogTitle>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "teal" }}>Project Ourco</span>
                      <IconButton
                        aria-label="close"
                        onClick={handleCloseDialogs}
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
                        style={{
                          border: "1px solid orange",
                          objectFit: "contain",
                          aspectRatio: "1",
                        }}
                        src="https://ocr.alkurn.co.in/static/media/logo.50463c0a.png"
                        alt="image"
                      />
                      <p style={{ textAlign: "justify", color: "grey" }}>
                        Teaming up with OCR, we crafted a sleek online casino
                        review website. Our expertise brought to life a
                        user-friendly platform, offering insights into various
                        casinos. OCR is now a trusted guide, enriching players
                        with accurate reviews and ratings for informed online
                        gambling.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <a
                  onClick={() =>
                    setDialogStates({
                      ...handleDialogStates,
                      openOcr: true,
                    })
                  }
                >
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
