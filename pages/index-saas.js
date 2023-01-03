import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/HomeSaas/MainBanner';
import Features from '../components/HomeSaas/Features';
import FeaturedFeature from '../components/HomeSaas/FeaturedFeature';
import MoreToDiscover from '../components/HomeSaas/MoreToDiscover';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import BuildYourApplication from '../components/HomeSaas/BuildYourApplication';
import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider';
import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import FaqContent from '../components/Faq/FaqContent';
import OurLovingClients from '../components/Common/OurLovingClients';
import FreeTrialArea from '../components/HomeSaas/FreeTrialArea';
import Footer from '../components/Layouts/Footer';

class IndexSaas extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                <MainBanner />
                <Features />
                <FeaturedFeature />
                <MoreToDiscover />
                <WhyChooseUs />
                <BuildYourApplication />
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

export default IndexSaas;