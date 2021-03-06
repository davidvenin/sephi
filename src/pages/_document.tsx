import React from "react";

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <link
            rel="preload"
            href="fonts/roboto/roboto-v20-latin-300.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="fonts/roboto/roboto-v20-latin-regular.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="fonts/roboto/roboto-v20-latin-italic.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="fonts/roboto/roboto-v20-latin-500.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="fonts/roboto/roboto-v20-latin-700.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
