import "@/app/assets/styles/variables.scss";
import { Logo } from "../Logo";
import { Nav } from "../Nav";

export const Header = () => {
  const mainTitleColor = "#ebc7ae";
  const mainTextColor = "#fdfdfd";
  return (
    <header className="header">
      <div className="background-image" />
      <div className="content-div">
        <Logo titleColor={mainTitleColor} textColor={mainTextColor} />
        <Nav textColor={mainTextColor} />
      </div>
    </header>
  );
};
