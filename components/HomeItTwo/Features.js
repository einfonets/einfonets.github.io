import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Features extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Amazing Features</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bx-conversation'></i>
                                    </div>
                                    <h3>IT Consultancy</h3>
                                    <p>Working together across our ecosystem of technology partners, our accredited developers have immense knowledge in dealing with the newest web technologies to deliver bespoke industry solutions.</p>

                                    <div className="back-icon">
                                        <i className='bx bx-conversation'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bxs-badge-check'></i>
                                    </div>
                                    <h3>IT Solutions</h3>
                                    <p>Combining the best tools for reliable day-to-day network management with a friendly team of help desk, field engineers, and technical project specialists, our managed IT services are world in class.
                                    </p>

                                    <div className="back-icon">
                                        <i className='bx bxs-badge-check'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bxs-dashboard'></i>
                                    </div>
                                    <h3>Simple Dashboard</h3>
                                    <p>Einfonets masters at creating a good dashboard design, with a stunning visual design, clear layout and intuitive way of presenting data/contents, which makes a website/app stand out and helps users take quick action or navigate more quickly.</p>

                                    <div className="back-icon">
                                        <i className='bx bxs-dashboard'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bxs-bell-ring'></i>
                                    </div>
                                    <h3>Deadline Reminders</h3>
                                    <p>By adhering to deadlines, Einfonets can help ensure that projects are completed on time and that systems are kept up to date and running smoothly. and to communicate clearly with team members and stakeholders.</p>

                                    <div className="back-icon">
                                        <i className='bx bxs-bell-ring'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={250} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bxs-info-circle'></i>
                                    </div>
                                    <h3>Information Retrieval</h3>
                                    <p>Einfonets Management empowers teams with adaptable practices, an open platform, and streamlined workflows that bring dev and ops together. Teams empowered to deliver value fast a unified view of work</p>

                                    <div className="back-icon">
                                        <i className='bx bxs-info-circle'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                                <div className="features-box">
                                    <div className="icon">
                                        <i className='bx bx-cog'></i>
                                    </div>
                                    <h3>Flexible Functionality</h3>
                                    <p>Our development methodologies, modular design principles, building in configurability, and using open standards provides with the ability to adapt and change in response to changing needs or circumstances.</p>

                                    <div className="back-icon">
                                        <i className='bx bx-cog'></i>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;