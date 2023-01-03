import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import MainBanner from '../../components/WithoutAnimation/HomeIt/MainBanner';
import FeaturedService from '../../components/WithoutAnimation/HomeIt/FeaturedService';
import ServiceRightImageStyle from '../../components/WithoutAnimation/HomeIt/ServiceRightImageStyle';
import ServiceLeftImageStyle from '../../components/WithoutAnimation/HomeIt/ServiceLeftImageStyle';
import WhyChooseUs from '../../components/WithoutAnimation/Common/WhyChooseUs';
import FeaturesContent from '../../components/WithoutAnimation/HomeIt/FeaturesContent';
import ClientsFeedbackSlider from '../../components/Common/ClientsFeedbackSlider';
import PricingStyleOne from '../../components/Pricing/PricingStyleOne';
import TeamStyleOne from '../../components/WithoutAnimation/Common/TeamStyleOne';
import OurLovingClients from '../../components/Common/OurLovingClients';
import FaqContent from '../../components/Faq/FaqContent';
import SubscribeStyleOne from '../../components/Common/SubscribeStyleOne';
import BlogPostStyleOne from '../../components/Common/BlogPostStyleOne';
import Footer from '../../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <FeaturedService />
                <ServiceRightImageStyle />
                <ServiceLeftImageStyle />
                <WhyChooseUs />
                <FeaturesContent />
                <ClientsFeedbackSlider />
                <PricingStyleOne />
                <TeamStyleOne />
                <OurLovingClients />
                <FaqContent />
                <SubscribeStyleOne />
                <BlogPostStyleOne />
                <Footer />
            </>
        );
    }
}

export default Index;