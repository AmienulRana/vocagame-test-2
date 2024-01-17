import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Provider } from "react-redux";
import store from "@/lib/store";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/commons/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Component {...pageProps} />
        <Toaster />
        <ThemeSwitch />
      </ThemeContextProvider>
    </Provider>
  );
}
