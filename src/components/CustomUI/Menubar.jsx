"use client";
import { MenuItems } from "@/constants/MenuItems";
import Link from "next/link";

export default function Menubar({ onClick = () => {} }) {
  return (
    <>
      {MenuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onClick}
          className="text-[21px] font-normal leading-[31.5px] hover:text-primary/50 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
