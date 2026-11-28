import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@hooks/useDarkMode";
import { useResize } from "@hooks/useResize";

import { useEffect, useState } from "react";

import { NavbarComponent } from "@components/Navbar/NavbarComponent";
import { NavbarBottom } from "@components/Navbar/NavbarBottom";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const resize = useResize();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button type="button" className="w-5 h-5" aria-label="Loading theme" />
    );
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NavbarComponent />
      <Component {...pageProps} />

      {resize === null ? null : resize < 1024 && <NavbarBottom />}
    </ThemeProvider>
  );
}
