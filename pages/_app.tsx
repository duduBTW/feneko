import { store } from "@/src/redux/store";
import { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import withRedux from "next-redux-wrapper";
import "../styles/globals.css";
import React, { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import NavBar from "@/shared/Nav";
import { setLoc } from "@/src/redux/actions/globalActions";
import { Modal } from "@/shared/Modal";
import ImageChanger from "@/shared/ImageChanger";
import ArtistImageChanger from "@/shared/ImageChanger/artist";

const theme: DefaultTheme = {
  palette: {
    main: "#015150",
    second: "#FC9709",
  },
};

function App({
  Component,
  pageProps,
}: AppProps<{
  loc: number;
}>) {
  const dispatch = useDispatch();
  const { loc } = Component as any;
  React.useEffect(() => {
    const value = (window && loc) || 0;

    dispatch(setLoc(value));
  }, [loc]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
        <ArtistImageChanger />
      </ThemeProvider>
    </Provider>
  );
}

const makeStore = () => store;
export default withRedux(makeStore)(App);
