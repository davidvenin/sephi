import React from "react";
import type { AppProps } from "next/app";

import Fonts from "@glossy/fonts";
import GlobalStyle from "@glossy/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
