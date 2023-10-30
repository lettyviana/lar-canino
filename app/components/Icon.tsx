import Image from "next/image";

type IconProps = {
  src: string;
  alt: string;
  text: string;
};

export const Icon = ({ src, alt, text }: IconProps) => {
  return (
    <div className="icon-container">
      <div className="icon-image-container">
        <Image src={src} alt={alt} style={{ width: 70, height: 70 }} />
      </div>
      <p className="icon-description">{text}</p>
    </div>
  );
};
