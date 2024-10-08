import React, { Component } from "react";
import Link from "next/link";
import FunFacts from "./FunFacts";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class WhyChooseUsTwo extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        {/* Popup Modal Video If you want to change the video need to update below videoID */}
        {/* <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='_ysd-zHamjk'
                    onClose={() => this.setState({ isOpen: false })}
                /> */}

        <section className="video-presentation-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>Why choose us...</h2>
            </div>

            <div className="video-box">
              {/* <img src="/images/video-bg.jpg" className="main-image" alt="image" /> */}
              <img src="/images/Steps.gif" alt="image" className="main-image" />

              {/* Shape Images */}
              <div className="shape1">
                <img src="/images/shape/shape1.png" alt="image" />
              </div>
              <div className="shape2">
                <img src="/images/shape/shape2.png" alt="image" />
              </div>
              <div className="shape3">
                <img src="/images/shape/shape3.png" alt="image" />
              </div>
              <div className="shape4">
                <img src="/images/shape/shape4.png" alt="image" />
              </div>
              <div className="shape5">
                <img src="/images/shape/shape5.png" alt="image" />
              </div>
              <div className="shape6">
                <img src="/images/shape/shape6.png" alt="image" />
              </div>
            </div>
            <br />
            <br />
            <br />

            {/* Fun Facts Style Two */}
            <FunFacts />

            {/* <div className="contact-cta-box">
                            <h3>Have any questions about us?</h3>
                            <p>Don't hesitate to contact us.</p>

                            <Link href="/contact">
                                <a className="default-btn">
                                    Contact Us
                                    <span></span>
                                </a>
                            </Link>
                        </div> */}
          </div>

          {/* Shape Images */}
          <div className="shape-map1">
            <img src="/images/map1.png" alt="image" />
          </div>
          <div className="shape7">
            <img src="/images/shape/shape7.png" alt="image" />
          </div>
          <div className="shape8">
            <img src="/images/shape/shape8.png" alt="image" />
          </div>
          <div className="shape9">
            <img src="/images/shape/shape9.png" alt="image" />
          </div>
        </section>
      </>
    );
  }
}

export default WhyChooseUsTwo;
