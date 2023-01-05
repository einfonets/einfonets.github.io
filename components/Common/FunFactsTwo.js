import React, { Component } from 'react';

class FunFactsTwo extends Component {
    render() {
        return (
            <div className="funfacts-inner">
                <div className="row">
                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts">
                            <h3>
                                2
                                <span className="sign-icon">+</span>
                            </h3>
                            <p>Years of Success</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts">
                            <h3>
                                20
                                <span className="sign-icon">+</span>
                            </h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts">
                            <h3>
                                10
                                <span className="sign-icon">+</span>
                            </h3>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FunFactsTwo;