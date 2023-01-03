import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import MainBanner from '../../components/WithoutAnimation/HomeChatbotTwo/MainBanner';
import Partner from '../../components/Common/Partner';
import ServiceRightImageStyle from '../../components/WithoutAnimation/HomeChatbotTwo/ServiceRightImageStyle';
import ServiceLeftImageStyle from '../../components/WithoutAnimation/HomeChatbotTwo/ServiceLeftImageStyle';
import Features from '../../components/WithoutAnimation/HomeChatbotTwo/Features';
import ClientsFeedbackThree from '../../components/Common/ClientsFeedbackThree';
import OurLovingClientsTwo from '../../components/Common/OurLovingClientsTwo';
import PricingStyleTwo from '../../components/Pricing/PricingStyleTwo';
import TeamStyleTwo from '../../components/WithoutAnimation/Common/TeamStyleTwo';
import FaqContentTwo from '../../components/Faq/FaqContentTwo';
import BlogPostStyleOne from '../../components/Common/BlogPostStyleOne';
import SubscribeStyleTwo from '../../components/Common/SubscribeStyleTwo';
import FreeTrialArea from '../../components/Common/FreeTrialArea';
import Footer from '../../components/Layouts/Footer';
 
class IndexChatbot2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <Partner />
                <ServiceRightImageStyle />
                <ServiceLeftImageStyle />
                <Features />
                <ClientsFeedbackThree />
                <OurLovingClientsTwo />
                <PricingStyleTwo />
                <TeamStyleTwo />
                <FaqContentTwo />
                <BlogPostStyleOne />
                <SubscribeStyleTwo />
                <FreeTrialArea />
                <Footer />
            </>
        );
    }
}

export default IndexChatbot2;