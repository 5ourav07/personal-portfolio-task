"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MainFooter from "../Shared/MainFooter";
import MainHeader from "../Shared/MainHeader";
import Loader from "../Utils/Loader";

export default function LayoutProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Ensure theme is set to light on initial load if no preference exists
    const storedTheme = localStorage.getItem("theme-preference");
    if (!storedTheme) {
      setTheme("light");
    }
    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return (
      <div className="w-full max-w-[1920px] mx-auto overflow-hidden">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto overflow-hidden">
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
}
