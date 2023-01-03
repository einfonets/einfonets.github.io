import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import FaqContent from '../components/Faq/FaqContent';
import OurLovingClients from '../components/Common/OurLovingClients';
import FreeTrialAreaTwo from '../components/Common/FreeTrialAreaTwo';
import Footer from '../components/Layouts/Footer';

class Pricing extends Component {
    render() {
        return (
            <>
                <NavbarThree />

                <PageTitleArea 
                    pageTitle="Transparent Pricing" 
                    pageDescription="Border-less account pricing" 
                />

                <PricingStyleOne />

                <FaqContent />

                <OurLovingClients />

                <FreeTrialAreaTwo />
                
                <Footer />
            </>
        );
    }
}

export default Pricing;