import Image from "next/image";
import CommonButton from "../CustomUI/CommonButton";
import HeroImage from "../CustomUI/HeroImage";
import { SectionContainer } from "../Utils/Containers";
import { SocialIcons } from "@/constants/SocialIcons";

const SocialIcon = ({ src, alt }) => (
  <Image
    src={`/assets/images/icons/social-icons/${src}.svg`}
    alt={`${alt}-icon`}
    width={32.48}
    height={32.48}
    className="hover:opacity-80 transition-opacity cursor-pointer"
  />
);

export default function BannerSection() {
  return (
    <SectionContainer className="mb-[70px]">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-[148px] gap-10">
        {/* Left Content */}
        <div className="lg:flex-1 text-center lg:text-left">
          <p className="text-[24px] leading-[36px] font-semibold text-primary mb-[6px]">
            Hi I am
          </p>
          <p className="text-[32px] leading-[48px] font-semibold text-[#FD6F00]">
            Muhammad Umair
          </p>
          <p className="mb-7 text-[60px] lg:text-[100px] leading-[80px] lg:leading-[120px] font-bold text-primary">
            UI & UX <span className="block lg:ml-[230px]">Designer</span>
          </p>
          <p className="text-[18px] lg:text-[21px] leading-[27px] lg:leading-[31.5px] text-justify font-normal text-primary mb-[22px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className="flex justify-center lg:justify-start">
            <CommonButton text="Hire Me" />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:flex-1 flex flex-col justify-center items-center gap-[36px] relative w-full max-w-[538px]">
          <HeroImage />
          <div className="flex items-center gap-4 md:gap-[25px]">
            {SocialIcons.map((icon) => (
              <SocialIcon key={icon.src} {...icon} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
