import ContactMeForm from "../Forms/ContactMeForm";
import { SectionContainer } from "../Utils/Containers";

export default function TogetherSection() {
  return (
    <div>
      <SectionContainer className="mb-[60px] sm:mb-[139px]">
        <div className="text-center mb-[60px]">
          <p className="section-title">Lets Design Together</p>
          <p className="section-description max-w-[936px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>

        <div className="max-w-[874px] mx-auto">
          <ContactMeForm />
        </div>
      </SectionContainer>
    </div>
  );
}
