import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">How we are Founded</span>
                                <h2>Take your business to the next level</h2>
                                <p>We are a Digital and IT based organization that provides a wide variety of services, from site creation to technology advice. Our staff is made up of seasoned professionals with in-depth knowledge of the subject and significant skill for the business. We make sure that our services are delivered on schedule and that we demonstrate outcomes with our deeds.</p>
                                <p>In order to offer our wide variety of services, including web development, eCommerce solutions, DevOps, technological advice, digital marketing, and product engineering, among others, our team of professionals and experts merged their abilities, expertise, and experience.</p>
                                <p>Technology is very essential to us because we are both an IT and a digital marketing business, so we keep up with both the times and the technology. In order to keep moving forward, we try to stay current with technological and innovative advances. We want to be able to give our consumers the finest.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-img.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;