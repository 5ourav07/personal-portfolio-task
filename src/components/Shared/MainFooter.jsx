import Image from "next/image";
import Link from "next/link";
import Menubar from "../CustomUI/Menubar";
import SocialIconComponent from "../CustomUI/SocialIconComponent";

export default function MainFooter() {
  return (
    <footer className="w-full">
      <div className="h-[468px] bg-primary-default flex flex-col items-center justify-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 md:gap-5">
          <Image
            src="/assets/images/logo.svg"
            alt="main-logo"
            width={67}
            height={67}
            priority
            className="w-[50px] h-[50px] md:w-[67px] md:h-[67px]"
          />
          <p className="font-montserrat text-3xl md:text-[48px] font-bold text-[--logo-text-M]">
            M<span className="text-[--logo-text]">umair</span>
          </p>
        </Link>

        {/* Navigation Menu */}
        <nav className="flex flex-wrap items-center justify-center gap-5 md:gap-10 mt-[65px] mb-[80px]">
          <Menubar />
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4 md:gap-[25px]">
          <SocialIconComponent />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="h-[84px] bg-footerBg flex items-center justify-center px-4">
        <p className="text-base md:text-[21px] leading-normal md:leading-[31.5px] font-normal text-white text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#FD6F00] px-1">Mumair</span> All Rights
          Reserved , Inc.
        </p>
      </div>
    </footer>
  );
}
