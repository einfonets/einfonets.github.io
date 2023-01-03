import React, { Component } from 'react';
import NavbarThree from '../../components/Layouts/NavbarThree';
import MainBanner from '../../components/WithoutAnimation/DigitalMarketing/MainBanner';
import Featured from '../../components/WithoutAnimation/DigitalMarketing/Featured';
import AboutArea from '../../components/WithoutAnimation/DigitalMarketing/AboutArea';
import CaseStudies from '../../components/WithoutAnimation/DigitalMarketing/CaseStudies';
import FeedbackSlider from '../../components/WithoutAnimation/DigitalMarketing/FeedbackSlider';
import Partners from '../../components/WithoutAnimation/DigitalMarketing/Partners';
import TeamMember from '../../components/WithoutAnimation/DigitalMarketing/TeamMember';
import LatestBlog from '../../components/WithoutAnimation/DigitalMarketing/LatestBlog';
import CompanyIntroVideo from '../../components/WithoutAnimation/DigitalMarketing/CompanyIntroVideo';
import LetsTalk from '../../components/WithoutAnimation/DigitalMarketing/LetsTalk';
import ServicesCard from '../../components/WithoutAnimation/DigitalMarketing/ServicesCard';
import FooterTwo from '../../components/Layouts/FooterTwo';

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