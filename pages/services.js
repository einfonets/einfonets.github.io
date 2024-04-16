import React, { Component } from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import PageTitleArea from "../components/Common/PageTitleArea";
import ServicesStyleTwo from "../components/Services/ServicesStyleTwo";
import ClientsFeedbackSliderTwo from "../components/Common/ClientsFeedbackSliderTwo";
import WhyChooseUs from "../components/Common/WhyChooseUs";
import SubscribeStyleOne from "../components/Common/SubscribeStyleOne";
import OurLovingClients from "../components/Common/OurLovingClients";
import Footer from "../components/Layouts/Footer";

class Services2 extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="Services We Offer" pageDescription="" />

        <ServicesStyleTwo />

        {/* <ClientsFeedbackSliderTwo /> */}

        <WhyChooseUs />

        <SubscribeStyleOne />

        <OurLovingClients />

        <Footer />
      </>
    );
  }
}

export default Services2;
