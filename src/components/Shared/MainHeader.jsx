"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuItems } from "@/constants/MenuItems";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommonButton from "../CustomUI/CommonButton";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Sourav_Saha_CV_Frontend_Developer.pdf";
    link.download = "Sourav_Saha_CV_Frontend_Developer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <p className="font-montserrat text-[36px] sm:text-[48px] font-bold text-[--logo-text-M]">
            M<span className="text-[--logo-text]">umair</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-10">
            {MenuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[21px] font-normal leading-[31.5px] hover:text-primary/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div onClick={handleDownloadCV}>
            <CommonButton />
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
                  {MenuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-poppins text-lg font-medium hover:text-primary/80 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-4" onClick={handleDownloadCV}>
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
