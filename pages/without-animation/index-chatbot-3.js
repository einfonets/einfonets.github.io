import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import MainBanner from '../../components/WithoutAnimation/IndexChatbotThree/MainBanner';
import Partner from '../../components/Common/Partner';
import Features from '../../components/WithoutAnimation/IndexChatbotThree/Features';
import ServiceRightImageStyle from '../../components/WithoutAnimation/IndexChatbotThree/ServiceRightImageStyle';
import ServiceLeftImageStyle from '../../components/WithoutAnimation/IndexChatbotThree/ServiceLeftImageStyle';
import OurLovingClientsTwo from '../../components/Common/OurLovingClientsTwo';
import ClientsFeedbackSliderTwo from '../../components/Common/ClientsFeedbackSliderTwo';
import PricingStyleThree from '../../components/Pricing/PricingStyleThree';
import TeamStyleOne from '../../components/WithoutAnimation/Common/TeamStyleOne';
import DownloadApp from '../../components/Common/DownloadApp';
import BlogPostStyleOne from '../../components/Common/BlogPostStyleOne';
import SubscribeStyleTwo from '../../components/Common/SubscribeStyleTwo';
import FreeTrialArea from '../../components/Common/FreeTrialArea';
import Footer from '../../components/Layouts/Footer';

class IndexChatbot3 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <Partner />
                <Features />
                <ServiceRightImageStyle />
                <ServiceLeftImageStyle />
                <OurLovingClientsTwo />
                <ClientsFeedbackSliderTwo />
                <PricingStyleThree />
                <TeamStyleOne />
                <DownloadApp />
                <BlogPostStyleOne />
                <SubscribeStyleTwo />
                <FreeTrialArea />
                <Footer />
            </>
        );
    }
}

export default IndexChatbot3;