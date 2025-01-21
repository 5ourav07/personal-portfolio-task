"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommonButton from "../CustomUI/CommonButton";
import Menubar from "../CustomUI/Menubar";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Sourav_Saha_CV_Frontend_Developer.pdf";
    link.download = "Sourav_Saha_CV_Frontend_Developer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full max-w-[1440px] mt-8 sm:mt-[61px] mb-[60px] px-4 md:px-6 lg:px-8 mx-auto">
      <nav className="flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-5">
          <Image
            src="/assets/images/logo.svg"
            alt="main-logo"
            width={67}
            height={67}
            priority
          />
          <p className="font-montserrat text-[36px] sm:text-[48px] font-bold text-logoTextM">
            M<span className="text-logoText font-normal">umair</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-10">
            <Menubar />
          </div>
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Download CV Button */}
            <div onClick={handleDownloadCV}>
              <CommonButton />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2" aria-label="Open menu">
                <Menu className="h-8 w-8" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu and actions
              </SheetDescription>

              <div className="flex flex-col h-full">
                {/* Mobile Menu Items */}
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  <Menubar onClick={() => setIsOpen(false)} />

                  {/* Theme Toggle Button for Mobile */}
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-accent transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </button>

                  {/* Download CV Button */}
                  <div onClick={handleDownloadCV}>
                    <CommonButton />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
