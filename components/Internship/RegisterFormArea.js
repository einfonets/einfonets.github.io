import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

const Card = ({ name }) => {
    return (
        <div className='grn-card'>
            <span>{name}</span>
        </div>
    )
}

class RegisterFormArea extends Component {
    render() {
        return (
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="contact-features-list">
                                    <h1>Join our online internship courses in design and development!</h1>
                                    <div className='card-wrap'>
                                        <Card name={"Online classroom"} />
                                        <Card name={"Expert Coach"} />
                                        <Card name={"Certification"} />
                                    </div>
                                    <p>Einfonets courses will help you build job-ready skills and get a certification that will help you succeed in your profession from prominent industry mentors.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                {/* Contact Form */}
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RegisterFormArea;