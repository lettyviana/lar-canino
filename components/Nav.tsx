import Link from "next/link";

export const Nav = ({ textColor }: { textColor: string }) => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-options">
          <Link
            href="/#sobre-o-abrigo"
            className="menu-link"
            style={{ color: textColor }}
          >
            Sobre o abrigo
          </Link>
        </li>
        <li className="menu-options">
          <Link
            href="/nossos-caes"
            className="menu-link"
            style={{ color: textColor }}
          >
            Nossos cães
          </Link>
        </li>
        <li className="menu-options">
          <Link
            href="/#como-ajudar"
            className="menu-link"
            style={{ color: textColor }}
          >
            Quer ajudar?
          </Link>
        </li>
        <li className="menu-options">
          <Link
            href="/#contato"
            className="menu-link"
            style={{ color: textColor }}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};
