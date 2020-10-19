import React from "react";
import type { AppProps } from "next/app";

import Fonts from "@glossy/fonts";
import GlobalStyle from "@glossy/default";
import Layout from "../layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Fonts />
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
