"use client"
import { Parisienne } from "next/font/google";
import Link from "next/link";
import "@/app/assets/styles/logo.scss";

type Props = {
  titleColor: string;
  textColor: string;
};

const logo_font = Parisienne({
  weight: "400",
  subsets: ["latin"],
});

export const Logo = ({ titleColor, textColor }: Props) => {
  return (
    <Link href="/" className="logo-container">
      <h1 style={{ color: titleColor }} className={`${logo_font.className}`}>
        Lar Canino
      </h1>
      <p style={{ color: textColor }} className="slogan">
        Abrigo para cães
      </p>
    </Link>
  );
};
