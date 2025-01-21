import Image from "next/image";

export default function HeroImage({
  img = "/assets/images/banner-image.png",
  position = "12%",
}) {
  return (
    <div className="relative w-full max-w-[538px] flex justify-center">
      {/* Rectangular Shape */}
      <Image
        src="/assets/images/banner-rectangular-image.svg"
        width={374}
        height={83}
        alt="background"
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[374px] h-[83px]"
        style={{ top: position }}
      />

      {/* Main Image */}
      <Image
        src={img}
        width={538}
        height={617}
        alt="banner-image"
        className="relative z-0 w-full h-auto"
      />
    </div>
  );
}
