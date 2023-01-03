import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import MainBanner from '../../components/WithoutAnimation/HomeChatbot/MainBanner';
import Partner from '../../components/Common/Partner';
import ServiceRightImageStyle from '../../components/WithoutAnimation/HomeChatbot/ServiceRightImageStyle';
import ServiceLeftImageStyle from '../../components/WithoutAnimation/HomeChatbot/ServiceLeftImageStyle';
import WhyChooseUsTwo from '../../components/Common/WhyChooseUsTwo';
import Features from '../../components/WithoutAnimation/HomeChatbot/Features';
import ClientsFeedbackSlider from '../../components/Common/ClientsFeedbackSlider';
import PricingStyleOne from '../../components/Pricing/PricingStyleOne';
import FaqContent from '../../components/Faq/FaqContent';
import OurLovingClients from '../../components/Common/OurLovingClients';
import FreeTrialArea from '../../components/WithoutAnimation/HomeChatbot/FreeTrialArea';
import Footer from '../../components/Layouts/Footer';

class IndexChatbot extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <Partner />
                <ServiceRightImageStyle />
                <ServiceLeftImageStyle />
                <WhyChooseUsTwo />
                <Features />
                <ClientsFeedbackSlider />
                <PricingStyleOne />
                <FaqContent />
                <OurLovingClients />
                <FreeTrialArea />
                <Footer />
            </>
        );
    }
}

export default IndexChatbot;