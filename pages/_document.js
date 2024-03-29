import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="zxx">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/images/logo-icon.svg"></link>
        </Head>
        <body>
          <script
            type="text/javascript"
            src="https://assets.goodfirms.co/assets/js/widget.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://widget.clutch.co/static/js/widget.js"
            async
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
