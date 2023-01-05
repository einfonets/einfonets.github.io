import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

class ServiceLeftImageStyle extends Component {
    render() {
        return (
            <section className="services-area bg-left-color bg-left-shape bg-f4f6fc ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="services-image">
                            <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                <div className="image">
                                    <img src="/images/services/service2.png" alt="image" />
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="services-content it-service-content">
                            <div className="content">
                                <div className="icon">
                                    <img src="/images/logo-icon.svg" alt="image" />
                                </div>

                                <h2>Cloud Hosting Services</h2>
                                <p>Agility, Efficiency and Productivity Combined with Einfonets Cloud – DevOps Solutions

                                    Harness the power of cloud and make your business more agile and productive with Einfonets cloud – DevOps solutions. With our industry-specific services and solutions, we allow your services to soar high and escalate the success-ladder at faster pace.


                                </p>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i>
                                            Cloud Databases
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i>
                                            Hybrid Cloud
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i>
                                            Email Servers
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i>
                                            Website Hosting
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i>
                                            File Storage
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i>
                                            Backup Systems
                                        </div>
                                    </div>
                                </div>

                                <Link href="/service-details">
                                    <a className="default-btn">
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

export default ServiceLeftImageStyle;