import React, { Component } from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import PageTitleArea from "../components/Common/PageTitleArea";
import AboutContent from "../components/About/AboutContent";
import Partner from "../components/Common/Partner";
import WhyChooseUsTwo from "../components/Common/WhyChooseUsTwo";
import TeamMember from "../components/About/TeamMember";
import DownloadApp from "../components/Common/DownloadApp";
import ClientsFeedbackSlider from "../components/Common/ClientsFeedbackSlider";
import FreeTrialArea from "../components/Common/FreeTrialArea";
import Footer from "../components/Layouts/Footer";
import OurLovingClients from "../components/Common/OurLovingClients";
import ScrollAnimation from "react-animate-on-scroll";
import ClientsFeedbackThree from "../components/Common/ClientsFeedbackThree";
class About extends Component {
  render() {
    return (
      <>
        <NavbarThree />
        <PageTitleArea
          pageTitle="About Us"
          pageDescription="The Einfonets Story"
        />
        <AboutContent />
        <section className="features-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Our...</h2>
            </div>

            <div className="row">
              {/* <div className="col-lg-4 col-sm-6">
                                <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                    <div className="features-box">
                                        <div className="icon">
                                            <i className='bx bxs-bell-ring'></i>
                                        </div>
                                        <h3>Vision</h3>
                                        <p>To be the top IT firm in the nation and the globe by developing a wide range of goods and services, hiring individuals who are incredibly brilliant and enthusiastic while maintaining a humble and down-to-earth demeanour.</p>
                                        <div className="back-icon">
                                            <i className='bx bxs-bell-ring'></i>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div> */}

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
                    <h3>Vision</h3>
                    <p>
                      To be the top IT firm in the nation and the globe by
                      developing a wide range of goods and services, hiring
                      individuals who are incredibly brilliant and enthusiastic
                      while maintaining a humble and down-to-earth demeanour.
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
                  delay={250}
                  animateOnce={true}
                >
                  <div className="features-box">
                    <div className="icon">
                      <i className="bx bxs-info-circle"></i>
                    </div>
                    <h3>Mission</h3>
                    <p>
                      Work excellence is our basic principle whereby we provide
                      our internal and external customers with innovative
                      products and services that satisfy them. We strive to help
                      our customers achieve scalable eCommerce and software
                      solutions.{" "}
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
                    <h3>Core Values</h3>
                    <p>
                      Being creative, being innovative and being committed to
                      both our passion as well as our clients are the central
                      tenets that we adhere to.Our team promotes
                      counterintuitive learning by iterating over the motto:
                      “Experiment, learn, repeat”.{" "}
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
        {/* <Partner /> */}
        <OurLovingClients />
        <WhyChooseUsTwo />
        <ClientsFeedbackThree />
        {/* <TeamMember /> */}
        {/* <DownloadApp /> */}
        {/* <ClientsFeedbackSlider /> */}
        <FreeTrialArea />
        <Footer />
      </>
    );
  }
}

export default About;
