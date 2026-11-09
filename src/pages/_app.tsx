import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@hooks/useDarkMode";

import { NavbarComponent } from "@components/NavbarComponent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NavbarComponent />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
