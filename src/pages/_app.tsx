import React from "react";
import GlobalStyle from "@glossy/default";
import type { AppProps } from "next/app";
import Fonts from "@glossy/fonts";

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
