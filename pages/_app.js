import ThemeModeContextProvider from "@/context/ThemeModeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeModeContextProvider>
      <Component {...pageProps} />
    </ThemeModeContextProvider>
  );
}
