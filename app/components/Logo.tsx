import { logo_font } from "@/app/layout";
import "@/app/assets/styles/logo.scss";
import Link from "next/link";

type Props = {
  titleColor: string;
  textColor: string;
};

export const Logo = ({ titleColor, textColor }: Props) => {
  return (
    <Link href="/" className="logo-container">
      <h1 style={{ color: titleColor }} className={logo_font.className}>
        Lar Canino
      </h1>
      <p style={{ color: textColor }} className="slogan">
        Abrigo para cães
      </p>
    </Link>
  );
};
