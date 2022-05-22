import type { AppProps } from "next/app";

import "../styles/globalStyles.ts";
import Header from "../components/Header";
import GlobalStyle from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
