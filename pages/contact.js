import React, { Component } from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import PageTitleArea from "../components/Common/PageTitleArea";
import ContactFormArea from "../components/Contact/ContactFormArea";
import OurLovingClients from "../components/Common/OurLovingClients";
import Footer from "../components/Layouts/Footer";

class Contact extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea
          pageTitle="Contact Us"
          pageDescription="Drop us Message for any Query"
        />

        <ContactFormArea />

        <OurLovingClients />

        <Footer />
      </>
    );
  }
}

export default Contact;
