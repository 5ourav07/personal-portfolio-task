"use client";
import { SocialIcons } from "@/constants/SocialIcons";
import Image from "next/image";
import { useTheme } from "next-themes";

const Icon = ({ src, alt }) => {
  const { theme } = useTheme();

  const iconSrc = theme === "dark" ? `${src} - White` : src;

  return (
    <Image
      src={`/assets/images/icons/social-icons/${iconSrc}.svg`}
      alt={`${alt}-icon`}
      width={32.48}
      height={32.48}
      className="hover:opacity-50 transition-opacity cursor-pointer"
    />
  );
};

export default function SocialIconComponent() {
  return (
    <div className="flex gap-4">
      {SocialIcons.map((icon) => (
        <Icon key={icon.src} {...icon} />
      ))}
    </div>
  );
}
