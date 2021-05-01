import { store } from "@/src/redux/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import "../styles/globals.css";
import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  palette: {
    main: "#015150",
    second: "#FC9709",
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

const makeStore = () => store;
export default withRedux(makeStore)(App);
