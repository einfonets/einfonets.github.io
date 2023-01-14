import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Courses extends Component {
    render() {
        return (
            <div id="course-section">
                <section className="features-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Courses to get you started</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                    <div className="course-box">
                                        <h3>React/ Angular JS Native</h3>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                    <div className="course-box">
                                        <h3>Node JS</h3>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                    <div className="course-box">
                                        <h3>React Native</h3>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                    <div className="course-box">
                                        <h3>Python</h3>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <ScrollAnimation animateIn="fadeInUp" delay={250} animateOnce={true}>
                                    <div className="course-box">
                                        <h3>Html/ CSS/ Javascript</h3>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                                    <div className="course-box">
                                        <h3>Graphic Design</h3>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                                    <div className="course-box">
                                        <h3>UI/ UX Design</h3>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                                    <div className="course-box">
                                        <h3>Motion Graphic Designer</h3>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section></div>
        );
    }
}

export default Courses;