import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

class ClientsFeedbackSliderTwo extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <section
        className="testimonials-area pt-100 pb-70"
        id="testimonials-section"
      >
        <div className="container">
          <div className="section-title">
            <h2>Whats Our Graduates Are Saying</h2>
          </div>

          {this.state.display ? (
            <OwlCarousel
              className="testimonials-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="single-testimonials-item">
                <div className="client-info">
                  <div className="avatar-skeleton" />
                  <h3>Praveenkumar Thakur</h3>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>

                <div className="testimonials-desc">
                  <p>
                    I have taken a Development course on Einfonets and it was
                    absolutely amazing! The materials they provide are
                    comprehensive, Janmey sir is very knowledgeable and helpful,
                    and the course structure is well-thought out. What has been
                    the most beneficial to me is that the course offered me
                    internship certificate after successful completion which
                    helped me get a job. Without Einfonets help, I don't think I
                    would be where I am today - I highly recommend!
                  </p>
                </div>
              </div>

              <div className="single-testimonials-item">
                <div className="client-info">
                  <div className="avatar-skeleton" />
                  <h3>Yogita Mahanta</h3>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>

                <div className="testimonials-desc">
                  <p>
                    I must say that it has been an amazing experience. The
                    courses are well-structured, with a lot of content to cover,
                    but not overwhelming. The teachers like Palak mam and Hemant
                    sir are very knowledgeable and always willing to help
                    whenever I have a doubt. It's definitely the best course
                    material available out there!
                  </p>
                </div>
              </div>

              <div className="single-testimonials-item">
                <div className="client-info">
                  <div className="avatar-skeleton" />
                  <h3>Praveenkumar Thakur</h3>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>

                <div className="testimonials-desc">
                  <p>
                    I recently completed a course from Einfonets and I am
                    thoroughly impressed by the way they deliver their content.
                    From their detailed lectures, to interactive exercises and
                    challenges - everything is designed in such a way that you
                    can get an in-depth understanding of how the market works.
                    The icing on the cake was that I could also build my
                    professional portfolio using their platform.
                  </p>
                </div>
              </div>

              <div className="single-testimonials-item">
                <div className="client-info">
                  <div className="avatar-skeleton" />
                  <h3>Amol Salangiri</h3>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>

                <div className="testimonials-desc">
                  <p>I would highly recommend the course.</p>
                </div>
              </div>

              <div className="single-testimonials-item">
                <div className="client-info">
                  <div className="avatar-skeleton" />
                  <h3>Amol Salangiri</h3>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                </div>

                <div className="testimonials-desc">
                  <p>
                    I gained so much confidence after completing the course, as
                    all my doubts and problems were solved. I'm extremely
                    satisfied with this course and would highly recommend it to
                    anyone looking for an online learning platform.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

export default ClientsFeedbackSliderTwo;
