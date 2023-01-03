import React, { Component } from 'react';
import Link from 'next/link';

class Signup extends Component {
    render() {
        return (
            <section className="signup-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-image">
                            <img src="/images/signup-bg.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-content">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="signup-form">
                                        <div className="logo">
                                            <a href="/">
                                                <img src="/images/logo.svg" alt="image" />
                                            </a>
                                        </div>

                                        <h3>Open up your Strax Account now</h3>
                                        <p>Already signed up? <Link href="/login"><a>Log in</a></Link></p>

                                        <form>
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" placeholder="Your email address" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <input type="password" name="password" id="password" placeholder="Create a password" className="form-control" />
                                            </div>

                                            <button type="submit" className="default-btn">
                                                <i className="bx bx-log-in"></i>
                                                Sign Up
                                                <span></span>
                                            </button>

                                            {/* Connect with social links */}
                                            <div className="connect-with-social">
                                                <span>Or</span>

                                                <a href="https://www.facebook.com/" target="_blank" className="facebook">
                                                    <i className='bx bxl-facebook'></i>
                                                    Connect with Facebook
                                                </a>

                                                <a href="https://mail.google.com/" target="_blank" className="google">
                                                    <i className='bx bxl-google'></i>
                                                    Connect with Google
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signup;