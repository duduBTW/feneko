import ArtistImageChanger from "@/shared/ImageChanger/artist";
import NavBar from "@/shared/Nav";
import { setLoc } from "@/src/redux/actions/globalActions";
import { store } from "@/src/redux/store";
import { CircularProgress } from "@material-ui/core";
import withRedux from "next-redux-wrapper";
import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Provider, useDispatch } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import "../styles/globals.css";

const theme: DefaultTheme = {
  palette: {
    main: "#3b296e",
    second: "#f66b41",
    secondLigth: "#FFCBBB",
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
  const loading = useLoadingApp();

  React.useEffect(() => {
    const value = (window && loc) || 0;

    dispatch(setLoc(value));
  }, [loc]);

  if (loading)
    return (
      <div
        style={{
          height: "90vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );

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

function useLoadingApp() {
  const [loading, setLoading] = React.useState(false);

  const history = useRouter();
  const handleStart = (url: any) => url !== history.asPath && setLoading(true);
  const handleComplete = (url: any) => {
    setLoading(false);
  };

  React.useEffect(() => {
    history.events.on("routeChangeStart", handleStart);
    history.events.on("routeChangeComplete", handleComplete);
    history.events.on("routeChangeError", handleComplete);

    return () => {
      history.events.off("routeChangeStart", handleStart);
      history.events.off("routeChangeComplete", handleComplete);
      history.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return loading;
}

const makeStore = () => store;
export default withRedux(makeStore)(App);
