"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  // Add mounting state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set initial theme preference if not exists
    if (!localStorage.getItem("theme-preference")) {
      localStorage.setItem("theme-preference", "light");
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="contents">{children}</div>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      value={{ light: "light", dark: "dark" }}
      storageKey="theme-preference"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
