import Link from "next/link";

type AttributionLinkProps = {
  link: string;
  title?: string;
  children: string;
};

export const AttributionLink = ({
  children,
  link,
  title,
}: AttributionLinkProps) => {
  return (
    <Link
      href={link}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className="attributions-links"
    >
      {children}
    </Link>
  );
};
