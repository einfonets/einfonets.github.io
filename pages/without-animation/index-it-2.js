import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import MainBanner from '../../components/WithoutAnimation/HomeItTwo/MainBanner';
import FeaturedService from '../../components/WithoutAnimation/HomeItTwo/FeaturedService';
import ServiceRightImageStyle from '../../components/WithoutAnimation/HomeItTwo/ServiceRightImageStyle';
import ServiceLeftImageStyle from '../../components/WithoutAnimation/HomeItTwo/ServiceLeftImageStyle';
import Features from '../../components/WithoutAnimation/HomeItTwo/Features';
import ClientsFeedbackSliderTwo from '../../components/Common/ClientsFeedbackSliderTwo';
import WhyChooseUs from '../../components/WithoutAnimation/Common/WhyChooseUs';
import PricingStyleTwo from '../../components/Pricing/PricingStyleTwo';
import TeamStyleTwo from '../../components/WithoutAnimation/Common/TeamStyleTwo';
import FaqContentTwo from '../../components/Faq/FaqContentTwo';
import BlogPostStyleTwo from '../../components/Common/BlogPostStyleTwo';
import SubscribeStyleTwo from '../../components/Common/SubscribeStyleTwo';
import OurLovingClients from '../../components/Common/OurLovingClients';
import Footer from '../../components/Layouts/Footer';

class Index2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <FeaturedService />
                <ServiceRightImageStyle />
                <ServiceLeftImageStyle />
                <Features />
                <ClientsFeedbackSliderTwo />
                <WhyChooseUs />
                <PricingStyleTwo />
                <TeamStyleTwo />
                <FaqContentTwo />
                <BlogPostStyleTwo />
                <SubscribeStyleTwo />
                <OurLovingClients />
                <Footer />
            </>
        );
    }
}

export default Index2;