import React, { Component } from 'react';

class PortfolioContent extends Component {
    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">Digital solutions that empowered global business</span>
                                <h2>Take your business to the next level</h2>
                                <p>While we are proud of the quality delivered in every single project onboarded, here are some examples of our work that deserves a spot up front. Our knowledge and expertise in delivering web, mobile, and connected platform solutions have solved the problems of some of the best brands across the globe.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/portfolio.gif" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioContent;