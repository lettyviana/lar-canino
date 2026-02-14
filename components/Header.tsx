import { Logo } from "./Logo";
import { Nav } from "./Nav";
import "@/assets/styles/variables.scss";

type HeaderProps = {
  mainTitleColor: string;
  mainTextColor: string;
};

export const Header = ({ mainTitleColor, mainTextColor }: HeaderProps) => {
  return (
    <header className="header">
      <div className="content-div">
        <Logo titleColor={mainTitleColor} textColor={mainTextColor} />
        <Nav textColor={mainTextColor} />
      </div>
    </header>
  );
};
