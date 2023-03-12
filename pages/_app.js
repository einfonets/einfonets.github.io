import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "../styles/style.css";
import "../styles/responsive.css";

import React from "react";
import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>einfonets | Leading IT Solutions Provider</title>
          {/* <title>Product Engineering Services | Digital Transformation Cloud Solutions</title> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* <meta
            name="description"
            content="A top software development company in Canada & India delivering web and mobile app solutions to global startups, businesses & enterprises."
          /> */}

          <meta
            name="description"
            content="Secure IT Solutions for a more secure environment. We are a Digital and IT based organization that provides a wide variety of services, from site creation to technology advice. "
          />
          <meta
            name="og:title"
            property="og:title"
            content="einfonets | Leading IT Solutions Provider"
          ></meta>
          <meta
            name="twitter:card"
            content="einfonets | Leading IT Solutions Provider"
          ></meta>
          <link rel="canonical" href="http://www.einfonets.com/"></link>
        </Head>

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </>
    );
  }
}
