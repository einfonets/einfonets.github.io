import React, { Component } from 'react';
import Link from 'next/link';

class ServiceLefttImageStyle extends Component {
    render() {
        return (
            <section className="services-area bg-left-color bg-f4f6fc ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="services-image">
                            <div className="image">
                                <img src="/images/services/chat2.png" alt="image" />
                            </div>
                        </div>

                        <div className="services-content">
                            <div className="content">
                                <div className="icon">
                                    <img src="/images/logo-icon.svg" alt="image" />
                                </div>

                                <h2>The best Innovative Chatbot and automations are here to expand</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <Link href="/service-details">
                                    <a className="default-btn">
                                        <i className="bx bxs-spreadsheet"></i>
                                        Learn More
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceLefttImageStyle;