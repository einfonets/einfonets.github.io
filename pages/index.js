import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeIt/MainBanner";
import FeaturedService from "../components/HomeIt/FeaturedService";
import ServiceRightImageStyle from "../components/HomeIt/ServiceRightImageStyle";
import ServiceLeftImageStyle from "../components/HomeIt/ServiceLeftImageStyle";
import WhyChooseUs from "../components/Common/WhyChooseUs";
import FeaturesContent from "../components/HomeItTwo/Features";
import ClientsFeedbackSlider from "../components/Common/ClientsFeedbackSliderTwo";
import PricingStyleOne from "../components/Pricing/PricingStyleOne";
import TeamStyleOne from "../components/Common/TeamStyleOne";
import OurLovingClients from "../components/Common/OurLovingClients";
import FaqContent from "../components/Faq/FaqContent";
import SubscribeStyleOne from "../components/Common/SubscribeStyleOne";
import BlogPostStyleOne from "../components/Common/BlogPostStyleOne";
import Footer from "../components/Layouts/Footer";
import ClientsFeedbackThree from "../components/Common/ClientsFeedbackThree";

class Index extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MainBanner />
        <FeaturedService />
        <ServiceRightImageStyle />
        <ServiceLeftImageStyle />
        <FeaturesContent />
        {/* <ClientsFeedbackSlider /> */}
        <ClientsFeedbackThree />
        <WhyChooseUs />
        {/* <TeamStyleOne /> */}
        <OurLovingClients />
        {/* <FaqContent /> */}
        {/* <SubscribeStyleOne /> */}
        {/* <BlogPostStyleOne /> */}
        <Footer />
      </>
    );
  }
}

export default Index;
