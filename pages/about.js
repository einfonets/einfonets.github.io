import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import AboutContent from '../components/About/AboutContent';
import Partner from '../components/Common/Partner';
import WhyChooseUsTwo from '../components/Common/WhyChooseUsTwo';
import TeamMember from '../components/About/TeamMember';
import DownloadApp from '../components/Common/DownloadApp';
import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider';
import FreeTrialArea from '../components/Common/FreeTrialArea';
import Footer from '../components/Layouts/Footer';

class About extends Component {
    render() {
        return (
            <>
                <NavbarThree />
                <PageTitleArea 
                    pageTitle="About Us" 
                    pageDescription="The Hepro Story" 
                />
                <AboutContent />
                <Partner />
                <WhyChooseUsTwo />
                <TeamMember />
                <DownloadApp />
                <ClientsFeedbackSlider />
                <FreeTrialArea />
                <Footer />
            </>
        );
    }
}

export default About;