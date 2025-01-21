import HeroImage from "../CustomUI/HeroImage";
import { Progress } from "../ui/progress";
import { SectionContainer } from "../Utils/Containers";

export default function AboutMeSection() {
  return (
    <div>
      <SectionContainer className="mb-[60px] sm:mb-[139px]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-[33px] gap-5">
          {/* Left Image Section */}
          <div className="lg:flex-1 flex justify-center relative w-full max-w-[681px]">
            <HeroImage img="/assets/images/banner-image-2.png" position="14%" />
          </div>
          {/* Right Content */}
          <div className="lg:flex-1 text-center lg:text-left">
            <p className="section-title">About Me</p>
            <p className="section-description">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <div className="mt-[15px]">
              <Progress title={"UX"} value={90} />
              <Progress title={"Website Design"} value={85} />
              <Progress title={"App Design "} value={95} />
              <Progress title={"Graphic Design "} value={90} />
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
