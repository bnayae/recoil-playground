import { AppInitialProps } from "next/app";
import React from "react";
import GlobalStyle from "../components/GlobalStyle";

const MyApp = ({ Component, pageProps }: AppInitialProps & any) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
