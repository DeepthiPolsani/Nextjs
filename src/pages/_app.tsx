import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Authguard from "../components/auth-guard/AuthGuard";
import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Authguard>
        <Component {...pageProps} />
      </Authguard>
    </Provider>
  );
}

export default MyApp;
