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
          <script
            dangerouslySetInnerHTML={{
              __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WCF3SDZ8');
      `,
            }}
          />
          <title>
            Software Professional | Einfonets | Software Company | Leading IT
            Solutions Provider
          </title>
          {/* <title>Product Engineering Services | Digital Transformation Cloud Solutions</title> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* <meta
            name="description"
            content="A top software development company in Canada & India delivering web and mobile app solutions to global startups, businesses & enterprises."
          /> */}

          {/* <meta
            name="description"
            content="Secure IT Solutions for a more secure environment. We are a Digital and IT based organization that provides a wide variety of services, from site creation to technology advice. "
          /> */}

          <meta
            name="description"
            content="Einfonets Works Creatively to Provide Software Solutions. Our Software Developers Are Here to Help You with the Right Software Solutions."
          />

          <meta
            name="twitter:card"
            content="Software Professional | Einfonets | Software Company | Leading IT Solutions Provider"
          ></meta>

          <meta
            name="og:title"
            property="og:title"
            content="Software Professional | Einfonets | Software Company | Leading IT Solutions Provider"
          ></meta>
          <meta
            property="og:description"
            content="Einfonets Works Creatively to Provide Software Solutions. Our Software Developers Are Here to Help You with the Right Software Solutions."
          />
          <meta
            property="og:image"
            content="https://www.einfonets.com/images/services/service1.png"
          />
          <meta property="og:url" content="https://www.einfonets.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://www.einfonets.com"></link>
        </Head>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCF3SDZ8"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
          }}
        />

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </>
    );
  }
}
