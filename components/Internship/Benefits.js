import Image from 'next/image';
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import WhyEinfonets from '../../out/images/internship/why einfonet.png';

class Benefits extends Component {
    render() {
        return (
            <div id="benefits-section">
                <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                    <Image
                        src={WhyEinfonets}
                        alt="image"
                    />
                </ScrollAnimation>
            </div>
        );
    }
}

export default Benefits;