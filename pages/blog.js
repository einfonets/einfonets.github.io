import React, { Component } from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import PageTitleArea from "../components/Common/PageTitleArea";
import BlogGrid from "../components/Blog/BlogGrid";
import FreeTrialArea from "../components/Common/FreeTrialArea";
import Footer from "../components/Layouts/Footer";
import SubscribeStyleOne from "../components/Common/SubscribeStyleOne";

class Blog extends Component {
  render() {
    return (
      <>
        <NavbarThree />

        <PageTitleArea pageTitle="Blogs" pageDescription="News and Insights" />

        <BlogGrid />

        <SubscribeStyleOne />

        <FreeTrialArea />

        <Footer />
      </>
    );
  }
}

export default Blog;
