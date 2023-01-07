import React, { Component } from 'react';
import Link from 'next/link';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <div className="service-details ptb-100">
                <div className="container">
                    <div className="service-details-image">
                        <img src="/images/services/single-service.jpg" alt="image" />
                    </div>

                    <div className="service-details-content">
                        <h3>How we Provide Useful Services</h3>

                        <p>Understanding the needs of your clients</p>
                        <p>Staying up-to-date with industry trends and technologies</p>
                        <p>Communicate clearly</p>
                        <p>Being responsive and reliable</p>
                        <p>Continuously seeking to improve</p>

                        <h4>Core Development</h4>
                        <p>In order to be successful in core development, it's important to have strong programming skills and a solid understanding of computer science concepts. It's also important to be able to think abstractly and solve complex problems, as well as to have good communication and collaboration skills.</p>

                        <p>Steps taken by Einfonets for Core Development</p>

                        <ul>
                            <li>Designing and implementing algorithms and data structures to solve specific problems</li>
                            <li>Writing and maintaining code for core components of a system</li>
                            <li>Collaborating with other developers to integrate core components with other parts of the system</li>
                            <li>Debugging and troubleshooting issues that arise in core components</li>
                            <li>Participating in code reviews to ensure the quality and maintainability of the codebase</li>
                        </ul>


                        <div className="service-details-info">
                            {/* <div className="single-info-box">
                                <h4>Client</h4>
                                <span>James Anderson</span>
                            </div>

                            <div className="single-info-box">
                                <h4>Category</h4>
                                <span>Saas, Marketing</span>
                            </div>

                            <div className="single-info-box">
                                <h4>Date</h4>
                                <span>February 28, 2020</span>
                            </div> */}

                            {/* <div className="single-info-box">
                                <h4>Share</h4>
                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}

                            {/* <div className="single-info-box">
                                <Link href="/service-details/#">
                                    <a className="default-btn">Live Preview</a>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceDetailsContent;