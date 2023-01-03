import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import MainBanner from '../components/DigitalMarketing/MainBanner';
import Featured from '../components/DigitalMarketing/Featured';
import AboutArea from '../components/DigitalMarketing/AboutArea';
import CaseStudies from '../components/DigitalMarketing/CaseStudies';
import FeedbackSlider from '../components/DigitalMarketing/FeedbackSlider';
import Partners from '../components/DigitalMarketing/Partners';
import TeamMember from '../components/DigitalMarketing/TeamMember';
import LatestBlog from '../components/DigitalMarketing/LatestBlog';
import CompanyIntroVideo from '../components/DigitalMarketing/CompanyIntroVideo';
import LetsTalk from '../components/DigitalMarketing/LetsTalk';
import FooterTwo from '../components/Layouts/FooterTwo';
import ServicesCard from '../components/DigitalMarketing/ServicesCard';

class IndexDigitalMarketing extends Component {
    render() {
        return (
            <>
                <NavbarThree />
                <MainBanner />
                <Featured />
                <AboutArea />
                <ServicesCard />
                <CaseStudies />
                <FeedbackSlider />
                <Partners />
                <TeamMember />
                <LatestBlog />
                <CompanyIntroVideo />
                <LetsTalk />
                <FooterTwo />
            </>
        );
    }
}

export default IndexDigitalMarketing;