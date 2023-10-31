import Image from "next/image";
import { StandardButton } from "./StandardButton";

export const DogCard = ({ dog }: any) => {
  return (
    <>
      <div className="dog-card">
        <div className="dog-image-container">
          <Image
            src={dog.image}
            alt={dog.imageDescription}
            width={500}
            height={500}
          />
        </div>
        <div className="card-dog-info">
          <h3 className="card-dog-name">{dog.name}</h3>
          <span className="card-dog-breed">{dog.breed}</span>
          <StandardButton styleType="unhovered" whichType="button">
            Conheça
          </StandardButton>
        </div>
      </div>
    </>
  );
};
