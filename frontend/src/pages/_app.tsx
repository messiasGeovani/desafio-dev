import { Provider } from "react-redux";
import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import { store } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
