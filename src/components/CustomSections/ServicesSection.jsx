import ServicesData from "@/constants/ServicesData";
import Image from "next/image";
import { SectionContainer } from "../Utils/Containers";

export default function ServicesSection() {
  return (
    <div>
      <SectionContainer className="mb-[60px] sm:mb-[139px]">
        <div className="text-center mb-14">
          <p className="section-title">Services</p>
          <p className="section-description max-w-[936px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ServicesData?.map((item) => (
            <div
              key={item?.title}
              className="bg-[#F8F8F8] rounded-[14px] px-[18px] pt-[57px]"
            >
              <div className="h-[82px] flex justify-center sm:justify-start items-center">
                <Image
                  src={item?.icon}
                  alt={item?.title}
                  width={47}
                  height={82}
                />
              </div>
              <p className="services-title">{item?.title}</p>
              <p className="services-description pb-10">{item?.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
